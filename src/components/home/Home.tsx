import React from 'react'
import Hero from '../hero/Hero';
import Categories from '../categories/Categories';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Categories/>
    </div>
  )
}

export default Home;