import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { confirmationEmail } from "../store/slices/users/thunks";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { setEmailConfirmated } from "../store/slices/components/componentSlice.js";

function ConfirmationSingup() {
	let { token } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	token = token.replaceAll("'", ".");
	const userInfo = jwt(token);

	return (
		<div>
			<button
				onClick={() => {
					dispatch(confirmationEmail(userInfo));
					navigate("/");
					dispatch(setEmailConfirmated(true));
				}}
			>
				Confirmacion
			</button>
		</div>
	);
}
export default ConfirmationSingup;
