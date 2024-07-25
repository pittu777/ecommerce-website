import React from "react";
import styles from "./header.module.css";

const Header : React.FC = () => {
  return (
    <div className={styles.heading_div}>
      <h3 className={styles.heading}>✨. Summer Start sale 11 
        get Free DHURRIE on 
        orders above 1000 ✨.</h3>
    </div>
  );
};

export default Header;
