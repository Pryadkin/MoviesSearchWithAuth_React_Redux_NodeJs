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

  const state = useSelector(state => state.movieSearchReducer);

  const dispatch = useDispatch();

  const addMovieHandler = () => {
    dispatch(addMovie(id))
    setTimeout(() => {

      console.log(state)
    }, 1000)
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