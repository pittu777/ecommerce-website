// import React from 'react'
// import './hero.module.css';
// const Hero = () => {
//   return (
//     <div className='hero'>
//         <div className='left'></div>      
//         <div className='right'>
//             <div className='item1'></div>
//             <div className='item2'></div>
//             <div className='item3'></div>
//             <div className='item4'></div>
//         </div>      
//     </div>
//   )
// }

// export default Hero



import React from 'react';
import styles from './product.module.css';


import Middle from '../Middle/Middle';
import Cardsgroup from '../Recommendation/Cardsgroup';

interface HeroProps {
  mainImage: string;
  sideImages: string[];
}

const ProductImage: React.FC<HeroProps> = ({ mainImage, sideImages }) => {
  return (
   
   
    <>
    <div>
    <div className={styles.hero}>
      <div className={styles.left}>
        <img src={mainImage} alt="Main Product" className={styles.leftImage} />
      </div>
      <div className={styles.right}>
        {sideImages.map((image, index) => (
          <div key={index} className={styles[`item${index + 1}`]}>
            <img src={image} alt={`Product ${index + 1}`} className={styles.rightImage} />
          </div>
        ))}
      </div>
    </div>

   
  </div>
  <Middle/>
  <Cardsgroup/>

  
    </>
  );
}

export default ProductImage;

