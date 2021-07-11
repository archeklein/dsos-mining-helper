import styled from "styled-components";

export const Header = styled.div`
    display: inline-flex;
    align-items: center;
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
    grid-gap: 16px;
`;
