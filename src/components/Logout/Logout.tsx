import Background from 'components/Background';
import Button from 'components/Button';
import React from 'react';
import styles from './logout.module.scss';
import { useCustomDispatch } from 'hooks/redux';
import { removeLocalStorage } from 'redux/slices/localStorage';

interface IProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logout: React.FC<IProps> = ({ setIsLoggedIn }) => {
  const dispatch = useCustomDispatch();

  const logoutHandler = (): void => {
    setIsLoggedIn(false);
    dispatch(removeLocalStorage());
  };

  return (
    <>
      <Background />
      <div className={styles.logout}>
        <Button onClick={logoutHandler} type="button">
          Logout
        </Button>
      </div>
    </>
  );
};

export default Logout;
