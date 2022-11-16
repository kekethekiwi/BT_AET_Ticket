import React from 'react'
import Dropdown2 from 'react-bootstrap/Dropdown'
//import "./Dropdown.css"
import "./Dropdown.scss";
const Dropdown = () => {
  return (
 
    <div class = "container-fluid">
        <Dropdown2>
        <div class="d-grid gap-2">
          <Dropdown2.Toggle variant = "primary"  size = "lg">
            Dropdown Button
          </Dropdown2.Toggle>
      </div>

      <Dropdown2.Menu>
        <Dropdown2.Item href="#/action-1">Action</Dropdown2.Item>
        <Dropdown2.Item href="#/action-2">Another action</Dropdown2.Item>
        <Dropdown2.Item href="#/action-3">Something else</Dropdown2.Item>
      </Dropdown2.Menu>
    </Dropdown2>
    </div>
  )
}

export default Dropdown