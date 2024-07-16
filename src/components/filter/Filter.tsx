
import React from 'react'
import styles from "./filter.module.css";

const Filter: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <p>Quick Filter</p>
        <div className={styles.input_container}>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Single</span>
          </label>
        </div>
        <div className={styles.availabilty}>
          <p>Availabilty</p>
          <label>
            <input type="checkbox" />
            <span>In stock</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Out of stock</span>
          </label>
        </div>
        <div className={styles.range}>
          <p>Price</p>
          <input type="range" />
        </div>
        
        
        <div className={styles.availabilty}>
          <p>Color</p>
          <label>
            <input type="radio" />
            <span>red</span>
          </label>
          <label>
            <input type="radio" />
            <span>green</span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Filter;
