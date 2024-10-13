import { Link } from "react-router-dom";
import NotFound from '../../components/partials/NotFound'
import noimage from '../../../public/noimage.png'
import {motion} from 'framer-motion'

const HorizontalCards = ({data}) => {

  return (
    <motion.div  initial={{ zIndex: -10, x:"+100%" }} 
    animate={{ zIndex:0 ,x:'0'}} 
     transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5, opacity:0, }} 
     className="w-full h-[33vh] overflow-y-hidden  ">
      
      <div className="w-[100%] flex h-[40vh] px-2">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[20%] h-[55vh] mr-8 overflow-hidden bg-zinc-900 rounded-xl">
           
            <img
              className="w-full h-[30%] object-cover hover:scale-110 transition-all duration-300 rounded-lg"
              src={   d.backdrop_path || d.poster_path 
                ? `https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }` : noimage
            }
              alt=""
            />

            <h1 className="text-l px-2 mt-2 font-black overflow-y-auto text-[#d7d7d7]">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>

            <p className="text-[14px] p-2 text-[#c3c2c2]">
              {d.overview.slice(0, 50)}... 
              <span className="text-blue-400 cursor-pointer">more</span>
            </p>

          </Link>
        )):<NotFound/> }
      </div>
    </motion.div>
  );
};

export default HorizontalCards;
