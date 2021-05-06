import styles from '../../styles/sass/components/cards/Dashboard.module.scss';

export default function Card({ title, description, date, onClick }) {
  const dateObject = new Date(date);

  const day = dateObject.toLocaleString('en-GB', { day: 'numeric' });
  const month = dateObject.toLocaleString('en-GB', { month: 'long' });
  const year = dateObject.toLocaleString('en-GB', { year: 'numeric' });

  console.log(year);
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.card__top}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>
          {description.substring(0, 140) + '...'}
        </div>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.date}>
          {day}. {month} {year}
        </div>
      </div>
    </div>
  );
}
