import React from 'react';
import styles from './input.module.scss';
import { Person as PersonIcon } from '../../assets/icons/Person';
import { Key as KeyIcon } from '../../assets/icons/Key';

interface IProps {
  type: string;
  id: string;
  value: string;
  placeholder: string;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  type,
  id,
  value,
  placeholder,
  handleChange,
  isValid
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputIcon}>
        {type === 'email' && <PersonIcon />}
        {type === 'password' && <KeyIcon />}
      </div>
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      {
        <div className={styles.inputError}>
          {!isValid && `${type} field can not be emty`}
        </div>
      }
    </div>
  );
};

export default Input;
