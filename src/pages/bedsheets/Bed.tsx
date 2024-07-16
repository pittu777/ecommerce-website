import React from 'react'
import CategoriesPage from '../../components/categoriespage/CategoriesPage';
import Filter from '../../components/filter/Filter';
import styles from "./bed.module.css";
import img from "./../../assets/offer3.png";
import BestSeller from '../../components/best-sellers/BestSeller';
import Hero from '../../components/hero/Hero';
const Bed: React.FC = () => {
  return (
    <>

      <CategoriesPage />
      <div className={styles.main}>
        <div className={styles.filterContainer}>
          <Filter />
        </div>
      
        <div className={styles.bestSellerContainer}>
        <div className={styles.container}>
          <span className={styles.heading}>Best Sellers</span>
        </div>
          <Hero imageSrc={img}/>
          <BestSeller/>
        </div>
      </div>
    </>
  )
}

export default Bed; 