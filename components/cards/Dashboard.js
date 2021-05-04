import styles from '../../styles/sass/components/cards/Dashboard.module.scss';

export default function Card({ title, description, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.title}>Booking room question</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
          ullamcorper elit. Ipsum dolor sit amet, consectetur elit...
        </div>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.date}>14. April 2021</div>
      </div>
    </div>
  );
}
