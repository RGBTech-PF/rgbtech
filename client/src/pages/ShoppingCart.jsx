import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import ShoppingCard from "../components/ShoppingCard";
import {
	delProduct,
	emptyCart,
} from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import { FaMoneyCheckAlt } from "react-icons/fa";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const pricesCart = cart?.map((p) => p.price);
	const totalPrice = pricesCart?.reduce((prev, act) => prev + act, 0);

	const [units, setUnits] = useState(1);

	const addUnits = () => {
		setUnits((prev) => prev + 1);
	};

	const subUnits = () => {
		if (units === 1) return;
		setUnits((prev) => prev - 1);
	};

	const removeProduct = (id) => {
		dispatch(delProduct(id));
	};

	return (
		<div>
			<Header />
			<div className="flex flex-col mb-4 items-center justify-center gap-2">
				<h1 className="flex gap-2 text-4xl">
					<BsFillCartCheckFill />
					Your Shopping Cart:
				</h1>
				{cart.length === 0 && (
					<h2 className="text-2xl mt-6">Your Cart its empty! 😥</h2>
				)}
			</div>
			<div className="flex flex-row justify-around items-start ">
				<section className="flex flex-row justify-around items-center">
					<div className="mt-4">
						{/* RENDER de cartas de productos */}
						{cart.map((p, i) => (
							<ShoppingCard
								key={p.id}
								id={i}
								name={p.name}
								img={p.img}
								price={p.price}
								addUnits={addUnits}
								subUnits={subUnits}
								delProduct={() => removeProduct(i)}
							/>
						))}
					</div>
				</section>
				{cart.length > 0 && (
					<div className="flex flex-col justify-center gap-5 mt-4 items-center text-2xl font-bold">
						<button
							type="button"
							className="flex gap-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							onClick={() => {
								dispatch(emptyCart());
							}}
						>
							<BsFillTrashFill /> Clear Cart
						</button>
						<button
							type="button"
							className="flex gap-2 px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<FaMoneyCheckAlt /> Buy Now!
						</button>
						<h2>
							Total Price:{" "}
							<span className="text-green-500 underline">${totalPrice}</span>
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShoppingCart;