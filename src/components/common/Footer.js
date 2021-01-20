import React, {useState} from "react";
import StyledDiv from "../common/StyledDiv";
import StyledButton from "../common/StyledButton";
import Modal from "./Modal";

const Footer = () => {
    
    const [isModalOpen, setModalIsOpen] = useState(false);


    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };


    return (
        <StyledDiv>
            <StyledButton onClick = {toggleModal}> Add new product </StyledButton>
            {isModalOpen && <Modal onRequestClose={toggleModal} name = "" title = "Add Product"/>}

        </StyledDiv>
    )
}

export default Footer;