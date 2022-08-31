import React from "react";
import logo from "../assets/logo-dibujo-2.png";
import { Link } from "react-router-dom";


 function AboutTeam() {
		return (
			<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
				<nav className="w-20"> 
					<Link to="/">
						<img src={logo} alt={logo} />
					</Link>
				</nav>
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4 bg-pink-700 rounded-md p-2">
							About Us
						</h1>
						<p className="font-normal text-base leading-6 text-white bg-gray-800 p-1 rounded-md">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum.In the first place we have granted to
							God, and by this our present charter confirmed for us and our
							heirs forever that the English Church shall be free, and shall
							have her rights entire, and her liberties inviolate; and we will
							that it be thus observed; which is apparent from
						</p>
					</div>
					<div className="w-full lg:w-8/12 shadow-2xl">
						<img
							className="w-full h-full"
							src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
							alt="RGBtech Team 02"
						/>
					</div>
				</div>
				<div>
					<div className="container flex justify-center mx-auto pt-16">
						<div>
							<p className="text-white pb-6 sm:w-4/6 w-5/6 mx-auto pt-4 font-extrabold text-lg text-center font-normal bg-pink-700 rounded-md">
								BUILDING TEAM
							</p>
							<h1 className="xl:text-3xl text-3xl text-center text-white font-extrabold bg-gray-800 rounded-md pb-6 sm:w-4/6 w-5/6 mx-auto p-2 m-2">
								The Talented People Behind the Scenes of the Organization
                                
							</h1>
						</div>
					</div>

					<div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
						<p className="text-center text-4xl font-bold text-gray-800 dark:text-white">
							Professional team
						</p>
						<p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
							Meat the best team in wolrd!
						</p>
						<div className="flex items-center flex-col md:flex-row justify evenly">
							<div className="p-4">
								<div className="text-center mb-4 opacity-90">
									<a className="block relative">
										<img
											alt="profil"
											src="https://ca.slack-edge.com/TPRS7H4PN-U032KVC87HS-f3b227847e1b-512"
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Jhon Pérez
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Leader of the team
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
										Jhon Pérez, born November 14, 1953 in Brive-la-Gaillarde.
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
											src="https://avatars.githubusercontent.com/u/97205367?v=4"
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Luciano Pinol
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Front-end
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
										Luciano Pinol is a leader front-team, born November 14, 1953
										in Pontivy.
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
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Esteban Pilchuman
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Full Stack 
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
										Esteban Pilchuman, born November 4, 1993 in Saint hilaire de
										riez.
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
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Hugo Ceci
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Back-end
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
										Hugo Ceci, born November 4, 1993 in Saint hilaire de
										riez.
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
                        <div className="flex items-center flex-col md:flex-row justify evenly pt-3 justify-center">
                        <div className="p-4">
								<div className="text-center mb-4 opacity-90">
									<a className="block relative">
										<img
											alt="profil"
											src="https://ca.slack-edge.com/TPRS7H4PN-U03B7V8GM5L-64691186509b-512"
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Andres Rodriguez
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Back-end
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                                        Andres Rodriguez, born November 4, 1993 in Saint hilaire de
										riez.
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
											src="https://th.bing.com/th/id/R.cd7e1d1d185a58c6141614ad3fbd0562?rik=rDsirUS7pg8lsw&pid=ImgRaw&r=0"
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Jairo Álvarez
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Front-end
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                                        Jairo Álvarez, born November 4, 1993 in Saint hilaire de
										riez.
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
											src="https://th.bing.com/th/id/R.8ad1b3306f4f8aff143b0ba8c576055c?rik=2g9R5%2b%2bIew%2fseg&pid=ImgRaw&r=0"
											className="mx-auto object-cover rounded-full h-40 w-40 "
										/>
									</a>
								</div>
								<div className="text-center">
									<p className="text-2xl text-gray-800 dark:text-white">
										Facundo Maciel
									</p>
									<p className="text-xl text-gray-500 dark:text-gray-200 font-light">
										Front-end 
									</p>
									<p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
										Esteban Pilchuman, born November 4, 1993 in Saint hilaire de
										riez.
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
					</div>
				</div>
			</div>
		);
 };

export default AboutTeam;
