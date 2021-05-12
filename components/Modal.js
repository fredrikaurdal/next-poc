import { useState } from 'react';
import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { CLOSE } from '../constants/assets';
import { BASE_URL } from '../constants/api';
import Form from '../components/Form';

export default function Modal({
  open,
  onClose,
  id,
  message,
  enquiry,
  date,
  form,
  hotelTitle,
}) {
  const dateObject = new Date(date);

  const day = dateObject.toLocaleString('en-GB', { day: 'numeric' });
  const month = dateObject.toLocaleString('en-GB', { month: 'long' });
  const year = dateObject.toLocaleString('en-GB', { year: 'numeric' });

  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal_wrapper}>
        <div
          className={`${styles.modal} ${
            message || (enquiry && styles.modal__full_width)
          }`}
        >
          <img src={CLOSE} className={styles.close_button} onClick={onClose} />
          {!form && (
            <div className={styles.modal__content}>
              {!form && message && <h2>{message.Subject}</h2>}
              {!form && enquiry && <h2>{hotelTitle}</h2>}
              <div className={`paragraph ${styles.paragraph}`}>
                {!form && message && message.Message}
                {!form && enquiry && <div>{enquiry.Name}</div>}
                {!form && enquiry && <div>{enquiry.Email}</div>}
                {!form && enquiry && <div>{enquiry.Phone_number}</div>}
              </div>
              <div className={styles.identifiers}>
                {!form && message && (
                  <div>{!form && message && message.Name}</div>
                )}
                {!form && message && (
                  <div>{!form && message && message.Email}</div>
                )}
                <div>{!form && `${day}. ${month} ${year}`}</div>
              </div>
            </div>
          )}

          {form && <Form formType={'enquiry'} id={id} />}
        </div>
      </div>
    </>
  );
}
