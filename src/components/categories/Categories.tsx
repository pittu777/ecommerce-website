import React from 'react';
import styles from './categories.module.css';
import img1 from '../../../src/assets/categaries/image 5.png';
import img2 from '../../../src/assets/categaries/image 5 (1).png';
import img3 from '../../../src/assets/categaries/image 5 (2).png';
import img4 from '../../../src/assets/categaries/image 5 (3).png';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import img5 from "./../../assets/sellers/image 7.png";
import img6 from "./../../assets/sellers/image 8.png";
import img7 from "./../../assets/sellers/Frame 28.png";
import offer1 from "./../../assets/offers.png";
import offer2 from "./../../assets/offer2.png";
import offer3 from "./../../assets/offer3.png";
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';


const Categories: React.FC = () => {

  const categories: string[] = [img1, img2, img3, img4,img1, img2, img3, img4,img1, img2, img3, img4,];
  const sellers: string[] = [img5, img6, img7,img5, img6, img7,img5, img6, img7,img5, img6, img7,img5, img6, img7,img5, img6, img7,];

  const renderStars = (count: number) => {
    return (
      <div className={styles.stars}>
        {Array.from({ length: count }, (_, i) => (
          <AiFillStar key={i} />
        ))}
        {Array.from({ length: 5 - count }, (_, i) => (
          <AiOutlineStar key={i} />
        ))}
      </div>
    );
  };

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
          {sellers.map((category, index) => (
            <li key={index}>
              <img className={styles.img} src={category} alt={`Category ${index + 1}`} width={100} height={100} />
              {renderStars(index<1?5:4)}
              <p>some paragraph</p>
              <p>price: ₹2222</p><p>removed price</p>
              <button type="button" className="btn btn-primary btn-sm " style={{backgroundColor:"#D0ACAC", border:"none"}}>Add to cart</button>
            </li>
          ))}
        </ul>
      </div>
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
      {/* <Footer2/> */}
    </>
  );
};

export default Categories;
