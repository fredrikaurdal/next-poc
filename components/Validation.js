import styles from '../styles/sass/components/Validation.module.scss';

export default function Validation(props) {
  let markup;

  if (props.status === 200) {
    markup = (
      <div className={`${styles.status}`}>{'Submitted successfully'}</div>
    );
  } else if (props.error) {
    console.log(`Props: ${JSON.stringify(props).includes('Phone_number')}`);

    markup = (
      <div className={`${styles.status} ${styles.status__error}`}>
        {JSON.stringify(props).includes('Phone_number')
          ? 'Phone number must be at least 8 characters'
          : props.error}
      </div>
    );
  }
  return <>{markup}</>;
}
