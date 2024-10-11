import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie } from '../store/actions/MoviewActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { removemovie } from '../store/reducers/movieSlice';
import Loading from './Loading'

const MovieDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.movie);
 const dispatch = useDispatch();


useEffect(()=>{
  dispatch(asyncloadmovie(id))
  return ()=>{
    dispatch(removemovie);
  }
},[])

  return info ? (
    <>
    <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),
             url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}  className="w-screen h-screen px-[10%]">
      
      <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-2xl  '>
      <Link 
       onClick={() => navigate(-1)}
              className="hover:text-[#f6609c] text-zinc-400 ri-arrow-left-line cursor-pointer"
            ></Link>
           <a className='hover:text-[#d8459b]' target='_blank' href={info.detail.homepage}><i class="ri-external-link-line"></i></a>
          <a  className='hover:text-[#d8459b]' target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
          <a  className='hover:text-[#d8459b]' target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMDB</a>
      </nav>
      </div></>
  ):(
    <Loading/>
  );
}

export default MovieDetails
