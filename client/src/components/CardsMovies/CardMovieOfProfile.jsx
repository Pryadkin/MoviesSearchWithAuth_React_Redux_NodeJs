import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../redux/actions';

const CardMovieOfProfile = (props) => {
  const {
    id,
    title,
    poster
  } = props;

  const stateMovies = useSelector(state => state.movieStateReducer.movies);


  return (
    <div className="card">
      <div className="card-body card-profile">
        <img src={poster} alt="" />
        <h5 className="card-title">
          {title}
        </h5>
      </div>
    </div>
  )
};

export default CardMovieOfProfile;