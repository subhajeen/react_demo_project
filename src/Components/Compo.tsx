import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Team from '../pages/Team/Team';
import Contact from '../pages/Contact/Contact';
import Navebar from './Navebar';

const Compo = () => {
  return (
    <div>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        
    </div>
  )
}

export default Compo