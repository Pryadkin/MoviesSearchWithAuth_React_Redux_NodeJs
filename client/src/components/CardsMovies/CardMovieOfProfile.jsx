import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../redux/actions';

const CardMovieOfProfile = (props) => {
  const {
    id,
    title,
    poster
  } = props;

  const dispatch = useDispatch();

  const removeMovieHandler = () => {
    dispatch(removeMovie(id))
  };

  return (
    <div className="card">
      <div className="card-body card-profile">
        <img src={poster} alt="" />
        <h5 className="card-title">
          {title}
        </h5>

        <button
          type="button"
          className="btn btn-primary btn-remove"
          onClick={removeMovieHandler}
        >
          remove
        </button>
      </div>
    </div>
  )
};

export default CardMovieOfProfile;