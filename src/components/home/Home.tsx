import React from 'react'
import Hero from '../hero/Hero';
import Categories from '../categories/Categories';
import heroImg from "./../../assets/Rectangle 11.png";
const Home: React.FC = () => {
  return (
    <div>
      <Hero
      imageSrc={heroImg}
      altText="New Arrivals" 
      heroText="Explore the latest additions to our collection!"  
      />
      <Categories/>
    </div>
  )
}

export default Home;