import Link from 'next/link';
import styles from '../styles/sass/components/Navbar.module.scss';
import { BRAND } from '../constants/assets';

export default function Navbar(props) {
  return (
    <div
      className={`${styles.navbar} ${
        props.position === 'absolute' ? styles.absolute : ''
      }`}
    >
      <Link href="/">
        <a>
          <img src={BRAND} />
        </a>
      </Link>
      <div className={styles.navbar__links}>
        <Link href="/hotels">
          <a>Hotels</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
