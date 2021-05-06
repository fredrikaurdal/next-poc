import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/sass/components/DashboardNavbar.module.scss';
import { BRAND_LETTER } from '../constants/assets';
import { getFromStorage, removeFromStorage } from '../utils/storage';

export default function NavbarDashboard(props) {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(router.pathname);

  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length > 0) {
      setAuthenticated(true);
    }
  });

  function logout() {
    removeFromStorage('token');
    router.push('/login');
  }

  // console.log(currentPage);
  // currentPage === '/messages' &&

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img src={BRAND_LETTER} />
        </a>
      </Link>
      <div className={styles.navbar__links}>
        <Link href="/messages">
          <a
            className={
              currentPage === '/messages' ? styles.navbar__links__current : null
            }
          >
            Messages
          </a>
        </Link>
        <Link href="/enquiries">
          <a
            className={
              currentPage === '/enquiries'
                ? styles.navbar__links__current
                : null
            }
          >
            Enquiries
          </a>
        </Link>
        <Link href="/add-establishment">
          <a
            className={
              currentPage === '/add-establishment'
                ? styles.navbar__links__current
                : null
            }
          >
            Add Establishment
          </a>
        </Link>
      </div>
      {!authenticated ? (
        <Link href="/login">
          <a>Login</a>
        </Link>
      ) : (
        <div className={styles.logout} onClick={logout}>
          <a>Logout</a>
        </div>
      )}
    </div>
  );
}
