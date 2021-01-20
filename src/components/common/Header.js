import React from "react";
import StyledDiv from "../common/StyledDiv";

const Header = (props) => {


    return (
     
        <StyledDiv>
            <p>{props.text}</p>
        </StyledDiv>
     
    )
}

export default Header;