import React from 'react'
import './MidRight.css'
import Ad from './Ad/Ad'


const MidRight = () => {
  return (
    <div className='MidRight'>
      <div className='CNT'>
        <div className='dec'> - </div>
        <div className='num'> 1</div>
        <div className='inc'> + </div>
      </div>
      <div className='ATC'> Add to cart</div>
      <div className='BN'>Buy Now</div>
      <div className='SAtext'> Shipping Availability</div>
      <div className='SA'> Enter Pincode</div>
      <div className='CN'> Check Now</div>
      <Ad/>
      
    </div>
  )
}

export default MidRight
