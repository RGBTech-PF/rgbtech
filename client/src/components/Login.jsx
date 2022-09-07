import React, { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dibujo-2.png";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "../hooks/useForm";
import LoguinGoogle from "../components/Buttons/LoguinGoogle";

const initialForm = {
	user: "",
	password: "",
};

const Login = ({ closeModal }) => {
	const navigate = useNavigate();
	const { form, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		closeModal
	);

	return (
		<div>
			<div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 text-black">
				<div className="relative w-auto my-20 mx-auto max-w-3xl">
					<div>
						<div className="flex items-center lg:justify-center">
							<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
								<div className="p-4 py-6 text-white bg-pink-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
									<div className="my-3 text-4xl font-bold tracking-wider text-center">
										<span>RGBTech</span>
										<img className="w-40 pt-4" src={logo} alt="logo-rgbtech" />
									</div>
									<p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
										Buy the best products, at the best price available. At
										rgbtech, you will find everything you want..
									</p>
									<p className="flex flex-col items-center justify-center mt-10 text-center">
										<span>Don't have an account?</span>
										<span className="text-xl hover:text-blue-500">
											<Link
												to="/createUser"
												style={{ textDecoration: "underline" }}
												onClick={() => closeModal()}
											>
												Get Started!
											</Link>
										</span>
									</p>
								</div>
								<div className="absolute right-3 mt-3">
									<button
										className=" rounded-full"
										onClick={() => closeModal()}
									>
										<AiOutlineClose size={30} />
									</button>
								</div>
								<div className="p-5 bg-white md:flex-1">
									<h3 className="my-4 text-2xl font-semibold text-gray-700">
										Account Login
									</h3>
									<form action="#" className="flex flex-col space-y-5">
										<div className="flex flex-col space-y-1">
											<label
												htmlFor="user"
												className="text-sm font-semibold text-gray-500"
											>
												Username
											</label>
											<input
												type="text"
												id="user"
												name="user"
												value={form.user}
												autoFocus
												onBlur={handleBlur}
												onChange={handleChange}
												className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-100"
											/>
										</div>
										<div className="flex flex-col space-y-1">
											<div className="flex items-center justify-between">
												<label
													htmlFor="password"
													className="text-sm font-semibold text-gray-500"
												>
													Password
												</label>
												<Link
													to="/recoverpassword"
													className="cursor-pointer text-sm text-blue-600 hover:underline focus:text-blue-800"
													tabIndex={-1}
												>
													Forgot Password?
												</Link>
											</div>
											<input
												type="password"
												name="password"
												id="password"
												onBlur={handleBlur}
												value={form.password}
												onChange={handleChange}
												className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-100"
											/>
										</div>
										<div>
											<button
												type="submit"
												className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-md shadow hover:bg-pink-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
												onClick={(e) => {
													handleSubmit(e);
												}}
											>
												Log in
											</button>
										</div>
										<div className="flex flex-col space-y-5">
											<span className="flex items-center justify-center space-x-2">
												<span className="h-px bg-gray-400 w-14"></span>
												<span className="font-normal text-gray-500">
													or login with
												</span>
												<span className="h-px bg-gray-400 w-14"></span>
											</span>
											<div className="flex flex-col space-y-4">
												<a
													href="#"
													className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border  rounded-md group focus:outline-none"
												>
													<LoguinGoogle closeModal={closeModal} />
												</a>
												{/* <div className="flex justify-center gap-6">
													<button
														type="button"
														className="flex w-28 items-center justify-center gap-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
														onClick={() => closeModal()}
													>
														<AiOutlineClose /> Close{" "}
													</button>
													<button
														type="button"
														className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
														onClick={() => {
															navigate("/createUser");
															closeModal();
														}}
													>
														🚀 Get Started
													</button>
												</div> */}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</div>
	);
};

export default Login;
