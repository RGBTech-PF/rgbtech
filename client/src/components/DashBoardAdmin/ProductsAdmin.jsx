import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	productsAction,
	changeProductStateAction,
} from "../../store/slices/admin/thunk";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



function ProductsAdmin() {
	const { products } = useSelector((state) => state.admin);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const theAlert = (id, disabled) =>
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(changeProductStateAction({ id, disabled }));
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});


	const removeProduct = (id, disabled) => {
		theAlert(id, disabled);
	};

	useEffect(() => {
		dispatch(productsAction());
	}, []);

	return (
		<>
			<table className="border-collapse w-[800px] mx-10">
				<thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Name
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Brand
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Price
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							On-Discount
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Discount-%
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Free-Shipping
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Stock
						</th>
						{/* <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Actions
						</th> */}
					</tr>
				</thead>
				<tbody>
					{products
						? products?.map((element) => (
								<tr
									key={element.id}
									className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
								>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Name
										</span>
										{element.name}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Brand
										</span>
										{element.brand.name}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Price
										</span>
										{element.price}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											On-Discount
										</span>
										{element.onDiscount === true ? (
											<p className="text-green-600">Yes</p>
										) : (
											<p className="text-red-600">No</p>
										)}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Discount-%
										</span>
										{element.onDiscount === true ? (
											<p className="text-green-600">
												{element.discountPercentage}%
											</p>
										) : (
											<p className="text-gray-400">No discount</p>
										)}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Free-Shipping
										</span>
										{element.freeShipping ? (
											<>
												<p className="text-green-600">Yes</p>
											</>
										) : (
											<>
												<p className="text-red-600">No</p>
											</>
										)}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Stock
										</span>
										{element.stock}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										{/* <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Actions
										</span> */}
										<button
											 onClick={() => navigate(`/admin/update`)}
											className="text-blue-500 font-bold hover:underline w-full h-full hover:scale-110"
										>
											Edit
										</button>
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										{/* <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											Actions
										</span> */}
										<button
											onClick={() =>
												removeProduct(element.id, element.disabled)
											}
											className="text-blue-500 font-bold hover:underline w-full h-full hover:scale-110"
										>
											Remove
										</button>
									</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
		</>
	);
}

export default ProductsAdmin;
