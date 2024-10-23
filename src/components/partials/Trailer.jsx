import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../../../public/noimage.png'

const Trailer = () => {
    const navigate = useNavigate()
    // const { pathname } = useLocation()
    // const category = pathname.includes('movie') ? 'movie' : 'tv'
    const ytvideo = useSelector(state => state.movie?.info?.videos)

    return (
        <div className='justify-center items-center flex flex-1'>
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#b54c6f] ri-close-fill text-3xl text-white right-[5%] top-[5%]"
            ></Link>

           {ytvideo ?( <ReactPlayer
                controls
                width='80%'
                height='70%'
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
            ):<NotFound/>
        }
        </div>
    )
}

export default Trailer