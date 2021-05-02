import Link from 'next/link';
import styles from '../styles/sass/components/Button.module.scss';

export default function Button(props) {
  let button;

  if (props.input === true) {
    button = (
      <input
        className={`${styles.button} ${styles[props.style[0]]} ${
          styles[props.style[1]]
        }`}
        type="submit"
        value={props.value}
      />
    );
  } else if (!props.link) {
    button = (
      <div
        onClick={props.onClick}
        className={`${styles.button} ${styles[props.style]}`}
        type={props.type}
      >
        {props.text}
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
  return <>{button}</>;
}
