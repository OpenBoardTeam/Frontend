import React from "react";
import theme from "../style/theme";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCategories from "../components/Categories/HomeCategories";
import MainContent from "../components/HomeMainContent/MainContent";
import TestMainContent from "../components/TestHomeMainContent/TestMainContent";

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

const Home = () => {
    const isLoggedIn = true;
    return (
        <ThemeProvider theme={theme}>
            <Header isLoggedIn={isLoggedIn} />
            <StyledHome>
                <TestMain>
                    <MainContent />
                    {/* <TestMainContent></TestMainContent> */}
                </TestMain>
                <HomeCategories></HomeCategories>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
