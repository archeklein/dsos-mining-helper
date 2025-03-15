import { create } from 'zustand';
import { Tile, tiles } from './types';

interface FloorState {
    floors: (Tile | undefined)[][][];
    updateFloors: (floor: number, row: number, col: number, tile: Tile | undefined) => void;
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

        if (localStorage.getItem('floors')) {
            return JSON.parse(localStorage.getItem('floors')!);
        }

        // Create 9 floors
        for (let floor = 0; floor < 9; floor++) {
            const currentFloor: (Tile | undefined)[][] = [];

            // Create 7x7 grid for each floor
            for (let y = 0; y < 7; y++) {
                const row: (Tile | undefined)[] = [];
                for (let x = 0; x < 7; x++) {
                    row.push(undefined);
                }
                currentFloor.push(row);
            }
            newFloors.push(currentFloor);
        }

        return newFloors;
    })(),
    updateFloors: (floor, row, col, tile) =>
        set((state) => {
            const floors = state.floors.slice();
            floors[floor][row][col] = tile;

            localStorage.setItem('floors', JSON.stringify(floors));

            return { ...state, floors };
        }),
    currentFloor: 0,
    setCurrentFloor: (floor) => set({ currentFloor: floor, currentTile: [0, 0] }),
    currentTile: [0, 0],
    setCurrentTile: (tile) => set({ currentTile: tile }),
    currentTileType: tiles.copper,
    setCurrentTileType: (tileType) => set({ currentTileType: tileType })
}));
