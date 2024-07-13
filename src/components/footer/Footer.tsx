


import React from 'react'
import img from "./../../assets/footer/Rectangle 13.png";
import styles from "./../header/header.module.css";
import style from "./footer.module.css";
import Logo from '../nav-bar/Logo/Logo';

const Footer: React.FC = () => {
  return (
    <>
      <div>
        <img className={styles.heading_div} src={img} alt="image" />
      </div>
      <div className={style.main_container}>
        <div className={style.logo_container}>
          <Logo />
          <p>Join newsletter to know about new releases and latest offers</p>
          <div className={style.newsletter_container}>
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={style.links_container}>
          <a href="#">Track Your Order</a>
          <a href="#">FAQs</a>
          <a href="#">Return/Exchange</a>
          <a href="#">Register Complaint</a>
          <a href="#">Terms of service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Shipping policy</a>
        </div>
        <div className={style.social_links}>
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
          <a href="#">Youtube</a>
        </div>
      </div>
    </>
  )
}

export default Footer;
