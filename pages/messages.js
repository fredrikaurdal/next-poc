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

export default function Messages() {
  const [modalOpen, setModalOpen] = useState('');
  const [modalContent, setModalContent] = useState();
  const [messages, setMessages] = useState([]);

  const router = useRouter();

  // Check if JWT token exists
  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length < 1) {
      router.push('/login');
    }

    {/* prettier-ignore */}
    (async function getMessages() {
      try {
        const response = await axios.get(BASE_URL + 'messages', {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  const content = messages.map((message) => (
    <div key={message.id}>
      <Card
        param={42}
        title={message.Subject}
        description={message.Message}
        date={message.createdAt}
        onClick={() => {
          setModalOpen(message.id);
          setModalContent(message);
        }}
        open={modalOpen}
        onClose={() => setModalOpen('')}
        message={modalContent}
        date={message.createdAt}
        id={message.id}
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
