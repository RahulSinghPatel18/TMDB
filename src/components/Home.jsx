 import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loading from './Loading'

 


 const Home = () => {
  document.title = "TMDB | Homepage"

     const [wallpaper, setwallpaper] = useState(null);
     const [trending, settrending] = useState(null);
     const [ category, setcategory] = useState('all');

     const GetHeaderWallpaper = async ()=>{
      try {
        const { data } = await axios.get(`/trending/all/day`);
       let randomdata =  data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
      // console.log("randomdata",randomdata);
     
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

  },[category]);
  // console.log(trending)





  const [isVisible1, setIsVisible1] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsVisible1(false); // Screen md se chhoti ho to hide ho jayega
      } else {
        setIsVisible1(true);  // Screen md ya badi ho to visible ho jayega
      }
    }

    window.addEventListener('resize', handleResize);
    
    // Initial check for component mount ke baad
    handleResize();

    // Cleanup event listener when component unmount ho
    return () => window.removeEventListener('resize', handleResize);
  }, []);




 if (trending==null) {
  return <div>
    data is null
  </div>
  
 }



   return wallpaper ? (
     <>
      {isVisible1 && <Sidenav isVisible1={isVisible1} setIsVisible1={setIsVisible1} />}
     
        <div className=" bg-zinc-900 h-[1157vh] md:w-[80%] md:h-full ">  
        <Topnav/>
       
         <Header data={wallpaper}  />
     
    

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
 