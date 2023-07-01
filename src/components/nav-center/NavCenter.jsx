import React from 'react'
import "./NavCenter.css";
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import Button from '@mui/material/Button';


export const NavCenter = () => {

  return (
    <div className='nav'>
      <Button className='buttonY' variant="text" sx={{
        color:'black',
        borderColor:"black",
        height:"70px",
        width:"80px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        }}>
        <IoIosMan style={{fontSize:"30px"}} />
        Hombre
      </Button>
      <Button className='buttonY' sx={{
        color:'black',
        borderColor:"black",
        height:"70px",
        width:"80px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        }}>
        <IoIosWoman style={{fontSize:"30px"}} />
        Mujeres
      </Button>
      <Button className='buttonY' sx={{
        color:'black',
        borderColor:"black",
        height:"70px",
        width:"80px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        }}>
        <FaChildren style={{fontSize:"30px"}} />
        Niños
      </Button>
    </div>
  );
};

