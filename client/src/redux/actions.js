import { fetchMovies } from '../api/fetchMovies';
import { fetchDetails } from '../api/fetchDetails';

export const GET_MOVIE = "GET_MOVIE";
export const ADD_DETAILS = "ADD_DETAILS";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAN_MOVIES = "CLEAN_MOVIES";
export const CLEAN_PROFILE_MOVIES = "CLEAN_PROFILE_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const IS_WITH_PICTURE = "IS_WITH_PICTURE";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const REMOVE_LOGIN_DATA = "REMOVE_LOGIN_DATA";
export const SET_NUMBER_PAGINATION = "SET_NUMBER_PAGINATION";

export const searchMovie = (foundMovies) => ({
  type: SEARCH_MOVIE,
  payload: { foundMovies }
});

export const getMovie = (movies) => ({
  type: GET_MOVIE,
  payload: movies
});

export const addDetails = (details) => ({
  type: ADD_DETAILS,
  payload: details
});

export const cleanDetails = () => ({
  type: CLEAN_DETAILS
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie
});

export const removeMovie = (id) => ({
  type: REMOVE_MOVIE,
  payload: id
});

export const cleanMovies = () => ({
  type: CLEAN_MOVIES
});

export const cleanProfileMovies = () => ({
  type: CLEAN_PROFILE_MOVIES
});

export const isLoading = () => ({
  type: IS_LOADING
});

export const setPicture = () => ({
  type: IS_WITH_PICTURE
});

export const addLoginData = (token, userData) => ({
  type: ADD_LOGIN_DATA,
  token,
  userData
});

export const setNumberPagination = (numberPagination) => ({
  type: SET_NUMBER_PAGINATION,
  payload: numberPagination
});

export const removeLoginData = () => ({
  type: REMOVE_LOGIN_DATA
});

export const getMoviesFromProfileOnServer = (movies) => {
  return async dispatch => {
    dispatch(isLoading());
    dispatch(getMovie(movies));
    dispatch(isLoading());
  };
};

export const getDetailsMovie = (id) => {
  return async dispatch => {
    const details = await fetchDetails(id);
    dispatch(addDetails(details));
  }
};

export const fetchMovie = (nameMovie, isWithPicture, page) => {
  return async dispatch => {
    dispatch(cleanMovies());
    dispatch(isLoading());
    const foundMovies = await fetchMovies(nameMovie, isWithPicture, page);
    dispatch(searchMovie(foundMovies));
    dispatch(isLoading());
  };
};
