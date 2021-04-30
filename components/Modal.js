import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import { CLOSE } from '../constants/assets';

export default function Modal({ open, onClose, name, email, number }) {
  if (!open) return null;

  const submitEnquiry = async (event) => {
    event.preventDefault();

    const res = await fetch(
      'https://strapi-project-exam-2.herokuapp.com/enquiries',
      {
        body: JSON.stringify({
          Name: event.target.name.value,
          Email: event.target.email.value,
          Phone_number: event.target.phone_number.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    const result = await res.json();

    console.log(result);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <img src={CLOSE} className={styles.close_button} onClick={onClose} />
        <form onSubmit={submitEnquiry} className={styles.form}>
          {name === true ? (
            <Input placeholder={'Name*'} required name="name" />
          ) : null}
          {email === true ? (
            <Input placeholder={'Email*'} required name="email" />
          ) : null}
          {number === true ? (
            <Input placeholder={'Phone number'} name="phone_number" />
          ) : null}

          <Button text="Enquire" style="button__input-submit" input={true} />
        </form>
      </div>
    </>
  );
}
