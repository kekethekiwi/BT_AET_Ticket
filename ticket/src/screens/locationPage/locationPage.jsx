import React from 'react';
import Navbar2 from '../../components/navbar2/navbar2'
import LocLogo from "../../assets/locationPage-pic.svg"
import './locationPage.css'
const LocationPage = () => {
  return (
    <div class = "container-fluid">
      <div class = "row">
        <Navbar2/>
      </div>
      <div class = "row">
      </div>
      <div class = "row">
      </div>
      <div class = "row">
      </div>
      
      <div class = "row">
       <img class = "loc_background" src= {LocLogo}/>
      </div>
      
      
    </div>

  )
}


export default LocationPage