
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './slide.module.css';

interface CarouselProps {
  images: string[];
}

const SlideHero: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const imagesExtended = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const preloadImages = imagesExtended.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    return () => {
      preloadImages.forEach((img) => (img.onload = null));
    };
  }, [imagesExtended]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else if (currentIndex === imagesExtended.length - 1) {
      setCurrentIndex(1);
    }
  };

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(images.length);
      } else if (currentIndex === imagesExtended.length - 1) {
        setCurrentIndex(1);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [isTransitioning, currentIndex, images.length, imagesExtended.length]);

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.arrowButton} onClick={handlePrevious} disabled={isTransitioning}>❮</button>
      <div
        className={styles.imageContainer}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {imagesExtended.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel ${index}`}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <button className={styles.arrowButton} onClick={handleNext} disabled={isTransitioning}>❯</button>
    </div>
  );
};

export default SlideHero;
