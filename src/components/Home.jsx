 import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'
 
 const Home = () => {
  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
   setcategory(selectedValue)
  };
  
    document.title = "TMDB | Homepage"

     const [wallpaper, setwallpaper] = useState(null);
     const [trending, settrending] = useState(null);
     const [ category, setcategory] = useState('all');

     const GetHeaderWallpaper = async ()=>{
      try {
        const { data } = await axios.get(`/trending/all/day`);
       let randomdata =  data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
     
    } catch (error) {
        console.log('Error:', error);
    }
  } 

  // HORIZONTAL CARDS TRENDING DATA

  const GetTrending = async ()=>{
    try {
      const {data} = await axios.get(`/trending/${category}/day`);
      settrending(data.results);

    } catch (error) {
       console.log('Error:', error);
    }
  }


  useEffect(()=>{
    GetTrending();
    GetHeaderWallpaper();
    // !wallpaper && GetHeaderWallpaper();
    // !trending && GetTrending();
  },[category]);
  // console.log(trending)



   return wallpaper ? (
     <>
     <Sidenav/>  
     
        <div className="w-[80%] h-full">  
        <Topnav/>
         <Header data={wallpaper}/>

         <div className="mb-3 flex justify-between mt-1 ">
        <h1 className="text-2xl font-semibold text-zinc-300 px-3">
          Trending
        </h1>

        <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e)=>setcategory(e.target.value)} />
        </div>
         <HorizontalCards data={trending} />
         </div>
   
     </>
   ):<Loading/>
 };
 
 export default Home
 