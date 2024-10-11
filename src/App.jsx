import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShow from './components/TvShow'
import Person from './components/Person'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'

const App = () => {

  return (
    <>
    <div className='flex bg-[#1f1e24] w-screen h-screen'>  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/movie' element={<Movies/>}/>
      <Route path='/movie/details/:id'
       element={<MovieDetails/>} />

      <Route path='/tv' element={<TvShow/>}/>{''}
      
      <Route path='/tv/details/:id'
       element={<TvDetails/>} />
      
      <Route path='/person' element={<Person/>}/>{''}
      <Route path='/person/details/:id'
       element={<PersonDetails/>} />
     
     </Routes>
    </div>
    </>
  )
}

export default App
