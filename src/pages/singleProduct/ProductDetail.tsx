import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./productDetail.module.css";
import { bestSellerItems } from '../../components/card/product_card/data';
import Header from '../../components/header/Header';
import Navbar from '../../components/nav-bar/Navbar';


interface ProductParams extends Record<string, string | undefined> {
  id: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<ProductParams>();
  const product = bestSellerItems.find(item => item.id === parseInt(id!));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.description} />
        <h2>{product.description}</h2>
        <p>Price: Rs. {product.price}</p>
        <button type="button">Add to cart</button>
      </div>

    </>
  );
};

export default ProductDetail;
