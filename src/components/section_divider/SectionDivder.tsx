import React from 'react';
import styles from './section.module.css';

interface SectionDividerProps {
  heading: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ heading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <span className={styles.heading}>{heading}</span>
      <div className={styles.line}></div>
    </div>
  );
}

export default SectionDivider;
