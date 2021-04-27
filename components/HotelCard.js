import Link from 'next/link';

import styles from '../styles/sass/components/HotelCard.module.scss';

export default function HotelCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={props.image} />
      <div className={styles.card__center}>
        <div className={styles.card__rating}>
          <img src="https://project-exam-2.s3.eu-north-1.amazonaws.com/star_a832bdb4f1.svg" />
          <div className="info">{props.rating}</div>
        </div>
        <h2 className={styles.card__name}>{props.name}</h2>
        <div className="description">{props.address}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.price_wrapper}>
          <div className="price">€{props.price}</div>
          <div className={`info ${styles.price_wrapper__info}`}>Per night</div>
        </div>
        <div>Button</div>
      </div>
    </div>
  );
}
