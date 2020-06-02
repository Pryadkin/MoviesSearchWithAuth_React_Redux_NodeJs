import React from 'react';

import styles from '../index.module.scss';
import cx from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addMovie } from '../../../redux/actions';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardDate from '../CardDate';

const CardMovieOfSearch = ({ poster, title, id, releaseDate }) => {
  const foundMovies = useSelector(state => state.movieStateReducer.foundMovies.results);
  const dispatch = useDispatch();
  const history = useHistory();
  const { movie, page } = useParams();

  const addMovieHandler = () => {
    const targetMovie = foundMovies.find(movie => movie.id === id);
    dispatch(addMovie(targetMovie))
  };

  const getLink = () => {
    history.push(`/search/${movie}/${page}/${id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <CardImage
          poster={poster}
          title={title}
          id={id}
          getLink={getLink}
        />

        <CardTitle title={title} />

        <CardDate releaseDate={releaseDate} />

        <button
          type="button"
          className={cx(styles.btn, styles.btn_add)}
          onClick={addMovieHandler}
        >
          add
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfSearch;