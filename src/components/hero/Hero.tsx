import React from 'react';
import styles from './hero.module.css';
import image from './../../assets/Rectangle 11.png';

const Hero: React.FC = () => {
  return (
    <>
    <div className={styles.heroContainer}>
      <img className={styles.heroImage} src={image} alt="img.." />
    </div>
    </>
  );
};

export default Hero;
