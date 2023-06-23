import React from 'react'
import "./NavSearch.css"
import { GiConverseShoe } from "react-icons/gi";

export const NavSearch = () => {

    const calzado = <GiConverseShoe style={{color:"black", fontSize:"50px"}}/>

  return (
    <div>
      <input type="search" name="Search" className='search'/>
      
    </div>
  )
}

