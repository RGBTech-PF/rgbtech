import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../../store/slices/admin/thunk";


export default function UpdateProduct() {
	const [form, setForm] = useState({});
	const [specificationsInput, setSpecificationsInput] = useState([])
	const { products } = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	const handleSelect = (e) => {
		setSpecificationsInput([])
		const {value} = e.target
		const product = products.find((element) => element.id === value)
		setForm(product)
		const specifications = product.specifications[0]
		const inputs = []
		for(const property in specifications){
			inputs.push({title: property, description : specifications[property]})
		}
		setSpecificationsInput(inputs)
	}

    const handleOnChange = (e)=> {
			if(e.target.value === 'placeholder') return
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleOnSubmit = (e) => {
		console.log(form)
		e.preventDefault();
		dispatch(editProductAction(form));
		setForm({});
    }
    
    useEffect(() => {
       console.log("actualizado");
    }, [form]);

	return (
		<div>
            <select onChange={handleSelect} name="products">
                {products
						? products?.map((element) => (
                <option value={element.id}>
                    {element.name}
                </option>
                        )) 
                        : null}
            </select>
						<div className=" flex justify-center ">
				<div className="flex space-y-8">
					<div className="w-full ">
						<form onSubmit={handleOnSubmit} className="bg-white rounded-md p-5">
                        <div >
							<h1 className="text-gray-800 font-bold text-2xl mb-1">
								Update product
							</h1>
							<br />
                                <label> Name  </label>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
								<input
									className=" pl-2 w-full outline-none border-none"
									onChange={(e) => setForm({...form, name:e.target.value})}
									name="name"
									type="text"
									value={form.name}
									placeholder={form.name}
								/>
                               
							</div>
                            <label> Price  </label>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<input
									className="pl-2 w-full outline-none border-none"
                  name="price"
									onChange={(e) => setForm({...form, price:e.target.value})}
									type="number"
									value={form.price}
									placeholder={form.price}
								/>
							</div>
                            <label> Description  </label>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<textarea
									className="pl-2 w-full outline-none border-none"
									cols="30"
									rows="10"
									name="description"
									value={form.description}
									onChange={(e) => setForm({...form, description: e.target.value})}
									placeholder={form.description}
								></textarea>
							</div>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
								<input
									className=" pl-2 w-full outline-none border-none"
									name="img"
									value={form.img}
									onChange={(e) => setForm({...form, img: e.target.value})}
									type="text"
									placeholder={form.img}
								/>
							</div>
                            <label>Stock</label>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<input
									className="pl-2 w-full outline-none border-none"
									type="number"
                  name="stock"
									value={form.stock}
									onChange={(e) => setForm({...form, stock:e.target.value})}
									placeholder={form.stock}
								/>
							</div>
              <label>Discount</label>
							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<select name="onDiscount" onChange={handleOnChange}>
										<option value='placeholder'>En descuento?</option>
										<option value={false}>No</option>
										<option value={true}>Sí</option>
									</select>
							</div>
							{
								form.onDiscount == 'true' ?
								<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<input
									className="pl-2 w-full outline-none border-none"
									type="text"
									name="discountPercentage"
									value={form.discountPercentage}
									onChange={(e) => setForm({...form, discountPercentage: e.target.value})}
									placeholder={form.discountPercentage}
								/>
							</div>
								:null
							}

							<div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
								<h1 className="ml-2 text-gray-400">Free Shipping</h1>
								<select name="freeShipping" onChange={handleOnChange}>
									<option value='placeholder'>En descuento?</option>
									<option value={false}>No</option>
									<option value={true}>Sí</option>
								</select>
							</div>
							{/* <label>Specifications</label>
							<div>
								{
									specificationsInput?.map((specification, index) => {
										return (
										<div key={index} className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
											<input type='text' placeholder={specification.title} value={specification.title}></input>
											<input type='text' placeholder={specification.description} value={specification.description}></input>
										</div>
										)
									})
								}
							</div>
							<input type="button" onClick={() => setSpecificationsInput([...specificationsInput, {title:'', description:''}])} />
							 */}
							
							 </div>
							<button
                                
								type="submit"
								className="block w-full bg-zinc-600 mt-5 py-2 rounded-2xl hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                                >
								Updated
							</button>
						</form >
					</div>
				</div>
			</div>
		</div>
	);
}
