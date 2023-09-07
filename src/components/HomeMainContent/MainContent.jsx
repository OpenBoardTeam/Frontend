import React from "react";
import { styled } from "styled-components";
import MainSearchBox from "./MainSearchBox";
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

const MainCaption = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300; //Regular
    text-align: center;
`;

const MainContent = () => {
    return (
        <StyledMainContent>
            <MainTitle>GitBoard</MainTitle>
            <MainSearchBox />
            <StyledSearchIcon>
                <SearchIcon />
            </StyledSearchIcon>
            <MainCaption>
                Explore various open source project you want.
            </MainCaption>
        </StyledMainContent>
    );
};

export default MainContent;
