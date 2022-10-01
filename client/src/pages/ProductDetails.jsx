import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../store/slices/products/thunks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
// import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import Spinner from "../components/Spinner";
import Header from "../components/Header/Header";
import CircleButton from "../components/Buttons/CircleButton";
import SquareButton from "../components/Buttons/SquareButton";
import { clearDetails } from "../store/slices/products/productSlice";
import Comment from "../components/Comment";
import { hasJWT } from "../store/thunks/";
import jwt from "jwt-decode";
import {
	productAddedFavoriteNotification,
	productAddedNotification,
	youAreUnloggedFavorites,
	youAreUnloggedProducts,
} from "../components/Notifications";
import { ToastContainer } from "react-toastify";
import CarruselComments from "../components/CarruselComments";
import Footer from "../components/Footer";
import specialdiscount from "../assets/specialdiscount.png";
import freeShipping from "../assets/freeshipping.png";
import {
	deleteFavoriteUser,
	getUserProfile,
	updateFavoriteUser,
	updateLastVisited,
	updateProductCart,
} from "../store/slices/users/thunks";
import Swal from "sweetalert2";

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	// const { cart } = useSelector((state) => state.guestShoppingCart);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState("");
	const { productDetails } = useSelector((state) => state.products);
	const product = productDetails;
	const { user } = useSelector((state) => state.user);
	let FavoriteProduct = user.favorite;
	let token;
	let perfil;
	if (hasJWT()) {
		token = window.localStorage.getItem("token");
		perfil = jwt(token);
	}

	const handleAddCart = () => {
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

	const handleAddCartFav = () => {
		if (hasJWT()) {
			let favorite = user.favorite;
			const handler = favorite?.includes(id);
			if (!handler) {
				dispatch(updateFavoriteUser([id]));
				productAddedFavoriteNotification();
			}
		} else {
			youAreUnloggedFavorites();
		}
	};

	const handleDeleteCartFav = () => {
		if (hasJWT()) {
			Swal.fire({
				title: "Are you sure you want to delete this favorite?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			}).then((result) => {
				if (result.isConfirmed) {
					let favorite = user.favorite;
					const handler = favorite?.includes(id);
					if (handler) {
						const updatedFavorites = user.favorite.filter(
							(product) => product !== id
						);
						dispatch(deleteFavoriteUser(updatedFavorites));
					}
					Swal.fire(
						"Favorite was deleted!",
						"Your product has been deleted from favorites.",
						"success"
					);
				}
			});
		}
	};

	useEffect(() => {
		if (hasJWT()) {
			dispatch(updateLastVisited(id));
		}
		dispatch(getProductById(id));

		return () => {
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
		<div className="flex flex-col min-h-screen h-full text-white">
			<Header />
			{productDetails && !Object.keys(productDetails).length ? (
				<Spinner />
			) : (
				<div>
					<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 m-4">
						<div className="flex flex-row justify-around p-4 mt-2 mx-4 rounded-xl text-3xl sm:flex-col items-center">
							<img
								className="w-[25rem] h-[20rem] mb-4 rounded-3xl vsm:h-[16rem]"
								src={<Spinner /> && productDetails.img}
								alt={productDetails.name}
							/>
							<div className="flex flex-col m-4 gap-4 items-center">
								<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center vsm:text-2xl">
									{productDetails.name}
								</h1>

								<div>
									{productDetails.onDiscount ? (
										<span>
											<p className="line-through">${productDetails.price}</p>
											<p className="font-bold">
												{" "}
												$
												{Math.round(
													productDetails.price -
														(productDetails.price *
															productDetails.discountPercentage) /
															100
												)}
											</p>
										</span>
									) : (
										<p>${productDetails.price}</p>
									)}{" "}
								</div>
								<p className="flex gap-2 items-center text-center text-xl drop-shadow-lg shadow-black">
									<MdOutlineShoppingCart /> Available Stock:{" "}
									{productDetails.stock}
								</p>
								<CircleButton
									className="flex gap-2 items-center active:bg-pink-800 focus:bg-pink-700 hover:bg-pink-700 bg-pink-600"
									onClick={handleAddCart}
								>
									<MdOutlineShoppingCart />
									Agregar al Carrito
								</CircleButton>
								{console.log(FavoriteProduct?.includes(id))}
								{FavoriteProduct?.includes(id) ? (
									<SquareButton
										className="flex gap-2 items-center active:bg-blue-800 focus:bg-blue-700 hover:bg-blue-700 bg-blue-600"
										onClick={handleDeleteCartFav}
									>
										<MdFavorite className="text-lg text-red-500" /> Agregar a
										Favoritos
									</SquareButton>
								) : (
									<SquareButton
										className="flex gap-2 items-center active:bg-blue-800 focus:bg-blue-700 hover:bg-blue-700 bg-blue-600"
										onClick={handleAddCartFav}
									>
										<MdOutlineFavoriteBorder className="text-lg" /> Agregar a
										Favoritos
									</SquareButton>
								)}

								<div className="flex gap-2 items-center">
									{productDetails.freeShipping && (
										<img
											className="w-24 mt-2"
											src={freeShipping}
											alt="freeshipping"
										/>
									)}

									{productDetails.onDiscount && (
										<img
											className="w-16 "
											src={specialdiscount}
											alt="ondiscount"
										/>
									)}
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-pink-900 p-2 mt-2 mx-4 rounded-3xl shadow-gray-700 shadow-md overflow-auto">
							<div className="flex flex-col justify-center items-center text-center">
								<h2 className="text-2xl font-bold mb-4">Characteristics:</h2>
								<ul>
									<li>
										{Object.entries(productDetails.specifications[0]).map(
											(e, i) => (
												<p key={i}>
													{e[0].charAt(0).toUpperCase() + e[0].slice(1)}: {e[1]}
												</p>
											)
										)}
									</li>
								</ul>
								<hr />
								<h2 className="text-2xl font-bold mb-4">Description:</h2>
								<p>{productDetails.description}</p>
							</div>

							<div>
								{hasJWT() ? (
									<form
										className="mt-4 block p-6 rounded-lg shadow-lg bg-white w-full dark:bg-[#6865f1]"
										onSubmit={postComment}
									>
										<h2 className="text-black font-bold mb-4 dark:text-white">
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
												placeholder="Example: 5"
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
												placeholder="Put your review here..."
												onChange={(e) => setComment(e.target.value)}
												rows="5"
												cols="50"
											></textarea>
										</label>
										<input
											className=" w-full
									px-6
									py-2.5
									hover:cursor-pointer
									bg-blue-600
									dark:bg-[#e749a0]
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

								<div className="flex justify-center items-center max-w-6xl">
									{productDetails?.comments.length ? (
										<CarruselComments comments={productDetails.comments} />
									) : (
										<p className="bg-red-400 rounded-md p-1 font-bold mt-4 text-center w-fit">
											{" "}
											Este producto aún no tiene comentarios !
										</p>
									)}
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
