import React from "react";
const { useState, useEffect } = React;

const Modal = (props) => {
	const {onRequestClose, name, title} = props;

	const [edited, setEdited] = useState(name);
	

	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});


	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">{props.title}</h3>
				
				Product Name: <input type = "text" value = {edited} onChange = {(e) => setEdited(e.target.value)}/>
				<button type="button" onClick={onRequestClose}>
					Save
				</button>
				<div className="placeholder" />
			</div>
		</div>
	);
};


export default Modal;