import { useState } from 'react';
import styles from '../styles/sass/pages/Contact.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import Navbar from '../components/Navbar';
import { BASE_URL } from '../constants/api';

export default function Hotels(props) {
  const [status, setStatus] = useState(null);

  const [validation, setValidation] = useState({});

  const submitEnquiry = async (event) => {
    event.preventDefault();

    const res = await fetch(BASE_URL + 'messages', {
      body: JSON.stringify({
        Name: event.target.Name.value,
        Email: event.target.Email.value,
        Message: event.target.Message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const response = await res;
    const json = await res.json();

    setStatus(response.status);
    console.log(response.status);

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
      <Navbar />
      <div className={styles.form_wrapper}>
        <form onSubmit={submitEnquiry} className={styles.form}>
          <Input
            placeholder={'Name *'}
            name="Name"
            error={validation['Name']}
          />
          <Input
            placeholder={'Email *'}
            name="Email"
            type="email"
            error={validation['Email']}
          />
          <Input
            placeholder={'Message *'}
            name="Message"
            error={validation['Message']}
            textarea={true}
          />
          <Button value="Send" style={['button__input_submit']} input={true} />
          <Validation status={status} />
        </form>
      </div>
    </>
  );
}
