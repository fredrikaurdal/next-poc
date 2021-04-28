import styles from '../../styles/sass/pages/Hotels.module.scss';
import { BASE_URL } from '../../constants/api';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Hotel({ hotel }) {
  return <>{hotel.Name}</>;
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + 'hotels');
    const hotels = response.data;

    const paths = hotels.map((hotel) => ({
      params: { slug: hotel.id },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = BASE_URL + 'hotels/' + params.slug;

  let hotel = null;

  try {
    const response = await axios.get(url);

    hotel = response.data;
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}
