import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/sass/components/Navbar.module.scss';
import { BRAND } from '../constants/assets';
import { getFromStorage, removeFromStorage } from '../utils/storage';

export default function Navbar(props) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length > 0) {
      setAuthenticated(true);
    }
  });

  const router = useRouter();

  function logout() {
    removeFromStorage('token');
    router.push('/login');
  }

  return (
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
        <Link href="/">
          <a>Contact</a>
        </Link>
        {!authenticated ? (
          <Link href="/login">
            <a>Login</a>
          </Link>
        ) : (
          <div onClick={logout}>
            <a>Logout</a>
          </div>
        )}
      </div>
    </div>
  );
}
