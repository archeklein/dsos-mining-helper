import styled from 'styled-components';
import { useFloorStore } from './store';
import { ConfigProvider, theme, Segmented, Layout, Flex, Button } from 'antd';
import { tiles, type Tile } from './types';
import './App.css';
import { HTMLAttributes } from 'react';
import { CloseOutlined } from '@ant-design/icons';

const FloorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
`;

const App = () => {
    const { floors, updateFloors, currentFloor, setCurrentFloor, setCurrentTile, currentTileType, setCurrentTileType } = useFloorStore();

    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Layout
                style={{
                    height: '100vh',
                    paddingBlock: 12,
                    paddingInline: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32
                }}
            >
                <Flex vertical gap={12}>
                    <Flex justify="center" align="center" gap={8}>
                        <Segmented
                            options={Array.from({ length: 9 }).map((_, index) => ({ label: index + 1, value: index }))}
                            value={currentFloor}
                            onChange={setCurrentFloor}
                            size={'large'}
                            block
                            style={{ flex: 1 }}
                        />
                        <Button
                            type={'primary'}
                            icon={<CloseOutlined />}
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}
                        ></Button>
                    </Flex>
                    <FloorContainer>
                        {floors[currentFloor].map((row, rowIndex) =>
                            row.map((tile, colIndex) => (
                                <Tile
                                    tile={tile}
                                    key={`${rowIndex}-${colIndex}`}
                                    onClick={() => {
                                        setCurrentTile([rowIndex, colIndex]);

                                        if (currentTileType === tiles.close) {
                                            updateFloors(currentFloor, rowIndex, colIndex, undefined);
                                        } else {
                                            tile !== tiles.up &&
                                                tile !== tiles.down &&
                                                updateFloors(
                                                    currentFloor,
                                                    rowIndex,
                                                    colIndex,
                                                    tile === currentTileType ? undefined : currentTileType
                                                );

                                            tile === tiles.up && setCurrentFloor(currentFloor - 1);

                                            if (currentFloor < 8) {
                                                if (tile === tiles.down) {
                                                    setCurrentFloor(currentFloor + 1);
                                                } else
                                                    currentTileType === tiles.down &&
                                                        tile !== tiles.up &&
                                                        updateFloors(currentFloor + 1, rowIndex, colIndex, tiles.up);
                                            }
                                        }
                                    }}
                                />
                            ))
                        )}
                    </FloorContainer>
                </Flex>
                <Flex vertical>
                    <FloorContainer>
                        {[tiles.stone, tiles.scrap, tiles.copper, tiles.iron, tiles.silver, tiles.gold].map((tile) => (
                            <Tile tile={tile} key={tile} active={tile === currentTileType} onClick={() => setCurrentTileType(tile)} />
                        ))}
                    </FloorContainer>
                    <FloorContainer>
                        {[tiles.ruby, tiles.emerald, tiles.sapphire, tiles.diamond, tiles.amber, tiles.down, tiles.close].map((tile) => (
                            <Tile tile={tile} key={tile} active={tile === currentTileType} onClick={() => setCurrentTileType(tile)} />
                        ))}
                    </FloorContainer>
                    <FloorContainer>
                        {['fern', 'trilobite', 'nautilidae', 'trex', 'stego', 'raptor', 'trice'].map((tile) => (
                            <Tile
                                tile={tiles[tile]}
                                key={tile}
                                active={tile === currentTileType}
                                onClick={() => setCurrentTileType(tile)}
                            />
                        ))}
                    </FloorContainer>
                </Flex>
            </Layout>
        </ConfigProvider>
    );
};

const TileContainer = styled.div<{ $active?: boolean; $empty?: boolean }>`
    display: flex;
    width: 100%;
    padding: 3px;
    border-radius: 16px;
    background-color: ${({ $empty }) => ($empty ? 'rgba(74,75,71,0.7)' : 'transparent')};
    ${({ $active }) => ($active ? 'border: 2px solid rgba(74,75,71);' : '')}
`;

const Tile = (props: { tile?: Tile; active?: boolean } & HTMLAttributes<HTMLDivElement>) => {
    const { tile, active, ...rest } = props;
    return (
        <TileContainer $empty={!tile} $active={active} {...rest}>
            {tile ? <img src={tile} style={{ width: '100%' }} /> : <div style={{ width: '100%', paddingBottom: '100%' }} />}
        </TileContainer>
    );
};

export default App;
