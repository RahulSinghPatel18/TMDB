import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShow from './components/TvShow'
import Person from './components/Person'

const App = () => {

  return (
    <>
    <div className='flex bg-[#1f1e24] w-screen h-screen'>  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/movies' element={<Movies/>}></Route>
      <Route path='/tvshow' element={<TvShow/>}></Route>
      <Route path='/person' element={<Person/>}></Route>
     </Routes>
    </div>
    </>
  )
}

export default App
