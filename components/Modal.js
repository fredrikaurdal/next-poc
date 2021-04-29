import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import { CLOSE } from '../constants/assets';

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <img src={CLOSE} className={styles.close_button} onClick={onClose} />
          <Input placeholder={'Name'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Phone number'} />
        </div>
        <Button text="Enquire" style="button__input-submit" />
      </div>
    </>
  );
}
