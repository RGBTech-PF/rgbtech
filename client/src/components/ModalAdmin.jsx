import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalAdmin() {


return (
    <div>
<div className="h-screen flex justify-center bg-green-200">
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Update product</h1>
                <p className="text-sm font-normal text-gray-600 mb-8">Valor previo.</p>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
                <input className=" pl-2 w-full outline-none border-none" type="text" placeholder="Name" />
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
                <input className="pl-2 w-full outline-none border-none" type="number" placeholder="Price" />
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
                <textarea className="pl-2 w-full outline-none border-none" name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
                <input className=" pl-2 w-full outline-none border-none" type="text" placeholder="Image" />
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
                <input className="pl-2 w-full outline-none border-none" type="number" placeholder="Stock" />
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
                <input className="pl-2 w-full outline-none border-none" type="text" placeholder="Descuento" />
                </div>
                <div className="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl ">
                <h1 className='ml-2 text-gray-400'>Envio gratis</h1>
                <input className="ml-24" type="checkbox" placeholder="Envio gratis" /><h1 className='ml-2 text-gray-400'><small>Si</small></h1>
                <input className="ml-12" type="checkbox" placeholder="Envio gratis" /><h1 className='ml-2 text-gray-400'><small>No</small></h1>
               
                </div>
                <button type="submit" className="block w-full bg-zinc-600 mt-5 py-2 rounded-2xl hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Submit</button>
            </form>
            </div>
        </div>
    </div>
    </div>
)
}
