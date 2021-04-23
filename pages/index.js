import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.component}>
      <h1 className="heading--home">
        Book Your Stay <span>In Bergen</span>
      </h1>
    </div>
  );
}
