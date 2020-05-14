import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);

  return (
    <div className="profile-movies-container">
      {isLoading
        ? <Loading />
        : movies.map(movie => {
          console.log(movie)
          return (
            <Card
              mechanics='MOVIE_OF_PROFILE'
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
            />
          )
        })}
    </div>
  )
}

export default CardsMovies;