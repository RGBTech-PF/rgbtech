import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../store/slices/products/thunks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import Spinner from "../components/Spinner";
import Header from "../components/Header/Header";
import CircleButton from "../components/Buttons/CircleButton";
import SquareButton from "../components/Buttons/SquareButton";
import { clearDetails } from "../store/slices/products/productSlice";
import { addProduct } from "../store/slices/guestShoppingCart/guestShoppingCartSlice";
import { setProductAdded } from "../store/slices/components/componentSlice";
import { ToastContainer, toast } from "react-toastify";
import Comment from "../components/Comment";
import { useState } from "react";
import {hasJWT} from "../store/thunks/"
import { updateLastVisited } from "../store/slices/users/thunks"

const testComments = [
    {
        rating: 4.3,
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
        user: 'Pablo',
        comment: 'tienen que mejorar'
    },
    {
        rating: 3.4,
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
        user:  'Carlos',
        comment: 'Muy bonito me parecio todo',
    },
    {
        rating: 5,
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
        user: 'Luis',
        comment: 'Que buen pf'
    },
    {
        rating: 1,
        profilePhoto: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
        user: 'Marciana',
        comment: 'Inolvidable'
    }
]

const ProductDetails = () => {
	const { id } = useParams();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user )
	const { cart } = useSelector((state) => state.guestShoppingCart);
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const { productAdded } = useSelector(
        (state) => state.components.notification
    );
    const { productDetails } = useSelector((state) => state.products);
    const product = productDetails;

    const handleAddCart = () => {
        if (Boolean(cart.find((p) => p.id === id))) return;
        else {
            dispatch(
                addProduct({
                    id: product.id,
                    img: product.img,
                    name: product.name,
                    price: product.price,
                })
            );
            dispatch(setProductAdded(true));
        }
    };

    const productAddedFunction = () => {
        toast.success("✅ Product added successfully!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(setProductAdded(false));
    };

    useEffect(() => {
		// if(hasJWT()){
		// let lastV = user.user.lastVisited
		// console.log(lastV)
		// if(lastV && lastV.length >14){
		// 	lastV.pop();
		// 	lastV.unshift(id)
		// }else{lastV.unshift(id)}
		// dispatch(updateLastVisited(lastV))}
        dispatch(getProductById(id));
        return () => {
            dispatch(clearDetails());
        };
    }, [id]);


    const postComment = (e) => {
        e.preventDefault()
        useDispatch(postComment({
            //user.photo
            //user.id
            //id producto
            //rating
            //photo
        }))
    }

	return (
		<div className="text-white">
			{productAdded && productAddedFunction()}
			<Header />
			{!Object.keys(productDetails).length ? (
				<Spinner />
			) : (
				<div className="mx-10">
					<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 m-4">
						<div className="flex justify-around p-4 mt-2 mx-4 rounded-xl text-3xl">
							<img
								className="w-[25rem] h-[20rem] mb-4 rounded-3xl "
								src={<Spinner /> && product.img}
								alt={product.name}
							/>
							<div className="flex flex-col m-4 gap-4 items-center">
								<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black">
									{product.name}
								</h1>
								<AiFillStar />
								<p>${product.price}</p>
								<p className="flex gap-2 items-center text-xl drop-shadow-lg shadow-black">
									<MdOutlineShoppingCart /> Available Stock: {product.stock}
								</p>
								<p className="flex items-center gap-4 text-2xl">
									Add to Favorites:
									<AiOutlineHeart />
								</p>
								<CircleButton
									className="flex gap-2 items-center active:bg-pink-800 focus:bg-pink-700 hover:bg-pink-700 bg-pink-600"
									onClick={handleAddCart}
								>
									<MdOutlineShoppingCart />
									Agregar al Carrito
								</CircleButton>
								<SquareButton className="flex gap-2 items-center active:bg-blue-800 hover:bg-blue-700 focus:bg-blue-700 bg-blue-500">
									<BsCheckLg />
									Comprar Ahora
								</SquareButton>
							</div>
						</div>
						<div className="bg-gradient-to-r from-blue-900 to-pink-900 p-2 mt-2 mx-4 rounded-3xl flex flex-col justify-center items-center shadow-gray-700 shadow-md">
							<h2 className="text-2xl font-bold mb-2">Characteristics:</h2>
							{Object.entries(productDetails.specifications[0]).map((e, i) => (
								<p key={i}>
									{e[0].charAt(0).toUpperCase() + e[0].slice(1)}: {e[1]}
								</p>
							))}

							<div className="flex flex-col justify-center items-center mt-6 rounded-lg p-4">
								<hr />
								<h2 className="text-2xl font-bold mb-4">Description:</h2>
								<p>{productDetails.description}</p>
							</div>
							<div>
								{
									hasJWT()
									?<form className="block p-6 rounded-lg shadow-lg bg-white w-full" onSubmit={postComment}>
										<h2 className="text-black font-bold mb-4">Dejanos tu review:</h2>
									<label className="text-black font-bold">
										
										<input
										className="form-control block
										w-full
										px-3
										py-1.5
										text-base
										text-black
										font-normal
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										transition
										ease-in-out
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									    type='number' placeholder='Puntuanos en un rating del 1 al 5...' min={0} max={5} value={rating} onChange={e => setRating(e.target.value)}/>
									</label>
									<label className="text-black font-bold">
										
										<textarea
										className="
										form-control
										block
										w-full
										mt-4
										px-3
										py-1.5
										text-base
										font-normal
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										transition
										ease-in-out
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											type='text'
											value={comment}
											name='description'
											required
											placeholder='Ej: Tu opiniÃ³n...'
											onChange={e => setComment(e.target.value)}
											rows='5'
											cols='50'
              			></textarea>
									</label>
									<input 
									className=" w-full
									px-6
									py-2.5
									bg-gradient-to-br from-fuchsia-500 to-pink-500
									text-white
									font-medium
									text-xs
									leading-tight
									uppercase
									rounded
									shadow-md
									transition
									duration-150
									ease-in-out
									mt-4"
									type='submit'/>
								</form>
									: null
								}
								
								{testComments?.map (comment => {
									//productDetails.comments(id, comment, rating, user, profilePhoto)
									return <Comment rating={comment.rating} profilePhoto={comment.profilePhoto} user={comment.user} comment={comment.comment}/>
								})}
							</div>
						</div>
					</div>
				</div>
			)}
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
			/>
		</div>
	);
};

export default ProductDetails;
