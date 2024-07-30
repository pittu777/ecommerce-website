
import React from 'react'
import styles from "./home.module.css";
import img1 from '../../../src/assets/sellers/image 7.png';
import img2 from '../../../src/assets/sellers/Frame 28.png';
import img3 from '../../../src/assets/sellers/image 8.png';
import img4 from '../../../src/assets/sellers/image 7.png';
import Categories_Card from '../card/categories_card/Categories_Card';

const HomeCategories = () => {

    const images: string[] = [img1, img2, img3, img4,img1,img2,];
    const des:string[]=["Cushion Covers","Comfortable Blankets","Royal Curtains","Luxury Towels","Royal Curtains","Luxury Towels"];
  return (
    <>
        <div>
        <Categories_Card images={images} des={des}/>
      </div> 
      
    </>
  )
}

export default HomeCategories