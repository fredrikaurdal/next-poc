import styles from '../styles/sass/components/Validation.module.scss';

export default function Validation(props) {
  let markup;

  if (props.status === 200) {
    markup = (
      <div className={`${styles.status}`}>{'Submitted successfully'}</div>
    );
  } else if (props.error) {
    console.log(`Props: ${JSON.stringify(props).includes('Phone_number')}`);

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
