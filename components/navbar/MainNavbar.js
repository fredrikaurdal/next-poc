import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/sass/components/navbar/MainNavbar.module.scss';
import { BRAND } from '../../constants/assets';
import { getFromStorage } from '../../utils/storage';

export default function Navbar(props) {
  const [authenticated, setAuthenticated] = useState(false);

  // Check if JWT token exists
  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length > 0) {
      setAuthenticated(true);
    }
  });

  return (
    <>
      <div
        className={`${styles.navbar} ${
          props.position === 'absolute' ? styles.absolute : ''
        }`}
      >
        <Link href="/">
          <a>
            <img src={BRAND} />
          </a>
        </Link>
        <div className={styles.navbar__links}>
          <Link href="/hotels">
            <a>Hotels</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          {!authenticated ? (
            <Link href="/login">
              <a>Login</a>
            </Link>
          ) : (
            <Link href="/messages">
              <a>Dashboard</a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
