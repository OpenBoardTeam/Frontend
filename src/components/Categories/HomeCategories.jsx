import React from "react";
import { ThemeProvider, styled } from "styled-components";
import theme from "../../style/theme";
import CategoryList from "./CategoryList";

const testObject = {
    data: {
        Group: ["Enterprise", "Personal"],
        Social: ["Education", "Enviroment", "Life", "Security"],
        Language: [
            "C/C++",
            "C#",
            "java",
            "javascript",
            "kotlin",
            "python",
            "typescript",
        ],
        Framework: ["React", "Vue.js", "Spring", "AndroidStudio"],
        Infra: ["Docker", "AWS", "Jenkins", "Kafka"],
    },
    message: "string",
    resultCode: "string",
};

const StyledCategories = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primaryColor.background.black};
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-left: 5vw;
    margin-top: 5px;
`;

const HomeCategories = () => {
    let data = testObject.data;

    return (
        <ThemeProvider theme={theme}>
            <StyledCategories>
                <Title>Categories</Title>
                <CategoryList data={data} />
            </StyledCategories>
        </ThemeProvider>
    );
};

export default HomeCategories;
