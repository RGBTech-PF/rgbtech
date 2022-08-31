import React from "react";
import { IconContext } from "react-icons/lib";
import {
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import Modal from "../Modal/Modal";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/slices/components/componentSlice";
import defaultImage from "../../assets/defaultImage.png";
import { hasJWT } from "../../store/thunks";
const UserSection = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { login } = useSelector((state) => state.components.modal);
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const { user } = useSelector((state) => state.user);
	return (
		<div className="flex items-center gap-2">
			{login && (
				<Modal functionModal={() => dispatch(setLogin(false))}>
					<Login />
				</Modal>
			)}
			<IconContext.Provider
				value={{
					className: "bg-pink-500 rounded-3xl py-0.5 p-1 cursor-pointer",
					style: { color: "white" },
					size: "30px",
				}}
			>
				{user && Boolean(Object.keys(user).length) ? (
					<img
						className="hover: cursor-pointer rounded-3xl w-8 h-8 hover:scale-110 ease-in duration-300"
						src={
							user.profilePhoto === "Image_Default"
								? defaultImage
								: user.profilePhoto
						}
						alt=""
						onClick={() => navigate("/profile")}
					/>
				) : (
					<AiOutlineUser
						className="hover:bg-red-500 hover:scale-110 ease-in duration-300"
						onClick={() => dispatch(setLogin(true))}
					/>
				)}
                {hasJWT()?
				<AiOutlineHeart
					className="hover:bg-red-500 hover:scale-110 ease-in duration-300"
					onClick={() => {
						navigate("/favorites");
					}}
				/>: null}

				<div>
					{cart.length > 0 && (
						<span className="flex absolute top-2 right-0 bg-teal-500 p-1 items-center rounded-full text-white text-sm h-5">
							{cart.length}
						</span>
					)}
					<AiOutlineShoppingCart
						className={`hover:bg-red-500 ${
							cart.length === 0 && "hover:scale-110 ease-in duration-300"
						}`}
						onClick={() => navigate("/shoppingCart")}
					/>
				</div>
			</IconContext.Provider>
		</div>
	);
};

export default UserSection;
