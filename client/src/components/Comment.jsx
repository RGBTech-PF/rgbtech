import React from 'react'
import { ImQuotesRight} from 'react-icons/im';

const Comment = ({rating, profilePhoto, user, comment}) => {
  return (
    <div className='grid palce-items-center'>
      <div className='grid grid-cols-1 p-10 gap-10 '>
        <figure className='w-96 bg-white rounded-2xl shadow-lg overflow-hidden rotate-2 hover:rotate-1 transition duration-200'>
          <blockquote className='p-8'>
            <div className='mb-5 text-black items-center text-5xl font-bold  w-12'>
              <p>{rating}</p>
            </div>
            <p className='font-bold text-lg text-black'>
              {comment}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem nesciunt fuga odio fugit blanditiis veritatis laborum, aspernatur dolorum ex temporibus est quae ad porro quas minima doloribus excepturi optio. */}
            </p>
          </blockquote>
          <div className='flex items-center justify-between px-8 py-4 bg-gradient-to-br from-fuchsia-500
          to-pink-500'>
            <div className='flex items-center gap-5'>
              <div className='rounded-full border-4 w-14 h-14 border-white'>
                <img className='rounded-full' src={profilePhoto} alt="user" />
              </div>
              <figcaption className='text-white font-semibold text-2xl'>
                <div>{user}</div>
                {/* <div className='opacty-70'>Front-End Developer</div> */}
              </figcaption>
            </div>
            <div className='text-2xl '>
              <ImQuotesRight/>
            </div>
          </div>
        </figure>
      </div>
    </div>
  )
}
export default Comment

/*
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
 */