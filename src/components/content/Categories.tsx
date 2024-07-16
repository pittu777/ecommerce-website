import React from 'react';
import styles from './categories.module.css';
import img1 from '../../../src/assets/categaries/image 5.png';
import img2 from '../../../src/assets/categaries/image 5 (1).png';
import img3 from '../../../src/assets/categaries/image 5 (2).png';
import img4 from '../../../src/assets/categaries/image 5 (3).png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import img5 from "./../../assets/sellers/image 7.png";
import img6 from "./../../assets/sellers/image 8.png";
import img7 from "./../../assets/sellers/Frame 28.png";
import offer1 from "./../../assets/offers.png";
import offer2 from "./../../assets/offer2.png";
import offer3 from "./../../assets/offer3.png";
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import BestSeller from '../best-sellers/BestSeller';
import CategoriesPage from '../categoriespage/CategoriesPage';


const Categories: React.FC = () => {

  const categories: string[] = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4,];
  const sellers: string[] = [img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7,];

  

  return (
    <>
      <CategoriesPage/>
      <BestSeller/>
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
      <div>
        <div className={styles.container}>
          <span className={styles.heading}>Our Instagram</span>
        </div>
        <ul className={styles.imageList}>
          {sellers.map((category, index) => (
            <li key={index}>
              <img className={styles.img} src={category} alt={`Category ${index + 1}`} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container}>
        <span className={styles.heading}>About Us</span>
      </div>
      <Footer />

    </>
  );
};

export default Categories;
