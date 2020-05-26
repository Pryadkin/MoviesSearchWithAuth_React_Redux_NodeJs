import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardsMoviesOfProfile from '../../components/CardsMovies/CardsMoviesOfProfile';
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';

export const ProfilePage = () => {
  const [movie, getMovies] = useState([]);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);

  useEffect(() => {
    const film = (
      <CardsMoviesOfProfile movies={profileMovies} />
    );
    getMovies(film);
  }, [profileMovies])

  return (
    <>
      <ProfileNavbar />
      {movie}
    </>
  )
};