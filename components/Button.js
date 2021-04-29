import Link from 'next/link';
import styles from '../styles/sass/components/Button.module.scss';

export default function Button(props) {
  let button;

  if (!props.link) {
    button = (
      <div onClick={props.onClick}>
        <a className={`${styles.button} ${styles[props.style]}`}>
          {props.text}
        </a>
      </div>
    );
  } else {
    button = (
      <Link href={props.link}>
        <a className={`${styles.button} ${styles[props.style]}`}>
          {props.text}
        </a>
      </Link>
    );
  }
  return <div>{button}</div>;
}
