import styled from "styled-components";

const StyledNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5vw;
`;

const StyledUnorderedList = styled.li`
    font-size: 24px;
    font-weight: 300; //Regular
    list-style: none;
`;

const StyledList = styled.li`
    display: inline-block;
    margin-left: 20px;
`;

const StyledLink = styled.a`
    background-color: transparent;
    text-decoration: none;
    transition: color 0.3s;

    color: white;

    &:visited {
        color: white;
    }

    &:hover {
        color: #bc43be;
        cursor: pointer;
        transition: color 0.1s;
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
