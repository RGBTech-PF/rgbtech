import React from 'react'
import { CgProfile, CgShoppingCart} from 'react-icons/cg';
import { BiHistory, BiLogOut} from 'react-icons/bi';

export default function ProfileBarraLateral() {
  return (
    <div className='w-48 h-96'>
        <p className="flex items-center justify-center md:justify-start  mt-4 text-gray-400 font-bold ">
          <CgProfile/> 
          <h5 className='ml-2'>Mi perfil</h5>
        </p>
        <p className="flex items-center justify-center md:justify-start mt-4 text-gray-400 font-bold">
          <CgShoppingCart/> 
          <h5 className='ml-2'>Historial de compras</h5>
        </p>
        <p className="flex items-center justify-center md:justify-start mt-4 text-gray-400 font-bold">
          <BiHistory/> 
          <h5 className='ml-2'>Ultimos visitados</h5>
        </p>
        <p className="flex items-center justify-center md:justify-start mt-4 text-gray-400 font-bold">
          <BiLogOut/> 
          <h5 className='ml-2'>Cerrar sesion</h5>
        </p>
    </div>
  )
}
