import styles from '../styles/sass/components/Input.module.scss';

export default function Input(props) {
  return (
    <>
      <input
        type={props.type}
        className={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        required={props.required}
        type={props.type}
        // ref={props.registerRef}
      />
      {/* {props.errors.name && <span>{props.errors.name.message}</span>} */}
    </>
  );
}
