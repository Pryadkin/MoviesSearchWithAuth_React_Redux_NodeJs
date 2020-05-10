import React from 'react';
import SearchFilms from '../components/SearchFilms';
import CardsMovies from '../components/CardsMovies/CardsMovies';
import { useSelector } from 'react-redux';

const SearchFilmsPage = () => {
  const movies = useSelector(state => state.movieSearchReducer.movies);

  return (
    <>
      <SearchFilms />
      <CardsMovies movies={movies} />
    </>
  )
}

export default SearchFilmsPage;