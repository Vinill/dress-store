import React from 'react'
import "./Home.css";
import { Navbar } from "../../components/navbar/Navbar";
import { BodyHome } from "../../components/body-home/BodyHome";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <BodyHome/>
      <Footer/>
    </div>
  );
};
