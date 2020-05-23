import React, { useEffect } from 'react';
import SearchFilms from '../components/SearchFilms/SearchFilms';
import CardsMoviesOfSearch from '../components/CardsMovies/CardsMoviesOfSearch';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';
import { useParams } from 'react-router-dom';

const SearchFilmsPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieStateReducer.movies);
  const isWithPicture = useSelector(state => state.movieStateReducer.isWithPicture);
  const { movie, page } = useParams();

  useEffect(() => {
    if (movie) {
      dispatch(fetchMovie(movie, isWithPicture, page));
    }
  }, [movie, page, isWithPicture])

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
        <CardsMoviesOfSearch movies={movies} />
      </>
    )
  }
}

export default SearchFilmsPage;