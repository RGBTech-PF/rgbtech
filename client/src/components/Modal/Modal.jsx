import React from "react";
import { useDispatch } from "react-redux";
import css from "./Modal.module.css";

const Modal = ({ children, closeModal, closeModalRedux, tailwindCSS }) => {
	const dispatch = useDispatch();
	const handleModalContainerClick = (e) => e.stopPropagation();

	const closeModalReduxFunction = () => {
		dispatch(closeModalRedux());
	};

	return (
		<article
			onClick={closeModal || closeModalReduxFunction}
			className={css.modal}
		>
			<div
				className={`${css.container} ${tailwindCSS}`}
				onClick={handleModalContainerClick}
			>
				{children}
			</div>
		</article>
	);
};

export default Modal;
