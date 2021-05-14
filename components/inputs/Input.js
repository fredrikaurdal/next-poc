import styles from '../../styles/sass/components/inputs/Input.module.scss';
import Validation from './Validation';

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
        onChange={props.onChange}
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
