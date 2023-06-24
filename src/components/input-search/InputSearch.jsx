import React from 'react'
import "./InputSearch.css";
import { GoSearch } from "react-icons/go";

export const InputSearch = () => {

const calzado = <GoSearch style={{color:"black", fontSize:"20px"}}/>

  return (
    <div className='nav-search'>
      <div className='searchh'>
        <input type="search" name="Search" className='j'/>
      </div>
      <div className='calzado'>
        {calzado}
      </div>
    </div>
  );
};
