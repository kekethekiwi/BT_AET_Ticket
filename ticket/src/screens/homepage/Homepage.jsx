import React from 'react'
import { Navbar } from '../../components'
import './Homepage.css'
import Logo from "../../assets/Logo.svg"
import main_pic from "../../assets/main_pic.svg"
const Homepage = () => {
  return (
    <div class = "container-fluid">
      <div className = "background">
       <div class = "row">
        <Navbar/>
       </div>
       <div class = "row">
            <button type="button" class="btn btn-danger">START PLANNING RN</button>
          </div>
        <div class = "row">
          <img src={Logo}></img>
          <img src={main_pic}></img>
        </div>
      </div>
      
    </div>

  )
}

export default Homepage