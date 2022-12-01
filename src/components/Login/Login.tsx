import React, { useState } from 'react';
import Background from 'components/Background';
import styles from './login.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import { loginAPI, User } from '../../utils/userApi';
import { VALID_USER } from 'data/user';

import { useCustomDispatch } from 'hooks/redux';
import { setLocalStorage } from 'redux/slices/localStorage';

interface IProps {
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = ({ setIsLogedIn }) => {
  let isFormValid: boolean;
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useCustomDispatch();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setIsEmailValid(true);
    setError('');
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setIsPasswordValid(true);
    setError('');
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const user: User = {
      email,
      password
    };

    if (email.length < 3) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (password.length < 3) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    isFormValid = !(password.length <= 0 || email.length <= 0);

    if (isFormValid) {
      loginAPI(user)
        .then((res) => {
          setIsLogedIn(true);
          dispatch(setLocalStorage(VALID_USER));
        })
        .catch((error) => {
          setError(error.toString());
        });
    }
  };

  return (
    <>
      <Background />
      <div className={styles.container}>
        <h1 className={styles.login}>Login</h1>
        <p className={styles.paragraph}>
          Please enter your Login and your Password
        </p>
        {error.length > 0 && <p className={styles.error}>{error}</p>}

        <form onSubmit={onSubmit} className={styles.form}>
          <Input
            isValid={isEmailValid}
            type="email"
            id="email"
            value={email}
            placeholder="Username or E-mail"
            handleChange={handleEmail}
          />
          <Input
            isValid={isPasswordValid}
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            handleChange={handlePassword}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
};

export default Login;
