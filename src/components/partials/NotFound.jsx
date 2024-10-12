import React from 'react'
import notFound from "../../../public/404.mp4"

const NotFound = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center  items-center">
        <video 
          className="w-[100%] h-[100%]  bg-[#000] " 
          src={notFound} 
          autoPlay 
          muted 
          loop 
         
        />
      </div>
    </>
  )
}

export default NotFound
