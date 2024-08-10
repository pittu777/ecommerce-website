import React from 'react';
import BestSeller from '../card/product_card/Card';
import { bestSellerItems } from "../card/product_card/data";

const HomeProduct: React.FC = () => {
  
  const homeProducts = bestSellerItems.slice(0, 4);
  

  return (
    <div>
      <BestSeller items={homeProducts} />
    </div>
  );
}

export default HomeProduct;
