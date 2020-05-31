import React, { useEffect, useState } from 'react';
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMovie } from '../../redux/actions';
import ReactStars from 'react-stars';
import getStyledBudget from './helpers/getStyledBudget';

import { Container, Row, Col, Image } from 'react-bootstrap';
import dollarIcon from '../../img/icons/dollarIcon.png';
import styles from './DetailsMovie.module.scss';
import cx from 'classnames';

const DetailsMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsMovie = useSelector(state => state.movieStateReducer.detailsMovie);
  const [isLoading, setLoading] = useState(false);

  const Details = () => {
    const {
      title,
      overview,
      poster_path,
      release_date,
      runtime,
      vote_average,
      revenue,
      budget
    } = detailsMovie;

    return (
      <Container className={cx(styles.container, "p-0 px-5 px-md-0")}>
        <Row>
          <Col lg={4} md={6} className="d-flex justify-content-center justify-content-sm-center">
            <Image className={styles.poster} src={poster_path} alt={title} />
          </Col>

          <Col lg={8} md={6}>
            <h2>
              {title}
            </h2>

            <ul>
              {
                release_date
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Release Date:
                    </div>
                    <div>
                      {release_date}
                    </div>
                  </li>
                  : null
              }

              {
                runtime
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Runtime:
                    </div>
                    <div>
                      {runtime} minutes
                    </div>
                  </li>
                  : null
              }

              {
                budget
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Budget:
                    </div>
                    <div>
                      <img
                        className={styles.dollar_icon}
                        src={dollarIcon}
                        alt="dollarIcon"
                      />
                      {getStyledBudget(budget)}
                    </div>
                  </li>
                  : null
              }

              {
                revenue
                  ?
                  <li>
                    <div className={styles.list_title}>
                      Revenue:
                    </div>
                    <div>
                      <img
                        className={styles.dollar_icon}
                        src={dollarIcon}
                        alt="dollarIcon"
                      />
                      {getStyledBudget(revenue)}
                    </div>
                  </li>
                  : null
              }
            </ul>

            {
              vote_average
                ?
                <ReactStars
                  className="mt-0 mb-5"
                  count={10}
                  edit={false}
                  value={vote_average}
                  size={30}
                  color2={'gold'}
                  half
                />
                : null
            }

            {
              overview
                ?
                <p>{overview}</p>
                : null
            }
          </Col>
        </Row>
      </Container>
    )
  };

  useEffect(() => {
    dispatch(getDetailsMovie(id));
    setLoading(true);
  }, [id]);

  return (
    <>
      <DetailsMoviesNavbar id={id} />
      {isLoading && detailsMovie ? <Details /> : "Loading"}
    </>
  )
}

export default DetailsMovie;