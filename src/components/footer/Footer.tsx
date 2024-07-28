
import React from 'react'
import img2 from "./../../assets/footer/free-shipping.png";
import styles from "./footer.module.css";
import Logo from '../nav-bar/Logo/Logo';
import img3 from "./../../assets/footer/cash-on-delivery.png";
import img4 from "./../../assets/footer/shield.png";
import img1 from "./../../assets/footer/toggles.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.features_container}>
        <div className={styles.feature_item}>
          <img src={img1} alt="Customizable" />
          <div>
            <p>CUSTOMIZABLE</p>
            <p>Customization available for selected products</p>
          </div>
        </div>
        <div className={styles.feature_item}>
          <img src={img2} alt="Free Shipping" />
          <div>
            <p>FREE SHIPPING</p>
            <p>Free Shipping on all orders above Rs.999</p>
          </div>
        </div>
        <div className={styles.feature_item}>
          <img src={img3} alt="COD" />
          <div>
            <p>COD</p>
            <p>Cash on delivery available</p>
          </div>
        </div>
        <div className={styles.feature_item}>
          <img src={img4} alt="Secure Payments" />
          <div>
            <p>100% SECURE PAYMENTS</p>
            <p>We ensure secure payment with Razorpay</p>
          </div>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.logo_container}>
          <Logo />
          <div className={styles.newsLetter_p}>
            <p className={styles.newsLetter}>Join newsletter to know about new releases and latest offers</p>
          </div>
          <div className={styles.newsletter_container}>
            <input type="text" placeholder='Enter your email' />
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>
        
          <div className={styles.links_container}>
            <a href="#">Track Your Order</a>
            <a href="#">FAQs</a>
            <a href="#">Return/Exchange</a>
            <a href="#">Register Complaint</a>
            <a href="#">Terms of service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Shipping policy</a>
          </div>
          <div className={styles.social_links}>
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
