import React from 'react';
import './Navbar.css';
import profile from "../../assets/profile.svg" 
const Navbar = () => {
  return (
      <div class = "container-fluid">
        <div class = "row">
          <nav class="navbar navbar-light bg-light">
            <div class = "row">
            <a class="navbar-brand" href="#">
              <div class = "column">
                <h1>TRAVELEASY</h1>
              </div>
              <div class = "column">
                <button type="button" class="btn btn-light">Sign Up</button>
              </div>
              <div class = "column">
                <button type="button" class="btn btn-light">login</button>
              </div>
              <div class = "column">
                <img src={profile}></img>
              </div>
            </a>
            </div>
          </nav>
        </div> 
      </div>
  )
}



export default Navbar