import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
 
  return (
    <>
    <div className="w-[20%] h-full p-7 text-white  border-r-2 border-zinc-400 p-2">
      <h1 className='text-2xl text-white font-bold '>
      <i className="text-[#f954ac] mr-2  ri-tv-fill hover:text-[#7b7ef8] transition-all duration-300"></i>
        <span className='text-[18px] hover:text-[#7b7ef8] transition-all duration-300 '>TMDB</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
 
 <h1 className="text-white font-semibold text-[18px] mt-6 ">
   New Feeds
 </h1>
 <Link to='/trending' className='hover:bg-[#f954ac] hover:text-white rounded-l p-4 duration-300'>
   <i className="hover:text-blue-500 ri-fire-fill"></i> Trending
   </Link>
<Link to='popular' className='hover:bg-[#f954ac] hover:text-white rounded-l p-4 duration-300'>
  <i className="mr-2 hover:text-blue-500 ri-bard-fill"></i>Popular
   </Link>
<Link to='tv' className='hover:bg-[#f954ac] hover:text-white rounded-l p-4 duration-300'>
  <i className="mr-2 hover:text-blue-500 ri-tv-fill"></i>Tv Shows 
  </Link>
<Link to='/movie' className='hover:bg-[#f954ac] hover:text-white rounded-l p-4 duration-300'>
 <i className="hover:text-blue-500 ri-movie-2-fill"></i> Movies
  </Link>
<Link to='/person' className='hover:bg-[#f954ac] hover:text-white rounded-l p-4 duration-300'>
<i className="mr-2  hover:text-blue-500ri-team-fill"></i>People 
  </Link>
</nav>

<hr className='bg-transparent  bg-zinc-400' />
<nav className='flex flex-col text-zinc-400 text-xl gap-3'>
 <h1 className="text-white text-[18px] font-semibold text-xl  mt-6 mb-3">
   Website Information
 </h1>
 <Link className='hover:bg-[#f954ac] hover:text-white rounded-l p-3 duration-300'>
 <i className="mr-2 hover:text-blue-500 ri-information-fill"></i> About
   </Link>
<Link className='hover:bg-[#f954ac] hover:text-white rounded-l p-3 duration-300'>
<i className="mr-2 hover:text-blue-500 ri-phone-fill"></i>Contact Us
   </Link>

</nav>

    </div>
    </>
  )
}

export default Sidenav
