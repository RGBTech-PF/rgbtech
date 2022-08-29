import React from 'react'


const Comment = ({rating, profilePhoto, user, comment}) => {
  return (
<div className="w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={profilePhoto}/>
  </div>
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">{rating}</h2>
    <p className="mt-2 text-gray-600">{comment}</p>
  </div>
  <div className="flex justify-end mt-4">
    <h1 href="#" class="text-xl font-medium text-indigo-500">{user}</h1>
  </div>
</div> 
  )
}
export default Comment

/*
segunda opcion

<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={profilePhoto}/>
  </div>
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">{rating}</h2>
    <p className="mt-2 text-gray-600">{comment}</p>
  </div>
  <div className="flex justify-end mt-4">
    <h1 href="#" class="text-xl font-medium text-indigo-500">{user}</h1>
  </div>
</div> 
*/

/*
<div classNameName=''>
      <h3>{rating}</h3>
      <figure>
        <img src={profilePhoto} classNameName=' '/>
        <figcaption>{user}</figcaption>
      </figure>
      <text>{comment}</text>
    </div>
*/