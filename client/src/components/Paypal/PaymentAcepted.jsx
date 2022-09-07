import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo-dibujo-2.png";
import { useNavigate } from "react-router-dom";
import { setShoppingUserHistory } from "../../store/slices/admin/thunk";
import jwt from "jwt-decode";
import { clearCartShop, getUserProfile } from "../../store/slices/users/thunks";
import "animate.css";

const PaymentAcepted = () => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const buyingDate = Date().split(" ");

	const paypalCart = JSON.parse(
		window.localStorage.getItem("productsPaypal")
	).map((p) => ({
		productId: p.id,
		name: p.name,
		month: buyingDate[1],
		year: buyingDate[3],
		productPrice: p.price,
		amount: p.amount,
	}));

	console.log("paypalCart", paypalCart);

	useEffect(() => {
		dispatch(setShoppingUserHistory(perfil.id, paypalCart));
		dispatch(getUserProfile(perfil.id))
		dispatch(clearCartShop());
		return () => {
			window.localStorage.removeItem("productsPaypal");
		};
	}, []);

	return (
		<div className="flex flex-col justify-center items-center bg-green-500 h-96 mt-32 mx-40 rounded-3xl text-white text-3xl text-center gap-3 ">
			<div className="flex flex-col justify-center items-center animate__animated animate__bounceInRight">
				<img
					className="w-32 mb-2 animate__animated animate__fadeInDown"
					src={logo}
					alt="logo-rgbtech"
				/>
				Thanks for your purchase! ✅
			</div>
			<p className="text-lg font-medium animate__animated animate__bounceInLeft ">
				Check your Email to view the details ✉️
			</p>
			<button
				type="button"
				className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4 animate__animated animate__fadeIn"
				onClick={() => navigate("/")}
			>
				🏠 Go home
			</button>
		</div>
	);
};

export default PaymentAcepted;
