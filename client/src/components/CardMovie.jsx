import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/actions';

const CardMovie = (props) => {
  const {
    id,
    title,
    poster,
    overview
  } = props;

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removePost(id))
  }

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
          onClick={clickHandler}
        >
          Remove movie
        </button>
      </div>
    </div>
  )
}

export default CardMovie;