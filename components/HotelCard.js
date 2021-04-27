import Link from 'next/link';

import styles from '../styles/sass/components/HotelCard.module.scss';

export default function HotelCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={props.image} />
      <div className={styles.card__center}>
        <div className={styles.card__rating}>{props.rating}</div>
        <h2 className={styles.card__name}>{props.name}</h2>
        <div className={styles.card__address}>{props.address}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.card__price}>{props.price}</div>
        <div>Button</div>
      </div>
    </div>
  );
}
