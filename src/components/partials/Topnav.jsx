import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "../../../public/noimage.png"

const Topnav = () => {
const [query, setquery] = useState('');
const [searches, setsearches] = useState([])

const getSearch = async () => {
    try {
        const { data } = await axios.get(`/search/multi?query=${query}`)
       console.log(data.results);
      setsearches(data.results)
    } catch (error) {
        console.log('error:', error);
    }
}
useEffect(() => {
    getSearch();
}, [query])
    
  return (
    <>
    <div className="w-full h-[10vh] gap-4  flex justify-start ml-[15%] items-center relative">
    <i class="text-zinc-400 text-3xl ri-search-2-line"></i>
    <input onChange={(e)=> setquery(e.target.value)} 
    value={query} className='w-[70vh] p-2 outline-none  text-white bg-transparent    rounded' 
    type="text" placeholder=' search...' />

       {/* setquery is empty */}
    {query.length > 0 && 
    <i onClick={()=> setquery('')} class="text-zinc-400 text-3xl ri-close-fill"></i>}
    
    <div className=" absolute w-[60%] max-h-[50vh]  overflow-auto   bg-zinc-100 top-[90%]">

        {/* map all the searches results */}
       {searches.map((s,i)=>  <Link key={i} className='font-semibold inline-block text-zinc-600 w-[100%] p-8 flex justify-start items-center bg-zinc-200 border-b-2 border-zinc-100 hover:text-zinc-900'>
        <img  className='w-[10vh] h-[10vh] object-cover mx-5 rounded-xl hover:shadow-xl '

         src= {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage } alt="" />
       
        <span>{s.name || s.title || s.original_title || s.original_name}</span>
        </Link> ) }
    
        
    </div>
    </div>
    </>
  )
}

export default Topnav
