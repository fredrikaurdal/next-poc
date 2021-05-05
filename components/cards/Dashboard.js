import Link from 'next/link';

import styles from '../../styles/sass/components/cards/Dashboard.module.scss';

export default function Card({ title, description, date, param, onClick }) {
  return (
    <Link href={`/messages?id=${param}`}>
      <a className={styles.card} onClick={onClick}>
        <div className={styles.card__top}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.card__bottom}>
          <div className={styles.date}>{date}</div>
        </div>
      </a>
    </Link>
  );
}
