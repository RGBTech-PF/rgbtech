import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dibujo-2.png";
import Logo from "../components/Logo/Logo.jsx";
import {
	accCreatedNotification,
	errorNotification,
} from "../components/Notifications.js";
import { IoHomeSharp } from "react-icons/io5";
import loadingGif from "../assets/loading.gif";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const createUser = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [previewSource, setPreviewSource] = useState("");
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState({
		user: "",
		password: "",
		mail: "",
		profilePhoto: "",
	});

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

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

	function handleSubmit(e) {
		e.preventDefault();

		const postFinal = {
			user: input.user,
			password: input.password,
			mail: input.mail,
			profilePhoto: previewSource,
		};

		setLoading(true);

		axios
			.post("users/register", postFinal)
			.then((response) => {
				console.log("response", response);
				setPreviewSource("");
				navigate("/");
				setInput({
					user: "",
					password: "",
					mail: "",
					profilePhoto: "",
				});
				accCreatedNotification();
			})
			.catch((error) => {
				setLoading(false);
				error.response.status === 400
					? errorNotification("Empty fields to complete ❌")
					: null;
				error.response.status === 401 && error.response.data.msg === "user"
					? errorNotification("The user exists in db ❌")
					: null;
				error.response.status === 401 && error.response.data.msg === "mail"
					? errorNotification("The email exists in db ❌")
					: null;
			});
	}

	return (
		<div>
			<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
				<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
					<div className="p-4 py-6 text-white bg-blue-300 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div className="my-3 text-4xl font-bold tracking-wider text-center">
							<img src={logo} alt="" />
							<Link to="/">
								<Logo />
							</Link>
							<p className="text-lg">Best products here!</p>
						</div>
					</div>
					<div className="absolute left-auto ml-4 mt-3">
						<Link to="/">
							<button className=" rounded-full">
								<IoHomeSharp
									size={30}
									className="bg-sky-400 rounded-full text-white p-0.5 hover:scale-105 duration-200"
								/>
							</button>
						</Link>
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
							<div className="flex flex-col justify-center space-y-1">
								<div className="flex items-center justify-between">
									<label className="text-sm font-semibold text-gray-500">
										Photo
									</label>
								</div>
								<label
									className="flex space-x-2 justify-center items-center w-fit m-0 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer"
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
							<div>
								<button
									type="submit"
									className="flex justify-center items-center w-full gap-2 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-300 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-4"
								>
									{loading ? (
										<img className="h-4 w-4" src={loadingGif} alt="loading" />
									) : null}
									Sing up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				false
			/>
		</div>
	);
};

export default createUser;
