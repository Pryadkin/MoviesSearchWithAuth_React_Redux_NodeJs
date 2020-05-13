import { getMovie } from '../requests';

export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAN_MOVIES = "CLEAN_MOVIES";
export const IS_LOADING = "IS_LOADING";

export const searchMovie = (movie) => ({
  type: SEARCH_MOVIE,
  payload: {
    movie
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

export const fetchMovie = (nameMovie) => {
  return async dispatch => {
    dispatch(cleanMovies());
    dispatch(isLoading());
    const movies = await getMovie(nameMovie)
    movies.map(movie => {
      dispatch(searchMovie(movie))
    })
    dispatch(isLoading());
  }
};

export const addLoginData = (token, userData) => ({
  type: 'ADD_LOGIN_DATA',
  token,
  userData
})

export const removeLoginData = () => ({
  type: 'REMOVE_LOGIN_DATA'
})




///////////////////////////////////////////////////



// export const removePost = (id) => ({
//   type: "REMOVE_POST",
//   payload: id
// });

// export const fetchMovie = () => {
//   return dispatch => {
//     getPoster('/kqjL17yufvn9OVLyXYpvtyrFfak.jpg', 0)
//     .then((urlImages) => {
//       dispatch(addMovie(urlImages))
//     })   
//   }
// }

