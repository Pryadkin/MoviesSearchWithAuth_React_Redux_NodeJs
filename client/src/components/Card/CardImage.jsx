import React from 'react';
import nophoto from '../../img/nophoto.png';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from './index.module.scss';

const CardImage = ({ poster, title, id }) => {
  const ref = `/movie/${id}`;

  const ImageLink = props => (
    <Link
      to={ref}
      title={title}
    >
      {props.children}
    </Link>
  );

  return (
    <>
      {
        // catch path with "w300null": https://image.tmdb.org/t/p/w300null
        !poster.includes('null')
          ?
          <div className={styles.image}>
            <ImageLink>
              <img src={poster} alt={title} />
            </ImageLink>
          </div>
          :
          <div className={cx(styles.image, styles.nophoto)}>
            <ImageLink>
              <img src={nophoto} alt={title} />
            </ImageLink>
          </div>
      }
    </>
  )
};

export default CardImage;
