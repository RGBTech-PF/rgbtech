import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal/Modal";
import { FcCancel } from "react-icons/fc";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import {
	userUpdatedNotifaction,
	errorNotification,
} from "../../components/Notifications";
import { getUserProfile } from "../../store/slices/users/thunks";
import loadingGif from "../../assets/loading.gif";

const ModifyProfile = ({ closeModal }) => {
	const dispatch = useDispatch();
	const user = JSON.parse(window.localStorage.getItem("user"));
	const [previewSource, setPreviewSource] = useState(user.profilePhoto);
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState({
		user: user.user,
		mail: user.mail,
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
			id: user.id,
			user: input.user,
			mail: input.mail,
			profilePhoto: previewSource || null,
		};

		setLoading(true);
		axios
			.put("users/modifyUser", postFinal)
			.then((response) => {
				console.log("response", response);
				setPreviewSource("");
				window.localStorage.setItem(
					"user",
					JSON.stringify({
						...user,
						user: response.data.user,
						mail: response.data.mail,
						profilePhoto: response.data.profilePhoto,
					})
				);
				setLoading(false);
				closeModal(false);
				userUpdatedNotifaction();
				dispatch(getUserProfile(user.id));
			})
			.catch((error) => {
				setLoading(false);
				error.response.status === 400
					? errorNotification("Empty fields to complete ❌")
					: null;

				error.response.status === 401 && error.response.data.msg === "user"
					? errorNotification("El usuario ya existe ❌")
					: null;

				error.response.status === 401 && error.response.data.msg === "mail"
					? errorNotification("El correo ya existe ❌")
					: null;
			});
	}

	return (
		<Modal tailwindCSS={"bg-[#a156f6] bg-opacity-100"}>
			<form
				action=""
				onSubmit={(e) => handleSubmit(e)}
				className="flex flex-col space-y-5"
			>
				<div className="flex flex-col gap-3 text-white font-bold overflow-auto h-80 ">
					<label className="font-semibold" htmlFor="user">
						Username:
					</label>
					<input
						type="text"
						value={input.user}
						required
						name="user"
						onChange={(e) => handleChange(e)}
						className="ml-2 rounded-xl text-black p-1 mx-4"
					/>
					<label className="font-semibold" htmlFor="">
						Email:
					</label>
					<input
						type="text"
						name="mail"
						className="ml-2 rounded-xl text-black p-1 mx-4"
						value={input.mail}
						onChange={(e) => handleChange(e)}
						required
					/>
					<label className="font-semibold" htmlFor="">
						Profile photo:
					</label>
					<div className="flex flex-col justify-center items-center ">
						{previewSource ? (
							<div className="flex flex-col justify-center items-center mb-5">
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
						) : (
							<h2 className="text-emerald-300 mb-2 underline">
								Select an image!
							</h2>
						)}
						<label
							className="flex justify-center items-center space-x-2 w-32 m-0 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer"
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
					</div>
				</div>
				<div className="flex justify-center items-center mt-6 gap-4">
					<button
						type="button"
						className="flex gap-2 items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						onClick={() => closeModal(false)}
					>
						<FcCancel className="h-5 w-5" />
						Cancel Changes
					</button>
					<button
						type="submit"
						className="flex gap-2 items-center px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
					>
						{loading ? (
							<img className="h-4 w-4" src={loadingGif} alt="loading" />
						) : (
							<FaCheckCircle className="h-5 w-5" />
						)}
						Accept Changes
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ModifyProfile;
