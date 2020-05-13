import React from 'react';
import CardMovieOfProfile from './CardMovieOfProfile';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

import './CardsMovies.scss';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);

  return (
    <div className="profile-movies-container">
      {isLoading
        ? <Loading />
        : movies.map(movie => {
          console.log(movie)
          return (
            <CardMovieOfProfile
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          )
        })}
    </div>
  )
}

export default CardsMovies;