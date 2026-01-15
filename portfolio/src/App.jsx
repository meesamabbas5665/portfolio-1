import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom' 
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/landing/LandingPage'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
// import ServiceSection from './Sections/servicesection/ServiceSection' // Assuming you want a separate page for services
// import PortfolioSection from './Sections/portfoliosection/PortfolioSection' // Assuming you want a separate page for portfolio
import Service from './pages/services/Service'
import Portfolio from './pages/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App