import { useState, useEffect } from 'react';
import styles from '../../styles/sass/components/cards/EnquiriesCard.module.scss';
import { BASE_URL } from '../../constants/api';
import { LOADING } from '../../constants/assets';
import Card from './DashboardCard';
import axios from 'axios';

export default function Enquiries({ hotelData, token }) {
  const [modalOpen, setModalOpen] = useState('');
  const [modalContent, setModalContent] = useState();
  const [enquiries, setEnquiries] = useState([]);

  // Check if JWT token exists
  useEffect(() => {
    getEnquiries(token);
  });

  async function getEnquiries(token) {
    try {
      const response = await axios.get(BASE_URL + 'enquiries', {
        headers: {
          Authorization: `Bearer ${token}`,
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
      <div className={styles.layout__wrapper}>
        {content.length < 1 ? (
          <img src={LOADING} className={styles.loading} />
        ) : (
          content
        )}
      </div>
    </>
  );
}
