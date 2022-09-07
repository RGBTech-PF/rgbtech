import React from 'react'
import { Link } from 'react-router-dom';

function SideNavAdmin({selection}) {



    return (
        <nav className="col-span-2 border-r border-gray-300 min-h-[90vh] w-[100px] xl:w-[180px] font-semibold pt-8 px-1 flex flex-col items-start justify-between">
          <div className="space-y-4 w-full ">
            
                <button onClick={()=>selection("Dashboard")} 
                        className="text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Dashboard</button>
            
            <div className="w-full border-t pt-7 border-gray-300" />
            
                <button onClick={()=>selection("Users")} 
                        className="w-full text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Users</button>

             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("Products")} 
                        className="w-full text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Products</button>
             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("tags-brands")} 
                        className="w-full text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Tags/Brands</button>
             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("AddProduct")} 
                        className="w-full bg-text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Add products </button>
             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("EditProduct")} 
                        className="w-full bg-text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Edit products </button>
             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("EditTags/Brands")} 
                        className="w-full bg-text-black p-2 rounded-xl w-full hover:scale-95 hover:bg-gray-200"> Edit Tags/Brands </button>
          
          </div>
          <div className="xl:flex flex-col hidden items-center justify-center space-y-4 px-4 py-5 ">
            <Link to="/">
            <button className=" w-full py-2 px-3 bg-blue-400 hover:bg-red-800 rounded-md text-white">
            To home
            </button>
            </Link>
          </div>
        </nav>
      );
    };

export default SideNavAdmin