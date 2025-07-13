import React from 'react'
import Banner from './Banner'
import About from './About'
import Footer from './Footer'
import Service from './Service'
import Banner2 from './Banner2'
import Hero from './Hero'
import PopularProducts from '../pages/PopularProducts';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <About/>
      <PopularProducts/>
      <Service/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default Home
