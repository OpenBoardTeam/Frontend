import React from "react";
import { styled } from "styled-components";

const MyAccountName = "yoonki1207";

const StyledMyAccount = styled.p``;

//Account name
const MyAccount = (props) => {
    return <StyledMyAccount>{MyAccountName}</StyledMyAccount>;
};

export default MyAccount;
