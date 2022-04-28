import React from 'react';
import './Team.css'
import picture from '../../assets/team_pic1.jpg';
import picture1 from '../../assets/team_pic2.jpg';
import picture2 from '../../assets/team_pic3.jpg';
import picture3 from '../../assets/team_pic4.jpg';

const Team = () => {
  return (
    <div>
         <div>
    <div className='team_txt'>Team</div> 
    <div className='Team_txt1'> Our team is always here to help</div><br></br>
    </div>
<div>
<img className='team_img' src={picture} alt="pic" width="400" height="300"/> 
<img className='portfolio_img' src={picture1} alt="pic" width="400" height="300"/> 
<img className='portfolio_img' src={picture2} alt="pic" width="400" height="300"/> 
<img className='portfolio_img' src={picture3} alt="pic" width="400" height="300"/> 
</div>

    </div>
  )
}

export default Team