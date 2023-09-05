import React from "react";
import styled from "styled-components";

const StyledFloatingLabelGroup = styled.div`
    position: relative;
    margin-top: 15px;
    margin-bottom: 25px;
`;

const StyledFloatingLabel = styled.label`
    font-size: 12px;
    color: white;
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    transition: all 0.1s ease;
    font-size: 18px;
    font-weight: 300; //Regular
    text-align: center;
`;

const StyledInput = styled.input`
    width: 30vw;
    height: 48px;
    border-radius: 999px;
    background-color: transparent;

    &:focus
        ~ ${StyledFloatingLabel},
        &:not(:focus):valid
        ~ ${StyledFloatingLabel} {
        top: 80px;
        left: 8%;
        font-size: 18px;
        color: white;
    }
`;

const StyledRow = styled.div`
    margin-top: 50px;
`;

const TestMainSearchBox = () => {
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
                    <StyledFloatingLabel>
                        Explore various open source project you want.
                    </StyledFloatingLabel>
                </StyledFloatingLabelGroup>
            </div>
        </StyledRow>
    );
};

export default TestMainSearchBox;
