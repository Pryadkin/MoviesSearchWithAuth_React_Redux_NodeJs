import React from 'react';
import nophoto from '../../img/nophoto.png';

import cx from 'classnames';
import styles from './index.module.scss';

const CardImage = ({ poster, title, href = '#' }) => {
  const ImageLink = props => (
    <a
      href={href}
      target="_blank"
      title={title}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
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
