import React from "react";
import theme from "../style/theme";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const StyledHome = styled.div`
    background-color: ${(props) => props.theme.primaryColor.background.black};
    color: white;
`;

const Categories = styled.div`
    width: 100%;
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
    const isLoggedIn = false;
    return (
        <ThemeProvider theme={theme}>
            <Header isLoggedIn={isLoggedIn} />
            <StyledHome>
                <TestMain></TestMain>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
