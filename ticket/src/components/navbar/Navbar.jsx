import React from 'react';
import './Navbar.css';
import profile from "../../assets/profile.svg" 
import logo from "../../assets/logo_lowercase 1.svg"
import SearchBar from '../searchBar/SearchBar';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class = "row">
      <a class="navbar-brand" href="#"><img src= {logo} width = "733px" height="144px"/></a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Sign up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"href="#"><img src= {profile} /></a>
            </li>
          
          </ul>

        </div>
      </div>
     
      <div class = "row">
        <h5>plan first, relax later</h5>
      </div>

      <div class = "row">
        <SearchBar/>
      </div>

  </nav>
       
          
      
  )
}



export default Navbar