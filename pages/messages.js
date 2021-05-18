import Head from 'next/head';
import Layout from '../components/layouts/DashboardLayout';
import MessagesCard from '../components/cards/MessagesCard';

export default function Messages() {
  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Layout>
        <MessagesCard />
      </Layout>
    </>
  );
}
