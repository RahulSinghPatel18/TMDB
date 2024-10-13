import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asynclaodtv } from "../store/actions/TvActions";
import { removetv } from '../store/reducers/tvSlice'
import Loading from '../components/Loading'
import HorizontalCards from '../components/partials/HorizontalCards'

const TvDetails = () => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { info } = useSelector(state => state.tv)
    useEffect(() => {
        dispatch(asynclaodtv(id))

        return () => {
            dispatch(removetv())
        }
    }, [id])
    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), 
                url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="relative w-screen text-white h-[170vh] sm:h-[130vh] px-[10%] font-normal"
        >
            {/* Part 1 navigation */}
            <nav className='w-full h-[10vh] text-white flex items-center gap-10 text-xl'>
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#af4472] ri-arrow-left-line"
                ></Link>
                <a target="_blank" href={info.detail.homepage}>
                    <i className="ri-external-link-fill hover:text-[#af4472] "></i>
                </a>
                <a
                    target="_blank"
                    href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                    <i className="ri-earth-fill hover:text-[#af4472] "></i>
                </a>

                <a className='hover:text-[#af4472] ]'
                    target="_blank"
                    href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                >
                  TMDB
                </a>
            </nav>
            {/* Part 2 Poster and details */}
            <div className='w-full flex flex-col sm:flex-row'>
                <img
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded h-[50vh] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path
                        }`}
                    alt=""
                />
                <div className='w-full ml-0 sm:ml-20'>
                    <h1 className='text-5xl font-black'> {info.detail.name ||
                            info.detail.title ||
                            info.detail.original_name ||
                            info.detail.original_title}
                    </h1>
                    <div className="mt-3 mb-5 flex  items-center gap-x-3">
                       <div className=" flex items-center justify-center">
                       <span className="rounded-3xl p-2  font-semibold bg-yellow-500 text-white ">
                            {(info.detail.vote_average * 10).toFixed()}
                           %
                        </span>
                       </div>
                        <h1 className="w-[60px] font-semibold text-2xl leading-6">
                            User Score
                        </h1>
                        <h1 className='font-normal'>{info.detail.first_air_date}</h1>
                        <h1 className='font-normal'>
                            {info.detail.genres.map((g) => g.name).join(",")}
                        </h1>
                        <h1 className='font-normal'>{info.detail.runtime}min</h1>
                    </div>
                    <h1 className='text-2xl italic font-medium text-zinc-100'>{info.detail.tagline}</h1>
                    <h1 className="text-2xl mb-3  mt-5">Overview</h1>
                    <p className='text-md'>{info.detail.overview}</p>
                    <h1 className="text-2xl mb-3  mt-5">tv Translated</h1>
                    <p className="mb-10">{info.translations.join(", ")}</p>
                    <Link
                        className="p-5 bg-[#af4472]  rounded-lg"
                        to={`${pathname}/trailer`}
                    >
                        <i className="text-xl ri-play-fill mr-3 "></i>
                        Play Trailer
                    </Link>
                </div>
                {/** Part 3 Recommendations and Similar Stuff */}

            </div>
            <hr className='w-full mt-10 ' />
            <h1 className=" text-3xl font-bold mt-5 mb-5 text-white">
                Recommendations & Similar stuff
            </h1>
            <HorizontalCards title="tv" data={info.recommendations.length > 0
                ? info.recommendations
                : info.similar} />
            <Outlet />
        </div>

    ) : (<Loading />)
}

export default TvDetails