import React, { useEffect, useState } from 'react';
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMovie, cleanDetails } from '../../redux/actions';

import { Fade, Button } from 'react-bootstrap';

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
      release_date
    } = detailsMovie;

    return (
      <>


        <div id="example-fade-text">
          <h2>
            {title}
          </h2>

          <img src={poster_path} alt="" />

          <p>{overview}</p>
        </div>


      </>
    )
  };

  useEffect(() => {

    // dispatch(cleanDetails());
    dispatch(getDetailsMovie(id));
    setLoading(true);
    // If this movie is located in the redux store, we don't dispatch an action.
    // if (detailsMovie) {
    //   if (detailsMovie.id !== +id) {
    //     dispatch(getDetailsMovie(id));
    //     setTimeout(() => {
    //       setOpen(true);
    //     }, 50)
    //   }
    // } else {

    // }

    // if (id === null) setOpen(false)

  }, [id]);

  return (
    <>

      <DetailsMoviesNavbar id={id} />
      {isLoading && detailsMovie ? <Details /> : "Loading"}


    </>
  )
}

export default DetailsMovie;