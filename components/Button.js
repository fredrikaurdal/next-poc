import Link from 'next/link';

import styles from '../styles/sass/components/Button.module.scss';

export default function Button(props) {
  return (
    <div className={`${styles.button} ${styles[props.style]}`}>
      {props.text}
    </div>
  );
}
