import styles from '../styles/sass/components/Price.module.scss';

export default function Price(props) {
  return (
    <div className={styles.price_wrapper}>
      <div className="price">€{props.price}</div>
      <div className={`info ${styles.price_wrapper__info}`}>Per night</div>
    </div>
  );
}
