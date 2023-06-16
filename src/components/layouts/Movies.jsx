import React, { useEffect, useState } from 'react'
import Header from '../helpers/Header'

const Movies = () => {
  const [movies, setMovies] = useState([])

  const getData = async () => {
    await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page=',
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((e) => console.log(e))
  }
  console.log(movies)
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className='movie-container'>
          {movies.map((data) => (
            <section className='movie' key={data.id}>
              <h1>{data.original_title}</h1>
              <p> {data.vote_average} / 10 </p>
              <img
                className='img-movie'
                alt={data.original_title}
                src={'https://image.tmdb.org/t/p/w500/' + data.poster_path}
              />
              <p className='description'> {data.overview}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default Movies
