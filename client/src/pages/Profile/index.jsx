import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { clearUser } from "../../store/slices/users/userSlice";
import { RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiHistoryLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { FcApproval } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import defaultImage from "../../assets/defaultImage.png";
import {
	loginWithGoogleNotification,
	logoutNotification,
} from "../../components/Notifications";
import { ToastContainer } from "react-toastify";
import ShoppingHistory from "../Profile/ShoppingHistory";
import { clearFavorite } from "../../store/slices/products/productSlice";
import { emptyCart } from "../../store/slices/guestShoppingCart/guestShoppingCartSlice";
import ModifyProfile from "../Profile/ModifyProfile";
import LastVisited from "../Profile/LastVisited";
import { BsCoin } from "react-icons/bs";
import AwardsSection from "./AwardsSection";

const Profile = () => {
	const [section, setSection] = useState("shoppingHistory");
	const [modifyProfile, setModifyProfile] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = JSON.parse(window.localStorage.getItem("user"));

	const handleSignOut = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");
		dispatch(clearUser());
		dispatch(clearFavorite());
		dispatch(emptyCart());

		logoutNotification();
		navigate("/");
	};

	return (
		<div>
			{modifyProfile && (
				<ModifyProfile closeModal={() => setModifyProfile(false)} />
			)}
			<Header />
			<div className="flex justify-around items-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl text-white mx-10 p-5">
				<div className="shadow-2xl rounded-3xl p-2 w-80">
					<div className="flex flex-col justify-center items-center shadow-xl p-3 rounded-3xl drop-shadow-2xl">
						<h1 className="font-extrabold text-3xl">{"👨‍🚀" + user.user}</h1>
						<img
							className="rounded-full my-4 h-32 w-32 shadow-lg"
							src={
								user.profilePhoto === null ? defaultImage : user.profilePhoto
							}
							alt={`profilePhoto-${user.user}`}
						/>
						<p className="flex font-extrabold gap-2 text-xl text-white-600">
							Profile:
						</p>
						<p className="flex items-center gap-1 font-semibold mt-4">
							Username: {user.user} <FcApproval />
						</p>
						<p className="font-semibold">Email: {user.mail}</p>
						<p className="flex items-center gap-2 font-semibold">
							RGBTech Points: <b>{user.RGBpoint}</b>{" "}
							<BsCoin className="bg-yellow-700 rounded-full" />{" "}
						</p>
						<p className="font-semibold">
							Administrator: {user.isAdmin ? "✅" : "❌"}
						</p>
						{user.isAdmin && (
							<button
								type="button"
								class="flex gap-2 justify-center items-center  px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out mt-4"
								onClick={() => navigate("/admin")}
							>
								<GrUserAdmin />
								Admin Panel
							</button>
						)}
					</div>
					<div className="flex flex-col justify-center items-center mt-4 gap-5">
						<button
							type="button"
							className="flex gap-2 justify-center items-center mt-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-48"
							onClick={
								user.LogGoogle === false
									? () => setModifyProfile(true)
									: () => loginWithGoogleNotification()
							}
						>
							<CgProfile /> Modify profile
						</button>
						<button
							type="button"
							className="flex gap-2 justify-center items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-48"
							onClick={() => setSection("shoppingHistory")}
						>
							<HiOutlineShoppingCart /> Shopping history
						</button>
						<button
							type="button"
							className="flex gap-2 justify-center items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-48"
							onClick={() => setSection("lastVisited")}
						>
							<RiHistoryLine /> Last visited
						</button>
						<button
							type="button"
							className="flex gap-2 justify-center items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-48"
							onClick={() => navigate("/awards")}
						>
							<FaAward /> Awards
						</button>
						<button
							type="button"
							className="flex gap-2 justify-center items-center mb-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out w-48"
							onClick={handleSignOut}
						>
							<RiLogoutBoxFill /> Sign Out
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center">
					{section === "shoppingHistory" ? (
						<ShoppingHistory />
					) : (
						<LastVisited />
					)}
				</div>
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
				false
			/>
		</div>
	);
};

export default Profile;
