import React from 'react';
import SearchFilms from '../components/SearchFilms';
import CardsMoviesOfSearch from '../components/CardsMovies/CardsMoviesOfSearch';
import { useSelector } from 'react-redux';

const SearchFilmsPage = () => {
  const movies = useSelector(state => state.movieStateReducer.movies);

  return (
    <>
      <SearchFilms />
      <CardsMoviesOfSearch movies={movies} />
    </>
  )
}

export default SearchFilmsPage;