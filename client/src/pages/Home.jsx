import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/slices/products/thunks.js";
import Carousel from "../components/Carousel.jsx";
import Header from "../components/Header/Header.jsx";
import CategoriesCarousel from "../components/CategoriesSection/CategoriesSection.jsx";
import Footer from "../components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import { setCartShop } from "../store/slices/users/thunks";
import {hasJWT} from "../store/thunks"
import {
	setAccCreated,
	setWelcomeUser,
	setErrorLogin,
	setLogout,
	setProductAdded,
	setEmailConfirmated,
} from "../store/slices/components/componentSlice";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const { products } = useSelector((state) => state.products);
	const {
		accountCreated,
		welcomeUser,
		errorLogin,
		logout,
		productAdded,
		emailConfirmated,
	} = useSelector((state) => state.components.notification);
	const accCreated = () => {
		toast.success("👨‍🚀 Account created successfully check your email! ✉️", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setAccCreated(false));
	};

	const welcomeUserFunction = () => {
		toast("Welcome User to RGBTech! 🏠", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setWelcomeUser(false));
	};

	const errLogin = () => {
		toast.error("There are errors in the data ❌", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setErrorLogin(false));
	};

	const logoutFunction = () => {
		toast.success("See you soon user! 🤗", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setLogout(false));
	};

	const productAddedFunction = () => {
		toast.success("Product added successfully! ✅", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setProductAdded(false));
	};

	const emailConfirmatedFunction = () => {
		toast.success("Email confirmed successfully! ✅", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setEmailConfirmated(false));
	};

	useEffect(() => {
		if (products.length) return;
		dispatch(getAllProducts(1));
	}, []);

	useEffect(() => {
		if(hasJWT()){
			return () => {
				if(cart.length!== 0){
					const productsId = cart.map(p=> p)
					
					dispatch(setCartShop(productsId))
				}else{
					const productsId= [""]
					dispatch(setCartShop(productsId))
				}
			}}
		}, [])

	return (
		<div className="min-h-screen">
			{accountCreated && accCreated()}
			{welcomeUser && welcomeUserFunction()}
			{errorLogin && errLogin()}
			{logout && logoutFunction()}
			{productAdded && productAddedFunction()}
			{emailConfirmated && emailConfirmatedFunction()}
			<Header />
			<Carousel />
			<div className="flex justify-center">
				<CategoriesCarousel />
			</div>
			<Footer />
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
			/>
		</div>
	);
};

export default Home;
