import React from "react";
import { useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/slices/components/componentSlice";
import { useState } from "react";

export default function ModalHome({ showModal, setShowModal }) {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(setLogin(true));
		setShowModal(false);
	}

	return (
		<>
			{/* <button
        classNameName="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
			{showModal ? (
				<>
					<div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}

							{/*header*/}

							{/*body*/}
							<div>
								<h1>
									{/* <!-- Container for demo purpose --> */}
									<div className="container my-24 px-6 mx-auto">
										{/* <!-- Section: Design Block --> */}
										<section className="mb-32 text-gray-800 text-center md:text-left">
											<div className="block rounded-lg shadow-lg bg-white">
												<div className="flex flex-wrap items-center">
													<div className="grow-0 shrink-0 basis-auto w-full">
														<div className="absolute flex justify-end right-7 mt-1">
															<button
																className=" rounded-full"
																onClick={() => setShowModal(false)}
															>
																<AiOutlineClose size={30} />
															</button>
														</div>
														<div className="px-6 py-12 md:px-12">
															<h2 className="text-3xl text-pink-500 font-bold mb-6 pb-2">
																welcome to RGBTech
															</h2>
															<p className="text-gray-500 mb-6 pb-2">
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit. A soluta corporis voluptate ab
																error quam dolores doloremque, quae consectetur.
															</p>
															<div className="flex flex-wrap mb-6">
																<div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
																	<p className="flex items-center justify-center md:justify-start">
																		{/* <div className="mr-2"> */}
																		<GoPrimitiveDot />
																		{/* </div> */}
																		Guarda tus productos favoritos
																	</p>
																</div>
																<div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
																	<p className="flex items-center justify-center md:justify-start">
																		{/* <div className="mr-2"> */}
																		<GoPrimitiveDot />
																		{/* </div>rapido y sencillo */}
																	</p>
																</div>
																<div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
																	<p className="flex items-center justify-center md:justify-start">
																		{/* <div className="mr-2"> */}
																		<GoPrimitiveDot />
																		{/* </div> */}
																		Gana puntos al comprar.
																	</p>
																</div>
																<div className="w-full lg:w-6/12   mb-4">
																	<p className="flex items-center justify-center md:justify-start">
																		{/* <div className="mr-2"> */}
																		<GoPrimitiveDot />
																		{/* </div> */}
																		Los ultimos productos de tecnologia en un
																		solo lugar.
																	</p>
																</div>

																<div className="ml-28  mb-4">
																	<p className="flex items-center justify-center md:justify-start">
																		{/* <div className="mr-2"> */}
																		<GoPrimitiveDot />
																		{/* </div> */}
																		Comfortable
																	</p>
																</div>
															</div>
															<button
																type="button"
																onClick={handleClick}
																className="inline-block px-7 py-3 bg-white text-pink-500 border border-pink-500  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-500  hover:shadow-lg hover:text-white focus:bg-pink-500  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
															>
																Login
															</button>
															<Link to="/createUser">
																<button
																	type="button"
																	className="inline-block ml-8 px-7 py-3 bg-white text-pink-500 border border-pink-500  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-500  hover:shadow-lg hover:text-white focus:bg-pink-500  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
																>
																	register
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</section>
										{/* <!-- Section: Design Block --> */}
									</div>
									{/* <!-- Container for demo purpose --> */}
								</h1>
							</div>
							{/*footer*/}
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
