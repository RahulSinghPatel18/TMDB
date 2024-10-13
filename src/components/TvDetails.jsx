import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv,removetv } from '../store/actions/TvActions';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading'
import HorizontalCrads from './partials/HorizontalCards'

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    
    return () => {
      dispatch(removetv());
    }
  }, [id]);



  return info ? (
    <>
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),
          url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-screen relative h-[150vh] px-[5%]">

        {/* -------detail.popularity -------- */}
        {info.detail.vote_average && (
          <div className="w-5 h-5 mx-[32.5vh] absolute z-40 mt-[48vh] z-100 p-5 flex justify-center items-center text-sky-600 bg-yellow-300 rounded-3xl">
            {info.detail.vote_average.toFixed()}
          </div>
        )}

        {/* --------part1 navigattion----------- */}
        <nav className="w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-2xl">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#f6609c] text-zinc-400 ri-arrow-left-line cursor-pointer"
          ></Link>
          <a className="hover:text-[#d8459b]" target="_blank" href={info.detail.homepage}><i className="ri-external-link-line"></i></a>
          <a className="hover:text-[#d8459b]" target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
          <a className="hover:text-[#d8459b]" target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>TMDB</a>
        </nav>

        {/* --------part2 poster and details----------- */}
        <div className="flex w-[35vh]">
          <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] mt-1 hover:scale-105 transition-all rounded-xl object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path}`} alt=""
          />

          <div className="content ml-[5%]">
            <span className="text-5xl px-5 text-white font-bold">
              {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
              <small className="text-xl font-bold text-zinc-300">
                ({info.detail.first_air_date})
              </small>
            </span>

            <div className="flex mx-5 w-[100vh] text-white items-center gap-x-5">
              <h1 className="text-[22px]">User Score</h1>
              <h1> Release - {info.detail.first_air_date}</h1>
            </div>

            <div className="flex w-[135vh] text-white gap-x-5 px-5">
              <h1>{info.detail.genres.map((g) => g.name).join(',')}</h1>
              <h1>{info.detail.runtime} min</h1>
            </div>

            <div className="px-5 text-white w-[132vh]">
              <h1 className="mt-1 text-zinc-200 font-bold">{info.detail.tagline}</h1>
              <h1 className="mt-2">Overview</h1>
              <p className="mt-3 text-[15px]">{info.detail.overview}</p>
              <h1 className="mt-2">Movie Translated</h1>
              <p className="mt-2 mb-5 text-[15px]">{info.translations.join(' ')}</p>

              {/* ------- Play trailer ------- */}
              {info.videos ? (
                <Link to={`${pathname}/trailer`} className="p-4 bg-[#c6326d] rounded-lg" target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${info.videos}`}>
                  <i className="mr-3 text-xl ri-play-fill"></i> Play Trailer
                </Link>
              ) : (
                <p className="text-red-500">No trailer available</p>
              )}
            </div>
          </div>
        </div>

        {/* -----part 3 available platforms--------- */}
        <div className="mt-10 w-[80%] flex flex-col gap-y-5 mb-5">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on flatrate</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on buy</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
              ))}
            </div>
          )}
        </div>

        <hr className="mt-10 border-none h-[2px] bg-zinc-500 mb-5"></hr>

        {/* ----- part 4 recommendation & similar --------- */}
        <h1 className="text-2xl font-semibold text-white mb-5">Recommendations & Similar</h1>
        <HorizontalCrads data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

      </div>
    </>
  ) : (
    <Loading />
  );
}

export default TvDetails;
