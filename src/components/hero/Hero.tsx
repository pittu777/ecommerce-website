
import React from 'react';
import styles from './hero.module.css';

interface HeroProps {
  imageSrc: string;
  altText?: string;
  heroText?: string;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, altText = "image", heroText }) => {
  return (
    <div className={styles.heroContainer}>
      <img className={styles.heroImage} src={imageSrc} alt={altText} width={500}/>
      {heroText && <div className={styles.heroText}>{heroText}</div>}
    </div>
  );
};

export default Hero;
