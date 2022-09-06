import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../store/slices/products/thunks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import Spinner from "../components/Spinner";
import Header from "../components/Header/Header";
import CircleButton from "../components/Buttons/CircleButton";
import { clearDetails } from "../store/slices/products/productSlice";
import Comment from "../components/Comment";
import { hasJWT } from "../store/thunks/";
import jwt from "jwt-decode";
import {
	productAddedNotification,
	youAreUnloggedFavorites,
	youAreUnloggedProducts,
} from "../components/Notifications";
import { ToastContainer } from "react-toastify";
import CarruselComments from "../components/CarruselComments";
import Footer from "../components/Footer";
import {
	getUserProfile,
	updateLastVisited,
	updateProductCart,
} from "../store/slices/users/thunks";

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState("");
	const { productDetails } = useSelector((state) => state.products);
	const product = productDetails;
	const { user } = useSelector((state) => state.user);
	let token;
	let perfil;
	if (hasJWT()) {
		token = window.localStorage.getItem("token");
		perfil = jwt(token);
	}
	const handleAddCart = () => {
		console.log("hola");
		if (hasJWT()) {
			const cart = user.cartShop;
			const handler = cart?.includes(id);
			if (!handler) {
				dispatch(updateProductCart([id]));
			} else {
				return;
			}
		} else {
			youAreUnloggedProducts();
		}
	};

	useEffect(() => {
		if (hasJWT()) {
			dispatch(updateLastVisited(id));
		}
		dispatch(getProductById(id));

		return () => {
			// let lastVisited = JSON.parse(window.localStorage.getItem("lastVisited"));
			// if (lastVisited === undefined || lastVisited === null) {
			// 	window.localStorage.setItem("lastVisited", JSON.stringify([]));
			// 	let setLastVisited = window.localStorage.getItem("lastVisited");
			// 	lastVisited = JSON.parse(setLastVisited);
			// }
			// console.log("lastVisited.length", lastVisited.length);
			// console.log(
			// 	"Si es TRUE, es porque no existe este producto en el arreglo de lastVisited",
			// 	!Boolean(lastVisited.find((p) => p.id === id))
			// );
			// if (!Boolean(lastVisited.find((p) => p.id === id))) {
			// 	//TODO: Validación para saber si hay 10 productos en el arreglo... if
			// 	console.log("productDetails", productDetails);
			// 	console.log("lastVisited DESPUES DE ENTRAR AL IF", lastVisited);
			// 	lastVisited.push({ ...productDetails });
			// 	console.log(
			// 		"----- lastVisited DESPUES DE HACERLE EL PUSH -----",
			// 		lastVisited
			// 	);
			// 	window.localStorage.setItem("lastVisited", JSON.stringify(lastVisited));
			// }
			dispatch(clearDetails());
		};
	}, [id]);

	const postComment = (e) => {
		e.preventDefault();
		useDispatch(
			postComment({
				//user.photo
				//user.id
				//id producto
				//rating
				//photo
			})
		);
	};

	return (
		<div className="text-white">
			<Header />
			{productDetails && !Object.keys(productDetails).length ? (
				<Spinner />
			) : (
				<div className="mx-10">
					<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 m-4">
						<div className="flex justify-around p-4 mt-2 mx-4 rounded-xl text-3xl">
							<img
								className="w-[25rem] h-[20rem] mb-4 rounded-3xl "
								src={<Spinner /> && productDetails.img}
								alt={productDetails.name}
							/>
							<div className="flex flex-col m-4 gap-4 items-center">
								<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center">
									{productDetails.name}
								</h1>
								<AiFillStar className="text-amber-400" />
								<p>${productDetails.price}</p>
								<p className="flex gap-2 items-center text-xl drop-shadow-lg shadow-black">
									<MdOutlineShoppingCart /> Available Stock:{" "}
									{productDetails.stock}
								</p>
								<p className="flex items-center gap-4 text-2xl">
									<IoMdHeartEmpty
										size={40}
										className="hover:cursor-pointer hover:scale-110 duration-500 "
										onClick={() =>
											!hasJWT() ? youAreUnloggedFavorites() : null
										}
									/>
								</p>
								<CircleButton
									className="flex gap-2 items-center active:bg-pink-800 focus:bg-pink-700 hover:bg-pink-700 bg-pink-600"
									onClick={handleAddCart}
								>
									<MdOutlineShoppingCart />
									Agregar al Carrito
								</CircleButton>
							</div>
						</div>
						<div className="bg-gradient-to-r from-blue-900 to-pink-900 p-2 mt-2 mx-4 rounded-3xl flex flex-col justify-center items-center shadow-gray-700 shadow-md">
							<div className="">
								<div className="float-left bg-gradient-to-r h-96 from-blue-500 to-pink-400  flex flex-col w-96 justify-center items-center mt-6 rounded-l-2xl	 p-7">
									<h2 className="text-2xl font-bold mb-4">Characteristics:</h2>
									<ul>
										<li>
											{Object.entries(productDetails.specifications[0]).map(
												(e, i) => (
													<p key={i}>
														{e[0].charAt(0).toUpperCase() + e[0].slice(1)}:{" "}
														{e[1]}
													</p>
												)
											)}
										</li>
									</ul>
								</div>
								<div className="bg-gradient-to-r h-96 from-pink-400 to-blue-500  shadow-2xl flex flex-col w-96 justify-center ml-52 items-center mt-6 rounded-r-2xl p-7">
									<hr />
									<h2 className="text-2xl font-bold mb-4">Description:</h2>
									<p>{productDetails.description}</p>
								</div>
							</div>

							<div>
								{hasJWT() ? (
									<form
										className="block p-6 rounded-lg shadow-lg bg-white w-full"
										onSubmit={postComment}
									>
										<h2 className="text-black font-bold mb-4">
											Dejanos tu review:
										</h2>
										<label className="text-black font-bold">
											<input
												className="form-control block
										w-full
										px-3
										py-1.5
										text-base
										text-black
										font-normal
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										transition
										ease-in-out
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												type="number"
												placeholder="Puntuanos en un rating del 1 al 5..."
												min={0}
												max={5}
												value={rating}
												onChange={(e) => setRating(e.target.value)}
											/>
										</label>
										<label className="text-black font-bold">
											<textarea
												className="
										form-control
										block
										w-full
										mt-4
										px-3
										py-1.5
										text-base
										font-normal
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										transition
										ease-in-out
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												type="text"
												value={comment}
												name="description"
												required
												placeholder="Ej: Tu opiniÃ³n..."
												onChange={(e) => setComment(e.target.value)}
												rows="5"
												cols="50"
											></textarea>
										</label>
										<input
											className=" w-full
									px-6
									py-2.5
									bg-blue-600
									text-white
									font-medium
									text-xs
									leading-tight
									uppercase
									rounded
									shadow-md
									hover:bg-blue-700 hover:shadow-lg
									focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
									active:bg-blue-800 active:shadow-lg
									transition
									duration-150
									ease-in-out
									mt-4"
											type="submit"
										/>
									</form>
								) : null}

								<div className="max-w-6xl">
									<CarruselComments />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
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
			<Footer />
		</div>
	);
};

export default ProductDetails;
