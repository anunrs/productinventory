import React, {useState} from "react";
import StyledDiv from "../common/StyledDiv";
import StyledButton from "../common/StyledButton";
import {Redirect} from "react-router-dom";

const Footer = () => {
    const [clicked, setClicked] = useState(0);

    return (
        <StyledDiv>
            <StyledButton onClick = { () => setClicked(1)}> Add new product </StyledButton>
            {clicked ? <Redirect to = "/addproducts" /> : <></>}
        </StyledDiv>
    )
}

export default Footer;