import React, { useState } from "react";
import { MineTile } from "./components/MineTile";
import { GridWrapper, Header, MainWrapper } from "./components/Wrappers";
import { Button } from "@material-ui/core";
import { ResourceTypeSelector } from "./components/ResourceTypeRadio";

const App = () => {
    const defaultState = Array.from({ length: 49 }, (v, i) => false);

    const [tiles, setTiles] = useState(defaultState);
    const [currentMarker, setCurrentMarker] = useState("resource");

    const toggleTile = (id) => {
        setTiles((prevState) => {
            return [
                ...prevState.slice(0, id),
                !prevState[id],
                ...prevState.slice(id + 1, prevState.length),
            ];
        });
    };

    return (
        <MainWrapper>
            <Header>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setTiles(defaultState)}
                >
                    Reset
                </Button>
                <ResourceTypeSelector
                    selected={currentMarker}
                    onSelect={setCurrentMarker}
                />
            </Header>
            <GridWrapper>
                {tiles.map((tile, index) => (
                    <MineTile
                        key={index}
                        hasResources={tile}
                        onToggle={() => toggleTile(index)}
                    />
                ))}
            </GridWrapper>
        </MainWrapper>
    );
};

export default App;
