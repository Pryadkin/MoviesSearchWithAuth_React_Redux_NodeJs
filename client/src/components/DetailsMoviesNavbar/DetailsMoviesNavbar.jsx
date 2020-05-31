import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import styles from "./DetailsMoviesNavbar.module.scss";

const DetailsMoviesNavbar = () => {

  return (

    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand className={styles.navbar_brand}>
          Details Movies
        </Navbar.Brand>

        <Nav className="mr-auto">
          <LinkContainer to="/profile">
            <Nav.Link>
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/search">
            <Nav.Link>
              Search
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default DetailsMoviesNavbar;