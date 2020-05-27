import React, { useEffect } from 'react';
import DetailsMoviesNavbar from '../../components/DetailsMoviesNavbar/DetailsMoviesNavbar';
import { useParams } from 'react-router-dom';

import axios from "axios";

const DetailsMovies = () => {
  const { id } = useParams();

  useEffect(() => {
    try {
      const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?`, {
        params: {
          api_key: 'b72f01423c617f99db15bb46a8285ccb',
          language: 'en-US'
        }
      })
        .then(res => console.log(res))

    } catch (err) {
      console.log(err);
    }
  }, [id])


  return (
    <>
      <DetailsMoviesNavbar id={id} />
      DetailsMovies
    </>
  )
}

export default DetailsMovies;