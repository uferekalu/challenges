import React, { useState, useEffect } from 'react'

function Movieform({ handleAddAllMovies }) {
  const [nameOfMovie, setNameOfMovie] = useState("")
  const [movieDuration, setMovieDuration] = useState("")
  const [movieRating, setMovieRating] = useState("")
  const [error, setError] = useState(false)

  const handleAddMovie = () => {
    if (nameOfMovie === "" || movieDuration === "" || movieRating === "") {
      return
    }
    // check if the last letter of duration entered is either "h" or "m"
    const lastElementOfDuration = movieDuration.slice(-1)
    if (lastElementOfDuration === "h" || lastElementOfDuration === "m") {
      const durationVal = Number(movieDuration.slice(0, movieDuration.length - 1))
      setError(false)
      // check if last element of duration entered is in minutes
      // and convert to hours
      if (lastElementOfDuration === "m") {
        const timeInMinutes = durationVal / 60
        const timeInHours = (Math.round(timeInMinutes * 10) / 10).toFixed(1)
        handleAddAllMovies(nameOfMovie, Number(movieRating), timeInHours)
      } else {
        handleAddAllMovies(nameOfMovie, Number(movieRating), durationVal)
      }
    } else {
      setNameOfMovie("")
      setMovieDuration("")
      setMovieRating("")
      setError(true)
    }
  }

  useEffect(() => {
    if (nameOfMovie !== "" || movieDuration !== "" || movieRating !== ""){
      setError(false)
    }
  }, [nameOfMovie, movieDuration, movieRating])

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={nameOfMovie}
              onChange={(e) => setNameOfMovie(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={movieRating}
              onChange={(e) => setMovieRating(e.target.value)}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={movieDuration}
              onChange={(e) => setMovieDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && (
            <div 
              className='alert error mb-30'
              data-testid='alert'
            >
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div> 
          )}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={handleAddMovie}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
