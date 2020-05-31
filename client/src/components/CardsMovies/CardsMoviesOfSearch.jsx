import React from 'react';
import Card from '../Card';
import MyLoader from '../MyLoader/MyLoader';
import Pagination from '../Pagination/Pagination';
import TotalResults from '../TotalResults/TotalResults';

import { Container, Row, Col } from 'react-bootstrap';

const CardsMoviesOfSearch = ({ movies, isLoading, profileMovies }) => {
  const {
    results,
    total_pages,
    total_results
  } = movies;

  const Cards = () => {
    return (
      <Container fluid>
        <Row>
          <Col className="justify-content-center flex-wrap d-flex">
            {
              results.map(movie => {
                for (let i = 0; i < profileMovies.length; i++) {
                  if (movie.id === profileMovies[i].id) {
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
                  }
                }
                return (
                  <Card
                    mechanics='MOVIE_OF_SEARCH'
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                )
              })
            }
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Pagination
        amountBtns={5}
        totalPages={total_pages}
      />
      <TotalResults totalResults={total_results} />

      {
        isLoading
          ? <MyLoader />
          : <Cards />
      }

    </>
  )
}

export default CardsMoviesOfSearch;