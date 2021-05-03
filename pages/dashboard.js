import styles from '../styles/sass/pages/Dashboard.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function Dashboard(props) {
  return (
    <>
      <Navbar />
      Dashboard
      {/* <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div> */}
    </>
  );
}
