import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import MyLoader from '../MyLoader';
import Pagination from '../Pagination/Pagination';

const CardsMovies = ({ movies, total_pages }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);

  const Cards = () => {
    return movies.map(movie => {
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
    })
  }

  return (
    <>
      <Pagination
        amountBtns={5}
        totalPages={total_pages}
      />
      <div className="container-fluid d-flex flex-wrap search-movies-container justify-content-center">
        {
          isLoading
            ? <MyLoader />
            : <Cards />
        }
      </div>
    </>
  )
}

export default CardsMovies;