import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./DetailsMoviesNavbar.module.scss";
import cx from 'classnames';

const DetailsMoviesNavbar = ({ id }) => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between">
      <div className="d-flex flex-row bd-highlight">
        <div className={cx(styles.navbar_brand, "navbar-brand")}>{id}</div>


        <div className="d-flex align-content-center flex-wrap">
          <Link
            className={styles.search_link}
            to="/search"
          >
            Search
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default DetailsMoviesNavbar;