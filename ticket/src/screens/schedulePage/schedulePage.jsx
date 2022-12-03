import {useLocation} from 'react-router-dom'
import {React, useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import profile from "../../assets/profile.svg" 
import logo from "../../assets/navBar2Logo.svg"
import scheduleEditor from "../../assets/scheduleEditor.svg"
import schedule11_9 from "../../assets/schedule11_9.png"
import schedule11_10 from "../../assets/schedule11_10.png"
import LocLogo from "../../assets/locationPage-pic.svg"
import "./schedulePage.css"
const SchedulePage = () => {

  const {state} = useLocation(); //state is dictionary
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  useEffect(() => {
    if(state?.location) {
      setLocation(state.location)
    }
    if(state?.startDate) {
      setStartDate(state.startDate)
    }
    if(state?.endDate) {
      setEndDate(state.endDate)
    }
  })


  return (
    <div class = "container-fluid">
      <div class = "row">
        <nav class="navbar navbar-expand-lg">
      
              <a class="navbar-brand" href="#">
                <div class = "row">
                  <img class = "logo_pic" src= {logo} width = "107px" height="111px"/>
                </div>
                
              </a>
              <h4 class="header1">Trip to {location} </h4>
              
              <h5 class="header2"><br /><br /><br />{startDate} - {endDate} </h5>

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
        </nav>
      </div>

      <div class = "row">
        <div class = "col-md-12 text-end">
          <br />
          <img src={scheduleEditor} class= "scheduleEditor"/>
        </div>
      </div>

      <div class = "row">
        <div class = "col-md-12 text-center">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="schedule_pic"
          src={schedule11_9}
          alt="First slide"
        />
        <br/>
        <br/>
        <Carousel.Caption>
          <h5 class="labels">
          Nov 9th</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="schedule_pic"
          src={schedule11_10}
          alt="Second slide"
        />
        <br/>
        <br/>
        <Carousel.Caption>
        <h5 class="labels">
          Nov 10th</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    
     
       
      <div class = "buttons-flex">
      <button type="button"  class="btn btn-outline-dark btn-lg">Places to Stay</button>
      <button type="button"  class="btn btn-outline-dark btn-lg">Checklist</button>
      <button type="button"  class="btn btn-outline-dark btn-lg">Rentals</button>

      <button type="button" class="btn btn-outline-dark btn-lg">Before You Leave</button>

      <button type="button" class="btn btn-outline-dark btn-lg">Find More</button>

      </div>

      <div class = "row">
       <img class = "loc_background" src= {LocLogo}/>
      </div>
</div>
    
  )
}

export default SchedulePage