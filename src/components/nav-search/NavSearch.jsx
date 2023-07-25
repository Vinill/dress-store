import React from 'react'
import "./NavSearch.css"
import { InputSearch } from "../input-search/InputSearch";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import IconButton from '@mui/material/IconButton';


export const NavSearch = () => {

  const like = <CiHeart style={{color:"black", fontSize:"30px"}}/>

  const cart = <CiShoppingCart style={{color:"black", fontSize:"30px"}}/>

  return (
    <div className='nav-search'>
      <div className='border'>
        <InputSearch/>
      </div>
      <div className='cart'>
        <IconButton sx={{color:"black"}}>
          {cart}
        </IconButton>
      </div>
      <div className='mg'>
        <IconButton sx={{color:"black"}}>
          {like}
        </IconButton>
      </div>
    </div>
  )
}

