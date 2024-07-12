import React from 'react';
import styles from './categories.module.css';
import img1 from '../../../src/assets/photo-1566438480900-0609be27a4be.avif';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';


const Categories: React.FC = () => {

  const categories: string[] = [img1, img1, img1, img1];
  return (
    <>
      <div>
        <div className={styles.container}>
          <span className={styles.heading}>Categories</span>
        </div>
        <ul className={styles.imageList}>
          {categories.map((category, index) => (
            <li key={index}>
              <img className={styles.categoryImage} src={category} alt={`Category ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles.container}>
          <span className={styles.heading}>Best Sellers</span>
        </div>
        <ul className={styles.imageList}>
          {categories.map((category, index) => (
            <li key={index}>
              <img src={category} alt={`Category ${index + 1}`} width={100} height={100} />
              <p>star</p>
              <p>some paragraph</p>
              <p>price: 2222</p><span>removed price</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container}>
        <span className={styles.heading}>Top Offers</span>
        <Hero />
      </div>
      <div className={styles.container}>
        <span className={styles.heading}>New Arrivals</span>
        <Hero />
        <Hero />
      </div>
      <div>
        <div className={styles.container}>
          <span className={styles.heading}>Our Instagram</span>
        </div>
        <ul className={styles.imageList}>
          {categories.map((category, index) => (
            <li key={index}>
              <img src={category} alt={`Category ${index + 1}`} width={100} height={100} />
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
