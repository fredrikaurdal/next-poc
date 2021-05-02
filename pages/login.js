import { useState } from 'react';
import styles from '../styles/sass/pages/Login.module.scss';
import Input from '../components/Input';
import Button from '../components/Button';
import Validation from '../components/Validation';
import { BRAND } from '../constants/assets';

export default function Login() {
  const [status, setStatus] = useState(null);

  const [validation, setValidation] = useState({});

  return (
    <div className={styles.login_wrapper}>
      <img src={BRAND} className={styles.brand} />
      <form onSubmit={console.log('Test')} className={styles.form}>
        <Input placeholder={'Email'} name="Email" error={validation['Email']} />
        <Input
          placeholder={'Password'}
          name="Password"
          error={validation['Password']}
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
