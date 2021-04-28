import Link from 'next/link';
import Button from '../components/Button';
import styles from '../styles/sass/components/HotelCard.module.scss';
import Rating from '../components/Rating';

export default function HotelCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={props.image} />
      <div className={styles.card__center}>
        <Rating rating={props.rating} />
        <h2 className={styles.card__name}>{props.name}</h2>
        <div className="description">{props.address}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.price_wrapper}>
          <div className="price">€{props.price}</div>
          <div className={`info ${styles.price_wrapper__info}`}>Per night</div>
        </div>
        <Button
          text="More"
          style="button--hotel-listing"
          link={`hotel/${props.id}`}
        />
      </div>
    </div>
  );
}
