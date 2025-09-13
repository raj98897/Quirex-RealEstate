import React from 'react'
import Slider from './Slider';
import Counter from './Counter';
import Services from './Services';
import Property from './Property';
import Properties from './Properties';
import OurAnimities from './OurAnimities';
import Testimonial from './Testimonial'; 
import NavBar from './NavBar';
const Home = () => {
  return (
    <>
    <NavBar/>
      <Slider />
      <Counter />
      <Services />
      <Properties/>
      <OurAnimities />
      <Testimonial /> 
    </>
  )
}

export default Home
