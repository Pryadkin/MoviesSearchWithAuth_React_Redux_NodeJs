import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../redux/actions';

const CardMovie = (props) => {
  const {
    id,
    title,
    poster,
    overview
  } = props;

  const stateMovies = useSelector(state => state.movieSearchReducer.movies);

  const dispatch = useDispatch();

  const addMovieHandler = () => {
    const targetMovie = stateMovies.find(movie => movie.id === id);
    dispatch(addMovie(targetMovie))
  };

  return (
    <div className="card">
      <div className="card-body">
        <img src={poster} alt="" />
        <h5 className="card-title">
          {title}
        </h5>
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

export default CardMovie;