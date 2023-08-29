import styled from "styled-components";

const StyledToggleBtn = styled.button`
    background-color: transparent;
    border: none;
    transition: transform 0.3s;
    color: white;
    font-size: 15px;
    transform: rotate(${({ isToggled }) => (isToggled ? "-90deg" : 0)});
    cursor: pointer;
`;

const ToggleBtn = (props) => {
    return <StyledToggleBtn isToggled={props.isToggled}>&lt;</StyledToggleBtn>;
};

export default ToggleBtn;
