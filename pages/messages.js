import Layout from '../components/layouts/DashboardLayout';
import MessagesCard from '../components/cards/MessagesCard';

export default function Messages() {
  // console.log(process.env.BASE_URL);
  return (
    <>
      <Layout>
        <MessagesCard />
      </Layout>
    </>
  );
}
