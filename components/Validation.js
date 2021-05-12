import styles from '../styles/sass/components/Validation.module.scss';

export default function Validation(props) {
  let markup;

  console.log('props.loading: ', props.loading);
  console.log('props.status: ', props.status);

  if (!props.loading && props.status === null) {
    markup = null;
  }

  if (props.loading && props.status === null) {
    markup = (
      <img
        src="https://project-exam-2.s3.eu-north-1.amazonaws.com/loading_33648d3631.gif"
        className={styles.loading}
      />
    );
  }

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

  console.log('markup: ', markup);
  return <>{markup}</>;
}
