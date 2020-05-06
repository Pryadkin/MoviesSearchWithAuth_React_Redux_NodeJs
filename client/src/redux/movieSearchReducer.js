import uniqid from 'uniqid';
import {
  SEARCH_MOVIE,
  CLEAN_MOVIES,
  ADD_MOVIE,
  IS_LOADING
} from './actions';

const initialState = {
  movies: [],
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
        movies: [
          {
            title: action.payload,
            id: uniqid()
          }, ...state.movies
        ]
      };
    case "REMOVE_POST":
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== action.payload)
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: state.isLoading ? false : true
      };
    default: return state
  }
};