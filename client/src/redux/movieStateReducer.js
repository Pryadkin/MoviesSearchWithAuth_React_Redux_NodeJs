import {
  SEARCH_MOVIE,
  CLEAN_MOVIES,
  CLEAN_PROFILE_MOVIES,
  ADD_MOVIE,
  REMOVE_MOVIE,
  IS_LOADING,
  IS_WITH_PICTURE,
  GET_MOVIE
} from './actions';

const initialState = {
  movies: [],
  total_search_pages: null,
  profileMovies: null,
  isLoading: false,
  isWithPicture: false,
};

export const movieStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        profileMovies: action.payload
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload.movie,
        total_search_pages: action.payload.total_pages
      };
    case CLEAN_MOVIES:
      return {
        ...state,
        movies: []
      };
    case CLEAN_PROFILE_MOVIES:
      return {
        ...state,
        profileMovies: null
      };
    case ADD_MOVIE:
      return {
        ...state,
        profileMovies: [action.payload, ...state.profileMovies]
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        profileMovies: state.profileMovies.filter(movie => movie.id !== action.payload)
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: state.isLoading ? false : true
      };
    case IS_WITH_PICTURE:
      return {
        ...state,
        isWithPicture: !state.isWithPicture
      };
    default: return state;
  }
};


