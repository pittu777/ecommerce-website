
import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo/Logo";
import styles from "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Link to="/bedsheets">Bed sheets</Link>
          <Link to="/cushioncovers">Cushion Covers</Link>
          <Link to="/curtains">Curtains</Link>
          <Link to="/bathing">Bathing</Link>
          <Link to="/quilts">Quilts</Link>
          <Link to="/blankets">Blankets</Link>
          <Link to="/about">About us</Link>
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
