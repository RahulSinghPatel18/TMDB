import axios from '../../utils/axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "../../../public/noimage.png"

const Topnav = () => {
const [query, setquery] = useState('');
const [searches, setsearches] = useState([]);

const inputRef =  useRef(null);

const getSearch = async () => {
    try {
        const { data } = await axios.get(`/search/multi?query=${query}`)
      //  console.log(data.results);
      setsearches(data.results)
    } catch (error) {
        console.log('error:', error);
    }
}
useEffect(() => {
    getSearch();
    inputRef.current.focus();
}, [query])
    
  return (
    <>
    <div className="w-full h-[8vh] gap-4  flex justify-center items-center relative">
    <i className="text-zinc-400 text-3xl ri-search-2-line"></i>
    <input ref={inputRef}  onChange={(e)=> setquery(e.target.value)} 
    value={query} className='w-[60vh] p-2 outline-none  text-white bg-transparent    rounded' 
    type="text" placeholder=' search...' />

       {/* setquery is empty */}
    {query.length > 0 && 
    <i onClick={()=> setquery('')} class="text-zinc-400 hover:text-pink-500 text-3xl ri-close-fill"></i>}
    
    <div className=" absolute w-[60%] max-h-[49vh]  overflow-auto   bg-zinc-100 top-[90%]">

        {/* map all the searches results */}
       {searches.map((s,i)=>  <Link key={i} className='font-semibold inline-block   text-zinc-100 w-[100%] p-6 flex justify-start items-center bg-zinc-800 border-b-2 border-sky-600 hover:text-zinc-300'>
        <img  className='w-[10vh] h-[8vh] object-cover mx-5 rounded-xl hover:shadow-xl '

         src= {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage } alt="" />
       
        <span>{s.name || s.title || s.original_title || s.original_name}</span>
        </Link> ) }
    
        
    </div>
    </div>
    </>
  )
}

export default Topnav