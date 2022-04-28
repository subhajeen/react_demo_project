import React from 'react';
import './Navebar.css';
import 'antd/dist/antd.css';
//import './index.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'antd';


// import FormHelperText from '@mui/material/FormHelperText';


const Navebar = () => {

  const navigate=useNavigate();
    const goTohome=()=>{
      navigate("/");
    };
  return (
    <>
      <div>
    <span className='nave' style={{display:'flex' }}><h2>Ninestars</h2>
    <Link to="/" className = 'nave_txt' >Home</Link> 
    <Link to="/About" className = 'nave_txt1' >About Us</Link> 
    <Link to="/Services" className = 'nave_txt2' >Services</Link> 
    <Link to="/Portfolio" className = 'nave_txt3' >Portfolio</Link> 
    <Link to="/Team" className = 'nave_txt4' >Team</Link> 
     
      <FormControl sx={{ m: 1, minWidth: 160, border:'none' }}>
     <Select
        //   value={age}
        //   onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >Drop Down1</MenuItem>
          <MenuItem>Drop Down2</MenuItem>
          <MenuItem >Drop Down3</MenuItem>
          <MenuItem >Drop Down4</MenuItem>
          <MenuItem >Drop Down5</MenuItem>
          <MenuItem>Drop Down6</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
     
      <Link to="/Contact" className = 'nave_txt5' >Contact</Link> 
    
    <Button onClick={() =>goTohome()} className='btn'  shape='round' size='large'  >Get started</Button>
     </span>
             
     </div>
</>
   
  )
}

export default Navebar

// as ={Link} to="/Home"