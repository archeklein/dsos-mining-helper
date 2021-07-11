import React from "react";
import styled from "styled-components";

const Tile = styled.div`
    background-color: #C5D5E4;

    &.active {
        background-color: #7E6551;
    }
`;

export const MineTile = (p) => {
    const { hasResources, onToggle } = p;

    const props = {
        onClick: () => {
            console.log(hasResources);
            onToggle();
        },
    };

    return <Tile {...props} className={hasResources && "active"} />;
};
