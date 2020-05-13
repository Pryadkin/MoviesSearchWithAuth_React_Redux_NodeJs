import React from 'react';
import CardMovieOfSearch from './CardMovieOfSearch';
import CardMovieOfProfile from './CardMovieOfProfile';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

import './CardsMovies.scss';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);

  // console.log(profileMovies)

  return (
    <div className="search-movies-container">
      {isLoading
        ? <Loading />
        : movies.map(movie => {
          for (let i = 0; i < profileMovies.length; i++) {
            if (movie.id === profileMovies[i].id) {
              return (
                <CardMovieOfProfile
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                  overview={movie.overview}
                />
              )
            }
          }
          return (
            <CardMovieOfSearch
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