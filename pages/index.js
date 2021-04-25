import styles from '../styles/sass/components/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.home__grid}>
        <h1 className={styles.heading}>
          Book Your Stay <span>In Bergen</span>
        </h1>
        <img className="home__image" />
      </div>
    </>
  );
}
