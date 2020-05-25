import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/auth.hook';
import CardsMoviesOfProfile from '../../components/CardsMovies/CardsMoviesOfProfile';

import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  const { logout, userData } = useAuth();
  const [movie, getMovies] = useState([]);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  }

  useEffect(() => {
    const film = (
      <CardsMoviesOfProfile movies={profileMovies} />
    );
    getMovies(film);
  }, [profileMovies])

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between">
        <div className="d-flex flex-row bd-highlight">
          {
            userData
              ? <div className="navbar-brand">{userData.userName}</div>
              : null
          }

          <div className="d-flex align-content-center flex-wrap">
            <Link className={styles.search_link} to="/search">Search</Link>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline-light"
          onClick={logoutHandler}
        >
          Log out
        </button>
      </nav>
      {movie}
    </>
  )
};