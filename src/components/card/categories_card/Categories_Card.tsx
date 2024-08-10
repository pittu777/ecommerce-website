import React from 'react'
import styles from "./c.module.css";
import SectionDivider from '../../section_divider/SectionDivder';

interface CategoriesProps {
  images: string[],
  des: string[],
}

const Categories_Card: React.FC<CategoriesProps> = ({ images, des }) => {
  return (
    <div>
     
       <div>
            <SectionDivider heading='Categories'/>
          </div>
      <div className={styles.imageList}>
        {images.map((image, index) => (
          <div className={styles.li} key={index}>
            <figure>
              <img className={styles.categoryImage} src={image} alt={`Category ${index + 1}`} />
            <p className={styles.p}>{des[index]}</p>
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Categories_Card;
