import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture } from '../../redux/actions';

import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './SearchNavbar.module.scss';
import cx from 'classnames';

const SearchNavbar = () => {
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
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand className={styles.navbar_brand}>
        Search movie
      </Navbar.Brand>

      <Nav className="mr-auto">
        <LinkContainer to="/profile">
          <Nav.Link>
            Home
            </Nav.Link>
        </LinkContainer>
      </Nav>

      <Nav
        className={cx(styles.only_picture, (isWithPicture ? styles.gold : null), "mr-5")}
        onClick={setPictureHandler}
      >
        only with picture
        </Nav>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="mr-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Button
          type="submit"
          variant="outline-info"
          onClick={submitHandler}
        >
          Search
          </Button>
      </Form>
    </Navbar>
  )
};

export default SearchNavbar;