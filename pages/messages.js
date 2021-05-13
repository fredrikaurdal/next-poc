import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import MessagesCard from '../components/cards/Messages';

export default function Messages() {
  return (
    <>
      <Navbar />
      <Layout>
        <MessagesCard />
      </Layout>
    </>
  );
}
