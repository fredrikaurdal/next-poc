import Link from 'next/link';

import styles from '../styles/sass/components/HotelCard.module.scss';

export default function HotelCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} />
      {props.name}
    </div>
  );
}
