import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import MyLoader from '../MyLoader';
import Pagination from '../Pagination/Pagination';


const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);
  const total_pages = useSelector(state => state.movieStateReducer.total_search_pages);

  const card = () => {
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
      <Pagination totalPages={total_pages} />
      <div className="search-movies-container">

        {
          // <MyLoader />
          isLoading
            ? <MyLoader />
            : card()
        }
      </div>
    </>
  )
}

export default CardsMovies;