import React from 'react'
import "./BodyHome.css" 
import imgBanner from "./../../imgs/hermosa-modelo-morena-femenina-ropa-blanca_149155-260-removebg-preview.png"

export const BodyHome = () => {
  return (
    <div className='body-home'>
      <div className='banner'>
        <img src={imgBanner} alt="img" className='banner-img'/>
      </div>
    </div>
  );
};
