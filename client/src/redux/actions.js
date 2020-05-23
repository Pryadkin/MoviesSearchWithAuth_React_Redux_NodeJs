import { requestMovies } from '../requests';

export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAN_MOVIES = "CLEAN_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";

export const searchMovie = (movie, total_pages) => ({
  type: SEARCH_MOVIE,
  payload: {
    movie,
    total_pages
  }
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie
})

export const removeMovie = (id) => ({
  type: REMOVE_MOVIE,
  payload: id
})

export const cleanMovies = () => ({
  type: CLEAN_MOVIES
});

export const isLoading = () => ({
  type: IS_LOADING
});

export const setPicture = () => ({
  type: IS_WITH_PICTURE
});

export const addLoginData = (token, userData) => ({
  type: 'ADD_LOGIN_DATA',
  token,
  userData
})

export const removeLoginData = () => ({
  type: 'REMOVE_LOGIN_DATA'
})

export const fetchMovie = (nameMovie, isWithPicture, page) => {
  return async dispatch => {
    dispatch(cleanMovies());
    dispatch(isLoading());
    const {
      moviesWithFullPathForPosters,
      total_pages
    } = await requestMovies(nameMovie, isWithPicture, page);
    dispatch(searchMovie(moviesWithFullPathForPosters, total_pages))
    dispatch(isLoading());
  }
};
