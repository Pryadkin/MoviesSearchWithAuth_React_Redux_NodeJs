import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './SearchFilms.module.scss';

const SearchFilms = () => {
  const [title, setTitle] = useState('');
  const [isWithPicture, setPicture] = useState(true);
  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();
    if (title) {
      history.push(`/search/${title}/1`)
      setTitle('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex flex-row bd-highlight">
        <div className="navbar-brand">Search movie</div>

        <div className="d-flex align-content-center flex-wrap">
          <Link className={styles.home_link} to="/profile">Home</Link>
        </div>
      </div>

      <div className="d-flex flex-row-reverse bd-highlight">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={submitHandler}
        >
          <input
            className="form-control mr-sm-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-light"
          >
            Search
          </button>
        </form>
      </div>
    </nav>






    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand>Search movie</Navbar.Brand>
    //   <Nav className="mr-auto">
    //     <Link className="profile-link" to="/profile">Home</Link>
    //   </Nav>

    //   <Form inline onSubmit={submitHandler}>
    //     <Button
    //       variant="dark"
    //       onClick={() => setPicture(!isWithPicture)}
    //     >
    //       {isWithPicture ? "With picture" : "Without picture"}
    //     </Button>



    //     <Form.Control
    //       type="text"
    //       placeholder="Search movie"
    //       value={title}
    //       onChange={e => setTitle(e.target.value)}
    //     />

    //     <Button
    //       variant="primary"
    //       type="submit"
    //     >
    //       Submit
    //     </Button>
    //   </Form>
    // </Navbar>
  )
};

export default SearchFilms;