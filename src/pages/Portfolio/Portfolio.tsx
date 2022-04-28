import React from 'react';
import './Portfolio.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import {DownOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';
import picture from '../../assets/portfolio1.jpg';
import picture1 from '../../assets/portfolio2.jpg';
import picture2 from '../../assets/portfolio3.jpg';
import picture3 from '../../assets/portfolio4.jpg';
import picture4 from '../../assets/portfolio5.jpg';
import picture5 from '../../assets/portfolio16.jpg';
import picture6 from '../../assets/portfolio7.jpg';
import picture7 from '../../assets/portfolio8.jpg';
import picture8 from '../../assets/portfolio9.jpg';

const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
    </p>
  );

const Portfolio = () => {
  return (
      <div>
    <div className='portfolio_txt'>Portfolio</div> 
    <div className='portfolio_txt1'> Check out our beautifull portfolio</div>

    <div className='port_link'>
        <p>All</p>
        <p>API</p>
        <p>Card</p>
        <p>Web</p>
    </div>
<div className='container_img'>
  <div className='contain1'>
        <div>
        <img className='portfolio_img' src={picture} alt="pic" width="400" height="300"/> 
        </div>
        <div>
        <img className='portfolio_img' src={picture1} alt="pic" width="400" height="300"/> 
        </div>
        <div>
        <img className='portfolio_img' src={picture2} alt="pic" width="400" height="300"/> 
        </div>
  </div >
  
  </div>



    <div className='faq'>
    <div className='portfolio_txt'>F.A.Q</div> 
    <div className='portfolio_txt1'> Frequently Asked Questions</div>
    <div className='question'>

    <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="Non consectetur a erat nam at lectus urna duis?" key="1">
      {text}
    </Panel>
    <Panel header="Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?" key="2">
      {text}
    </Panel>
    <Panel header="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?" key="3">
      {text}
    </Panel>
    <Panel header="Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?" key="3">
      {text}
    </Panel>
    <Panel header="Tempus quam pellentesque nec nam aliquam sem et tortor consequat?" key="3">
      {text}
    </Panel>
    <Panel header="Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?" key="3">
      {text}
    </Panel>
  </Collapse>

      
    </div>

    </div>


    </div>
    
  )
}

export default Portfolio