import { create } from 'zustand';
import { Tile, tiles } from './types';

interface FloorState {
    floors: (Tile | undefined)[][][];
    updateFloors: (row: number, col: number, tile: Tile) => void;
    currentFloor: number;
    setCurrentFloor: (floor: number) => void;
    currentTile: [number, number];
    setCurrentTile: (tile: [number, number]) => void;
    currentTileType: Tile;
    setCurrentTileType: (tileType: Tile) => void;
}

export const useFloorStore = create<FloorState>((set) => ({
    floors: (() => {
        const newFloors: (Tile | undefined)[][][] = [];

        // Create 9 floors
        for (let floor = 0; floor < 9; floor++) {
            const currentFloor: Tile[][] = [];

            // Create 7x7 grid for each floor
            for (let y = 0; y < 7; y++) {
                const row: Tile[] = [];
                for (let x = 0; x < 7; x++) {
                    row.push(undefined);
                }
                currentFloor.push(row);
            }
            newFloors.push(currentFloor);
        }

        return newFloors;
    })(),
    updateFloors: (row, col, tile) =>
        set((state) => {
            const floors = state.floors.slice();
            floors[state.currentFloor][row][col] = tile;

            return { ...state, floors };
        }),
    currentFloor: 0,
    setCurrentFloor: (floor) => set({ currentFloor: floor, currentTile: [0, 0] }),
    currentTile: [0, 0],
    setCurrentTile: (tile) => set({ currentTile: tile }),
    currentTileType: tiles.nautilidae,
    setCurrentTileType: (tileType) => set({ currentTileType: tileType })
}));
