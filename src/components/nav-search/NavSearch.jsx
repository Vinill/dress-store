import React from 'react'
import "./NavSearch.css"
import { InputSearch } from "../input-search/InputSearch";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


export const NavSearch = () => {

  const like = <CiHeart style={{color:"black", fontSize:"35px"}}/>

  const cart = <CiShoppingCart style={{color:"black", fontSize:"35px"}}/>

  return (
    <div className='nav-search'>
      <div className='border'>
        <InputSearch/>
      </div>
      <div className='cart'>
        {cart}
      </div>
      <div className='mg'>
        {like}
      </div>
    </div>
  )
}

