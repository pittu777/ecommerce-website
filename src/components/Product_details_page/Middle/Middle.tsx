import React from 'react'
import './Middle.css'
import MidLeft from './MidLeft/MidLeft'
import MidRight from './MidRight/MidRight'

const Middle = () => {
  return (
    <div className='Middle'>
      <div className='MidL'>
        <MidLeft/>
      </div>
      <div className='MidR'>
        <MidRight/>
      </div>
    </div>
  )
}

export default Middle
