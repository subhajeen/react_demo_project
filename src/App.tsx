import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Navebar from './Components/Navebar';
import Compo from './Components/Compo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
//import Navebar from './components/Navebar';
function App() {
  return (
    
      <Router>
      <Navebar /> 
      
      <Routes>
      
        <Route path = '/' element = {<Home />}></Route>
        <Route path = 'About' element = {<About />}></Route>
        <Route path = 'Services' element = {<Services />}></Route>     
        <Route path = 'Portfolio' element = {<Portfolio />}></Route>
        <Route path = 'Team' element = {<Team />}></Route>
        <Route path = 'Contact' element = {<Contact />}></Route>
       
      </Routes>
    </Router>
  )
  
}

export default App;
