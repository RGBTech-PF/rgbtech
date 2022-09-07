import React from "react";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import ShoppingCard from "../components/ShoppingCard";
import { setBuying } from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import { FaMoneyCheckAlt, FaShippingFast } from "react-icons/fa";
import {
	deleteProductCart,
	clearCartShop,
	setUserPoint,
} from "../store/slices/users/thunks";
import { useEffect } from "react";
import { checkoutPaypal } from "../components/Paypal/";
import loadingBuy from "../assets/loading.gif";
import {
	cartCleanedNotification,
	productRemovedNotification,
	youAreUnloggedProducts,
} from "../components/Notifications";
import { ToastContainer } from "react-toastify";
import { hasJWT } from "../store/thunks";
import axios from "axios";
import { useState } from "react";
import jwt from "jwt-decode";
import assignPoints from "./Rgbpoint";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const { buying } = useSelector((state) => state.guestShoppingCart);
	const [products, setProducts] = useState([]);
	console.log("products", products);
	const [totalPrice, setTotalPrice] = useState(0);
	const [finalPrice, setFinalPrice] = useState(0);

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const perfil = jwt(token);
		axios.get(`/products/cartShop/${perfil.id}`).then((response) => {
			const respuesta = response.data.map((product) => {
				return { ...product, amount: 1 };
			});
			setProducts(respuesta);
			const total = respuesta.reduce((previous, current) => {
				return previous + current.price;
			}, 0);
			setTotalPrice(total);
			const final = respuesta.reduce((previous, current) => {
				if (current.onDiscount) {
					return (
						previous +
						(current.price - (current.price * current.discountPercentage) / 100)
					);
				} else {
					return previous + current.price;
				}
			}, 0);
			setFinalPrice(final);
		});
	}, [user]);

	const addUnits = (id) => {
		const updatedProducts = products.map((product) => {
			if (product.id === id) {
				const amount = product.amount + 1;
				return { ...product, amount };
			} else return product;
		});
		setProducts(updatedProducts);
		const total = updatedProducts.reduce((previous, current) => {
			return previous + current.price * current.amount;
		}, 0);
		setTotalPrice(total);
		const final = updatedProducts.reduce((previous, current) => {
			if (current.onDiscount) {
				return (
					previous +
					(current.price - (current.price * current.discountPercentage) / 100) *
						current.amount
				);
			} else {
				return previous + current.price * current.amount;
			}
		}, 0);

		setFinalPrice(final);
	};

	const subUnits = (id) => {
		const updatedProducts = products.map((product) => {
			if (product.id === id) {
				if (product.amount == 1) {
					return product;
				} else {
					const amount = product.amount - 1;
					return { ...product, amount };
				}
			}
			return product;
		});
		setProducts(updatedProducts);
		const total = updatedProducts.reduce((previous, current) => {
			return previous + current.price;
		}, 0);
		setTotalPrice(total);
		const final = updatedProducts.reduce((previous, current) => {
			if (current.onDiscount) {
				return (
					previous +
					(current.price - (current.price * current.discountPercentage) / 100)
				);
			} else {
				return previous + current.price;
			}
		}, 0);
		setFinalPrice(final);
	};

	const removeProduct = (id) => {
		const updatedCartshop = user.cartShop.filter((product) => product !== id);
		dispatch(deleteProductCart(updatedCartshop));
		productRemovedNotification();
	};

	const HandleClickBuy = async () => {
		if (user === null || Boolean(!Object.keys(user).length)) {
			return youAreUnloggedProducts();
		}

		const cartBuy = products.map((p) => ({
			reference_id: p.id,
			amount: {
				currency_code: "USD",
				value: p.amount * p.price,
			},
			description: p.name,
		}));

		dispatch(setBuying(true));
		const { data } = await checkoutPaypal(cartBuy);
		window.localStorage.setItem("productsPaypal", JSON.stringify(products));
		const point = assignPoints(totalPrice);
		dispatch(setUserPoint(point));
		window.location.href = data;
		dispatch(setBuying(false));
	};



	const costShipping = (num) => {
	let widthCost =	products.filter(el => el.freeShipping === false) 
		 num =	Object.keys(widthCost).length
		return num * 2
	}

	return (
		<div>
			<Header />
			{!hasJWT() ? (
				<>
					<div className="flex flex-col items-center justify-center gap-2">
						<h1 className="flex gap-2 text-4xl justify-center font-bold text-gray-400 mt-10 ml-12">
							Register and save your products!
						</h1>
					</div>
				</>
			) : (
				<>
					{!products?.length ? (
						<>
							<div className="flex flex-col items-center justify-center gap-2 dark:bg-gray-800">
								<h1 className="flex gap-2 text-4xl justify-center font-bold text-gray-400 mt-10 ml-12">
									Your <AiOutlineShoppingCart /> its empty!{" "}
								</h1>
							</div>
						</>
					) : null}
				</>
			)}
			{products?.length !== 0 ? (
				<div className="flex flex-row justify-around dark:bg-gray-600 items-start border-2 dark:border-none m-1">
					<section className="flex flex-row justify-around items-center dark:bg-gray-600">
						<div className="mt-4 ">
							{products?.map((p, i) => (
								<ShoppingCard
									key={p.id}
									id={i}
									name={p.name}
									img={p.img}
									description={p.description.substring(0, 87) + "..."}
									totalProductPrice={Math.round(p.price * p.amount)}
									units={p.amount}
									price={p.price}
									onDiscount={p.onDiscount}
									discountPercentage={p.discountPercentage}
									freeShipping={p.freeShipping}
									stock={p.stock}
									addUnits={() => addUnits(p.id)}
									subUnits={() => subUnits(p.id)}
									delProduct={() => removeProduct(p.id)}
								/>
							))}
						</div>
					</section>
					{products?.length > 0 && (
						<div className="flex flex-col justify-center gap-5 mt-4 items-center text-2xl font-bold">
							<button
								type="button"
								className="flex gap-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => {
									cartCleanedNotification();
									dispatch(clearCartShop());
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
								{buying ? (
									<img className="h-4 w-4" src={loadingBuy} alt="buying" />
								) : (
									<FaMoneyCheckAlt />
								)}{" "}
								Buy Now!
							</button>

							<h2 className="flex flex-col justify-center dark:bg-gray-600 items-center bg-slate-100 rounded-lg p-3">
							<BsCurrencyDollar/> Total price:
								<span className="text-pink-700 underline">${Math.round(totalPrice)}</span>
							</h2>
							<h2 className="flex flex-col justify-center dark:bg-gray-600 items-center bg-slate-100 rounded-lg p-3">
							<TbShoppingCartDiscount/> Total with discounts:
								<span className="text-green-500 underline">${Math.round(finalPrice)}</span>
							</h2>
							<h2 className="flex flex-col justify-center dark:bg-gray-600 items-center bg-slate-100 rounded-lg p-3">
							<FaShippingFast/> Total width shipping
							
								<span className="text-blue-700 dark:text-blue-500 underline">
									${Math.round(finalPrice) + costShipping()}
								</span>
									
							</h2>
						</div>
					)}
				</div>
			) : null}
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
		</div>
	);
};

export default ShoppingCart;
