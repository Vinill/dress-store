import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <IconButton sx={{color:"black"}}>
          <InstagramIcon style={{fontSize:"35px"}}/>
        </IconButton>
        <IconButton sx={{color:"black"}}>
          <FacebookIcon style={{fontSize:"35px"}}/>
        </IconButton>
      </div>
      <p>info - Suport - Marketing</p>
      <p>Term of Use - Privacity Policy</p>
      <p>2023 Daniel Muller</p>
    </div>
  );
};