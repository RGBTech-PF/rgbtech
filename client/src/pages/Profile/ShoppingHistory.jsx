import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";

const ShoppingHistory = () => {
	const { user } = useSelector((state) => state.user);

	return (
		<div className="ml-14">
			<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center mb-6">
				Shopping history:
			</h1>
			{user.shoppingHistory ? (
				user.shoppingHistory.map((sh) => (
					<CardProduct
						name={sh.name}
						description={sh.description}
						img={sh.img}
						rating={sh.rating}
						stock={sh.stock}
					/>
				))
			) : (
				<h2>No purchases detected</h2>
			)}
		</div>
	);
};

export default ShoppingHistory;
