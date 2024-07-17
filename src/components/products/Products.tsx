
import styles from "./product.module.css"
import BestSeller from '../card/Card'
import img1 from "./../../assets/sellers/Frame 28.png";
import img2 from "./../../assets/sellers/image 7.png";
import img3 from "./../../assets/sellers/image 8.png";
import img4 from "./../../assets/sellers/Frame 28.png";

const Products = () => {
  const productPageImages = [img1, img2, img3, img4,img1, img2, img3, img4,img1, img2, img3, img4,];
  return (
    <div className={styles.main}>
      <BestSeller images={productPageImages} />
    </div>
  )
}

export default Products