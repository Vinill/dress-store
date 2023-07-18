import React from 'react'
import "./NavCenter.css";
import Button from '@mui/material/Button';

export const NavCenter = () => {

  return (
    <div className='nav'>
      <Button className='buttonY' sx={{color:'black', fontSize:'12px'}}>
        INICIO
      </Button>
      <Button className='buttonY' sx={{color:'black', fontSize:'12px'}}>
        MUJER
      </Button>
      <Button className='buttonY' sx={{color:'black', fontSize:'12px'}}>
        HOMBRE
      </Button>
      <Button className='buttonY' sx={{color:'black', fontSize:'12px'}}>
        OFERTAS
      </Button>
      <Button className='buttonY' sx={{color:'black', fontSize:'12px'}}>
        CONTACTO
      </Button>
    </div>
  );
};

