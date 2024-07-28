import React from 'react'
import './CardGroup.css'
import Card from './Card/Card'
import img1 from '../../../assets/Product_details/Card/image 27.png'
import img2 from '../../../assets/Product_details/Card/image 28.png'
import img3 from '../../../assets/Product_details/Card/image 30.png'

const Cardsgroup = () => {
  return (
    <div className='ymal'>
      <div className='header'>
        <hr/>
        <div className='text'>You may also like</div>
        <hr/>
      </div>
      <div className='group'>
      <Card img = {img1}/>      
      <Card img = {img2}/>      
      <Card img = {img3}/>      
      <Card img = {img1}/>      
      </div>
    </div>
  )
}

export default Cardsgroup
