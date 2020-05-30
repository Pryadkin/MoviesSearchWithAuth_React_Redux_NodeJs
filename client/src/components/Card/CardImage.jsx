import React from 'react';
import nophoto from '../../img/nophoto.png';
import { Link, useHistory, useParams } from 'react-router-dom';

import cx from 'classnames';
import styles from './index.module.scss';

const CardImage = ({ poster, title, id }) => {
  const { movie, page } = useParams();
  // const history = useHistory();
  // const ref = `/movie/${id}`;

  // const onClickHandler = () => {
  //   history.push(`/search/${movie}/${page}/${id}`);
  // };

  const ImageLink = props => (
    <Link
      to={`/search/${movie}/${page}/${id}`}

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