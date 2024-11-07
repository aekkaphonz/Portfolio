import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Testtimonials from './components/testtimonials/Testtimonials.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Scrollup from './components/scrollup/Scrollup.jsx';
const App =() =>{
  useEffect(()=>{
    document.title = `Portfolio`
  })

  useEffect(() => {
    const video = document.querySelector('.about__img');
    if (video) {
      video.play().catch((error) => {
      });
    }
  }, []);
  return(
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testtimonials/>
      <Contact/>
    
    </main>
    <Footer/>
    <Scrollup/>
    </>
  )
}

export default App

