import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import MyLoader from '../MyLoader';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);

  return (
    <div className="profile-movies-container container-fluid d-flex flex-wrap  justify-content-center">
      {movies
        ? isLoading
          ? <MyLoader />
          : movies.map(movie => {
            return (
              <Card
                mechanics='MOVIE_OF_PROFILE'
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
              />
            )
          })
        : null}
    </div>
  )
}

export default CardsMovies;