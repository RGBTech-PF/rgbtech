import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTagAction, editBrandAction } from "../../store/slices/admin/thunk";

function FormEditTyB({ options, tags }) {
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		id: "",
		name: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		tags ? dispatch(editTagAction(form)) : dispatch(editBrandAction(form));
		setForm({
			id: "",
			name: "",
		});
	};

	const handleSelect = (e) => {
		const findID = options.find((elem) => elem.id === e.target.value);
		setForm(findID);
	};

	return (
		<div className="justify-center">
			<div className="justify-center">
				<form onSubmit={(e) => onSubmit(e)} className="bg-white rounded-md shadow-2xl p-5">
					<h1 className="text-gray-800 font-bold text-2xl mb-1">Update</h1>
					<select onChange={handleSelect}>
						{options?.map((element) => (
							<option value={element.id}>{element.name}</option>
						))}
					</select>
					<div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
						<input
							onChange={(e) => setForm({ ...form, name: e.target.value })}
							value={form.name}
							className=" pl-2 w-full outline-none border-none"
							type="text"
						/>
					</div>
					<button
						type="submit"
						className="block w-full bg-zinc-600 mt-5 py-2 rounded-2xl hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
					>
						Updated
					</button>
				</form>
			</div>
		</div>
	);
}

export default FormEditTyB;
