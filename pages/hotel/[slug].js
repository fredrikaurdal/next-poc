import styles from '../../styles/sass/pages/[slug].module.scss';
import { BASE_URL } from '../../constants/api';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import Price from '../../components/Price';
import Modal from '../../components/Modal';
import { useState } from 'react';

// >>> Include hotel ID in enquiry POST request

export default function Hotel({ hotel }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        name={true}
        email={true}
        number={true}
      />
      <div className={styles.content}>
        <div className={styles.content__left}>
          <img src={hotel.Image[0].url} className={styles.image} />
          <div className={`${styles.address} description`}>{hotel.Address}</div>
        </div>
        <div className={styles.content__right}>
          <div className={styles.info_start}>
            <Rating rating={hotel.Rating} />
            <h1>{hotel.Name}</h1>
            <div className="paragraph">{hotel.Description}</div>
          </div>

          <div className={styles.info_end}>
            <Price price={hotel.Price} />
            <Button
              text="Book Now"
              style="button__hotel_listing"
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
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
