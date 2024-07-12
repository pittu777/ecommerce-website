
import React from 'react'
import img from "./../../../assets/Raja_s_Chanab_16x20-removebg-preview 2.png"
import styles from "./logo.module.css"
const Logo :React.FC = () => {
    
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={img} width={90} height={100} alt="Logo" />
    </div>
  )
}

export default Logo;