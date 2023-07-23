import React from 'react'
import "./NavLog.css"
import img from "../../imgs/mydream.png"

export const NavLog = () => {
  return (
    <div className='logo'>
      <div className='img-logo'>
        <img src={img} alt="" srcset="" className='img' style={{height:"60px", width:"190px"}}/>
      </div>
    </div>
  )
}