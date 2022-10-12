import React from 'react'
import Header from './Header/Header'
import './Home.css'
import Services from './Services/Services'
import Team from './TeamSection/Team'
import About from './About/About'
import Contact from './Contact/Contact'
import FooterContainer from '../.././containers/footer'
const Home = () => {
  return (
    <>
    <Header/>
    <Services/>
    <Team/>
    <About/>
    <Contact/>
    <FooterContainer/>
    </>
  )
}

export default Home;