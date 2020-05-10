import React from 'react';

const CardMovie = (props) => {
  const {
    id,
    title,
    poster,
    overview
  } = props;

  return (
    <div className="card">
      <div className="card-body">
        <img src={poster} alt="" />
        <h5 className="card-title">
          {title}
        </h5>
        {/* <p className="card-text">
          {overview}
        </p> */}
      </div>
    </div>
  )
};

export default CardMovie;