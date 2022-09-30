import React from 'react'
import AllProducts from './AllProducts'
import Header from '../components/Header/Header'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function AllProductsD2() {
  const [page, setPage] = useState(1)
  return (
    <div className='flex flex-col min-h-screen h-full dark:bg-[#1f2937]'>

      <Header />


      <div className=' w-48'>
        <Filters setPage={setPage} page={page} />
      </div>
      <div className='ml-56 absolute left-0 top-20'>
        <AllProducts setPage={setPage} page={page} />
      </div>

    </div>
  )
}
