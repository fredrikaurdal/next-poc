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

export default function Messages({ messages }) {
  // console.log(messages);

  // const [param, setParam] = useState();
  const [token, setToken] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  // Check if JWT token exists
  useEffect(() => {
    const jwt = getFromStorage('token');

    setToken(jwt);

    if (jwt.length < 1) {
      router.push('/login');
    }
  });

  const content = messages.map((message) => (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalContent}
      />
      <Layout>
        <Card
          key={message.id}
          param={42}
          title={message.Subject}
          description={message.Message}
          date={message.createdAt}
          onClick={() => {
            setModalOpen(true);
            setModalContent(message);
          }}
        />
      </Layout>
    </>
  ));

  return (
    <div>
      <Navbar />
      {content}
      {/* <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        messages={messages}
      />
      <Layout>
        <Card
          param={42}
          title={'Booking room question'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ullamcorper elit. Ipsum dolor sit amet, consectetur elit...'
          }
          date={'14. April 2021'}
          onClick={() => setModalOpen(true)}
        />
      </Layout> */}
    </div>
  );
}

export async function getStaticProps() {
  let messages = [];

  try {
    const response = await axios.get(BASE_URL + 'messages', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGVjOTc5MzA5YzdlMDAxNTlhMTdjYSIsImlhdCI6MTYyMDE5ODEyNiwiZXhwIjoxNjIyNzkwMTI2fQ.xzBcesCn3fgLLQK6sb0RIljamjZrIGKX6jqtGcwKkMc`,
      },
    });

    // console.log(response);

    messages = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      messages: messages,
    },
  };
}
