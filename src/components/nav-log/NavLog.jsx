import React from 'react'
import "./NavLog.css"
import img from "../../imgs/LOGO_OPC3-removebg-preview (3).png"

export const NavLog = () => {
  return (
    <div className='logo'>
      <div className='img-logo'>
        <img src={img} alt="" srcset="" className='img' />
      </div>
    </div>
  )
}