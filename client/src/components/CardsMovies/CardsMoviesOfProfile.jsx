import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import MyLoader from '../MyLoader/MyLoader';

import { Container, Row, Col } from 'react-bootstrap';

const CardsMovies = ({ movies }) => {
  const isLoading = useSelector(state => state.movieStateReducer.isLoading);

  return (
    <Container fluid>
      <Row>
        <Col className="justify-content-center flex-wrap d-flex">
          {movies
            ? isLoading
              ? <MyLoader />
              : movies.map(movie => {
                return (
                  <Card
                    mechanics='MOVIE_OF_PROFILE'
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                )
              })
            : null}
        </Col>
      </Row>
    </Container>
  )
}

export default CardsMovies;