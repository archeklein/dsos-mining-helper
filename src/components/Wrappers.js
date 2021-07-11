import styled from "styled-components";

export const Header = styled.div`
    display: inline-flex;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column;
        & > *:not(:first-child) {
            margin-top: 8px;
        }
    }
`

export const MainWrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 16px;
    padding: 16px;
    height: calc(100vh - 32px);
`

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 16px;

    @media (max-width: 600px) and (orientation:portrait), @media (max-width: 1000px) and (orientation:landscape) {
        grid-gap: 4px;
    }

    height: calc(100vw - 32px);
    @media (orientation:landscape) {
        height: auto;
    }
`;
