import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from './NotFound'

const Trailer = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const ytvideo = useSelector(state => state.movie.info.videos);
   const category =  pathname.includes("movie") ? "movie" : "tv";


  return  (
    <div className='bg-[#000000] absolute z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>
     <Link 
       onClick={() => navigate(-1)}
              className="absolute text-4xl z-50 mt-[-44%] ml-[65%] text-white hover:text-[#f6609c]  ri-close-fill cursor-pointer"
     ></Link>
     
    {ytvideo ?  (<ReactPlayer controls height={500} width={800}

     url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> ) : <NotFound/>}
           
    </div>
  )
}

export default Trailer
