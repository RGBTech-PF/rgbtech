import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteProductFav,
	addProductsFav,
} from "../store/slices/products/productSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import {
	updateFavoriteUser,
	deleteFavoriteUser,
	updateProductCart,
} from "../store/slices/users/thunks";
import { productAddedNotification } from "./Notifications";
import { hasJWT } from "../store/thunks";

export default function Tarjeta({ id, img, tags, name, price, lastProduct }) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	let FavoriteProduct = user.favorite;

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
				dispatch(getUserProfile(perfil.id));
			}
		}
	};

	const handleAddCartFav = () => {
		if (hasJWT()) {
			let favorite = user.favorite;
			const handler = favorite?.includes(id);
			if (!handler) {
				console.log("agrega fav");
				dispatch(updateFavoriteUser([id]));
			}
		}
	};
	return (
		<div
			ref={lastProduct || null}
			key={id}
			className="flex justify-start w-[700px] mr-4 p-2 border-b-2 lg:w-[450px] md:w-[350px]"
		>
			<div className="flex flex-row w-[1000px] md:max-w-6xl rounded-lg bg-white shadow-lg dark:bg-gray-400 lg:flex-col">
				<img
					className="bg-pink-700 h-60 md:h-52 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start lg:justify-center lg:items-center">
					<h5 className="text-gray-900 text-2xl font-medium mb-2">
						{name}
						{FavoriteProduct?.includes(id) ? (
							<button
								onClick={handleDeleteCartFav}
								className="cursor-pointer mr-2 px-2.5 py-0.5 ml-3"
							>
								<AiOutlineHeart color="#FF1493" size={25} />
							</button>
						) : (
							<button
								onClick={handleAddCartFav}
								className="cursor-pointer hover:scale-110 mr-2 px-2.5 py-0.5 ml-3"
							>
								<AiOutlineHeart size={25} />
							</button>
						)}
					</h5>
					<div className="flex ">
						<p className="text-lg mb-4 font-bold">
							<BsStarFill color="yellow" size={20} />
						</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">${price}</p>
					</div>

					<div className="pt-4">
						<button
							onClick={handleAddCart}
							className="text-white bg-pink-700 hover:scale-95 shadow-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Add to cart
						</button>
						<p className="text-green-600">{tags}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
