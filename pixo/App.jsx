import React from 'react'
import './index.css'
import Header from './src/components/header/Header'
import Home_hero from './src/components/home_hero/Home_hero'
import Home_about from './src/components/home_about/Home_about'
import Portfolio from './src/components/portfolio/Portfolio'
import CTA from './src/components/cta/Cta'
import Footer from './src/components/footer/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Home_hero/>
      <Home_about/>
      <Portfolio/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App