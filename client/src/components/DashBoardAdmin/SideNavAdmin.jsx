import React from 'react'

function SideNavAdmin({selection}) {



    return (
        <nav className="col-span-2 border-r border-gray-300 min-h-[90vh] w-[50px] xl:w-[180px] pt-8 px-1 flex flex-col items-start justify-between">
          <div className="space-y-8 w-full ">
            
                <button onClick={()=>selection("Dashboard")} 
                        className="bg-[#87CEFA] text-white p-2 rounded-full w-full hover:scale-95 hover:bg-blue-600"> Dashboard</button>
            
            <div className="w-full border-t pt-7 border-gray-300" />
            
                <button onClick={()=>selection("Users")} 
                        className="w-full bg-[#87CEFA] text-white p-2 rounded-full hover:scale-95 hover:bg-blue-600"> Users</button>

             <div className="w-full border-t pt-7 border-gray-300" />

                <button onClick={()=>selection("Products")} 
                        className="w-full bg-[#87CEFA] text-white p-2 rounded-full hover:scale-95 hover:bg-blue-600"> Products</button>
          
          </div>
          <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
            <button className=" w-full py-2 px-3 bg-blue-400 hover:bg-red-800 rounded-md text-white">
            Sign Out?
            </button>
          </div>
        </nav>
      );
    };

export default SideNavAdmin