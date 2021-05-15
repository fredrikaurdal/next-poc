import { useState, useEffect } from 'react';
import styles from '../../styles/sass/components/cards/MessagesCard.module.scss';
import { BASE_URL } from '../../constants/api';
import { LOADING } from '../../constants/assets';
import Card from './DashboardCard';
import axios from 'axios';

export default function Messages({ token }) {
  const [modalOpen, setModalOpen] = useState('');
  const [modalContent, setModalContent] = useState();
  const [messages, setMessages] = useState([]);

  // Check if JWT token exists
  useEffect(() => {
    getMessages(token);
  });

  async function getMessages(token) {
    try {
      const response = await axios.get(BASE_URL + 'messages', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
