import styles from '../styles/sass/pages/Home.module.scss';
import Navbar from '../components/Navbar';
import HomeSearch from '../components/input/HomeSearch';
import { HOME_IMAGE_RIGHT } from '../constants/assets';
import { BASE_URL } from '../constants/api';

export default function Home({ hotelData }) {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.grid}>
          <div className={styles.grid__left}>
            <Navbar position="absolute" />
            <div className={styles.content}>
              <div className={styles.content__wrapper}>
                <h1 className={styles.heading}>
                  Book Your Stay <span>In Bergen</span>
                </h1>
                <div className="description">
                  Comfortable rooms in the heart of the city centre
                </div>
                <HomeSearch hotels={hotelData} />
              </div>
            </div>
          </div>
          <img src={HOME_IMAGE_RIGHT} alt="Home" />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(BASE_URL + 'hotels');
  const hotelData = await res.json();

  if (!hotelData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { hotelData },
  };
}
