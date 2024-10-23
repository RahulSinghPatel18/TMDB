import axios from '../../utils/axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import noimage from "../../../public/noimage.png"
import {motion} from 'framer-motion'

const Topnav = () => {
const [query, setquery] = useState('');
const [searches, setsearches] = useState([]);
const inputRef =  useRef(null);
const [visible, setvisible] = useState(false)

const getSearch = async () => {

    try {
        const { data } = await axios.get(`/search/multi?query=${query}`)
      //  console.log(data.results);
      setsearches(data.results)
    } catch (error) {
        console.log('error:', error);
    }
}


// when change the query value the then  useEffect run
useEffect(() => {
    getSearch();
    inputRef.current.focus();
  
}, [query])
    

  return (
    <>
    <motion.div   initial={{ y: '-100%',opacity:'0' }} 
                animate={{ y:  '0',opacity:'1' }} 
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }} 
     className="h-[8vh] w-[69vh] md:w-full gap-4   z-50 flex justify-center items-center relative ">
    <i className="text-zinc-400 pl-4 text-3xl ri-search-2-line"></i>
    <input ref={inputRef} 
    onChange={(e)=> setquery(e.target.value)} 
    value={query} className='w-[60vh] p-2 outline-none  text-white bg-transparent    rounded' 
    type="text" placeholder=' Search here...' />
 


  <i  onClick={()=>setvisible(true)} className='w-5 cursor-pointer text-white text-2xl mr-5 sm:hidden ri-menu-2-line'  ></i>     
      {/* Sidebar menu for small screens */}
<div className={`${visible ? 'w-[70vh]' :'w-0' } absolute top-0 right-0 h-[50rem] overflow-hidden  bg-zinc-900 transition-all  `}>
    <div className='flex flex-col text-gray-600 '>
         <div onClick={()=>setvisible(false)} className='flex  text-white items-center gap-4 p-5'>
         <i  onClick={()=>setvisible(true)} className='w-5 cursor-pointer text-white text-2xl mr-5 sm:hidden ri-arrow-left-line'  ></i>     
             <p>Back</p>
         </div>
         <NavLink onClick={()=>setvisible(false)} className='py-4 text-white pl-6 border text-center ' to="/">Home</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 text-white pl-6 border text-center' to="/trending">Trending</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 text-white  pl-6 border text-center' to="/popular">Popular</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4  text-white pl-6 border text-center'  to="/tv">TvShow</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4  text-white pl-6 border text-center'  to="/movie">movie</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 text-white pl-6 border text-center'  to="/person">person</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4  text-white pl-6 border text-center'  to="/about">About</NavLink>
         <NavLink onClick={()=>setvisible(false)} className='py-4 text-white pl-6 border text-center'  to="/contact">Conatct</NavLink>
    </div>
</div>
      
      


       {/* setquery is empty when i clicked cross button */}
    {query.length > 0 && 
    <i onClick={()=> setquery('')}
     class="text-zinc-400 hover:text-pink-500 text-3xl ri-close-fill"></i>}
    
    <div className=" absolute w-[60%] max-h-[49vh]  overflow-auto   bg-zinc-100 top-[90%]">

        {/* map all the searches results */}
       {searches.map((s,i)=> 
      <Link to={`/${s.media_type}/details/${s.id}`} key={i} 
      className='font-semibold inline-block   text-zinc-100 w-[100%] p-6 flex justify-start items-center bg-zinc-800 border-b-2 border-sky-600 hover:text-zinc-300'>
        <img className='w-[10vh] h-[8vh] object-cover mx-5 rounded-xl hover:shadow-xl '
         src= {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage } alt="" />
       
        <span>{s.name || s.title || s.original_title || s.original_name}</span>
        </Link> ) }
    
        
    </div>
    </motion.div>
    </>
  )
}

export default Topnav
