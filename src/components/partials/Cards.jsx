import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading';
import noimage from '../../../public/noimage.png'
import {motion} from "framer-motion"

const Cards = ({data, title,}) => {
// console.log(data)

  if (!data || data.length === 0) {
    return <div><Loading /></div>;
}
  return (
   <>
   <motion.div  initial={{ zIndex: -10,y:"+100%" }} 
                animate={{ zIndex:0 ,y:'0'}} 
                 transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5, opacity:0, }} 
   className='flex flex-wrap w-full bg-zinc-800  h-[100vh]  pt-4 '>
       {data.map((c, i)=>
       <Link key={i} to={`/${c.media_type || title}/details/${c.id}`}
        className='w-[25vh] laz mb-5 mx-4 relative' >
         
         {/* --------- popularity circule ------- */}
         { c.vote_average && ( <div className="w-5 h-5 mx-[22vh] absolute z-40 mt-[30vh] z-100 p-5 flex justify-center items-center text-sky-600 bg-yellow-300 rounded-3xl">
       {(c.vote_average).toFixed() }%
       </div>
    )}
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] mt-4 hover:scale-105 transition-all rounded-xl object-cover'
         src={  c.poster_path || c.backdrop_path || c.profile_path
           ? `https://image.tmdb.org/t/p/original/${
          c.poster_path || c.backdrop_path || c.profile_path
        }` : noimage
      } alt=""
          />
       
       <h1 className='text-xl text-[#acacac]  mt-3 font-semibold font-light'>
       {c.title || c.orignal_name || c.orignal_title || c.name}
       </h1>

       </Link>)}
   </motion.div>
   </>
  )
}

export default Cards
