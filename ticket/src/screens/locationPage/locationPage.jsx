import React from 'react';
import Navbar2 from '../../components/navbar2/navbar2'
import LocLogo from "../../assets/locationPage-pic.svg"
import Dropdown from '../../components/dropdown/Dropdown'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import './locationPage.css'
const LocationPage = () => {
  const {state} = useLocation(); //state is dictionary
  const [location, setLocation] = useState("");

  useEffect(() => {
    if(state?.location) {
      setLocation(state.location)
    }
  })
  
  return (
    <div class = "container-fluid">
      <div class = "row">
        <Navbar2/>
      </div>
      <div class = "row">
        <h1 class="location">{location}</h1> 
      </div>
      <div class = "row">
       <Dropdown/>
      </div>
      <div class = "row">
       <img class = "loc_background" src= {LocLogo}/>
      </div>
      
      
    </div>

  )
}


export default LocationPage