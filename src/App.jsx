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
import Trailer from './components/partials/Trailer'
import NotFound from './components/partials/NotFound'

const App = () => {

  return (
    <>
    <div className='flex bg-[#1f1e24] w-screen h-screen'>  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/movie' element={<Movies/>}/>
      <Route path='/movie/details/:id' element={<MovieDetails/>} />
      <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>

      <Route path='/tv' element={<TvShow/>}/>{''}
      <Route path='/tv/details/:id'  element={<TvDetails/>} />
      <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
      
      <Route path='/person' element={<Person/>}/>{''}
      <Route path='/person/details/:id' element={<PersonDetails/>} />
      <Route path='/person/details/:id/trailer' element={<Trailer/>}/>
     
     </Routes>
    </div>
    </>
  )
}

export default App
