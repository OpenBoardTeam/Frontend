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
`;

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <StyledHome>
                <TestMain></TestMain>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
