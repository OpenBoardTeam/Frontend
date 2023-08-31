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

    transition: border 0.3s ease-in-out;
    border-radius: 30px;
    border: 0.5px solid transparent;
    border-color: ${({ isScrolled }) => isScrolled && "white"};

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
        // 클릭 이벤트 전파 방지
        e.stopPropagation();
        //Github Auth link
        !props.isLoggedIn && window.open("https://github.com", "_blank");
        //Open toggle menu
        props.isLoggedIn && props.menuOpenHandler();
    };

    return (
        <Wrapper ref={ref}>
            <StyledAccountContainer
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
