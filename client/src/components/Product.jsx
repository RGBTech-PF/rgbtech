import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { addProduct } from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setProductAdded } from "../store/slices/components/componentSlice";

function Product({ id, name, price, img }) {
	const { cart } = useSelector((state) => state.guestShoppingCart);
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
			dispatch(setProductAdded(true));
		}
	};
	return (
		<div className="flex flex-wrap justify-center p-10">
			<div className="flex flex-wrap justify-center rounded-lg shadow-xl max-w-sm">
				<Link to={`/productDetails/${id}`}>
					<img
						className="shadow-xl hover:opacity-70 hover:scale-105 transition duration-300 ease-in-out bg-pink-700"
						src={img}
						alt={name}
					/>
				</Link>
				<div className="flex flex-col justify-center p-3">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
					<p className="text-gray-700 text-base mb-4">${price}</p>

					<h1 className="p-2 cursor-pointer w-2 hover:scale-105">🖤</h1>

					<GiShoppingCart
						className="bg-white rounded-3xl py-1 px-1 w-10 h-7 hover:scale-105 cursor-pointer"
						onClick={handleAddCart}
					/>
				</div>
			</div>
		</div>
	);
}

export default Product;
