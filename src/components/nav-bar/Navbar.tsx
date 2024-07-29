
import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import styles from "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import accountImage from "./../../assets/acc.png";
import cartImage from "./../../assets/cartt.svg";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
            <input type="text" placeholder="Search" style={{backgroundColor:"#FDF5EB"}}/>
            <button type="submit"><FaSearch /></button>
          </div>
          <nav ref={navRef} className={styles.nav}>
            <Link to="/" className={location.pathname === "/" ? styles.active : ""}>Home</Link>
            <div className={styles.dropdown}>
              <Link to="/bedsheets" className={location.pathname.startsWith("/bedsheets") ? styles.active : ""}>
                Bed sheets
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/bedsheets/type1">bedsheets</Link>
                <Link to="/bedsheets/type2">modern bedsheets</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/cushioncovers" className={location.pathname.startsWith("/cushioncovers") ? styles.active : ""}>
                Cushion Covers
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/cushioncovers/type1">cushion covers</Link>
                <Link to="/cushioncovers/type2">cushion covers</Link>
              </div>
            </div>
            
            <div className={styles.dropdown}>
              <Link to="/curtains" className={location.pathname.startsWith("/curtains") ? styles.active : ""}>
                Curtains
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/curtains/type1">curtains</Link>
                <Link to="/curtains/type2">curtains</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/bathing" className={location.pathname.startsWith("/bathing") ? styles.active : ""}>
                Bathing
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/bathing/type1">bathing</Link>
                <Link to="/bathing/type2">bathing</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/quilts" className={location.pathname.startsWith("/quilts") ? styles.active : ""}>
                Quilts
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/quilts/type1">quilts</Link>
                <Link to="/quilts/type2">quilts</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/blankets" className={location.pathname.startsWith("/blankets") ? styles.active : ""}>
                Blankets
                <FaChevronDown className={styles.dropdown_icon} />
              </Link>
              <div className={styles.dropdown_content}>
                <Link to="/blankets/type1">blankets</Link>
                <Link to="/blankets/type2">blankets</Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link to="/aboutus" className={location.pathname.startsWith("/aboutus") ? styles.active : ""}>
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
