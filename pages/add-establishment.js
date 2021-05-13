import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import { getFromStorage } from '../utils/storage';
import Form from '../components/Form';
import styles from '../styles/sass/pages/AddEstablishment.module.scss';

export default function AddEstablishment() {
  const [token, setToken] = useState();

  const router = useRouter();

  // Check if JWT token exists
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
      <Layout>
        <Form
          token={token}
          formType={'add-establishment'}
          style={'top-margin'}
        />
      </Layout>
    </>
  );
}
