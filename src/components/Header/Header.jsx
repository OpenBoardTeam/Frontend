import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../style/theme";

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 100;
    backdrop-filter: blur(5px);
    transition: background-color 0.3s ease-in-out;
    background-color: ${(props) => props.theme.primaryColor.background.black};
    background-color: ${({ isScrolled }) => !isScrolled && "transparent"};
`;

const Inner = styled.div`
    color: white;
`;

const Logo = styled.div`
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 50px;
    float: left;
    margin-left: 10vw;
    margin-top: 11px;
`;

const NavBar = styled.nav``;

const SignBtn = styled.button`
    height: 40px;
    border-radius: 30;
    padding: 12px 8px 12px 8px;
`;

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
                <Inner>
                    <Logo>GitBoard</Logo>
                </Inner>
            </StyledHeader>
        </ThemeProvider>
    );
};

export default Header;
