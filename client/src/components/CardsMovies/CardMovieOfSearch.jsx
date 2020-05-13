import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../redux/actions';

const SearchCardMovie = (props) => {
  const {
    id,
    title,
    poster,
    overview
  } = props;

  const stateMovies = useSelector(state => state.movieStateReducer.movies);

  const dispatch = useDispatch();

  const addMovieHandler = () => {
    const targetMovie = stateMovies.find(movie => movie.id === id);
    dispatch(addMovie(targetMovie))
  };

  return (
    <div className="card">
      <div className="card-body card-search">
        <img src={poster} alt="" />
        <h3 className="card-title">
          {title}
        </h3>
        {/* <p className="card-text">
          {overview}
        </p> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addMovieHandler}
        >
          add
        </button>
      </div>
    </div>
  )
};

export default SearchCardMovie;