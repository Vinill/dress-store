import React from 'react'
import "./NavCenter.css";
import { NavElement } from "../nav-element/NavElement";
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import Button from '@mui/material/Button';


export const NavCenter = () => {

  const hombre = <IoIosMan style={{color:"black", fontSize:"35px"}}/>

  const mujer = <IoIosWoman style={{color:"black", fontSize:"35px"}}/>

  const niño = <FaChildren style={{color:"black", fontSize:"35px"}}/>

  return (
    <div className='nav'>
      <Button variant="outlined" sx={{color:'black', borderColor:"black"}}>
        <NavElement text="Hombre" textTwo={hombre}/>
      </Button>
      <Button sx={{color:'black'}}>
        <NavElement text="Mujer" textTwo={mujer}/>
      </Button>
      <Button>
        <NavElement text="Niño y Niña" textTwo={niño}/>
      </Button>
    </div>
  );
};

