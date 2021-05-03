import styles from '../styles/sass/components/Input.module.scss';
import Validation from '../components/Validation';

export default function Input(props) {
  let inputTag;

  if (props.textarea) {
    inputTag = (
      <textarea
        type={props.type}
        className={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        required={props.required}
        type={props.type}
        rows="4"
      />
    );
  } else {
    inputTag = (
      <input
        type={props.type}
        className={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        required={props.required}
        type={props.type}
      />
    );
  }
  return (
    <>
      {inputTag}
      {props.error && <Validation error={props.error} />}
    </>
  );
}
