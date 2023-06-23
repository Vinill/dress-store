import React from 'react'
import "./NavElement.css";


export const NavElement = (props) => {

  const { text, textTwo} = props

  return (
    <div>
      <div className='text-two'>{textTwo}</div>
      <div className='text'>{text}</div>
    </div>
  );
};
