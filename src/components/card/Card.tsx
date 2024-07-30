import React from 'react'
import styles from "./card.module.css";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


interface BestSellerProps {
  images: string[];
}

const BestSeller: React.FC<BestSellerProps> = ({ images }) => {
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
    <div>
      <ul className={styles.imageList}>
        {images.map((image, index) => (
          <li key={index}>
            <img className={styles.img} src={image} alt={`Category ${index + 1}`} width={100} height={100} />
            {renderStars(index < 1 ? 5 : 4)}
            <p className={styles.card_p}>Floral Print Cotton Super King Bedsheet with 2 Reversible Pillow Covers</p>
            <p className={styles.card_price}>Rs. 4,799 <span className={styles.removed_price}>11399.00 Rs</span></p>
            <button type="button" className={styles.card_button}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSeller;