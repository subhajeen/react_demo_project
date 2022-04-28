import React from 'react';
import image from '../../assets/picture1.jpg'
import './About.css';
import { CopyOutlined,RadarChartOutlined } from '@ant-design/icons';

const About = () => {
  return (
    <div className='about_txt'>
      <div>
      <img className='image_disp1' src={image} alt="pic" width="600" height="400"/> 
      </div>
      <div className='about_txt2'>

     <h3> Voluptatem dignissimos<br></br> provident quasi</h3>
     
      <div className='about_txt1'>
     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
       tempor incididunt ut labore et dolore magna aliqua. Duis aute irure  <br></br> 
       dolor in reprehenderit</p><br></br>
       </div>
       <div className='about_flex'>
         <div className='icon1'>
       <CopyOutlined />
       </div>
       <div className='about_icon'>
       <br></br><p>Corporis voluptates </p>  
        <h6><p>Consequuntur sunt aut quasi <br></br>enim aliquam quae harum <br></br>pariatur laboris nisi ut aliquip</p></h6>
        </div>
        <div className='icon'>
        <RadarChartOutlined  /><br></br>
        </div>
        <div>
          <p>
         <br></br> Ullamco laboris <br></br><br></br>
           <h6>Excepteur sint occaecat <br></br>cupidatat non proident, sunt <br></br> in culpa qui officia deserunt</h6>
          </p>
        
       </div>
       </div>
      </div>
      
    </div>
    
  )
}

export default About