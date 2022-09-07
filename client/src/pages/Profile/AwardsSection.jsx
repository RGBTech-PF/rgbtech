import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import Swal from "sweetalert2"

function AwardsSection() {
	const [products, setProducts] = useState([]);
	const user = useSelector((state) => state.user);
	
	const theAlert = (id, points, user ) =>
		Swal.fire({
			title: "Are you sure?",
			text: "You want to redeem your points?",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#FF1493",
			cancelButtonColor: "#48D1CC",
			confirmButtonText: "Yes, I want to change my points",
		}).then((result) => {
			if (result.isConfirmed) {
				const body = {
					points,
					userId: user,
					id
				}
				axios.put('awards/claim-award', body )
				.then(
					(response) => {
						Swal.fire({
							title: "CONGRATS!",
							text: "Your prize in comming!",
							icon: 'success',
							timer: 2000,
							timerProgressBar: true,
						});
					}
				)
				.catch (
					(error) => {
						console.log(error)
					}
				)

			}
		});

	const handleClick = (id, points) => {
		if (user.user?.RGBpoint < points) {
			return alert('No tienes suficientes puntos')
		} else {
			theAlert(id, points, user.user?.id);
		}
	};

	

	useEffect(() => {
		axios.get("/awards").then((response) => {
			const respuesta = response.data;
			setProducts(respuesta);
		});
		return;
	}, [user]);

	return (
		<div>
			<Header />
			<div className="grid lg:grid-cols-4 justify-center p-3 bg-white dark:bg-gray-600 border-2 ">
				{products?.map((element) => (
					<div
						key={element.id}
						className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg bg-white"
					>
						<img
							className="w-full h-48 shadow-2xl bg-pink-700 rounded-t-lg"
							src={element.img}
							alt="product"
						/>
						<div className="px-6 py-2">
							<h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 ">
								{element.name.slice(0, 15)}...Cost :
							</h4>
							<p className="leading-normal text-yellow-500 font-semibold">
								{element.points} points
								<button onClick={(e)=> handleClick(element.id, element.points)} className="ml-3 bg-blue-400 text-black rounded-md p-1 hover:font-bold hover:bg-yellow-300 hover:scale-95">
									Exchange
								</button>
							</p>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default AwardsSection;
