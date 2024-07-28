
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
        <div className={styles.availability}>
          <p>Availabilty</p>
          <label>
            <input type="checkbox" />
            <span>In stock</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Out of stock</span>
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
        <div className={styles.colorContainer}>
          <p>Color</p>
          <div className={styles.colorCircles}>
            <div className={`${styles.colorCircle} `}></div>
            <div className={`${styles.colorCircle} `}></div>
            <div className={`${styles.colorCircle} `}></div>
            <div className={`${styles.colorCircle} `}></div>
            <div className={`${styles.colorCircle} `}></div>
            <div className={`${styles.colorCircle} `}></div>
          </div>
        </div>
        <div>
        <button className={styles.apply}>Apply</button>
      </div>
      </div>
    </>
  )
}
export default Filter;



