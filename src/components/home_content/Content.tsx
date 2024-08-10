import React from 'react';
import styles from './content.module.css';
import offer1 from "./../../assets/offers.png";
import offer2 from "./../../assets/offer2.png";
import offer3 from "./../../assets/offer3.png";
import offer from "./../../assets/categaries/offer 1.svg";
import Footer from '../footer/Footer';
import BestSeller from '../card/product_card/Card';
import Insta from '../insta-post/Insta';
import img1 from "./../../assets/sellers/Frame 28.png";
import img2 from "./../../assets/sellers/image 7.png";
import img3 from "./../../assets/sellers/image 8.png";
import img4 from "./../../assets/sellers/Frame 28.png";
import HomeCategories from '../homeCategories/HomeCategories';
import SlideHero from '../hero/slideHero/SlideHero';
import Hero from '../hero/Hero';

import VideoComponent from '../insta-post/Insta';
import video1 from './../../assets/videos/v.mp4';
import SectionDivider from '../section_divider/SectionDivder';
import { bestSellerItems } from '../card/product_card/data';
const Content: React.FC = () => {

  // const sellers = [img1, img2, img3, img4];
  const videoData = [
    { src: video1, likes: 100, views: 2000 },
    { src: video1, likes: 100, views: 2000 },
    { src: video1, likes: 100, views: 2000 },
    { src: video1, likes: 100, views: 2000 },
    
    // Add more video data if you have multiple videos
  ];
  return (
    <>
      <div className={styles.main}>
        <HomeCategories />
        {/* <div className={styles.container}>
        <hr />
        <span className={styles.heading}>Best Sellers</span>
        <hr />
      </div> */}
       <div>
            <SectionDivider heading='Best Sellers'/>
          </div>
        <BestSeller items={bestSellerItems} />
        {/* <div className={styles.container}>
        <hr />
        <span className={styles.heading}>Top Offers</span>
        <hr />
      </div> */}
       <div>
            <SectionDivider heading='Top Offers'/>
          </div>
        <SlideHero images={[offer1, offer2, offer3]} />
        {/* <div className={styles.container}>
        <hr />
        <span className={styles.heading}>New Arrivals</span>
        <hr />
      </div> */}
       <div>
            <SectionDivider heading='New Arrivals'/>
          </div>
        <div className={styles.image_div}>
          <Hero imageSrc={offer3}/>
        </div>
        <div>
          <SlideHero images={[offer1, offer2, offer3]} />
        </div>
        {/* <div className={styles.container}>
        <hr />
        <span className={styles.heading}>Our Instagram</span>
        <hr />
      </div> */}
        <div>
            <SectionDivider heading='Our Instagram'/>
          </div>
        {/* <Insta /> */}
        <div className={styles.videoGrid}>

        {videoData.map((video, index) => (
          <VideoComponent key={index} src={video.src} likes={video.likes} views={video.views} />
        ))}
        </div>
        {/* <div className={styles.container}>
        <hr />
        <span className={styles.heading}>About Us</span>
        <hr />
      </div> */}
      <div>
            <SectionDivider heading='About Us'/>
          </div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
