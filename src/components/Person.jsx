import  { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './partials/Cards'
import Loading from './Loading'


const People = () => {
    document.title = "TMDB | Person ";

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(
                `/person/${category}?page=${page}`
            );
            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };
    // person ka data
// console.log(person)
  
    const refershHandler = () => {
        if (person.length === 0) {
            GetPerson();
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    };

    useEffect(() => {
        refershHandler();
    }, [category]);


    
    return person.length > 0 ? (
        <>
          <div className="px-[2%] w-screen h-screen bg-zinc-800">
            <div className="w-full flex items-center justify-between py-4">
              <h1 className="text-2xl text-zinc-400 font-semibold">
                <i
                  onClick={() => navigate('/')}
                  className="hover:text-[#f6609c] text-zinc-400 ri-arrow-left-line cursor-pointer"
                ></i>{' '}
               People<small className='mx-1 text-[17px] text-pink-500'>({ category})</small>
              </h1>
    
              <div className="flex items-center gap-[30vh] ">
                <Topnav  />
                
              </div>
    
            </div>
            <div className="h-[calc(100vh-100px)]">
    
              {/* Infinite scroll */}
              <InfiniteScroll
                dataLength={person.length} // Number of items loaded so far
                next={ GetPerson} // Fetch more data when user scrolls
                hasMore={hasMore} // Whether there is more data to load
                loader={<h1 className="text-center text-2xl text-[#cf4a6b]">Loading...</h1>} // Loader while fetching data
                endMessage={<p>No more data</p>} // Message when no more data to fetch
              >
    
                <Cards data={person} title='person' />
              </InfiniteScroll>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      );
    };

export default People;