import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/sass/pages/Enquiries.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import Card from '../components/cards/Dashboard';
import axios from 'axios';
import { getFromStorage } from '../utils/storage';

export default function Enquiries({ hotelData }) {
  const [modalOpen, setModalOpen] = useState('');
  const [modalContent, setModalContent] = useState();
  const [enquiries, setEnquiries] = useState([]);

  const router = useRouter();

  // Check if JWT token exists
  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length < 1) {
      router.push('/login');
    }

    getEnquiries(jwt);
  });

  async function getEnquiries(jwt) {
    try {
      const response = await axios.get(BASE_URL + 'enquiries', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setEnquiries(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const content = enquiries.map((enquiry) => (
    <div key={enquiry.id}>
      <Card
        param={42}
        name={enquiry.Name}
        title={enquiry.id}
        email={enquiry.Email}
        phone_number={enquiry.Phone_number}
        date={enquiry.createdAt}
        onClick={() => {
          setModalOpen(enquiry.id);
          setModalContent(enquiry);
        }}
        open={modalOpen}
        onClose={() => setModalOpen('')}
        enquiry={modalContent}
        date={enquiry.createdAt}
        id={enquiry.id}
        hotel_id={enquiry.Hotel_id}
        hotels={hotelData}
      />
    </div>
  ));

  return (
    <>
      <Navbar />
      <Layout>
        <div className={styles.layout__wrapper}>{content}</div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(BASE_URL + 'hotels');
  const hotelData = await res.json();

  if (!hotelData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { hotelData },
  };
}
