import React, { useRef, useState } from "react";
import HeaderAdmin from "../components/DashBoardAdmin/HeaderAdmin";
import LeftSizeAdmin from "../components/DashBoardAdmin/LeftSizeAdmin";
import ProductsAdmin from "../components/DashBoardAdmin/ProductsAdmin";
import RightSizeAdmin from "../components/DashBoardAdmin/RightSizeAdmin";
import SideNavAdmin from "../components/DashBoardAdmin/SideNavAdmin";
import Users from "../components/DashBoardAdmin/Users";
//import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer, PieChart, Pie} from 'recharts';

function DashBoardAdmin() {
	const [selection, setSelection] = useState("loading");

	return (
		<div className="bg-white">
			<HeaderAdmin />
			<div className="w-full min-h-[90vh] grid grid-cols-12">
				<SideNavAdmin selection={setSelection} />
				<div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
					{selection === "loading" ? <h1>Select some OPTION</h1> : null}
					{selection === "Dashboard" ? (
						<>
							<LeftSizeAdmin />
							<RightSizeAdmin />
						</>
					) : null}
					{selection === "Users" ? <Users /> : null}
					{selection === "Products" ? <ProductsAdmin /> : null}
				</div>
			</div>
		</div>
	);
}

export default DashBoardAdmin;

/*

import './App.css';
import React, {useRef, useState} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer, PieChart, Pie} from 'recharts';


function App() {
  const menuselected = useRef()
  const [admin, setAdmin] = useState({})
  const [ventas, setVentas] = useState([])
  const [chart, setChart] = useState('loading')
  const [users, setUsers] = useState([])
  const data = [{mes:'enero' , ventas:100},{mes:'febrero' , ventas:500},{mes:'marzo' , ventas:75},{mes: 'abril' , ventas: 167},{mes: 'Mayo' , ventas:300}, {mes:'Junio' , ventas:100},{mes:'Julio' , ventas:500},{mes:'Agosto' , ventas:75}]
  const brands = [{marca: 'razer', total: 8108, cantidad: 14}, {marca: 'logitech', total: 1089, cantidad: 29}, {marca: 'lg', total: 4002, cantidad: 5}, {marca: 'samsung', total: 9831, cantidad: 7}]
  const tags =[{tag:'laptop', UnidadesVendidas:15},{tag:'mouse', UnidadesVendidas:35}, {tag:'audio', UnidadesVendidas:8}]


<button onClick={() => setChart('componente1')}>Ventas por mes</button>
<button onClick={() => setChart('componente2')}>Marcas más vendidas</button>
<button onClick={() => setChart('componente3')}>Tags más populares</button>

chart === 'loading'  ? <componenteDeCarga/ : null
chart === 'componente1' ? <componente1/ : null
chart === 'componente2' ? <componente2/ : null
chart === 'componente3' ? <componente3/ : null
return (
  <div className='dashboard'>
    <h1 className='dashboard_title'>RGBTech</h1>
    <div className='dashboard_menu'>
      <section className='menu_profile'>
        <img className='profile_photo' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'/>
        <p className='profile_name'>Administrador 1</p>
      </section>
      <nav className='menu_nav'>
        <h2>Administración de productos</h2>
        <h2>Administración de usuarios</h2>
        <h2>Estadisticas</h2>
      </nav>
    </div>
    <div className='dashboard_charts'>
      <div className='total_sales'>
        <p>
          ventas
        </p>
        <h2>
          3500
        </h2>
      </div>
      <div className='total_users'>
        <p>
          Users
        </p>
        <h2>
          45
        </h2>
      </div>
      <div className='brands_sales'>
        <h2>Tus estadisticas</h2>
        <button onClick={() => setChart('monthSales')}>Ventas por mes</button>
        <button onClick={() => setChart('brandSales')}>Marcas más vendidas</button>
        <button onClick={() => setChart('tagSales')}>Tags más populares</button>
      </div>
      <div className='monthly_sales'>
      {
        chart === 'loading' 
        ? <h1>Seleccione una tabla</h1>
        : null
      }
      {
        chart === 'monthSales'
        ? <ResponsiveContainer width="100%" >
          <LineChart  data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes"/>
            <YAxis label={{ value: 'price', angle: -90, position: 'insideLeft' }} padding={{ left: 10 }}/>
            <Tooltip />
            <Legend  />
            <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        :null
      }
      {
        chart === 'brandSales'
        ? <ResponsiveContainer width="100%" >
        <BarChart   data={brands}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="marca"/>
          <YAxis label={{ value: 'price', angle: -90, position: 'insideLeft' }} padding={{ left: 10 }}/>
          <Tooltip />
          <Legend  />
          <Bar dataKey="total" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
        : null
      }
      {
        chart === 'tagSales'
        ? <ResponsiveContainer width="100%" >
        <BarChart   data={tags}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tag"/>
          <YAxis label={{ value: 'price', angle: -90, position: 'insideLeft' }} padding={{ left: 10 }}/>
          <Tooltip />
          <Legend  />
          <Bar dataKey="UnidadesVendidas" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
        : null
      }
      </div>
    </div>
  </div>
);
}

*/
