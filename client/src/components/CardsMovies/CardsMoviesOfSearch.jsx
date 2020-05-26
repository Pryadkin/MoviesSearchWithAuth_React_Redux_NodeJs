import React from 'react';
import Card from '../Card';
import MyLoader from '../MyLoader';
import Pagination from '../Pagination/Pagination';
import TotalResults from '../TotalResults/TotalResults';

const CardsMoviesOfSearch = ({ movies, isLoading, profileMovies }) => {
  const {
    results,
    total_pages,
    total_results
  } = movies;

  const Cards = () => {
    return results.map(movie => {
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
      <TotalResults totalResults={total_results} />
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

export default CardsMoviesOfSearch;