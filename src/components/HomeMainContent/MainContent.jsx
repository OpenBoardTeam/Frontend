import React from "react";
import { styled } from "styled-components";
import MainSearchBox from "./MainSearchBox";

const StyledMainContent = styled.div`
    display: block;
    position: absolute;
    top: 35vh;
    left: 50%;
    transform: translateX(-50%);
`;

const MainTitle = styled.div`
    font-size: 56px;
    font-weight: 500; //Semi Bold
    text-align: center;
`;

const MainContent = () => {
    return (
        <StyledMainContent>
            <MainTitle>GitBoard</MainTitle>
            <MainSearchBox />
        </StyledMainContent>
    );
};

export default MainContent;
