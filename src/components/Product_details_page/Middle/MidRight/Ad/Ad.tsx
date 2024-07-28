import React from 'react'
import './Ad.css'

const Ad = () => {
  return (
    <div className='Ad'>
      <div className='image'>

      </div>
      <div className='timer'>
        <div className='numbers'>
            <div>08</div>
            <div>:</div>
            <div>10</div>
            <div>:</div>
            <div>12</div>
        </div>
        <div className='text'>
            <div>HOURS</div>
            <div>MINUTES</div>
            <div>SECONDS</div>
        </div>
      </div>
      <div className='GIN'>
            GET IT NOW
      </div>
    </div>
  )
}

export default Ad
