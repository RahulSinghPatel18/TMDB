import React from 'react'
import loading from "../../public/loading.gif"

const Loading = () => {
  return (
  <>
  <div className="w-full h-full flex justify-center bg-black items-center">
  <img className='h-[100%] w-[50%]' src={loading} alt="" />
  </div>
   </>
  )
}

export default Loading
