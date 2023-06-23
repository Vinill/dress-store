import React from 'react'
import { NavCenter } from "../nav-center/NavCenter";
import { NavLog } from "../nav-log/NavLog";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLog/>
      <NavCenter/>
      <NavLog/>
    </div>
  )
}
