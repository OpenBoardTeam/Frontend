import React from "react";
import theme from "../style/theme";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";

const StyledHome = styled.div`
    background-color: ${(props) => props.theme.primaryColor.background.black};
    color: white;
`;

const Main = styled.div`
    width: 100%;
    height: 60vh;
`;

const Categories = styled.div`
    width: 100%;
`;

const footer = styled.div`
    width: 100%;
`;

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledHome>
                <Footer></Footer>
            </StyledHome>
        </ThemeProvider>
    );
};

export default Home;
