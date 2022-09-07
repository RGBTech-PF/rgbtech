import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../store/slices/users/thunks";
import { emailConfirmatedPassword } from "./Notifications";

export default function RecoverPasswordForm() {
	const [input, setInput] = useState({
		email: "",
	});
	const navigate = useNavigate()
	const dispatch = useDispatch();

	const handleOnchange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = (e) => {
    e.preventDefault();
		console.log(input.email, "bhsdj");
		dispatch(sendEmail({ email: input.email }));
        emailConfirmatedPassword()
				navigate('/')
	};

	return (
		<div className="mt-40">
			<div className="">
				<h1 className="text-gray-700 text-4xl font-medium flex justify-center ">
					Please log in to access your account
				</h1>
			</div>
			<div className="mx-auto my-10 rounded-lg shadow-lg  p-10 max-w-lg">
				<div className="mb-6">
					<label for="email" name="email" className="text-gray-700 font-medium">
						Email address
					</label>
					<input
						onChange={handleOnchange}
						value={input.email}
						placeholder="Please enter your email"
						name="email"
						type="text"
						className="block rounded-md border border-gray-300 py-2 px-4 my-2 shadow-sm w-full"
					/>
				</div>
				<div className="flex justify-between items-center mb-3">
					<div className="mt-auto"></div>
				</div>
				<button
					onClick={handleClick}
					className="bg-red-400 hover:bg-red-500 py-2 rounded text-white my-2 px-4 w-full"
				>
					Continue
				</button>
			</div>
		</div>
	);
}
