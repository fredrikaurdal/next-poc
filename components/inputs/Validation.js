import styles from '../../styles/sass/components/inputs/Validation.module.scss';
import { LOADING } from '../../constants/assets';

export default function Validation(props) {
  let markup;

  if (!props.loading && props.status === null) {
    markup = null;
  }

  if (props.loading && props.status === null) {
    markup = <img src={LOADING} className={styles.loading} />;
  }

  if (props.status === 200) {
    markup = (
      <div className={`${styles.status}`}>{'Submitted successfully'}</div>
    );
  } else if (props.status === 403) {
    markup = (
      <div className={`${styles.status} ${styles.status__error}`}>
        {'Not authorized'}
      </div>
    );
  } else if (props.error) {
    let error;

    if (JSON.stringify(props).includes('Phone_number')) {
      error = 'Phone number is missing';
    } else if (JSON.stringify(props).includes('Price')) {
      error = 'Price is missing';
    } else if (JSON.stringify(props).includes('Rating')) {
      error = 'Rating is missing';
    }

    markup = (
      <div className={`${styles.status} ${styles.status__error}`}>
        {error ? error : props.error}
      </div>
    );
  }

  return <>{markup}</>;
}
