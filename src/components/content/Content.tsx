import React from 'react';
import styles from './content.module.css';
import offer1 from "./../../assets/offers.png";
import offer2 from "./../../assets/offer2.png";
import offer3 from "./../../assets/offer3.png";
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import BestSeller from '../card/Card';
import Insta from '../insta-post/Insta';
import img1 from "./../../assets/sellers/Frame 28.png";
import img2 from "./../../assets/sellers/image 7.png";
import img3 from "./../../assets/sellers/image 8.png";
import img4 from "./../../assets/sellers/Frame 28.png";
import HomeCategories from '../homeCategories/HomeCategories';


const Categories: React.FC = () => {

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
        <Hero
          imageSrc={offer1}
          altText="New Arrivals"

        />
        <div className={styles.container}>
          <span className={styles.heading}>New Arrivals</span>
        </div>
        <Hero
          imageSrc={offer2}
          altText="New Arrivals"


        />
        <Hero
          imageSrc={offer3}
          altText="New Arrivals"

        />
        <Insta />

        <div className={styles.container}>
          <span className={styles.heading}>About Us</span>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default Categories;
