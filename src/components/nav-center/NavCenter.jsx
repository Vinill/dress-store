import React from 'react'
import "./NavCenter.css";
import Button from '@mui/material/Button';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import BoyIcon from '@mui/icons-material/Boy';


export const NavCenter = () => {

  return (
    <div className='nav'>
      <Button className='buttonY' sx={{color:'black',}}>
        <ManIcon style={{fontSize:"30px"}}/>
        Hombre
      </Button>
      <Button className='buttonY' sx={{color:'black',}}>
        <WomanIcon style={{fontSize:"30px"}}/>
        Mujeres
      </Button>
      <Button className='buttonY' sx={{color:'black',}}>
        <BoyIcon style={{fontSize:"30px"}}/>
        Niños
      </Button>
    </div>
  );
};

