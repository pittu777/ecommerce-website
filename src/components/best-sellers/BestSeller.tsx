import React from 'react'
import styles from "./best.module.css";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import img5 from "./../../assets/sellers/image 7.png";
import img6 from "./../../assets/sellers/image 8.png";
import img7 from "./../../assets/sellers/Frame 28.png";


const BestSeller: React.FC = () => {
    const sellers: string[] = [img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7, img5, img6, img7,];

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
          <span className={styles.heading}>Best Sellers</span>
        </div>
        <ul className={styles.imageList}>
          {sellers.map((category, index) => (
            <li key={index}>
              <img className={styles.img} src={category} alt={`Category ${index + 1}`} width={100} height={100} />
              {renderStars(index < 1 ? 5 : 4)}
              <p className={styles.card_p}>Floral Print Cotton Super King Bedsheet with 2
                Reversible Pillow Covers</p>
              <p className={styles.card_p}>price: ₹222</p><p>removed price</p>
              <button type="button" className="btn btn-primary btn-sm " style={{ backgroundColor: "#D0ACAC", border: "none", width:"100%", height:"auto" }}>Add to cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BestSeller;