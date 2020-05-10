import React from 'react';
import CardMovie from './CardMovie';
import { useSelector } from 'react-redux';
import Loading from './Loading';

import './CardsMovies.scss';

const CardsMoviesProfile = (props) => {
  const {
    profileMovies
  } = props;
  let isLoading = useSelector(state => state.movieSearchReducer.isLoading);

  return (
    <div className="search-films-container">
      {isLoading
        ? <Loading />
        : profileMovies.map(movie => {
          return (
            <CardMovie
              key={movie.id}
              id={movie.id}
              title={movie.name}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          )
        })}
    </div>
  )
}

export default CardsMoviesProfile;