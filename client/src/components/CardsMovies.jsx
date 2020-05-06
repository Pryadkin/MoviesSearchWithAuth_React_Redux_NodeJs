import React from 'react';
import CardMovie from './CardMovie';
import { useSelector } from 'react-redux';
import Loading from './Loading';

import './CardsMovies.scss';

const CardsMovies = () => {
  const movies = useSelector(state => state.movies.movies);
  let isLoading = useSelector(state => state.movies.isLoading);

  return (
    <div className="search-films-container">
      {isLoading
        ? <Loading />
        : movies.map(movies => {
          return (
            <CardMovie
              key={movies.id}
              id={movies.id}
              title={movies.name}
              poster={movies.poster_path}
              overview={movies.overview}
            />
          )
        })}
    </div>
  )
}

export default CardsMovies;