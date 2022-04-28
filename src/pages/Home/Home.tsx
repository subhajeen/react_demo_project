import React from 'react'
import { Button } from 'antd';
import image from '../../assets/picture.jpg'
import './Home.css';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';


const Home = () => {
  return (
    <div className='txt'>
      <div>
      <h4>Bettter digital<br></br> experience with<br></br> Ninestars</h4> 
      <h6>We are team of talented designers making<br></br> websites with Bootstrap</h6><br></br>
      
<Button  className='btn_txt' href="/About" type="primary" size='large'>
          Get Started
        </Button>
        </div>
       
        <div>
          
        <img className='image_disp' src={image} alt="pic" width="600" height="400"/> 
        </div>
    
    </div>
    
    
  )
}

export default Home