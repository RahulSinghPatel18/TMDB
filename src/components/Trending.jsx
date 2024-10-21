import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './partials/Dropdown'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

const Trending = () => {
    document.title = "Showhub | Trending";
    const navigate = useNavigate()
    const [category, setcategory] = useState('all')
    const [duration, setduration] = useState('day')
    const [trending, settrending] = useState([])
    const [hasMore, sethasMore] = useState(true)
    const [page, setpage] = useState(1)
    
  

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`)
            //settrending(data.results)
            if (data.results.length > 0) {
                settrending((prevState => [...prevState, ...data.results]))
                setpage(page + 1)
            }
            else {
                sethasMore(false)
            }
        } catch (error) {
            console.log(error);
        }
    }
    //  console.log(trending);
    const refershHandler = () => {
        if (trending.length === 0) {
            GetTrending();
        } else {
            setpage(1);
            settrending([]);
            GetTrending();
        }
    };
    useEffect(() => {
        refershHandler()
    }, [category, duration])



  return trending.length > 0 ? (
    <>
      <div className=" w-screen h-screen bg-zinc-800">
        <div className="w-full flex  items-center justify-between py-4">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate('/')}
              className="hover:text-[#f6609c] text-zinc-400 ri-arrow-left-line cursor-pointer"
            ></i>{' '}
            Trending<small className='mx-1 text-[17px] text-pink-500'>({ category})</small>
          </h1>
          <div className="flex items-center ">
            <Topnav />
            <Dropdown
              title="category"
              options={['all', 'tv', 'movie']}
              func={(e)=> setcategory(e.target.value)}
              className="bg-zinc-700 text-white"
            />
            <Dropdown
              title="duration"
              options={['week', 'day']}
              func={(e)=> setduration(e.target.value)}
              className="bg-zinc-700 text-white"
            />
          </div>
        </div>
        <div className=" h-[calc(100vh-100px)]">
          {/* Infinite scroll */}
          <InfiniteScroll
            dataLength={trending.length} // Number of items loaded so far
            next={GetTrending} // Fetch more data when user scrolls
            hasMore={hasMore} // Whether there is more data to load
            loader={<h1 className='text-center  text-2xl text-[#cf4a6b] '>Loading...</h1>} // Loader while fetching data
            endMessage={<p>No more data</p>} // Message when no more data to fetch
          >
            <Cards data={trending} title='trending' />
          </InfiniteScroll>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Trending;
