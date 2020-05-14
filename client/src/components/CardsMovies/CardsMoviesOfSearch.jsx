import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);

  return (
    <div className="search-movies-container">
      {isLoading
        ? <Loading />
        : movies.map(movie => {
          for (let i = 0; i < profileMovies.length; i++) {
            if (movie.id === profileMovies[i].id) {
              return (
                <Card
                  mechanics='MOVIE_OF_PROFILE'
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                />
              )
            }
          }
          return (
            <Card
              mechanics='MOVIE_OF_SEARCH'
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