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
          {/*<div class = "row">*/}
           {/*<div class = "col me-auto">*/}
              <a class="navbar-brand" href="#">
                <div class = "row">
                  <img class = "logo_pic" src= {logo} width = "300px" height="70px"/>
                </div>
                <div class = "row">
                <blockquote class="blockquote">
                  <p class="logoText">plan first, relax later</p>
                </blockquote>
                </div>
                
                </a>
            {/*</div>*/}
            {/*<div class = "col ms-auto" style={{display: 'flex', justifyContent: 'flex-end'}}>*/}
            <ul class="navbar-nav ms-auto" id = "navbarNav" >
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
             
           {/* </div> */}

            
         {/* </div>*/}
        
          

      </nav>
    </div>
 

    </div>
    
  )
}



export default Navbar