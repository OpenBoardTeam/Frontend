import React from "react";
import { styled } from "styled-components";

const StyledMainSearchBox = styled.input`
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

const MainSearchBox = () => {
    return <StyledMainSearchBox></StyledMainSearchBox>;
};

export default MainSearchBox;
