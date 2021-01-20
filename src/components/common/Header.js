import React from "react";
import StyledDiv from "../common/StyledDiv";

const Header = (props) => {


    return (
        <StyledDiv>
            {props.text}
        </StyledDiv>
    )
}

export default Header;