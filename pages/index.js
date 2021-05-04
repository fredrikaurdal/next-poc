import styles from '../styles/sass/pages/Home.module.scss';
import Navbar from '../components/Navbar';
import { HOME_IMAGE_RIGHT } from '../constants/assets';

export default function Home() {
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
                <input
                  className={styles.input}
                  placeholder="Enter hotel name"
                />
              </div>
            </div>
          </div>
          <img src={HOME_IMAGE_RIGHT} alt="Home" />
        </div>
      </div>
    </>
  );
}
