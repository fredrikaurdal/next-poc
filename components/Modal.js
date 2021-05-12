import { useState } from 'react';
import styles from '../styles/sass/components/Modal.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { CLOSE } from '../constants/assets';
import { BASE_URL } from '../constants/api';

export default function Modal({
  open,
  onClose,
  name,
  email,
  number,
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

  const [status, setStatus] = useState(null);
  const [validation, setValidation] = useState({});
  const [loading, setLoading] = useState(false);

  const submitEnquiry = async (event) => {
    event.preventDefault();

    setLoading(true);

    const res = await fetch(BASE_URL + 'enquiries', {
      body: JSON.stringify({
        Name: event.target.Name.value.trim(),
        Email: event.target.Email.value.trim(),
        Phone_number: event.target.Phone_number.value.trim(),
        Hotel_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const response = await res;
    const json = await res.json();

    setStatus(response.status);

    if (json.data && json.data.errors) {
      setValidation(json.data.errors);
      console.log(json.data.errors);
    }

    if (response.status === 200) {
      event.target.reset();
      setValidation({});
    }
  };

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

          {form && (
            <form onSubmit={submitEnquiry} className={styles.form}>
              {name === true ? (
                <Input
                  placeholder={'Name *'}
                  name="Name"
                  error={validation['Name']}
                />
              ) : null}
              {email === true ? (
                <Input
                  placeholder={'Email *'}
                  name="Email"
                  type="email"
                  error={validation['Email']}
                />
              ) : null}
              {number === true ? (
                <Input
                  placeholder={'Phone number *'}
                  name="Phone_number"
                  type="number"
                  error={validation['Phone_number']}
                />
              ) : null}
              {form && (
                <Button
                  value="Enquire"
                  style={['button__input_submit']}
                  input={true}
                />
              )}
              {form && <Validation status={status} loading={loading} />}
            </form>
          )}
        </div>
      </div>
    </>
  );
}
