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
        profileMovies: [...state.profileMovies, action.payload]
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


