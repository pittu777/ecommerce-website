import React from 'react'
import Hero from '../../components/hero/Hero';

import heroImg from "./../../assets/sellers/bedroom-5664221.jpg";

import Content from '../../components/content/Content';
import Navbar from '../../components/nav-bar/Navbar';
import Header from '../../components/header/Header';
const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero
        imageSrc={heroImg}
        altText="New Arrivals"
        heroText="Step into a world elegance with our exclusive collection of handloom products."
      />
      <Content />

    </div>
  )
}

export default Home;