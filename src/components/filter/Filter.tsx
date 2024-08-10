
// import React from 'react'
// import styles from "./filter.module.css";

// const Filter: React.FC = () => {
//   return (
//     <>
//       <div className={styles.main}>
//         <p>Quick Filter</p>
//         <div className={styles.input_container}>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Single</span>
//           </label>
//         </div>
//         <div className={styles.availability}>
//           <p>Availabilty</p>
//           <label>
//             <input type="checkbox" />
//             <span>In stock</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Out of stock</span>
//           </label>
//           <label>
//             <input type="checkbox" />
//             <span>Out of stock</span>
//           </label>
//         </div>
//         <div className={styles.range}>
//           <p>Price</p>
//           <input type="range" />
//         </div>
//         <div className={styles.colorContainer}>
//           <p>Color</p>
//           <div className={styles.colorCircles}>
//             <div className={`${styles.colorCircle} `}></div>
//             <div className={`${styles.colorCircle} `}></div>
//             <div className={`${styles.colorCircle} `}></div>
//             <div className={`${styles.colorCircle} `}></div>
//             <div className={`${styles.colorCircle} `}></div>
//             <div className={`${styles.colorCircle} `}></div>
//           </div>
//         </div>
//         <div>
//         <button className={styles.apply}>Apply</button>
//       </div>
//       </div>
//     </>
//   )
// }
// export default Filter;






import React, { useState } from 'react';
import styles from "./filter.module.css";

const Filter: React.FC = () => {
  const [price, setPrice] = useState<number>(50); // Default value can be adjusted
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(prev=>prev===color?null:color);
  };

  return (
    <div className={styles.main}>
      <p>Quick Filter</p>
      <div className={styles.input_container}>
        <label>
          <input type="checkbox" />
          <span>Single</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Double</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>King</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>King Fitted</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Floral</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Geometric</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Plain and Strips</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Under 999</span>
        </label>
      </div>
      <div className={styles.availability}>
        <p>Availability</p>
        <label>
          <input type="checkbox" />
          <span>In stock</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Out of stock</span>
        </label>
        
      </div>
      <div className={styles.availability}>
        <p>Price</p>
        <label>
          <input type="checkbox" />
          <span>Under 500</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>1000 - 5000</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>6000 - 10000</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>10000 - 20000</span>
        </label>
        
      </div>
      <div className={styles.range}>
        <p>Price</p>
        <div className={styles.rangeContainer}>
          <span className={styles.rangeMin}>$0</span>
          <input
            type="range"
            min="0"
            max="1399"
            value={price}
            onChange={handleChange}
            className={styles.rangeInput}
          />
          <span className={styles.rangeMax}>$1399</span>
        </div>
        <p className={styles.rangeValue}>${price}</p>
      </div>
      <div className={styles.colorContainer}>
        <p>Color</p>
        <div className={styles.colorCircles}>
          <div
            className={`${styles.colorCircle} ${styles.colorRed} ${selectedColor === 'red' ? styles.selected : ''}`}
            onClick={() => handleColorClick('red')}
          ></div>
          <div
            className={`${styles.colorCircle} ${styles.colorGreen} ${selectedColor === 'green' ? styles.selected : ''}`}
            onClick={() => handleColorClick('green')}
          ></div>
          <div
            className={`${styles.colorCircle} ${styles.colorSteelBlue} ${selectedColor === 'steelblue' ? styles.selected : ''}`}
            onClick={() => handleColorClick('steelblue')}
          ></div>
          <div
            className={`${styles.colorCircle} ${styles.colorGray} ${selectedColor === 'gray' ? styles.selected : ''}`}
            onClick={() => handleColorClick('gray')}
          ></div>
          <div
            className={`${styles.colorCircle} ${styles.colorPink} ${selectedColor === 'pink' ? styles.selected : ''}`}
            onClick={() => handleColorClick('pink')}
          ></div>
          <div
            className={`${styles.colorCircle} ${styles.colorSkyBlue} ${selectedColor === 'skyblue' ? styles.selected : ''}`}
            onClick={() => handleColorClick('skyblue')}
          ></div>
        </div>
      </div>
      <div>
        <button className={styles.apply}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
