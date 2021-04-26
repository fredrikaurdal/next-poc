import styles from '../styles/sass/pages/Home.module.scss';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.grid}>
          <div className={styles.grid__left}>
            <Navbar />
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
          <img
            src="https://project-exam-2.s3.eu-north-1.amazonaws.com/sharon_christina_rorvik_fwcnv0_W_Rs_TY_unsplash_cropped_compressed_5480db2dfd.jpg"
            alt="Home"
          />
        </div>
      </div>
    </>
  );
}
