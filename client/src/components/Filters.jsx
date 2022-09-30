import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts, limpiarProductos } from '../store/slices/products/thunks'
import { RiMoneyDollarCircleLine} from 'react-icons/ri';


export default function Filters({setPage, page}) {

    
  const { tags } = useSelector((state) => state.products)
  const { brands } = useSelector((state) => state.products)
  const dispatch = useDispatch()
    

  const [state, setState] = useState(
    {
      brand: '',
      tag: '',
      price: '',
      column: ''
    }
  )

    const handleSelect = (e) => {
      const {value, name} = e.target
      setState({
        ...state,
        [name]: value
      })
      console.log(value, name);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(limpiarProductos())
        let string = '?'
        const entries = Object.entries(state)
        const busqueda = entries.filter((entrie) => {return entrie[1] !== ""})
        busqueda.map((filtro, index) => {
          if(index === 0){
            string = `${string}${filtro[0]}=${filtro[1]}` 
          } else {
            string = `${string}&${filtro[0]}=${filtro[1]}`
          }
          
        })
        setPage(1)
        console.log(string);
		    dispatch(limpiarProductos())
        dispatch(getAllProducts(1, string))
    }

  return (
    <div className="flex justify-center  w- ml-4 mt-11 ">
    <form className='shadow-md'>
      {/* <div>
        <h1>Filtros</h1>
      </div> */}
  <div className='ml-4'>
    <h1 className='mb-1 text-xl'>Brands:</h1>
    <div className="form-check ">
      <select className='pl-5 mt-2 rounded-xl bg-gradient-to-r from-indigo-900 to-gray-500 h-52 w-44 cursor-pointer' multiple name='brand' onChange={handleSelect}>
        <option className='hover:text-blue-400 hover:font-bold' value=''>All brands</option>
          {brands && brands.map((item)=> {
            return <option className='hover:text-blue-400 hover:font-bold' key ={item.id} value={item.id}>{item.name}</option>
          })}
      </select>
    </div>
      <div className='mt-4'>
      <h1 className='mb-1 text-xl'>Tags:</h1>
      <div className="form-check ">
      <select className='pl-5 mt-2 rounded-xl bg-gradient-to-r from-indigo-900 to-gray-500 h-52 w-44 cursor-pointer' multiple name='tag' onChange={handleSelect}>
        <option className='hover:text-pink-400 hover:font-bold' value=''>All tags</option>
          {tags && tags.map((item)=> {
            return <option className='hover:text-pink-400 hover:font-bold' key ={item.name} value={item.name}>{item.name}</option>
          })}
      </select>
    </div>
      </div>
      <div className='mt-4 mb-1 text-xl'>
        <label>Filtra Precio:</label>
      </div>
      <div className="flex flex-end ">
        <div className='mr-1'>
          <input className=' mt-2  bg-gradient-to-r from-indigo-900 to-gray-500 border border-black rounded-lg w-32 placeholder:pl-3' onChange={handleSelect} name='price' min={0} type="number" placeholder='Precio minimo' />
        </div>
        <div>
          <RiMoneyDollarCircleLine size={26}/>
        </div>
      </div>
      <div className='mt-4 '>
      <h1 className=' mb-1 text-xl'>Orden productos:</h1>
      <div>
        <select className='pl-5 mt-2 rounded-xl bg-gradient-to-r from-indigo-900 to-gray-500 h-24 w-44 cursor-pointer' name="column" multiple onChange={handleSelect}>
          <option className='hover:text-blue-400 hover:font-bold' value="price&order=ASC">Precio ascendente</option>
          <option className='hover:text-pink-400 hover:font-bold' value="price&order=DESC">Precio descendente</option>
          <option className='hover:text-blue-400 hover:font-bold' value="=rating&order=ASC">Rating ascendente</option>
          <option className='hover:text-pink-400 hover:font-bold' value="=rating&order=DESC">Rating descendente</option>
        </select>
      </div>
      </div>
  </div>
  <button
    className='mt-4 ml-14 mb-4 bg-transparent hover:bg-blue-200 text-pink-700 font-semibold hover:text-white py-1 px-4 border border-pink-500 hover:border-transparent rounded'
    onClick={handleSubmit}>Filtrar</button>
  <br />
  </form>
</div>
  )
}