import { useEffect, useState } from 'react';
import styles from '../../styles/sass/components/layouts/DashboardLayout.module.scss';
import React from 'react';
import { getFromStorage } from '../../utils/storage';
import { useRouter } from 'next/router';
import Navbar from '../navbar/DashboardNavbar';

export default function Layout({ children }) {
  const [token, setToken] = useState();

  const router = useRouter();

  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length < 1) {
      router.push('/login');
    }

    setToken(jwt);
  });
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        {React.cloneElement(children, { token: token })}
      </div>
    </>
  );
}
