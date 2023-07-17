import React from 'react'
import "./BodyHome.css" 
import imgBanner from "./../../imgs/882666651_1-removebg-preview.png"
import imgOne from "./../../imgs/free-photo-of-mujer-fotografia-de-moda-fondo-blanco-tejanos-azules-removebg-preview.png"

export const BodyHome = () => {
  return (
    <div className='body-home'>
      <div className='banner'>
        <img src={imgBanner} alt="img" className='banner-img'/>
      </div>
      <div className='section'>
        <div className='one'>
          <img src={imgOne} alt="img" className='imgs-down'/>
        </div>
        <div className='one'>
          <img src={imgOne} alt="img" className='imgs-down'/>
        </div>
        <div className='one'>
          <img src={imgOne} alt="img" className='imgs-down'/>
        </div>
      </div>
    </div>
  );
};
