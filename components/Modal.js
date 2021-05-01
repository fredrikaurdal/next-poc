import { useState } from 'react';
import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import { CLOSE } from '../constants/assets';
import { BASE_URL } from '../constants/api';

export default function Modal({ open, onClose, name, email, number }) {
  if (!open) return null;

  const [status, setStatus] = useState(null);

  const submitEnquiry = async (event) => {
    event.preventDefault();

    const res = await fetch(BASE_URL + 'enquiries', {
      body: JSON.stringify({
        Name: event.target.Name.value,
        Email: event.target.Email.value,
        Phone_number: event.target.Phone_number.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    event.target.reset();

    const result = await res;

    // result = await res.json();

    setStatus(result.status);

    console.log(result.status);
  };

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <img src={CLOSE} className={styles.close_button} onClick={onClose} />
        <form onSubmit={submitEnquiry} className={styles.form}>
          {name === true ? (
            <Input
              placeholder={'Name *'}
              required={true}
              name="Name"
              // errors={result}
            />
          ) : null}
          {email === true ? (
            <Input
              placeholder={'Email *'}
              required={true}
              name="Email"
              type="email"
            />
          ) : null}
          {number === true ? (
            <Input
              placeholder={'Phone number'}
              name="Phone_number"
              type="number"
            />
          ) : null}

          <Button text="Enquire" style="button__input-submit" input={true} />
          <div className={styles.status}>
            {status === 200 && 'Submitted successfully'}
          </div>
        </form>
      </div>
    </>
  );
}
