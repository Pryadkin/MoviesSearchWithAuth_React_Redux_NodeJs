import React from 'react';
import { useAuth } from '../../hooks/auth.hook';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import styles from "./ProfileNavbar.module.scss";
import cx from 'classnames';

const ProfileNavbar = () => {
  const { logout, userData } = useAuth();

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand>
        {
          userData
            ? <div className={cx(styles.navbar_brand, "navbar-brand")}>
              {userData.userName}
            </div>
            : null
        }
      </Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/search">
          <Nav.Link>
            Search
            </Nav.Link>
        </LinkContainer>
      </Nav>

      <Button
        variant="outline-info"
        onClick={logoutHandler}
      >
        Log out
        </Button>
    </Navbar >
  )
}

export default ProfileNavbar;