import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  //  console.log(data);


  // {----------- bg data ----------}
    return (
     <>
        <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)),
             url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }} 
        className="md:w-full md:h-[49vh] flex flex-col justify-end items-start p-[5%]">
            <h1 className='text-5xl mb-2 font-black text-[#d2d2d2] w-[70%]'>
              {data.title || data.orignal_name || data.orignal_title || data.name}
            </h1>

            <p className='w-[75%] mb-3 text-[#c6c5c5] overflow-hidden'>
              {data.overview.slice(0,150)}...
              <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>
                more
              </Link>
            </p>

            <p className='text-[#c6c6c6]'>
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.release_date || "No Information"}
                <i className="ml-5  text-yellow-500 ri-album-fill"></i>{" "}
                {data.media_type.toUpperCase()}
            </p>
            
            <Link to={`/${data.media_type}/details/${data.id}`}  className='bg-[#bc4082] mt-4 font-sans px-4 py-4 rounded'>
                Watch Trailer
            </Link>
        </div>
     </>
    )
}

export default Header