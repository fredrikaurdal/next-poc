import { useState } from 'react';
import styles from '../styles/sass/pages/Login.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { BRAND } from '../constants/assets';
import { BASE_URL } from '../constants/api';

export default function Login() {
  const [status, setStatus] = useState(null);

  const [validation, setValidation] = useState();

  const submitLogin = async (event) => {
    event.preventDefault();

    const res = await fetch(BASE_URL + 'auth/local', {
      body: JSON.stringify({
        identifier: event.target.Username.value,
        password: event.target.Password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const response = await res;
    const json = await res.json();

    setStatus(response.status);

    setValidation(null);

    console.log(json);

    if (
      !json.user &&
      json.data[0].messages[0].id === 'Auth.form.error.email.provide'
    ) {
      setValidation('Please provide your username');
    }

    if (
      !json.user &&
      json.data[0].messages[0].id === 'Auth.form.error.password.provide'
    ) {
      setValidation('Please provide your password');
    }

    // if (response.status === 200) {
    //   event.target.reset();
    //   setValidation({});
    // }
  };

  return (
    <div className={styles.login_wrapper}>
      <img src={BRAND} className={styles.brand} />
      <form onSubmit={submitLogin} className={styles.form}>
        <Input
          placeholder={'Username'}
          name="Username"
          error={validation === 'Please provide your username' && validation}
        />
        <Input
          placeholder={'Password'}
          name="Password"
          error={validation === 'Please provide your password' && validation}
          type={'password'}
        />

        <Button
          value="Login"
          style={['button__input_submit', 'button__input_submit__login']}
          input={true}
        />
        <Validation status={status} />
      </form>
    </div>
  );
}
