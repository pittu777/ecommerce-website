import React from 'react'
import Hero from '../../components/hero/Hero';

import heroImg from "./../../assets/Rectangle 11.png";

import Content from '../../components/content/Content';
const Home: React.FC = () => {
  return (
    <div>
      <Hero
        imageSrc={heroImg}
        altText="New Arrivals"
        heroText=" elegance with our exclusive collection of handloom products."
      />
      <Content />

    </div>
  )
}

export default Home;