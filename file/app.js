import React, { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
const [allMovies, setAllMovies] = useState([])
const [search, setSearch] = useState("")

const handleAddAllMovies = (name, rating, duration) => {
  setAllMovies((prevState) => [...prevState], {
    name,
    rating,
    duration
  })
}

let filteredMovies = allMovies
if (search.length >= 2) {
  filteredMovies = allMovies.filter((movie) => movie.name.toLowerCase().startsWith(search.toLowerCase()))
}

const sortedFilteredMovies = filteredMovies.sort((a, b) => b.duration - a.duration)
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform handleAddAllMovies={handleAddAllMovies} />
        </div>
        <div className='layout-column w-30'>
          <Search search={search} setSearch={setSearch} />
         {sortedFilteredMovies.length !== 0 && (
           <Movieslist allMovies={sortedFilteredMovies} /> 
         )} 
         {sortedFilteredMovies.length === 0 && allMovies.length !== 0 && (
            <div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
            </div>
         )}
        </div>
      </div> 
    </div>
  )
}

export default App;
