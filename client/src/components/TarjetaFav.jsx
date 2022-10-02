import React from "react";
import { FaHeartBroken } from "react-icons/fa";
// import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteFavoriteUser,
	updateProductCart,
} from "../store/slices/users/thunks";
import {
	productAddedNotification,
	youAreUnloggedProducts,
} from "./Notifications";
import { hasJWT } from "../store/thunks";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FavoriteCard = ({
	id,
	name,
	price,
	img,
	onDiscount,
	discountPercentage,
	freeShipping,
	description,
}) => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	console.log(id);

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
	const discountFunction = (price, discount) => {
		let discPercentage = discount / 100;
		discPercentage = price * discPercentage;
		let result = Math.ceil(price - discPercentage);
		return result;
	};

	return (
		<div className="flex p-2 justify-center items-center md:flex-col">
			<div className="flex flex-row rounded-lg bg-white dark:bg-gray-500 shadow-lg md:flex-col">
				<Link to={`/productDetails/${id}`}>
					<img
						className="bg-red-700 w-72 h-full object-cover md:w-full md:h-72 rounded-t-lg md:rounded-none md:rounded-l-lg"
						src={img}
						alt=""
					/>
				</Link>
				<div className="p-6 flex flex-col justify-center">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{name.slice(0, 45)}...
					</h5>
					<p className="text-gray-700 dark:text-black text-base mb-4">
						{description.substring(0, 110) + "..."}
					</p>
					<div className="flex justify-between items-center">
						{onDiscount ? (
							<span className="flex text-xl text-gray-900 dark:text-white justify-between">
								<p className="line-through text-gray-400 mr-1 text-2xl">
									${price}
								</p>

								<p className="text-black font-semibold text-2xl ml-4">
									${discountFunction(price, discountPercentage)}
								</p>
							</span>
						) : (
							<p className="text-black text-2xl ml-4">${price}</p>
						)}
						{onDiscount ? (
							<p className="text-red-600 dark:text-red-900 text-base border border-red-600 rounded-sm px-1">
								{discountPercentage}% OFF
							</p>
						) : null}
						{freeShipping ? (
							<p className="text-green-500 ml-2">( Free Shipping )</p>
						) : null}
						{/* <div className="mr-96">
							<BsCurrencyDollar />
						</div> */}
					</div>

					<div className="pt-4">
						<button
							className="px-4 h-8 rounded font-semibold border border-blue-400 hover:scale-95 text-slate-900 duration-300"
							onClick={handleAddCart}
						>
							Add to cart
						</button>

						<button
							onClick={handleDeleteCartFav}
							className="ml-12 scale-110 mr-2 px-2.5 py-0.5"
						>
							<FaHeartBroken className="text-red-500 hover:cursor-pointer hover:scale-105 duration-150" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
