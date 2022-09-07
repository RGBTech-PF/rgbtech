import React from 'react'
import AllProducts from './AllProducts'
import Header from '../components/Header/Header'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function AllProductsD2() {
  const [page, setPage] = useState(1)
  return (
    <div className=''>
        <div>
            <Header/>
        </div>
        <div className=''>
        <div className=' w-48'>
            <Filters setPage={setPage} page={page} />
        </div>
        <div className='ml-56 absolute left-0 top-20'>
            <AllProducts setPage={setPage} page={page}/>
        </div>
        </div>
    </div>
  )
}
