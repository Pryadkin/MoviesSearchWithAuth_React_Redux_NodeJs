import React, { useEffect, useCallback } from 'react';
import SearchFilms from '../components/SearchFilms';
import CardsMoviesOfSearch from '../components/CardsMovies/CardsMoviesOfSearch';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';

const SearchFilmsPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieStateReducer.movies);
  const total_pages = useSelector(state => state.movieStateReducer.total_search_pages);
  const { movie, page } = useParams();

  useEffect(() => {
    if (movie) {
      dispatch(fetchMovie(movie, false, page));
    }
  }, [movie, page])

  if (!movie) {
    return (
      <>
        <SearchFilms />
      </>
    )
  } else {
    return (
      <>
        <SearchFilms />
        <Pagination totalPages={total_pages} />
        <CardsMoviesOfSearch movies={movies} />
      </>
    )
  }
}

export default SearchFilmsPage;