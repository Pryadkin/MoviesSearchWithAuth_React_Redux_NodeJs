import React from 'react';

import styles from './index.module.scss';

const CardDate = ({ releaseDate }) => {
  const fullDate = new Date(releaseDate);

  if (!releaseDate) return '';

  const year = fullDate.getFullYear();
  const month = fullDate.getMonth();
  const day = fullDate.getDate();

  return (
    <h3
      className={styles.date}
    >
      {year}
    </h3>
  )
};

export default CardDate;
