import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/slices/products/thunks.js";
import Carousel from "../components/Carousel.jsx";
import Header from "../components/Header/Header.jsx";
import CategoriesCarousel from "../components/CategoriesCarousel/CategoriesCarousel.jsx";
import Footer from "../components/Footer.jsx";
import ModalHome from "../components/ModalHome.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (products.length) return;
		// dispatch(getAllProducts(1));
		setShowModal(true);
	}, []);

	return (
		<div className="min-h-screen">
			<Header />
			{/* <ModalHome showModal={showModal} setShowModal={setShowModal} /> */}
			<Carousel />
			<CategoriesCarousel />
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
				false
			/>
		</div>
	);
};

export default Home;
