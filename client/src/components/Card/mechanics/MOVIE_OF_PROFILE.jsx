import React from 'react';

import { useDispatch } from 'react-redux';
import { removeMovie } from '../../../redux/actions';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';

const CardMovieOfProfile = ({ poster, title, id }) => {
  const dispatch = useDispatch();

  const removeMovieHandler = () => {
    dispatch(removeMovie(id))
  };

  return (
    <div className="card">
      <div className="card-body card-profile">
        <CardImage
          poster={poster}
          title={title}
        />

        <CardTitle title={title} />

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