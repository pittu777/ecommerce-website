import './Card.css';
import React from 'react'

type Cardprops = {
    img : string;
}

const Card = ({img} : Cardprops) => {
  return (
    <div className='card'>
        <div className='image'><img src={img} alt="..." /></div>
        <div className='stars'>
          <div className='starsgrp'>
          <div className='starsimg'></div>
          <div className='starsimg'></div>
          <div className='starsimg'></div>
          <div className='starsimg'></div>
          <div className='hstarsimg'></div>
          </div>
          <div className='startext'>(4.5 stars)</div>
        </div>
        <div className='text'>
        Floral Print Cotton Super King Bedsheet with 2
        Reversible Pillow Covers
        </div>
        <div className='price'>
        Rs. 4,799   <span>Rs. 11,399.00</span>
        </div>
        <div className='ATC'> ADD TO CART</div>

    </div>
  )
}

export default Card;
