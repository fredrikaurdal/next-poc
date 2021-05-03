import styles from '../styles/sass/pages/Messages.module.scss';
import { BASE_URL } from '../constants/api';
import DashboardNavbar from '../components/DashboardNavbar';
import axios from 'axios';

export default function Dashboard(props) {
  return (
    <>
      <DashboardNavbar />
      {/* <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div> */}
    </>
  );
}
