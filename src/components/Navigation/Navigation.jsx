import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={styles.header}>
        {' '}
        <nav className={styles.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home Page
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts Page
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
