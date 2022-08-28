import React from 'react'


const Comment = ({rating, profilePhoto, user, comment}) => {
  return (
    <div>
      <h3>{rating}</h3>
      <figure>
        <img src={profilePhoto} className='object-fit: contain;'/>
        <figcaption>{user}</figcaption>
      </figure>
      <text>{comment}</text>
    </div>
  )
}
export default Comment