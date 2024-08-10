


import React, { useState } from 'react';
import Filter from '../../components/filter/Filter';
import styles from './bed.module.css';
import img from './../../assets/offer3.png';
import Hero from '../../components/hero/Hero';
import Products from '../../components/products/Products';
import ProductDetail from '../singleProduct/ProductDetail';
import HomeCategories from '../../components/homeCategories/HomeCategories';
import Navbar from '../../components/nav-bar/Navbar';
import Header from '../../components/header/Header';
import SectionDivider from '../../components/section_divider/SectionDivder';



const Bed: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const toggleFilter = () => {
    if (showFilter) {
      setAnimateOut(true);
      setTimeout(() => {
        setShowFilter(false);
        setAnimateOut(false);
      }, 500);
    } else {
      setShowFilter(true);
    }
  };


  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.categories}>
        <HomeCategories />
      </div>
      <div className={styles.main}>
        <div className={styles.filterContainer}>
          <Filter />
        </div>
        <div className={styles.bestSellerContainer}>
          {/* <div className={styles.container}>
            <div className={styles.line}></div>
            <span className={styles.heading}>Best Sellers</span>
            <div className={styles.line}></div>
          </div> */}
          <div>
            <SectionDivider heading='Best Sellers'/>
          </div>
          <div className={styles.image_div}>
            <img src={img} alt="image" />
          </div>
          <div className={styles.filterButtonContainer}>
            <button className={styles.filterButton} onClick={toggleFilter}>
              Filter
            </button>
          </div>
          {showFilter && (
            <div
              className={`${styles.filterContainerMobile} ${animateOut ? styles['slide-out'] : ''
                }`}
            >
              <Filter />
            </div>
          )}
          <Products />
        </div>
      </div>
    </>
  );
};
export default Bed;
