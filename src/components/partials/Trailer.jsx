import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../../../public/noimage.png'

const Trailer = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const category = pathname.includes('movie') ? 'movie' : 'tv'
    const ytvideo = useSelector(state => state[category].info.videos)

    return (
        <div className='w-screen h-screen absolute top-0 left-0 flex items-center justify-center z-50'>
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#b54c6f] ri-close-fill text-3xl text-white right-[5%] top-[5%]"
            ></Link>
           {ytvideo ?( <ReactPlayer
                controls
                height={750}
                width={1550}
                url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
):<NotFound/>
           }
        </div>
    )
}

export default Trailer