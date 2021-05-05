import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/sass/pages/Messages.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import Card from '../components/cards/Dashboard';
import axios from 'axios';
import Modal from '../components/Modal';
import { getFromStorage } from '../utils/storage';

export default function Dashboard() {
  // const [param, setParam] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(false);

  // Check if JWT token exists
  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length > 0) {
      setAuthenticated(true);
      console.log(authenticated);
    } else {
      router.push('/login');
      console.log(authenticated);
    }
  });

  // const router = useRouter();
  // console.log(router.query);

  // const fetchMessages = async => {

  //   const res = await fetch(BASE_URL + 'messages', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: 'GET',
  //   });

  //   const response = await res;
  //   const json = await res.json();

  //   console.log(json);
  // };

  return (
    <div>
      <Navbar />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        name={true}
        email={true}
        number={true}
      />
      <Layout>
        <Card
          param={42}
          title={'Booking room question'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ullamcorper elit. Ipsum dolor sit amet, consectetur elit...'
          }
          date={'14. April 2021'}
          // onClick={() => setModalOpen(true)}
          onClick={() => console.log(test)}
        />
      </Layout>
      {/* <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div> */}
    </div>
  );
}
