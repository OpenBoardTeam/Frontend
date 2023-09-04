import React from "react";
import theme from "../style/theme";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCategories from "../components/Categories/HomeCategories";
import SearchIcon from "../icons/SearchIcon";

const StyledHome = styled.div`
    background-color: ${(props) => props.theme.primaryColor.background.black};
    color: white;
`;

const TestMain = styled.div`
    width: 100%;
    height: 90vh;
    background: url("/images/PcHome.png") center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const MainContent = styled.div`
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

const MainSearchBox = styled.input`
    margin-top: 25px;
    background-color: transparent;
    border-radius: 999px;
    width: 30vw;
    max-width: 580px;
    min-width: 400px;
    height: 48px;
    border: 1px solid white;
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

const Home = () => {
    const isLoggedIn = true;
    return (
        <ThemeProvider theme={theme}>
            <Header isLoggedIn={isLoggedIn} />
            <StyledHome>
                <TestMain>
                    <MainContent>
                        <MainTitle>GitBoard</MainTitle>
                        <MainSearchBox />
                        <StyledSearchIcon>
                            <SearchIcon />
                        </StyledSearchIcon>
                        <MainCaption>
                            Explore various open source project you want.
                        </MainCaption>
                    </MainContent>
                </TestMain>
                <HomeCategories></HomeCategories>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
