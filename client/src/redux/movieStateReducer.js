import {
  SEARCH_MOVIE,
  CLEAN_MOVIES,
  ADD_MOVIE,
  REMOVE_MOVIE,
  IS_LOADING
} from './actions';

const initialState = {
  movies: [],
  total_search_pages: null,
  profileMovies: [],
  isLoading: false
};

export const movieStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: [
          action.payload.movie,
          ...state.movies
        ],
        total_search_pages: action.payload.total_pages
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
    case REMOVE_MOVIE:
      return {
        ...state,
        profileMovies: state.profileMovies.filter(movie => movie.id !== action.payload)
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


