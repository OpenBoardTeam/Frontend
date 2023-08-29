import styled from "styled-components";
import theme from "../../style/theme";

const StyledNavbar = styled.nav`
    display: inline-block;
    margin-top: 21px;
    margin-left: 5vw;
    height: 50px;
`;

const StyledUnorderedList = styled.li`
    font-size: 24px;
    font-weight: 300; //Regular
    list-style: none;
    display: inline-block;
`;

const StyledList = styled.li`
    display: inline-block;
    margin-left: 20px;
`;

const StyledLink = styled.a`
    background-color: transparent;
    text-decoration: none;

    color: white;

    &:visited {
        color: white;
    }

    &:hover {
        color: #bc43be;
        cursor: pointer;
    }

    &:active {
        color: yellow;
    }
`;

const NavBar = () => {
    return (
        <StyledNavbar>
            <StyledUnorderedList>
                <StyledList>
                    <StyledLink href="/home">home</StyledLink>
                </StyledList>
                <StyledList>
                    <StyledLink href="/search">explore</StyledLink>
                </StyledList>
                <StyledList>
                    <StyledLink href="/LegalDocuments">policy</StyledLink>
                </StyledList>
            </StyledUnorderedList>
        </StyledNavbar>
    );
};

export default NavBar;
