import React from 'react'
import styles from "./c.module.css";

interface CategoriesProps {
  images: string[],
  des: string[],
}

const Categories_Card: React.FC<CategoriesProps> = ({ images, des }) => {
  return (
    <div>
      <div className={styles.container}>
        <hr />
        <span className={styles.heading}>Categories</span>
        <hr />
      </div>
      <ul className={styles.imageList}>
        {images.map((image, index) => (
          <li key={index}>
            <figure>
              <img className={styles.categoryImage} src={image} alt={`Category ${index + 1}`} />
            <p className={styles.p}>{des[index]}</p>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Categories_Card;
