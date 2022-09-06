import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import {
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import Modal from "../Modal/Modal";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultImage from "../../assets/defaultImage.png";
import { hasJWT } from "../../store/thunks";
import { youAreUnloggedFavorites } from "../Notifications";
import Toogle from "./Toogle";

const UserSection = () => {
	const navigate = useNavigate();
	const [login, setLogin] = useState(false);
	const { user } = useSelector((state) => state.user);
	const userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
	let cart = user.cartShop;

	let userProfile;
	function setUserProfile() {
		if (Object.keys(user).length) {
			userProfile = user;
		} else {
			userProfile = userLocalStorage;
		}
	}

	setUserProfile();

	return (
		<div className="flex items-center gap-2">
			{login && (
				<Modal closeModal={() => setLogin(false)}>
					<Login closeModal={() => setLogin(false)} />
				</Modal>
			)}
			<IconContext.Provider
				value={{
					className: "bg-pink-500 rounded-3xl py-0.5 p-1 cursor-pointer",
					style: { color: "white" },
					size: "30px",
				}}
			>
				{/* user && Boolean(Object.keys(user).length) */}
				{userProfile && Object.keys(userProfile).length ? (
					<img
						className="hover: cursor-pointer rounded-3xl w-8 h-8 hover:scale-105 ease-in duration-300"
						src={
							userProfile?.profilePhoto === null
								? defaultImage
								: userProfile?.profilePhoto
						}
						alt=""
						onClick={() => navigate("/profile")}
					/>
				) : (
					<AiOutlineUser
						className="hover:bg-red-500 hover:scale-105 ease-in duration-300"
						onClick={() => setLogin(true)}
					/>
				)}

				<AiOutlineHeart
					className="hover:bg-red-500 hover:scale-105 ease-in duration-300"
					onClick={() => {
						hasJWT() ? navigate("/favorites") : youAreUnloggedFavorites();
					}}
				/>

				<div>
					{cart?.length > 0 && (
						<span className="flex absolute top-2 right-11 bg-teal-500 p-1 items-center rounded-full text-white text-sm h-5">
							{cart?.length}
						</span>
					)}
					<AiOutlineShoppingCart
						className={`hover:bg-red-500 ${
							cart?.length === 0 && "hover:scale-105 ease-in duration-300 mr-1"
						}`}
						onClick={() => {
							hasJWT() ? navigate("/shoppingCart") : youAreUnloggedFavorites();
						}}
					/>
				</div>
			</IconContext.Provider>
			<Toogle />
		</div>
	);
};

export default UserSection;
