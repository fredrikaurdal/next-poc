import styles from '../styles/sass/components/Rating.module.scss';
import { STAR } from '../constants/assets';

export default function Button(props) {
  return (
    <div className={styles.card__rating}>
      <img src={STAR} />
      <div className="info">{props.rating}</div>
    </div>
  );
}
