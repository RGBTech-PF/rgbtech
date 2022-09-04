import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addProduct,
} from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import {
	deleteProductFav,
	addProductsFav,
} from "../store/slices/products/productSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
	updateFavoriteUser,
	deleteFavoriteUser,
	updateProductCart,
} from "../store/slices/users/thunks";
import { productAddedNotification } from "./Notifications";

export default function Tarjeta({ id, img, tags, name, price, lastProduct }) {
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const { favorito } = useSelector((state) => state.products);
	const favoriteId = favorito.map((p) => p.id);
	const dispatch = useDispatch();

	const handleAddCart = () => {
		if (Boolean(cart.find((p) => p.id === id))) return;
		else {
			dispatch(
				addProduct({
					id,
					name,
					price,
					img,
				})
			);
			productAddedNotification();
		}
		dispatch(updateProductCart([id]));
	};

	const handleAddCartFav = () => {
		if (favoriteId.includes(id)) return;
		else {
			dispatch(
				addProductsFav({
					id,
					name,
					price,
					img,
				})
			);
			console.log(id, "id en product");
			dispatch(updateFavoriteUser(id));
			favoriteId.push(id);
		}
		console.log(favorito);
	};
	const handleDeleteCartFav = () => {
		if (favoriteId.includes(id)) {
			const i = favoriteId.findIndex((p) => p === id);
			console.log(i, "ada");
			dispatch(deleteProductFav(i));
			let favDelete = favorito.map((p) => p.id);
			favDelete = favDelete.filter((p) => p !== id);
			dispatch(deleteFavoriteUser(favDelete));
		}
	};

	return (
		<div
			ref={lastProduct || null}
			key={id}
			className="flex justify-start w-[1000px] p-2 border-b-4 "
		>
			<div className="flex flex-col md:flex-row w-[1000px] md:max-w-6xl rounded-lg bg-white shadow-lg">
				<img
					className="bg-pink-700 w-20 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-2xl font-medium mb-2">
						{name}
						{favoriteId && favoriteId.includes(id) ? (
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
					<div className="flex flex-row mb-2">
						 <AiOutlineStar color="gold" size={20}/> <AiFillStar color="gold" size={20}/>
					{/* <p className="text-black font-medium rounded-lg text-sm px-5 my-2 mr-1 text-center">
					</p> */}
					</div>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">$ {price}</p>
						<div className="mr-96"></div>
					</div>

					<div className="pt-4">
						<button
							onClick={handleAddCart}
							className="text-white bg-pink-700 hover:scale-95 shadow-xl hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-400 dark:focus:ring-blue-400"
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

// <div
// 	ref={lastProduct || null}
// 	key={id}
// 	className="flex justify-center p-2"
// >
// 	<div className="flex flex-col md:flex-row md:max-w-6xl rounded-lg bg-pink-700 shadow-lg">
// 		<img
// 			src={image}
// 			alt=""
// 			className="bg-pink-700 w-20 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
// 		/>
// 	</div>
// 	<div className="flex flex-col justify-start">
// 		<div className="flex flex-col justify-start">
// 			<h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-pink-600 ml-2">
// 				{name}
// 				{favoriteId && favoriteId.includes(id) ? (
// 					<button
// 						onClick={handleDeleteCartFav}
// 						className="cursor-pointer hover:scale-110 mr-2 px-2.5 py-0.5 ml-3"
// 					>
// 						<AiOutlineHeart color="pink" size={35} />
// 					</button>
// 				) : (
// 					<button
// 						onClick={handleAddCartFav}
// 						className="cursor-pointer hover:scale-110 mr-2 px-2.5 py-0.5 ml-3"
// 					>
// 						<AiOutlineHeart size={25} />
// 					</button>
// 				)}
// 			</h1>
// 			<div className="flex justify-between items-center text-gray-600 text-xl font-bold ml-2">
// 				${price}
// 			</div>
// 			<button
// 				onClick={handleAddCart}
// 				className="text-white ml-2 bg-pink-400 hover:scale-95 shadow-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// 			>
// 				Add to cart
// 			</button>
// 		</div>
// 		<div className="flex space-x-2 mb-4 text-sm font-medium">
// 			<div className="flex space-x-4"></div>
// 		</div>
// 	</div>
// </div>
