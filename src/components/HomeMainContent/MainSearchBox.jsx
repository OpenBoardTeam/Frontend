import React from "react";
import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";

const StyledFloatingLabelGroup = styled.div`
    position: relative;
    margin-top: 15px;
    margin-bottom: 25px;
`;

const StyledFloatingLabel = styled.label`
    font-size: 12px;
    color: #909090;
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    transition: all 0.5s ease;
    font-size: 18px;
    font-weight: 400; //Regular
    text-align: center;
`;

const StyledSearchIcon = styled.div`
    position: absolute;
    bottom: 20%;
    right: 20px;
`;

const StyledInput = styled.input`
    width: 30vw;
    height: 48px;
    border-radius: 999px;
    border: 0.5px solid white;
    background-color: transparent;
    padding-left: 30px;
    color: white;
    font-size: 20px;

    &:focus {
        ~ ${StyledFloatingLabel} {
            top: 80px;
            left: 10%;
            font-size: 18px;
            color: white;
        }

        ~ ${SearchIcon} {
            fill: black;
        }
    }

    &:not(:focus):valid ~ ${StyledFloatingLabel} {
        top: 80px;
        left: 10%;
        font-size: 18px;
        color: white;
    }
`;

const StyledRow = styled.div`
    margin-top: 50px;
`;

const MainSearchBox = () => {
    return (
        <StyledRow>
            <div class="col-xs-4 col-xs-offset-4">
                <StyledFloatingLabelGroup>
                    <StyledInput
                        type="text"
                        id="username"
                        class="form-control"
                        autocomplete="off"
                        autofocus
                        required
                    />
                    <StyledSearchIcon>
                        <SearchIcon />
                    </StyledSearchIcon>
                    <StyledFloatingLabel>
                        Explore various open source project you want.
                    </StyledFloatingLabel>
                </StyledFloatingLabelGroup>
            </div>
        </StyledRow>
    );
};

export default MainSearchBox;
