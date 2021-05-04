import styles from '../styles/sass/pages/Messages.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/DashboardNavbar';
import Layout from '../components/layouts/Dashboard';
import axios from 'axios';

export default function Dashboard(props) {
  return (
    <div>
      <Navbar />
      <Layout />
      {/* <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div> */}
    </div>
  );
}
