import React from 'react'
import "./Navbar.css";
import { Gorro } from "../gorro/Gorro";
import { Reloj } from "../reloj/Reloj";
import { Rinonera } from "../riñonera/Riñonera";
import { Ropa } from "../ropa/Ropa";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
  return (
    <div className='nav'>
      <Gorro name={name}/>
      <Reloj/>
      <Ropa/>
      <Rinonera/>
      <Logo/>
    </div>
  );
};

