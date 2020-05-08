import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';

import { Form, Button, Navbar, Nav } from 'react-bootstrap';

const SearchFilms = () => {
  const [title, setTitle] = useState('mad max');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(fetchMovie(title));
    setTitle('');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Search movie</Navbar.Brand>
      <Nav className="mr-auto"></Nav>

      <Form inline onSubmit={submitHandler}>
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