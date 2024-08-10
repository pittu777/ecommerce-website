// import React from 'react'
// import styles from "./card.module.css";
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


// interface BestSellerProps {
//   images: string[];
// }

// const BestSeller: React.FC<BestSellerProps> = ({ images }) => {
//   const renderStars = (count: number) => {
//     return (
//       <div className={styles.stars}>
//         {Array.from({ length: count }, (_, i) => (
//           <AiFillStar key={i} />
//         ))}
//         {Array.from({ length: 5 - count }, (_, i) => (
//           <AiOutlineStar key={i} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className={styles.imageList}>
//         {images.map((image, index) => (
//           <div className={styles.li} key={index}>
//             <img className={styles.img} src={image} alt={`Category ${index + 1}`} width={100} height={100} />
//             {renderStars(index < 1 ? 5 : 4)}
//             <p className={styles.card_p}>Floral Print Cotton Super King Bedsheet with 2 Reversible Pillow Covers</p>
//             <p className={styles.card_price}>Rs. 4,799 <span className={styles.removed_price}>11399.00 Rs</span></p>
//             <button type="button" className={styles.card_button}>Add to cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;



import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./card.module.css";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface BestSellerItem {
  id: number;
  image: string;
  price: number;
  description: string;
}

interface BestSellerProps {
  items: BestSellerItem[];
}

const BestSeller: React.FC<BestSellerProps> = ({ items }) => {
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
      <div className={styles.imageList}>
        {items.map((item) => (
          <Link to={`/product/${item.id}`} className={styles.li} key={item.id}>
            <img className={styles.img} src={item.image} alt={`Category ${item.id}`} width={100} height={100} />
            {renderStars(item.id < 1 ? 5 : 4)}
            <p className={styles.card_p}>{item.description}</p>
            <p className={styles.card_price}>Rs. {item.price} <span className={styles.removed_price}>11399.00 Rs</span></p>
            
            <button type="button" className={styles.card_button}>Add to cart</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
