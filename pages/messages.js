import styles from '../styles/sass/pages/Messages.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import Card from '../components/cards/Dashboard';
import axios from 'axios';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Card />
      </Layout>
      {/* <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div> */}
    </div>
  );
}
