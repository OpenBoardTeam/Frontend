import React from "react";
import { styled } from "styled-components";
import theme from "../../style/theme";

const MyAccountName = "yoonki1207";

const StyledMyAccount = styled.p`
    cursor: pointer;
`;

//Account name
const MyAccount = (props) => {
    return <StyledMyAccount>{MyAccountName}</StyledMyAccount>;
};

export default MyAccount;
