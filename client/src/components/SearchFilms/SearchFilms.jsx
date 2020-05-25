import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture } from '../../redux/actions';

import styles from './SearchFilms.module.scss';
import cx from 'classnames';

const SearchFilms = () => {
  const isWithPicture = useSelector(state => state.movieStateReducer.isWithPicture);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const setPictureHandler = () => {
    dispatch(setPicture());
  }

  const submitHandler = e => {
    e.preventDefault();
    if (title) {
      history.push(`/search/${title}/1`)
      setTitle('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <div className="d-flex flex-row bd-highlight">
        <div className={cx(styles.navbar_brand, "navbar-brand")}>Search movie</div>

        <div className="d-flex align-content-center flex-wrap">
          <Link className={styles.home_link} to="/profile">Home</Link>
        </div>
      </div>

      <div className="d-flex flex-row-reverse bd-highlight">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={submitHandler}
        >
          <input
            className="form-control mr-sm-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-light"
          >
            Search
          </button>
        </form>

        <div className={cx(
          styles.only_picture,
          (isWithPicture ? styles.gold : null),
          "d-flex align-content-center flex-wrap mr-5")}
          onClick={setPictureHandler}
        >
          only with picture
        </div>
      </div>
    </nav>
  )
};

export default SearchFilms;