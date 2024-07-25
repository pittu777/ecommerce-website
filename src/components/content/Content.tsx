import React from 'react';
import styles from './content.module.css';
import offer1 from "./../../assets/offers.png";
import offer2 from "./../../assets/offer2.png";
import offer3 from "./../../assets/offer3.png";
import Footer from '../footer/Footer';
import BestSeller from '../card/Card';
import Insta from '../insta-post/Insta';
import img1 from "./../../assets/sellers/Frame 28.png";
import img2 from "./../../assets/sellers/image 7.png";
import img3 from "./../../assets/sellers/image 8.png";
import img4 from "./../../assets/sellers/Frame 28.png";
import HomeCategories from '../homeCategories/HomeCategories';
import SlideHero from '../hero/slideHero/SlideHero';
import Hero from '../hero/Hero';


const Content: React.FC = () => {

  const sellers = [img1, img2, img3, img4];

  return (
    <>
      <div className={styles.main}>
        <HomeCategories />
        <div className={styles.container}>
          <span className={styles.heading}>Best Sellers</span>
        </div>
        <BestSeller images={sellers} />
        <div className={styles.container}>
          <span className={styles.heading}>Top Offers</span>
        </div>
        <SlideHero images={[offer1, offer2, offer3]} />
        <div className={styles.container}>
          <span className={styles.heading}>New Arrivals</span>
        </div>
        <div >
          <Hero imageSrc={offer3}/>
        </div>
        <div>
          <SlideHero images={[offer1, offer2, offer3]} />
        </div>
        <Insta />
        <div className={styles.container}>
          <span className={styles.heading}>About Us</span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
