
import React from 'react'
import img5 from "./../../assets/sellers/image 7.png";
import img6 from "./../../assets/sellers/image 8.png";
import img7 from "./../../assets/sellers/Frame 28.png";
import styles from "./insta.module.css";
const Insta = () => {
    const sellers: string[] = [img5, img6, img7,img5];
  return (
    <>
     <div>
        <div className={styles.container}>
          <span className={styles.heading}>Our Instagram</span>
        </div>
        <ul className={styles.imageList}>
          {sellers.map((category, index) => (
            <li key={index}>
              <img className={styles.img} src={category} alt={`Category ${index + 1}`} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Insta