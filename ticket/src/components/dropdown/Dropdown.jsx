import React from 'react'
import Dropdown2 from 'react-bootstrap/Dropdown'

const Dropdown = () => {
  return (
 
    <div class = "container-fluid">
        <Dropdown2>
      <Dropdown2.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown2.Toggle>

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