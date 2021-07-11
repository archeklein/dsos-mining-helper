import React from "react";
import styled from "styled-components";

const Tile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f6f5f4;
    font-weight: bold;
    font-size: 1.5em;

    &.empty {
        background-color: #fffae3;
    }

    &.resource {
        background-color: #99e1d9;
    }

    &.ladder {
        background-color: #f7567c;
        color: white;
    }
`;

export const MineTile = (props) => {
    const { resource, onClick } = props;

    return (
        <Tile onClick={onClick} className={resource}>
            {resource !== 'none' && resource[0].toUpperCase()}
        </Tile>
    );
};
