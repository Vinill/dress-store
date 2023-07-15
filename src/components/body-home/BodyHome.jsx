import React from 'react'
import "./BodyHome.css"
import logo from "./../../imgs/LOGO_OPC3-removebg-preview.png"
import imgBanner from "./../../imgs/310781821_619671119794473_3259522790867787573_n 1.png"

export const BodyHome = () => {
  return (
    <div className='body-home'>
      <div className='banner'>
        <div className='banner-img'>
          <img src={imgBanner} alt="img" className='banner-img_img'/>
        </div>
        <div className='banner-logo'>
          <img src={logo} alt='img' className='banner-logo_img'/>
        </div>
      </div>
      <div className='comp-one'><img src="" alt="" srcset="" /></div>
      <div className='comp-two'><img src="" alt="" srcset="" /></div>
      <div className='comp-three'><img src="" alt="" srcset="" /></div>
      <div className='comp-four'><img src="" alt="" srcset="" /></div>
    </div>
  );
};
