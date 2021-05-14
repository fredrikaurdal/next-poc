import styles from '../styles/sass/pages/Hotels.module.scss';
import { BASE_URL } from '../constants/api';
import Navbar from '../components/navbar/MainNavbar';
import HotelCard from '../components/cards/HotelCard';
import axios from 'axios';

export default function Hotels(props) {
  const hotels = props.hotels.map((hotel) => (
    <HotelCard
      key={hotel.id}
      id={hotel.id}
      name={hotel.Name}
      image={hotel.Image[0].formats.small.url}
      address={hotel.Address}
      rating={hotel.Rating}
      price={hotel.Price}
    />
  ));
  return (
    <>
      <Navbar />
      <div className={styles.cards}>
        <div className={styles.cards__wrapper}>{hotels}</div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL + 'hotels');

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
