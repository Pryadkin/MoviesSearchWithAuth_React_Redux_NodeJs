import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './ProfilePage.scss';
import { Button, Navbar, Nav } from 'react-bootstrap';

export const ProfilePage = () => {
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">User name</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="search-link" to="/search">Search</Link>
        </Nav>
        <Button href="/" onClick={logoutHandler}>
          Log out
        </Button>
      </Navbar>
    </>
  )
};

/*
id
userName
userSurname
films


*/