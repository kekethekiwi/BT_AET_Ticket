import React from 'react';
import './Navbar.css';
import profile from "../../assets/profile.svg" 
import logo from "../../assets/logo_lowercase 1.svg"
import SearchBar from '../searchBar/SearchBar';

const Navbar = () => {
  return (
    <div class = "container-fluid">
      <div class = "row">
         <nav class="navbar navbar-expand-lg">
          <div class = "row">
            <div class = "col">
              <a class="navbar-brand" href="#">
                <div class = "row">
                  <img class = "logo_pic" src= {logo} width = "733px" height="144px"/>
                </div>
                <div class = "row">
                <blockquote class="blockquote">
                  <p class="logoText">plan first, relax later</p>
                </blockquote>
                </div>
                
                </a>
            </div>
            <div class = "col me-auto" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ul class="navbar-nav" id = "navbarNav" style={{display: 'flex', justifyContent: 'flex-end'}}>
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
        
          

      </nav>
    </div>
 

     <div class = "row">
       <SearchBar/>
     </div>    
      
    </div>
    
  )
}



export default Navbar