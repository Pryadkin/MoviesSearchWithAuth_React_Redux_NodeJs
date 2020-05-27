import React from 'react';

import styles from '../index.module.scss';
import cx from 'classnames';

import { useDispatch } from 'react-redux';
import { removeMovie } from '../../../redux/actions';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardDate from '../CardDate';

const CardMovieOfProfile = ({ poster, title, id, releaseDate }) => {
  const dispatch = useDispatch();

  const removeMovieHandler = () => {
    dispatch(removeMovie(id))
  };

  return (
    <div className={styles.card}>
      <div className={cx(styles.body, styles.profile)}>
        <CardImage
          poster={poster}
          title={title}
          id={id}
        />

        <CardTitle title={title} />

        <CardDate releaseDate={releaseDate} />

        <button
          type="button"
          className={cx(styles.btn, styles.btn_remove, "btn-primary")}
          onClick={removeMovieHandler}
        >
          remove
      </button>
      </div>
    </div>
  )
};

export default CardMovieOfProfile;