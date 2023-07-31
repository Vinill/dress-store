import React from 'react'
import "./BodyHome.css" 
import imgBanner from "./../../imgs/imgBanner.png"
import Button from '@mui/material/Button';

export const BodyHome = () => {
  return (
    <div className='body-home'>
      <div className='banner'>
        <div className='banner-texts'>
          <p>TIENDA / COLECCION DE INVIERNO 2023</p>
          <h1>
            Hasta 30% Off
            Nuevos Ingresos
          </h1>
          <Button className='ropa-button' variant='contained' sx={{
            color:'white',
            fontSize:'15px',
            fontFamily:"Exo, sans-serif",
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
            VER MAS
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
            fontFamily:"Exo",
            position:"absolute",
            height:"35px",
            width:"150px",
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
              height:45,
              fontSize:21,
            },
            }}>
            ROPA
          </Button>
        </div>
        <div className='accesorios-div'>
          <Button className='ropa-button' variant='contained' sx={{
              color:'black',
              fontSize:'15px',
              fontFamily:"Exo",
              position:"absolute",
              height:"35px",
              width:"180px",
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
                width:220,
                height:45,
                fontSize:20,
              },
              }}>
            ACCESORIOS
          </Button>
        </div>
        <div className='calzado-div'>
          <Button className='ropa-button' variant='contained' sx={{
                color:'black',
                fontSize:'15px',
                fontFamily:"Exo",
                position:"absolute",
                height:"35px",
                width:"170px",
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
                  width:200,
                  height:45,
                  fontSize:20,
                },
                }}>
            CALZADO
          </Button>
        </div>
      </div>
      <div className="banner-two">
        <div className='body-middle'>
          <h1>Ropa de la mejor calidad</h1>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quis. Rem repellendus neque, aliquam aut debitis deserunt et soluta natus eligendi! Iure, illum provident eum consectetur temporibus nobis illo labore.</h3>
        </div>
      {/* <div className="prueba"></div>*/}
      </div>
    </div>
  );
};
