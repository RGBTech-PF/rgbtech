import React from "react";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/logo-dibujo-2.png";

function AboutTeam() {
	return (
		<div className="py-9 px-4">
			<Link to="/">
				<BiHome className="mr-8" size={45} color={"white"} />
			</Link>
			<div className="flex justify-center my-3 text-4xl lg:text-4xl font-bold text-center dark:text-white text-gray-800">
				<img src={logo} width={200} alt="this is the logo of the ecommerce" />
			</div>
			<div>
				<div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-2xl mt-8">
					<p className="text-center text-4xl font-bold text-black dark:text-white">
						RGB Team
					</p>
					<p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
						Meet the people behind the project!
					</p>
					<div className="flex items-center flex-col md:flex-row justify evenly pt-3 justify-center">
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://ca.slack-edge.com/TPRS7H4PN-U032KVC87HS-f3b227847e1b-512"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="text-center">
								<p className="text-2xl text-black dark:text-white">
									Jhon Pérez
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Team leader
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Jhon Pérez, born August 16, 2002 in Santa Marta, Colombia.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center justify-center lg:grid-cols-2 sm:grid-cols-1 sm:h-screen sm:overflow-scroll">
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://avatars.githubusercontent.com/u/97205367?v=4"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">
									Luciano Piñol
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Front-end leader
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Luciano Pinol, born August 2, 1996 in Entre Rios, Argentina.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://ca.slack-edge.com/TPRS7H4PN-U03BBNKCU2Z-ebd4c5f44d2e-512"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">
									Esteban Pilchuman
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Full Stack
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Esteban Pilchuman, born June 17, 1996 in Neuquen, Argentina.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://ca.slack-edge.com/TPRS7H4PN-U039W4VU2CV-bd3d38864e21-512"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">Hugo Ceci</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Back-end
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Hugo Ceci, born November 4, 1993 in Saint hilaire de riez.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://avatars.githubusercontent.com/u/99000049?v=4"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">
									Andres Rodriguez
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Back-end
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Andres Rodriguez, born August 16, 2002 in Santa Marta,
									Colombia.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://ca.slack-edge.com/TPRS7H4PN-U037NEXM9PG-8980b8f9c671-512"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">
									Jairo Álvarez
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Front-end
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Jairo Álvarez, born July 26, 2003 in Bogota; Colombia.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>
								<a>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="p-4">
							<div className="text-center mb-4 opacity-90">
								<a className="block relative">
									<img
										alt="profil"
										src="https://ca.slack-edge.com/TPRS7H4PN-U037V4Z56H0-e07800415f13-512"
										className="mx-auto object-cover rounded-full h-40 w-40 shadow-2xl"
									/>
								</a>
							</div>
							<div className="flex flex-col items-center text-center">
								<p className="text-2xl text-black dark:text-white">
									Facundo Maciel
								</p>
								<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
									Front-end
								</p>
								<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
									Facundo Maciel, born April 10, 1992 in Corrientes, Argentina.
								</p>
							</div>
							<div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-around">
								<a target="_blank" href="https://github.com/lvlaciel">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
									>
										<path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
									</svg>
								</a>

								<a
									target="_blank"
									href="https://www.linkedin.com/in/facundo-maciel-8843a7241/"
								>
									<svg
										width="30"
										height="30"
										fill="currentColor"
										className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 cursor-pointer"
										viewBox="0 0 1792 1792"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutTeam;
