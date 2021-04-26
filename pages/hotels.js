import styles from '../styles/sass/pages/Hotels.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import axios from 'axios';

export default function Hotels(props) {
  const hotels = props.hotels.map((hotel) => (
    <HotelCard
      key={hotel._id}
      name={hotel.Name}
      image={hotel.Image[0].formats.small.url}
    />
  ));
  return (
    <>
      <Navbar />
      <div className={styles.content}>{hotels}</div>
    </>
  );
}

export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL + 'hotels');

    // console.log(response.data);

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
