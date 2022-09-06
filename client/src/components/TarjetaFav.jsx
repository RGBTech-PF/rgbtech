import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
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

const FavoriteCard = ({ id, name, price, img }) => {
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
			let favorite = user.favorite;
			const handler = favorite?.includes(id);
			if (handler) {
				const updatedFavorites = user.favorite.filter(
					(product) => product !== id
				);
				dispatch(deleteFavoriteUser(updatedFavorites));
			}
		}
	};
	return (
		<div className="flex justify-center  p-2">
			<div className="flex flex-col md:flex-row md:max-w-6xl rounded-lg bg-white shadow-lg">
				<img
					className="bg-red-700 w-20 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{name.slice(0, 45)}...
					</h5>
					<p className="text-gray-700 text-base mb-4">
						This is a special product of our RGBtech page for all our customers
					</p>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">{price}</p>
						<div className="mr-96">
							<BsCurrencyDollar />
						</div>
					</div>

					<div className="pt-4">
						<button
							className="px-4 h-8 rounded font-semibold border border-blue-400 hover:scale-95 text-slate-900"
							onClick={handleAddCart}
						>
							Add to cart
						</button>

						<button
							onClick={handleDeleteCartFav}
							className="ml-12 scale-110 mr-2 px-2.5 py-0.5"
						>
							<FaHeartBroken className="text-red-500 hover:cursor-pointer" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
