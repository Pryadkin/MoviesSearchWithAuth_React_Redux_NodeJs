import uniqid from 'uniqid';
import {
  SEARCH_MOVIE,
  CLEAN_MOVIES,
  ADD_MOVIE,
  IS_LOADING
} from './actions';

const initialState = {
  movies: [],
  profileMovies: [],
  isLoading: false
};

const addMovie = (profileMovies, movies, payload) => {
  const changeProfileMovies = [...profileMovies, movies.filter(movie => movie.id === payload)];
  return changeProfileMovies;
}

export const movieSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: [
          action.payload.movie,
          ...state.movies
        ]
      };
    case CLEAN_MOVIES:
      return {
        ...state,
        movies: []
      };
    case ADD_MOVIE:
      return {
        ...state,
        profileMovies: addMovie(
          state.profileMovies,
          state.movies,
          action.payload
        ),
      };
    case "REMOVE_POST":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: state.isLoading ? false : true
      };
    default: return state
  }
};


