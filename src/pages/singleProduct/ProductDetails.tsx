// import React from 'react'
// import Hero from '../../components/Product_details_page/Hero/Hero'
// import Middle from '../../components/Product_details_page/Middle/Middle'
// import Cardsgroup from '../../components/Product_details_page/Recommendation/Cardsgroup'
// import Navbar from '../../components/nav-bar/Navbar'
// import Header from '../../components/header/Header'


// const ProductDetails = () => {
//   return (
//     <div>
//       <Header/>
//       <Navbar/>
//       <Hero/>
//       <Middle/>
//       <Cardsgroup/>
//     </div>
//   )
// }

// export default ProductDetails






import React from 'react';
import { useParams } from 'react-router-dom';

import Middle from '../../components/Product_details_page/Middle/Middle';
import Cardsgroup from '../../components/Product_details_page/Recommendation/Cardsgroup';
import Navbar from '../../components/nav-bar/Navbar';
import Header from '../../components/header/Header';
import { bestSellerItems } from '../../components/card/product_card/data';
import ProductImage from '../../components/Product_details_page/ProductImage/ProductImage';

interface ProductParams extends Record<string, string | undefined> {
  id: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<ProductParams>();
  const product = bestSellerItems.find(item => item.id === parseInt(id!));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <ProductImage mainImage={product.image} sideImages={[product.image, product.image, product.image, product.image]} />
      
    </div>
  );
}

export default ProductDetails;

