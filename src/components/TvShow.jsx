import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';

const TvShow = () => {
  document.title = 'TMDB | TvShow';

  const navigate = useNavigate();
  const [category, setcategory] = useState('popular'); 
  const [tv, settv] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  


  const GetTvShow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
    //   console.log(data.results);
      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
        GetTvShow();
    } else {
      setpage(1);
      settv([]);
      GetTvShow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]); // Refresh data when category changes



  
  return tv.length > 0 ? (
    <>
      <div className=" w-screen h-screen bg-zinc-800">
        <div className="w-full flex items-center justify-between py-4">
          <h1 className="text-2xl text-white font-semibold">
            <i
              onClick={() => navigate('/')}
              className="hover:text-[#f6609c] text-zinc-white ri-arrow-left-line cursor-pointer"
            ></i>{' '}
           TvShow<small className='mx-1 text-[17px] text-pink-500'>({ category})</small>
          </h1>

          <div className="flex items-center gap-[30vh] ">
            <Topnav  />
            <Dropdown
              title="category"
              options={['popular', 'top_rated', 'airing_today', 'on_the_air']} // Updated TV show categories
              func={(e) => setcategory(e.target.value)} // Set category when dropdown changes
              className="bg-zinc-700 text-white"
            />
          </div>

        </div>
        <div className="h-[calc(100vh-100px)]">

          {/* Infinite scroll */}
          <InfiniteScroll
            dataLength={tv.length} // Number of items loaded so far
            next={ GetTvShow} // Fetch more data when user scrolls
            hasMore={hasMore} // Whether there is more data to load
            loader={<h1 className="text-center text-2xl text-[#cf4a6b]">Loading...</h1>} // Loader while fetching data
            endMessage={<p>No more data</p>} // Message when no more data to fetch
          >

            <Cards data={tv} title='tv' />
          </InfiniteScroll>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default TvShow
