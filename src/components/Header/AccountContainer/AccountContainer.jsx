import React, { forwardRef } from "react";
import { styled } from "styled-components";
import MyAccount from "./MyAccount";
import ToggleBtn from "./ToggleBtn";
import GithubIcon from "../../../icons/GithubIcon";
import ToggleMenu from "./ToggleMenu";

const Wrapper = styled.div`
    display: contents;
`;

const StyledAccountContainer = styled.div`
    font-size: 16px;
    height: 40px;
    float: right;

    padding: 0px 12px 0px 12px;
    margin: 15px 5vw 0px auto;
    gap: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 120;

    background-color: black;

    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    border: 0.5px solid transparent;
    border-color: ${({ isScrolled }) => isScrolled && "white"};

    /* border-left: black 1px solid;
    border-right: black 1px solid; */
    border-bottom: ${({ isToggled, isScrolled }) =>
        isToggled && isScrolled
            ? "black 1px solid"
            : !isScrolled
            ? "transparent"
            : "0.5px solid white"};

    &:hover {
        background-color: #1d1d1d;
        cursor: pointer;
        button {
            background-color: #353535;
        }
    }
`;

const AccountContainer = forwardRef((props, ref) => {
    const onToggleBtnClick = (e) => {
        //Github Auth link
        !props.isLoggedIn && window.open("https://github.com", "_blank");
        //Open toggle menu
        props.isLoggedIn && props.menuOpenHandler();
    };

    return (
        <Wrapper>
            <StyledAccountContainer
                ref={ref}
                isScrolled={props.isScrolled}
                isToggled={props.isMenuOpen}
                onClick={onToggleBtnClick}
            >
                <GithubIcon />
                {!props.isLoggedIn && <>Sign in with Github</>}
                {props.isLoggedIn && (
                    <>
                        <MyAccount />
                        <ToggleBtn
                            isToggled={props.isMenuOpen}
                            onClick={onToggleBtnClick}
                        />
                    </>
                )}
            </StyledAccountContainer>
            <ToggleMenu
                isScrolled={props.isScrolled}
                isMenuOpen={props.isMenuOpen}
            />
        </Wrapper>
    );
});

export default AccountContainer;
