import React from 'react'
import { NavCenter } from "../nav-center/NavCenter";
import { NavLog } from "../nav-log/NavLog";
import "./Navbar.css"
import { NavSearch } from "../nav-search/NavSearch";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLog/>
      <NavCenter/>
      <NavSearch/>
    </div>
  )
}
