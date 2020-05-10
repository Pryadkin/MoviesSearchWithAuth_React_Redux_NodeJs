import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';

import CardsMoviesProfile from '../components/CardMovieProfile'

import './ProfilePage.scss';
import { Button, Navbar, Nav } from 'react-bootstrap';

export const ProfilePage = () => {
  const { logout, userData } = useContext(AuthContext);
  // const profileMovies = useSelector(state => state.movieSearchReducer.profileMovies);

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  }

  // useEffect(() => {
  //   console.log(profileMovies)
  // }, [profileMovies])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        {userData ?
          <Navbar.Brand href="#home">{userData.userName}</Navbar.Brand>
          : null
        }
        <Nav className="mr-auto">
          <Link className="search-link" to="/search">Search</Link>
        </Nav>
        <Button href="/" onClick={logoutHandler}>
          Log out
        </Button>
      </Navbar>
      <CardsMoviesProfile />
    </>
  )
};