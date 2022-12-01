import React from 'react';
import styles from './button.module.scss';

interface IProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, type, onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
