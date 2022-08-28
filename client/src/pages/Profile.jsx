import React from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/slices/components/componentSlice";
import Header from "../components/Header/Header";
import { setCartShop } from "../store/slices/users/thunks";
import { emptyCart } from "../store/slices/guestShoppingCart/guestShoppingCartSlice"

const Profile = () => {
	const token = window.localStorage.getItem("token");
	const { cart } = useSelector((state) => state.guestShoppingCart);
	
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const perfil = jwt(token);
	console.log("perfil info", perfil);
	

	const handleSignOut = () => {
		window.localStorage.removeItem("token");
		navigate("/");
		dispatch(setLogout(true));
		const productss = cart.map(p=> p)
		console.log(productss,"profile")
		dispatch(setCartShop(productss))
		dispatch(emptyCart())
	};

	return (
		<div>
			<Header />
			<div className="flex justify-around bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 items-center rounded-3xl shadow-2xl text-white font-semibold">
				<div className="flex flex-col bg-sky-600 justify-center items-center rounded-3xl my-10 p-4 text-xl">
					<h1>{perfil.isAdmin ? "Admin" : "User"}</h1>
					<p>👨‍🚀{perfil.user}</p>
					<img src={perfil.profilePhoto} alt={`profilePhoto-${perfil.user}`} />
					<p>ID User:</p>
					<p>{perfil.id}</p>
					<p className="mb-4">Email: {perfil.mail}</p>
					<div className="flex gap-4">
						<button
							type="button"
							className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
							onClick={() => handleSignOut()
								
							}
						>
							Sign Out
						</button>
						<button
							type="button"
							className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Modify profile
						</button>
					</div>
				</div>
				<div className="flex flex-col font-bold">
					<p>Shopping Cart:</p>
					<div className="overflow-y-auto h-52">
						{/* {perfil.cartShop?.map((product) => (
							<p>{product}</p>
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
