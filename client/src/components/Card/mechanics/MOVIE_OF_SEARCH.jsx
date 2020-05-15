import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../../redux/actions';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';

const CardMovieOfSearch = ({ poster, title, id }) => {
  const stateMovies = useSelector(state => state.movieStateReducer.movies);
  const dispatch = useDispatch();

  const addMovieHandler = () => {
    const targetMovie = stateMovies.find(movie => movie.id === id);
    dispatch(addMovie(targetMovie))
  };

  return (
    <div className="card">
      <div className="card-body card-search">
        <CardImage
          poster={poster}
          title={title}
        />

        <CardTitle title={title} />

        <button
          type="button"
          className="btn btn-primary btn-add"
          onClick={addMovieHandler}
        >
          add
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfSearch;