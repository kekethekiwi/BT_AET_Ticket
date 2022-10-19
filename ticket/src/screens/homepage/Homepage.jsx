import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import './Homepage.css'
import main_pic from "../../assets/main_pic.svg"
const Homepage = () => {
  return (
    <div class = "container-fluid">
      
       <div class = "row">
        <Navbar/>
       </div>
      
        <div class = "row">
        <img src={main_pic}></img>
        </div>
      
      
    </div>

  )
}


export default Homepage