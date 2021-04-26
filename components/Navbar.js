import Link from 'next/link';

import styles from '../styles/sass/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img src="https://project-exam-2.s3.eu-north-1.amazonaws.com/logo_0fa503e974.svg" />
        </a>
      </Link>
      <div className={styles.navbar__links}>
        <Link href="/hotels">
          <a>Hotels</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
