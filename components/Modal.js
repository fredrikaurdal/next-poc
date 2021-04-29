import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import { CLOSE } from '../constants/assets';

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <img src={CLOSE} className={styles.close_button} onClick={onClose} />
        <Input placeholder={'Name'} />
      </div>
    </>
  );
}
