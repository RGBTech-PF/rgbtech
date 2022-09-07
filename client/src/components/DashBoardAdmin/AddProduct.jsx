import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	productsAction,
	editProductAction,
	tagsAndBrandsAction,
} from "../../store/slices/admin/thunk";

export default function AddPoduct() {
	const [form, setForm] = useState({ tag: [] });
	const { tagsAndBrands } = useSelector((state) => state.admin);

	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === "tag" && form.tag?.length >= 4) {
			return null;
		} else if (name === "tag") {
			if (form.tag?.includes(value)) return null;
			setForm({
				...form,
				[name]: [...form?.tag, value],
			});
		}
	};

	const handleDelete = (event) => {
		const tag = form.tag.filter((tag) => {
			console.log("TAG", tag);
			return tag !== event.target.value;
		});
		return setForm({
			...form,
			tag,
		});
	};

	const handleOnChange = (e) => {
		if (e.target.value === "placeholder") return;
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const tagsID = tagsAndBrands.tags
			.filter((tag) => {
				return form.tag.includes(tag.name);
			})
			.map((tag) => {
				return tag.id;
			});
		const product = {
			name: form.name,
			price: form.price,
			description: form.description,
			img: form.img,
			stock: form.stock,
			onDiscount: form.onDiscount,
			discountPercentage: form.discountPercentage || 0,
			freeShipping: form.freeShipping,
			brand: form.brand,
			tags: tagsID,
		};
		axios
			.post("/products", product)
			.then((response) => setForm({ tag: [] }))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		console.log("actualizado");
	}, [form]);
	useEffect(() => {
		dispatch(productsAction());
	}, []);
	useEffect(() => {
		dispatch(tagsAndBrandsAction());
	}, []);

	return (
		<div className="justify-center w-[500px] flex text-xl">
			<div className=" flex justify-center ">
				<div className="flex space-y-8">
					<div className="w-full ">
						<form onSubmit={handleOnSubmit} className="bg-white rounded-md p-5">
							<div>
								<h1 className="text-gray-800 font-bold text-2xl mb-1 underline">
									Add product
								</h1>
								<br />
								<label> Name </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
									<input
										className=" pl-2 w-full outline-none border-none"
										onChange={(e) => setForm({ ...form, name: e.target.value })}
										name="name"
										type="text"
										value={form.name}
										placeholder="Add name"
									/>
								</div>
								<label> Price </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<input
										className="pl-2 w-full outline-none border-none"
										name="price"
										onChange={(e) =>
											setForm({ ...form, price: e.target.value })
										}
										type="number"
										value={form.price}
										placeholder="Add price"
									/>
								</div>
								<label> Description </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<textarea
										className="pl-2 w-full outline-none border-none"
										cols="30"
										rows="10"
										name="description"
										value={form.description}
										onChange={(e) =>
											setForm({ ...form, description: e.target.value })
										}
										placeholder="Add description"
									></textarea>
								</div>
								<label> Image </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
									<input
										className=" pl-2 w-full outline-none border-none"
										name="img"
										type="text"
										value={form.img}
										onChange={(e) => setForm({ ...form, img: e.target.value })}
										placeholder="Add image"
									/>
								</div>
								<label>Stock</label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<input
										className="pl-2 w-full outline-none border-none"
										type="number"
										name="stock"
										value={form.stock}
										onChange={(e) =>
											setForm({ ...form, stock: e.target.value })
										}
										placeholder="Add stock"
									/>
								</div>

								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<select name="onDiscount" onChange={handleOnChange}>
										<option value="placeholder">On Discount?</option>
										<option value={false}>No</option>
										<option value={true}>Yes</option>
									</select>
								</div>
								{form.onDiscount == "true" ? (
									<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
										<input
											className="pl-2 w-full outline-none border-none"
											type="text"
											name="discountPercentage"
											value={form.discountPercentage}
											onChange={(e) =>
												setForm({ ...form, discountPercentage: e.target.value })
											}
											placeholder={form.discountPercentage}
										/>
									</div>
								) : null}

								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<select name="freeShipping" onChange={handleOnChange}>
										<option value="placeholder">Free Shipping?</option>
										<option value={false}>No</option>
										<option value={true}>Yes</option>
									</select>
								</div>
								<label> Tags </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<select name="tag" onChange={handleChange}>
										{tagsAndBrands?.tags?.map((ta) => (
											<option value={ta.name}>{ta.name} </option>
										))}
									</select>
								</div>
								<div className="grid m-3">
									{form.tag?.map((el) => (
										<button
											type="button"
											value={el}
											onClick={handleDelete}
											className="border-2 my-2 hover:bg-red-500 hover:text-white"
										>
											{el}
										</button>
									))}
								</div>
								<label> Brands </label>
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
									<select name="brand" onChange={handleOnChange}>
										{tagsAndBrands?.brands?.map((bra) => (
											<option value={bra.id}>{bra.name}</option>
										))}
									</select>
								</div>
							</div>
							<button
								type="submit"
								className="block w-full bg-zinc-600 mt-5 py-2 rounded-2xl hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 text-white font-semibold mb-2"
							>
								Updated
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
