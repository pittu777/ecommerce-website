
import styles from "./product.module.css"
import BestSeller from '../card/product_card/Card'

import { Link } from "react-router-dom";
import { bestSellerItems } from "../card/product_card/data";

const Products = () => {
  
  return (
    <div className={styles.main}>
     
      <BestSeller items={bestSellerItems} />
    
    </div>
  )
}

export default Products;



