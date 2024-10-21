import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';

const Popular = () => {
  document.title = 'TMDB | Popular';
  const navigate = useNavigate();
  const [category, setcategory] = useState('movie'); // Set initial category state
  const [popular, setpopular] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      console.log(data.results);
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]); // Refresh data when category changes

  return popular.length > 0 ? (
    <>
      <div className=" w-screen h-screen bg-zinc-800">
        <div className="w-full flex items-center justify-between py-4">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate('/')}
              className="hover:text-[#f6609c] text-zinc-400 ri-arrow-left-line cursor-pointer"
            ></i>{' '}
            Popular<small className='mx-1 text-[17px] text-pink-500'>({ category})</small>
          </h1>

          <div className="flex items-center gap-[30vh] ">
            <Topnav  />
            <Dropdown
              title="category"
              options={['tv', 'movie']}
              func={(e) => setcategory(e.target.value)} // Set category when dropdown changes
              className="bg-zinc-700 text-white"
            />
          </div>

        </div>
        <div className="h-[calc(100vh-100px)]">

          {/* Infinite scroll */}
          <InfiniteScroll
            dataLength={popular.length} // Number of items loaded so far
            next={GetPopular} // Fetch more data when user scrolls
            hasMore={hasMore} // Whether there is more data to load
            loader={<h1 className="text-center text-2xl text-[#cf4a6b]">Loading...</h1>} // Loader while fetching data
            endMessage={<p>No more data</p>} // Message when no more data to fetch
          >

            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Popular;
