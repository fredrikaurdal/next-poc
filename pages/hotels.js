import styles from '../styles/sass/pages/Hotels.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import axios from 'axios';

export default function Hotels(props) {
  return (
    <>
      <Navbar />
      <div className={`${styles.content} ${styles.absolute}`}>
        <HotelCard name="Fjord Hotel" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL + 'hotels');

    console.log(response.data);

    hotels = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}
