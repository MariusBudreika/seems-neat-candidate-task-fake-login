import React from 'react';
import styles from './background.module.scss';
import background from '../../assets/images/background.png';

const Background: React.FC = () => {
  return (
    <img src={background} alt="background" className={styles.background} />
  );
};

export default Background;
