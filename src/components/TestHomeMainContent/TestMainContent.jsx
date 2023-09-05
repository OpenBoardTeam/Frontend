import React from "react";
import { styled } from "styled-components";
import TestMainSearchBox from "./TestMainSearchBox";
import SearchIcon from "../../icons/SearchIcon";

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

const StyledSearchIcon = styled.div`
    margin-top: 25px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const MainCaption = styled.span`
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 18px;
    transition: 0.2s ease all;
`;

const TestMainContent = () => {
    return (
        <StyledMainContent>
            <MainTitle>GitBoard</MainTitle>
            <TestMainSearchBox />
        </StyledMainContent>
    );
};

export default TestMainContent;
