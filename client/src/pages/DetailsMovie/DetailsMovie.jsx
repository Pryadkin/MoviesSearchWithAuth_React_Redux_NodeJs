import React, { useEffect, useState } from 'react';
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMovie } from '../../redux/actions';


const DetailsMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsMovie = useSelector(state => state.movieStateReducer.detailsMovie);
  const [isLoading, setLoading] = useState('Loading');

  // const preloaderImage = () => {
  //   const image = new Image();
  //   image.src = detailsMovie.poster_path;


  //   return new Promise((resolve, reject) => {
  //     const image = new Image();
  //     image.onload = resolve(image);
  //     image.onerror = reject;
  //     image.src = detailsMovie.poster_path;
  //   })
  // // }

  // const pre = preloaderImage()
  //   .then(image => {
  //     return image
  //   })
  //   .catch(err => console.log(err))

  const Details = () => {
    const {
      title,
      overview,
      poster_path,
      release_date
    } = detailsMovie;



    return (
      <>
        <h2>
          {title}
        </h2>

        <img src={poster_path} alt="" />

        <p>{overview}</p>
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

  }, [id])

  return (
    <>
      <DetailsMoviesNavbar id={id} />
      {detailsMovie ? <Details /> : "Loading"}

    </>
  )
}

export default DetailsMovie;