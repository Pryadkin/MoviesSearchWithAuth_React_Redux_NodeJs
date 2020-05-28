import React, { useEffect, useState } from 'react';
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMovie } from '../../redux/actions';

import { Fade, Button } from 'react-bootstrap';

const DetailsMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsMovie = useSelector(state => state.movieStateReducer.detailsMovie);
  const [open, setOpen] = useState(false);

  const Details = () => {
    const {
      title,
      overview,
      poster_path,
      release_date
    } = detailsMovie;

    setTimeout(() => {
      setOpen(true);
    }, 500);

    return (
      <>

        <Fade in={open}>
          <div id="example-fade-text">
            <h2>
              {title}
            </h2>

            <img src={poster_path} alt="" />

            <p>{overview}</p>
          </div>
        </Fade>

      </>
    )
  };

  useEffect(() => {

    // If this movie is located in the redux store, we don't dispatch an action.
    if (detailsMovie) {
      if (detailsMovie.id !== +id) {
        dispatch(getDetailsMovie(id));
      }
    } else {
      dispatch(getDetailsMovie(id));
    }

  }, [id, detailsMovie]);

  return (
    <>

      <DetailsMoviesNavbar id={id} />
      {detailsMovie ? <Details /> : "Loading"}


    </>
  )
}

export default DetailsMovie;