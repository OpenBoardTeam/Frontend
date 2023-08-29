import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../style/theme";
import NavBar from "./NavBar";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 100;
    backdrop-filter: blur(5px);
    transition: background-color 0.3s ease-in-out;
    color: white;
    background-color: ${(props) => props.theme.primaryColor.background.black};
    background-color: ${({ isScrolled }) => !isScrolled && "transparent"};
`;

const LogoContainer = styled.div`
    font-size: 40px;
    font-weight: 600; //Bold
    display: inline-block;
    margin-top: 11px;
    margin-left: 10vw;
    cursor: pointer;
`;

const StyledLogo = styled.a`
    text-decoration: none;

    color: white;

    &:visited {
        color: white;
    }

    &:hover {
        color: white;
        cursor: pointer;
    }

    &:active {
        color: white;
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <StyledLogo href="/">GitBoard</StyledLogo>
        </LogoContainer>
    );
};

const Header = () => {
    //If scroll change background color
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        handleScroll();
        // adding the event when scroll change background
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <ThemeProvider theme={theme}>
            <StyledHeader isScrolled={isScrolled}>
                <Logo>GitBoard</Logo>

                <NavBar />

                {/*Right*/}
            </StyledHeader>
        </ThemeProvider>
    );
};

export default Header;
