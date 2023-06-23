import React from 'react'
import "./NavCenter.css";
import { NavElement } from "../nav-element/NavElement";
import { GiBilledCap} from "react-icons/gi";
import { GiTShirt } from "react-icons/gi";
import { GiWatch } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";

export const NavCenter = () => {

  const gorro = <GiBilledCap style={{color:"black", fontSize:"50px"}}/>

  const camisa = <GiTShirt style={{color:"black", fontSize:"50px"}}/>

  const reloj = <GiWatch style={{color:"black", fontSize:"50px"}}/>

  const calzado = <GiConverseShoe style={{color:"black", fontSize:"50px"}}/>

  return (
    <div className='nav'>
      <NavElement text="Gorros" textTwo={gorro}/>
      <NavElement text="Camisa" textTwo={camisa}/>
      <NavElement text="Reloj" textTwo={reloj}/>
      <NavElement text="Calzado" textTwo={calzado}/>
    </div>
  );
};

