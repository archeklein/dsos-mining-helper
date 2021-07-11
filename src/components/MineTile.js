import React from "react";
import styled from "styled-components";

const Tile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFEEDB;
    font-weight: bold;
    font-size: 1.5em;

    &.resource {
        background-color: #ED9B40;
    }

    &.gem {
        background-color: #61C9A8;
    }

    &.ladder {
        background-color: #BA3B46;
        color: white;
    }
`;

export const MineTile = (props) => {
    const { resource, onClick } = props;

    return (
        <Tile onClick={onClick} className={resource}>
            {resource !== "none" && resource[0].toUpperCase()}
        </Tile>
    );
};
