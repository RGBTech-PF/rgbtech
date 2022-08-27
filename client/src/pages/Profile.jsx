import React from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogoutTrue } from "../store/slices/components/componentSlice";

const Profile = () => {
	const token = window.localStorage.getItem("token");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const perfil = jwt(token);

	const handleSignOut = () => {
		window.localStorage.removeItem("token");
		navigate("/");
		dispatch(setLogoutTrue());
	};

	return (
		<div>
			
			<h2 className="text-black">hshjhsdakjh</h2>
			<h1>{perfil.user}</h1>
			<button
				type="button"
				className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
				onClick={handleSignOut}
			>
				Sign Out
			</button>
		</div>
	);
};

export default Profile;
