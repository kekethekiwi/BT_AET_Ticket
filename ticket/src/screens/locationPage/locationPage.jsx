import Navbar2 from '../../components/navbar2/navbar2'
import LocLogo from "../../assets/locationPage-pic.svg"
import Calendar from '../../components/calendar/Calendar'
import EnjoyButton from '../../components/enjoyButton/EnjoyButton'
import GoingOutButton from '../../components/goingOutButton/GoingOutButton'
import TravelingWithButton from "../../components/travelingWithButton/TravelingWithButton"
import {useLocation, useNavigate} from 'react-router-dom'
import {React, useState, useEffect} from 'react'

import './locationPage.css'
const LocationPage = () => {
  const {state} = useLocation(); //state is dictionary
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(state?.location) {
      setLocation(state.location)
    }
  })
  
  function handleSchedule() {
    navigate("/schedule", {
      state: {
        location: location,
        startDate: "11/9",
        endDate: "11/12"
    }
  });
  }

  const handleCallback = (childData) =>{
    this.setState({startDate: childData})
  }
  return (
    <div class = "container-fluid">
      <div class = "row">
        <Navbar2/>
      </div>
      <div class = "row">
        <h1 class="location">{location}</h1> 
      </div>
      <div class="d-grid gap-3">
        <div class = "row">
        <Calendar parentCallback = {handleCallback}/>
        </div>
        <div class = "row">
        <EnjoyButton/>
        </div>
        <div class = "row">
          <GoingOutButton/>
        </div>
        <div class = "row">
          <TravelingWithButton/>
        </div>
      </div>
      
      <br />

      <div class="col-md-12 text-end">
        <button type="button" class="btn btn-primary" onClick={handleSchedule}>
          <span class="text-white">View My Schedule!</span>
        </button>
      </div>
      


      <div class = "row">
       <img class = "loc_background_1" src= {LocLogo}/>
      </div>
      
      
    </div>

  )
}


export default LocationPage