import React, { useState } from "react";
import { postUser } from "../store/slices/users/thunks.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dibujo-2.png";
import { setAccCreated } from "../store/slices/components/componentSlice";

const createUser = () => {
	const [previewSource, setPreviewSource] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		user: "",
		password: "",
		mail: "",
		profilePhoto: "",
	});

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		setInput({ ...input, profilePhoto: file.name });
		previewFile(file);
	};

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const postFinal = {
			user: input.user,
			password: input.password,
			mail: input.mail,
			profilePhoto: previewSource,
		};

		dispatch(postUser(postFinal));
		setInput({
			user: "",
			password: "",
			mail: "",
			profilePhoto: "",
		});
		setPreviewSource("");
		navigate("/");
		dispatch(setAccCreated(true));
	}

	return (
		<div>
			<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
				<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
					<div className="p-4 py-6 text-white bg-blue-300 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div className="my-3 text-4xl font-bold tracking-wider text-center">
							<a href="#">RGBTech</a>
						</div>
						<img src={logo} alt="" />
					</div>
					<div className="p-5 bg-white md:flex-1">
						<div className="flex items-stretch">
							<div>
								<h3 className="my-4 text-2xl font-semibold text-gray-700">
									Create Account
								</h3>
							</div>
						</div>
						{/*------------------------------------------FORM--------------------------------------------------*/}
						<form
							encType="multipart/form-data"
							action=""
							onSubmit={(e) => handleSubmit(e)}
							className="flex flex-col space-y-5"
						>
							{/*------------------------------------------USER------------------------------------------------*/}
							<div className="flex flex-col space-y-1">
								<label className="text-sm font-semibold text-gray-500">
									User
								</label>
								<input
									type="text"
									value={input.user}
									required
									name="user"
									onChange={(e) => handleChange(e)}
									className="peer px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 "
								/>
								<p className="flex items-center gap-2 invisible peer-invalid:visible text-pink-600 font-normal">
									Please enter your username
								</p>
							</div>
							{/*------------------------------------------PASSWORD------------------------------------------------*/}
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-sm font-semibold text-gray-500"
									>
										Password
									</label>
								</div>
								<input
									value={input.password}
									type="password"
									required
									name="password"
									onChange={(e) => handleChange(e)}
									className="peer px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 "
								/>
								<p className="flex items-center gap-2 invisible peer-invalid:visible text-pink-600 font-normal">
									Please enter your password
								</p>
							</div>
							{/*------------------------------------------EMAIL------------------------------------------------*/}
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="mail"
									className="text-sm font-semibold text-gray-500"
								>
									Email address
								</label>
								<input
									value={input.mail}
									type="mail"
									required
									name="mail"
									onChange={(e) => handleChange(e)}
									className="peer px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 "
								/>
								<p className="flex items-center gap-2 invisible peer-invalid:visible text-pink-600 font-normal">
									Please enter a valid mail address
								</p>
							</div>
							{/*------------------------------------------PHOTO------------------------------------------------*/}
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label className="text-sm font-semibold text-gray-500">
										Photo
									</label>
								</div>
								<label
									className="flex space-x-2 justify-center m-0 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer"
									htmlFor="files"
								>
									Select file
								</label>
								<input
									id="files"
									type="file"
									name="image"
									onChange={(e) => handleFileInputChange(e)}
									className="invisible m-0 w-0 h-0 l-0 r-0"
								/>
								<div className="justify-center">
									{previewSource && (
										<div className="flex flex-col justify-center items-center">
											<button
												onClick={() => setPreviewSource("")}
												className="relative top-4 left-14 px-2 py-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mb-2"
											>
												X
											</button>
											<img
												src={previewSource}
												alt="chosen"
												className="h-32 w-36 rounded-full"
											/>
										</div>
									)}
								</div>
							</div>
							<div className="flex justify-center gap-4">
								<button
									type="button"
									className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
								>
									<Link to="/">🏠 Back Home</Link>
								</button>
								<button
									type="submit"
									className="px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
								>
									🚀 Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default createUser;
