import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardsMoviesOfProfile from '../../components/CardsMovies/CardsMoviesOfProfile';
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import { useDispatch } from 'react-redux';
import { cleanDetails } from '../../redux/actions';

export const ProfilePage = () => {
  const [movie, getMovies] = useState([]);
  const profileMovies = useSelector(state => state.movieStateReducer.profileMovies);
  const detailsMovie = useSelector(state => state.movieStateReducer.detailsMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    const film = (
      <CardsMoviesOfProfile movies={profileMovies} />
    );
    getMovies(film);

    // to prevents appearing a previous details
    if (detailsMovie) {
      dispatch(cleanDetails());
    }
  }, [profileMovies]);

  return (
    <>
      <ProfileNavbar />
      {movie}
    </>
  )
};