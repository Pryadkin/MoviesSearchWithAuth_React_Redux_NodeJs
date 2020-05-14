import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';
import { Link } from 'react-router-dom';

import { Form, Button, Navbar, Nav } from 'react-bootstrap';

const SearchFilms = () => {
  const [title, setTitle] = useState('mad max');
  const [isWithPicture, setPicture] = useState(true);
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (title) {
      dispatch(fetchMovie(title, isWithPicture));
      setTitle('');
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Search movie</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="profile-link" to="/profile">Home</Link>
      </Nav>

      <Form inline onSubmit={submitHandler}>
        <Button
          variant="dark"
          onClick={() => setPicture(!isWithPicture)}
        >
          {isWithPicture ? "With picture" : "Without picture"}
        </Button>

        <Form.Control
          type="text"
          placeholder="Search movie"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Navbar>
  )
};

export default SearchFilms;