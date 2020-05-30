import {
  SEARCH_MOVIE,
  CLEAN_MOVIES,
  CLEAN_PROFILE_MOVIES,
  ADD_MOVIE,
  REMOVE_MOVIE,
  IS_LOADING,
  IS_WITH_PICTURE,
  GET_MOVIE,
  ADD_DETAILS,
  CLEAN_DETAILS,
  SET_NUMBER_PAGINATION
} from './actions';

const initialState = {
  foundMovies: null,
  detailsMovie: null,
  profileMovies: null,
  isLoading: false,
  isWithPicture: true,
  currentNumberPagination: 1
};

export const movieStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        profileMovies: action.payload
      };
    case ADD_DETAILS:
      return {
        ...state,
        detailsMovie: action.payload
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        detailsMovie: null
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        foundMovies: action.payload.foundMovies
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
    case SET_NUMBER_PAGINATION:
      return {
        ...state,
        currentNumberPagination: action.payload
      };
    default: return state;
  }
};


