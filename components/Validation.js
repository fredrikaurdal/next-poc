import styles from '../styles/sass/components/Validation.module.scss';

export default function Validation(props) {
  let markup;

  if (props.status === 200) {
    markup = (
      <div className={`${styles.status}`}>{'Submitted successfully'}</div>
    );
  } else if (props.error) {
    markup = (
      <div className={`${styles.status} ${styles.status__error}`}>
        {props.error}
      </div>
    );
  }
  return <>{markup}</>;
}
