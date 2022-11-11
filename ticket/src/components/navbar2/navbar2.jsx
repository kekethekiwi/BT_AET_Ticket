import React from 'react';
import './navbar2.css';
import profile from "../../assets/profile.svg" 
import logo from "../../assets/navBar2Logo.svg"

const Navbar2 = () => {
  return (
    <div class = "container-fluid">
      <div class = "row">
         <nav class="navbar navbar-expand-lg">
          {/*<div class = "row">*/}
           {/*<div class = "col me-auto">*/}
              <a class="navbar-brand" href="#">
                <div class = "row">
                  <img class = "logo_pic" src= {logo} width = "107px" height="111px"/>
                </div>
                
              </a>
              <h1 class="header">You are traveling to</h1>
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

export default Navbar2