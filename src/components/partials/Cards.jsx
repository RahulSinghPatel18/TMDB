import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title,}) => {
  return (
   <>
   <div className='flex flex-wrap w-full  h-full  pt-4 '>
       {data.map((c, i)=>
       <Link className='w-[25vh] laz mb-5 mx-4 ' key={i}>
       <h1 className='text-xl text-[#acacac] mt-3 font-semibold font-light'>
       {c.title || c.orignal_name || c.orignal_title || c.name}
       </h1>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] mt-4 hover:scale-105 transition-all rounded-xl object-cover'
         src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path}`} alt="" />
       
       </Link>)}
   </div>
   </>
  )
}

export default Cards
