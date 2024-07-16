
import React from 'react'
import styles from "./../content/categories.module.css";
import img1 from '../../../src/assets/categaries/image 5.png';
import img2 from '../../../src/assets/categaries/image 5 (1).png';
import img3 from '../../../src/assets/categaries/image 5 (2).png';
import img4 from '../../../src/assets/categaries/image 5 (3).png';

const CategoriesPage = () => {
    const categories: string[] = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4,];
  return (
    <>
        <div>
        <div className={styles.container}>
          <span className={styles.heading}>Categories</span>
        </div>
        <ul className={styles.imageList}>
          {categories.map((category, index) => (
            <li key={index}>
              <figure>

              <img className={styles.categoryImage} src={category} alt={`Category ${index + 1}`} />
              </figure>
            </li>
          ))}
        </ul>
      </div> 
      
    </>
  )
}

export default CategoriesPage