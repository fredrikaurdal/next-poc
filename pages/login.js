import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/sass/pages/Login.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { BRAND } from '../constants/assets';
import { BASE_URL } from '../constants/api';
import { saveToStorage, getFromStorage } from '../utils/storage';

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

    if (response.status === 400) {
      setStatus('Wrong username or password');
    }

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

    if (
      !json.user &&
      json.data[0].messages[0].id === 'Auth.form.error.invalid'
    ) {
      setValidation('Wrong username or password');
    }

    if (json.jwt) {
      saveToStorage('token', json.jwt);
    }
  };

  const router = useRouter();

  useEffect(() => {
    const jwt = getFromStorage('token');

    if (jwt.length > 0) {
      router.push('/messages');
    }
  });

  return (
    <div className={styles.login_wrapper}>
      <Link href="/">
        <a>
          <img src={BRAND} className={styles.brand} />
        </a>
      </Link>
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
        <Validation
          status={status}
          error={validation === 'Wrong username or password' && validation}
        />
      </form>
    </div>
  );
}
