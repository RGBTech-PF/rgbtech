import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	tagsAndBrandsAction,
	changeBrandStateAction,
	changeTagStateAction,
} from "../../store/slices/admin/thunk";
import Swal from "sweetalert2";

function TagsAndBrands() {
	const { tagsAndBrands } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	const theAlertBrand = (id, disabled) =>
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(changeBrandStateAction({ id, disabled }));
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});

	const theAlertTag = (id, disabled) =>
		Swal.fire({
			title: "Are you sure?",
			text: "You will be able to revert this!",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(changeTagStateAction({ id, disabled }));
				Swal.fire("Deleted!", "Your tag has been deleted.", "success");
			}
		});

	const removeTag = (id, disabled) => {
		theAlertTag(id, disabled);
	};
	const removeBrand = (id, disabled) => {
		theAlertBrand(id, disabled);
	};

	useEffect(() => {
		dispatch(tagsAndBrandsAction());
	}, []);

	return (
		<div className="flex border-collapse w-[500px] mx-10">
			<table className="border-collapse w-[500px]">
				<thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							TAGS
						</th>
					</tr>
				</thead>
				<tbody>
					{tagsAndBrands
						? tagsAndBrands.tags?.map((element) => (
								<tr
									key={element.id}
									className="bg-white lg:hover:bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
								>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											TAG
										</span>
										{element.name}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<button
											onClick={() => removeTag(element.id, element.disabled)}
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
			<table className="border-collapse w-[500px]">
				<thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							BRANDS
						</th>
					</tr>
				</thead>
				<tbody>
					{tagsAndBrands
						? tagsAndBrands.brands?.map((element) => (
								<tr
									key={element.id}
									className="bg-white lg:hover:bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
								>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
										<span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
											BRAND
										</span>
										{element.name}
									</td>
									<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
										<button
											onClick={() => removeBrand(element.id, element.disabled)}
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
		</div>
	);
}

export default TagsAndBrands;
