
import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo/Logo";
import styles from "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar : React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null); 

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle(styles.responsive_nav);
    }
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.container}>
    <Logo />
        <nav ref={navRef} className={styles.nav}>
          <a href="/">Bed sheets</a>
          <a href="/cushioncovers">Cushion Covers</a>
          <a href="/curtains">Curtains</a>
          <a href="/bathing">Bathing</a>
          <a href="/quilts">Quilts</a>
          <a href="/blankets">Blankets</a>
          <a href="/about">About us</a>
          <div className={styles.search}>
            <input type="text" placeholder="Search" />
            <button type="submit"><FaSearch /></button>
          </div>
          <div className={styles.icons}>
            <a href="/account"><FaUser /></a>
            <a href="/cart"><FaShoppingCart /></a>
          </div>
          <button className={styles.nav_btn} onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className={styles.nav_btn} onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
