
import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import Logo from "./Logo/Logo";
import styles from "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import accountImage from "./../../assets/user.svg";
import cartImage from "./../../assets/cartt.svg";
const Navbar: React.FC = () => {
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
          <div className={styles.search}>
              <input type="text" placeholder="Search" />
              <button type="submit"><FaSearch /></button>
            </div>
          <nav ref={navRef} className={styles.nav}>
            <Link to="/">Home</Link>
            <div className={styles.dropdown}>
              <Link to="/bedsheets">
                Bed sheets
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/bedsheets/type1">Type 1</Link>
                <Link to="/bedsheets/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/cushioncovers">
                Cushion Covers
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/cushioncovers/type1">Type 1</Link>
                <Link to="/cushioncovers/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/Curtains">
                Curtains
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/Curtains/type1">Type 1</Link>
                <Link to="/Curtains/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/bathing">
                Bathing
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/bathing/type1">Type 1</Link>
                <Link to="/bathing/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/quilts">
                Quilts
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/quilts/type1">Type 1</Link>
                <Link to="/quilts/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/blankets">
                Blankets
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/blankets/type1">Type 1</Link>
                <Link to="/blankets/type2">Type 2</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/aboutus">
                About Us
              </Link>
            </div>
          
            <div className={styles.dropdown}>
              <a href="/account">
              <img src={accountImage} alt="img" />
              </a>
              <a href="/cart">
              <img src={cartImage} alt="img" />
              </a>
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
