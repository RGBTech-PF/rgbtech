import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import loadingGif from "../assets/loading.gif";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { successNotification } from "./Notifications";
import {
	setLoadingComment,
	setModalComment,
} from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TarjetaShopping({
	id,
	user,
	profilePhoto,
	name,
	totalPrice,
	month,
	year,
	amount,
	commented,
}) {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		rating: 1,
		comment: "",
	});

	const { loadingComment, modalComment } = useSelector(
		(state) => state.guestShoppingCart
	);

	const setModalCommentTrue = () => {
		dispatch(setModalComment(true));
	};

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setLoadingComment(true));
		axios
			.put("sales/comments", { id, post: { ...input, user, profilePhoto } })
			.then((response) => {
				// console.log("estoy entrando", response);
				// dispatch(setLoadingComment(false));
				// dispatch(setModalComment(false));
				successNotification("The comment has been sent correctly!");
			})
			.catch((error) => {
				// dispatch(setLoadingComment(false));
				console.error(error);
			});
	};

	return (
		<div class="lg:flex shadow rounded-lg border border-gray-400">
			{modalComment && (
				<Modal
					closeModalRedux={() => setModalComment(false)}
					tailwindCSS={"bg-[#a156f6] bg-opacity-100"}
				>
					<div className="flex flex-col gap-3 text-white font-bold overflow-auto h-80">
						<form onSubmit={(e) => handleSubmit(e)}>
							<label className="font-semibold" htmlFor="rating">
								Rating:
							</label>
							<input
								name="rating"
								type="number"
								min={1}
								max={5}
								className="ml-2 rounded-xl text-black p-1 mx-4"
								value={input.rating}
								required
								onChange={(e) => handleChange(e)}
							/>
							<div className="flex flex-col mb-2">
								<label className="font-semibold" htmlFor="comment">
									Comment:
								</label>
								<textarea
									name="comment"
									type="text"
									className="ml-2 rounded-xl text-black p-1 mx-4"
									cols="30"
									rows="8"
									value={input.comment}
									required
									onChange={(e) => handleChange(e)}
								></textarea>
							</div>
							<div className="flex justify-center items-center ">
								<button
									type="submit"
									className="flex w-fit gap-2 items-center px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
								>
									{/* {loadingComment ? (
										<img className="h-4 w-4" src={loadingGif} alt="loading" />
									) : ( */}
									<FaCheckCircle className="h-5 w-5" />
									{/* )} */}
									Submit
								</button>
							</div>
						</form>
					</div>
				</Modal>
			)}
			<div class="bg-blue-600 rounded-lg  py-4 block h-full shadow-inner">
				<div class="text-center h-20 w-20">
					<div class="text-white font-bold text-4xl">{month}</div>
					<div class="text-white font-normal text-2xl">{year}</div>
				</div>
			</div>
			<div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
				<div class="flex flex-row lg:justify-start justify-center">
					<div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						<i class="far fa-clock"></i> 1:30 PM
					</div>
					<div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
						RGBTech
					</div>
				</div>
				<div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
					{name}
				</div>
				<div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
					Amount: {amount}
				</div>
				<div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
					Total price: {totalPrice}
				</div>
			</div>
			{commented ? (
				<div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
					<span class="tracking-wider text-gray-600 px-2 text-sm rounded leading-loose mx-2 font-semibold">
						✔
					</span>
				</div>
			) : (
				<div className="bg-white">
					<button
						className="bg-pink-600 hover:scale-105 font-semibold rounded-b-lg text-base text-white "
						onClick={setModalCommentTrue}
					>
						Product Review
					</button>
				</div>
			)}
		</div>
	);
}

{
	/* <div className="flex justify-center  p-2">
			<div className="flex flex-col md:flex-row md:max-w-6xl rounded-lg bg-white shadow-lg">
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
					<p className="text-gray-700 text-base mb-4">
						{totalPrice} precio
					</p>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">
							{} 
						</p>
					</div>
                    <h2 className='text-black'>month: {month} year: {year}</h2>
                    <h2 className='text-black'>{amount}</h2>
                    


                    <div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">
							{} 
						</p>
					</div>
				</div>
			</div>
		</div> */
}
