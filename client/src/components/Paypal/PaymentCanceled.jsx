import React from "react";
import logo from "../../assets/logo-dibujo-2.png";
import "animate.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
const PaymentCanceled = () => {
	const navigate = useNavigate();
	window.localStorage.removeItem("productsPaypal");

	return (
		<div className="flex flex-col min-h-screen h-full">
			<Header />
			<div className="flex flex-col self-center justify-center items-center h-[400px]">
				<div className="flex flex-col justify-center items-center bg-yellow-500 h-96 mt-32 mx-40 rounded-3xl text-white text-3xl text-center gap-3 ">
					<div className="flex flex-col justify-center items-center animate__animated animate__bounceInRight">
						<img
							className="w-32 mb-2 animate__animated animate__fadeInDown"
							src={logo}
							alt="logo-rgbtech"
						/>
						Oops, your purchase was canceled!
					</div>
					<button
						type="button"
						className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4 animate__animated animate__fadeIn"
						onClick={() => navigate("/")}
					>
						🏠 Go home
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentCanceled;
