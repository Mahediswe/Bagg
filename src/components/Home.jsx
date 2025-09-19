import React from 'react'
import Banner from './Banner'
import About from './About'
import Footer from './Footer'
import Service from './Service'
import Banner2 from './Banner2'
import Hero from './Hero'
import PopularProducts from '../pages/PopularProducts';
import Banner3 from './Banner3'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <About/>
      <PopularProducts/>
      <Service/>
      <Banner2/>
      <Testimonials/>
      <Banner3/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
