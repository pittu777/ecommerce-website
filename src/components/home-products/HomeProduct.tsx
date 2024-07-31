import React from 'react'
import img1 from "./../../assets/sellers/Frame 28.png";
import img2 from "./../../assets/sellers/image 7.png";
import img3 from "./../../assets/sellers/image 8.png";
import img4 from "./../../assets/sellers/Frame 28.png";
import BestSeller from '../card/product_card/Card';
const HomeProduct : React.FC = () => {
    const homePageImages = [img1, img2, img3, img4];
  return (
    <div><BestSeller images={homePageImages} /></div>
  )
}

export default HomeProduct;