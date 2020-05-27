import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth.hook';

import styles from "./ProfileNavbar.module.scss";
import cx from 'classnames';

const ProfileNavbar = () => {
  const { logout, userData } = useAuth();

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-between">
      <div className="d-flex flex-row bd-highlight">
        {
          userData
            ? <div className={cx(styles.navbar_brand, "navbar-brand")}>{userData.userName}</div>
            : null
        }

        <div className="d-flex align-content-center flex-wrap">
          <Link
            className={styles.search_link}
            to="/search"
          >
            Search
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-outline-light"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </nav>
  )
}

export default ProfileNavbar;