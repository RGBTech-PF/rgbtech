import React from "react";
// import { useSelector } from "react-redux";
import Header from "../components/Header/Header";

const Favorites = () => {
	// const { favs } = useSelector((state) => state.users);
	return (
		<div>
			<Header />
			<div className="flex justify-around bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 items-center rounded-3xl shadow-2xl text-white font-semibold">
				<div className="flex flex-col bg-sky-600 justify-center items-center rounded-3xl my-10 p-4 text-xl">
					<p className="font-bold text-3xl mb-2">⭐ Favorites:</p>
					<div className="flex flex-col gap-4">
						<h1>You are not Logged! 😥</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
