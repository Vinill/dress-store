import React from 'react'
import "./BodyHome.css" 
import imgBanner from "./../../imgs/882666651_1-removebg-preview.png"
import ropa from "./../../imgs/ropa.jpg"
import accessorios from "../../imgs/accesorios.webp"
import calzado from "../../imgs/calzado.webp"
import Button from '@mui/material/Button';

export const BodyHome = () => {
  return (
    <div className='body-home'>
      <div className='banner'>
        <div className='banner-texts'>
          <p>coleccion de invierno 2023</p>
          <h1>
            Hasta 30% Off
            Nuevos Ingresos
          </h1>
          <Button className='ropa-button' variant='contained' sx={{
            color:'white',
            fontSize:'15px',
            height:"40px",
            width:"120px",
            marginTop:"10px",
            backgroundColor:"#FF4545",
            borderBottom:"none",
            lineHeight:"40px",
            fontWeight:"lighter",
            borderRadius:"1px",
            "&:hover": {
              color:"red",
              backgroundColor:"ButtonFace",
              opacity: 0.93,
            },
            }}>
            ROPA
          </Button>
        </div>
        <div className='banner-img'>
          <img src={imgBanner} alt="img"/>
        </div>
      </div>
      <div className='section'>
        <div className='ropa-div'>
          <Button className='ropa-button' variant='contained' sx={{
            color:'black',
            fontSize:'15px',
            position:"absolute",
            height:"40px",
            width:"120px",
            backgroundColor:"white",
            borderBottom:"none",
            lineHeight:"40px",
            fontWeight:"lighter",
            borderRadius:"1px",
            transition:"all",
            transitionDuration:"500ms",
            "&:hover": {
              color:"red",
              backgroundColor:"ButtonFace",
              opacity: 0.93,
              width:180,
              height:50,
              fontSize:20,
            },
            }}>
            ROPA
          </Button>
          <img src={ropa} alt="img" className='imgs-down'/>
        </div>
        <div className='ropa-div'>
          <Button className='ropa-button' variant='contained' sx={{
              color:'black',
              fontSize:'15px',
              position:"absolute",
              height:"40px",
              width:"200px",
              backgroundColor:"white",
              borderBottom:"none",
              lineHeight:"40px",
              fontWeight:"lighter",
              borderRadius:"1px",
              transition:"all",
              transitionDuration:"500ms",
              "&:hover": {
                color:"red",
                backgroundColor:"ButtonFace",
                opacity: 0.93,
                width:250,
                height:50,
                fontSize:20,
              },
              }}>
            ACCESORIOS
          </Button>
          <img src={accessorios} alt="img" className='imgs-down'/>
        </div>
        <div className='ropa-div'>
          <Button className='ropa-button' variant='contained' sx={{
                color:'black',
                fontSize:'15px',
                position:"absolute",
                height:"40px",
                width:"200px",
                backgroundColor:"white",
                borderBottom:"none",
                lineHeight:"40px",
                fontWeight:"lighter",
                borderRadius:"1px",
                transition:"all",
                transitionDuration:"500ms",
                "&:hover": {
                  color:"red",
                  backgroundColor:"ButtonFace",
                  opacity: 0.93,
                  width:250,
                  height:50,
                  fontSize:20,
                },
                }}>
            CALZADO
          </Button>
          <img src={calzado} alt="img" className='imgs-down'/>
        </div>
      </div>
    </div>
  );
};
