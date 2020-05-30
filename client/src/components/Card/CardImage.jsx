import React from 'react';
import nophoto from '../../img/nophoto.png';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from './index.module.scss';

const CardImage = ({ poster, title, id }) => {
  const ref = `/details/${id}`;

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
      <div className={cx(styles.image, !poster && styles.nophoto)}>
        <ImageLink>
          <img
            src={poster || nophoto}
            alt={title} />
        </ImageLink>
      </div>
    </>
  )
};

export default CardImage;