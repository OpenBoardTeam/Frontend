import React, { useState } from "react";
import { styled } from "styled-components";
// import MainSearchBox from "./MainSearchBox";
import SearchIcon from "../../icons/SearchIcon";
import { useNavigate } from "react-router-dom";

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

const MainSearchBox = styled.input`
    margin-top: 25px;
    /* padding-left: 15px; */

    background-color: transparent;
    border-radius: 999px;

    width: 30vw;
    max-width: 580px;
    min-width: 400px;
    height: 48px;

    border: 1px solid white;

    color: white;
    font-size: 23px;
    font-weight: 300;
    text-align: center;
`;

const MainContent = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = (event) => {
        setSearchQuery(event.target.value);
    };

    const hrefSearchQuery = () => {
        if (String(searchQuery).trim() !== "") {
            // Convert searchQuery to a string and then construct the URL
            const query = String(searchQuery);
            const url = `https://myAwesomeUrl/search/${encodeURIComponent(
                query
            )}`;
            window.location.href = url;
        }
    };

    const SearchClickHandler = (e) => {
        //hrefSearchQuery();
        navigate('/search', {
            state: {
                id: searchQuery
            }})
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            //hrefSearchQuery();
            navigate('/search', {
                state: {
                    id: searchQuery
                }})
        }
    };

    return (
        <StyledMainContent>
            <MainTitle>GitBoard</MainTitle>
            <MainSearchBox
                // Pass a callback to update the searchQuery state
                onChange={searchQueryHandler}
                onKeyDown={handleKeyPress}
            />
            <StyledSearchIcon onClick={SearchClickHandler}>
                <SearchIcon />
            </StyledSearchIcon>
            <MainCaption>
                Explore various open source project you want.
            </MainCaption>
        </StyledMainContent>
    );
};

export default MainContent;
