import { useState } from 'react';
import styles from '../styles/sass/components/Validation.module.scss';

export default function Validation(props) {
  let markup;

  const [success, setSuccess] = useState('Submitted successfully');

  if (props.status === 200) {
    markup = <div className={`${styles.status}`}>{success}</div>;

    setTimeout(function () {
      setSuccess('');
    }, 3000);
  } else if (props.error) {
    markup = (
      <div className={`${styles.status} ${styles.status__error}`}>
        {props.error}
      </div>
    );
  }
  return <>{markup}</>;
}
