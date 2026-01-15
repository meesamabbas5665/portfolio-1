import React from 'react'

import About from '../about/About'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

import Service from '../services/Service'
// import Footer from '../../components/footer/Footer'

const LandingPage = () => {
  return (
    <div>
      <Home/>
      <Service/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
export default LandingPage;
