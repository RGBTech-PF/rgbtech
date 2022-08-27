import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import ShoppingCard from "../components/ShoppingCard";
import {
	addUnitToCart,
	delUnitFromCart,
	delProduct,
	emptyCart,
} from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import {
	setproductRemoved,
	setCartCleaned,
} from "../store/slices/components/componentSlice";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { hasJWT } from "../store/thunks.js";
import { setShoppingHistory, setCartShop } from "../store/slices/users/thunks";
import { useEffect } from "react";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const { productRemoved, cartCleaned } = useSelector(
		(state) => state.components.notification
	);
	const { cart } = useSelector((state) => state.guestShoppingCart);

	window.sessionStorage.setItem("carrito", JSON.stringify([...cart]));
	const sessionStorageCart = JSON.parse(
		window.sessionStorage.getItem("carrito")
	);

	const shoppingCart = !sessionStorageCart.length ? cart : sessionStorageCart;

	console.log(sessionStorageCart);

	const pricesCart = shoppingCart?.map((p) => p.price * p.amount);
	const totalPrice = pricesCart?.reduce((prev, act) => prev + act, 0);

	const addUnits = (id) => {
		dispatch(addUnitToCart(id));
	};

	const subUnits = (id) => {
		dispatch(delUnitFromCart(id));
	};

	const removeProduct = (id) => {
		dispatch(delProduct(id));
		dispatch(setproductRemoved(true));
	};

	const productRemovedFunction = () => {
		toast.success("Product removed successfully! 🛒", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setproductRemoved(false));
	};

	const cartCleanedFunction = () => {
		toast.success("Cart cleaned successfully! 🛒", {
			position: "bottom-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		dispatch(setCartCleaned(false));
	};

	const HandleClickBuy = () => {
		const productsId = cart.map((p) => ({ id: p.id, date: Date() }));
		console.log(productsId);
		dispatch(setShoppingHistory(productsId));
	};

	useEffect(() => {
		if (hasJWT()) {
			return () => {
				if (cart.length !== 0) {
					const productsId = cart.map((p) => p.id);
					dispatch(setCartShop(productsId));
				} else {
					const productsId = [""];
					dispatch(setCartShop(productsId));
				}
			};
		}
	}, []);

	return (
		<div>
			{productRemoved && productRemovedFunction()}
			{cartCleaned && cartCleanedFunction()}
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
								totalProductPrice={Math.round(p.price * p.amount)}
								units={p.amount}
								addUnits={() => addUnits(p.id)}
								subUnits={() => subUnits(p.id)}
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
								dispatch(setCartCleaned(true));
							}}
						>
							<BsFillTrashFill /> Clear Cart
						</button>
						<button
							type="button"
							className="flex gap-2 px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
							onClick={() => {
								HandleClickBuy();
							}}
						>
							<FaMoneyCheckAlt /> Buy Now!
						</button>
						<h2 className="flex flex-col justify-center items-center bg-slate-100 rounded-lg p-3">
							🛒 Total Price:
							<span className="text-green-500 underline">
								${Math.round(totalPrice)}
							</span>
						</h2>
					</div>
				)}
			</div>
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
			/>
		</div>
	);
};

export default ShoppingCart;
