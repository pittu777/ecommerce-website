// import React from 'react'
// import './MidLeft.css'

// const MidLeft = () => {
//   return (
//     <div className='MidLeft'>
//       <div className='Header'>
//       Floral Print Cotton Super King Bedsheet with 2
//       Reversible Pillow Covers
//       <hr className="styled-hr"></hr>
//       </div>
//       <div className='Price'>
//       Rs. 4,799  <span>11399.00 Rs</span>
//       </div>
//       <div className='list'>
//         <ul className="styled-list">
//             <li className="list-itemh">Product Details:</li>
//             <li className="list-item">Print Type: Ikat</li>
//             <li className="list-item">Size: Single (60X 90 Inches)</li>
//             <li className="list-item">Material : 100% cotton</li>
//             <li className="list-item">Filling : 100% Cotton</li>
//             <li className="list-item">Wash Care: Dry Clean only</li>
//             <li className="list-item">Suitable for mild winters/ AC rooms</li>
//             <li className="list-item">Size: 60X90 Inches</li>

//         </ul>
//       </div>
//     </div>
//   )
// }

// export default MidLeft


import React from 'react';
import './MidLeft.css';
import { bestSellerItems } from '../../../card/product_card/data';
import { useParams } from 'react-router-dom';

interface ProductParams extends Record<string, string | undefined> {
  id: string;
}

const MidLeft: React.FC = () => {
  const { id } = useParams<ProductParams>();
  const product = bestSellerItems.find(item => item.id === parseInt(id!));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='MidLeft'>
      <div className='Header'>
        {product.description}
        <hr className="styled-hr" />
      </div>
      <div className='Price'>
        Rs. {product.price} <span>{product.price + 5000} Rs</span>
      </div>
      <div className='list'>
        <ul className="styled-list">
          <li className="list-itemh">Product Details:</li>
          <li className="list-item">Print Type: Ikat</li>
          <li className="list-item">Size: Single (60X 90 Inches)</li>
          <li className="list-item">Material: 100% cotton</li>
          <li className="list-item">Filling: 100% Cotton</li>
          <li className="list-item">Wash Care: Dry Clean only</li>
          <li className="list-item">Suitable for mild winters/ AC rooms</li>
          <li className="list-item">Size: 60X90 Inches</li>
        </ul>
      </div>
    </div>
  );
}

export default MidLeft;
