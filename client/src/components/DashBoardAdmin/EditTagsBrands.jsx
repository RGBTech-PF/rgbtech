import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagsAndBrandsAction } from "../../store/slices/admin/thunk";
import FormEditTyB from "./FormEditTyB";

export default function ModalTags() {
	const { tagsAndBrands } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(tagsAndBrandsAction());
	}, []);

	return (
		<div>
			<FormEditTyB tags={true} options={tagsAndBrands.tags} />
			<br />
			<FormEditTyB tags={false} options={tagsAndBrands.brands} />
		</div>
	);
}
