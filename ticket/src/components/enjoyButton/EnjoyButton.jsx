import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './EnjoyButton.css'
const EnjoyButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div class="d-grid gap-2">
          <Button variant="btn btn-primary btn-lg" onClick={handleShow}>
            <span class="text-white">I enjoy...</span>
            </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>I enjoy...</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div class="form-group">
          <select id="role" name="role" class="form-control">
              <option value='1'>Planned Trips</option>
              <option value='2'>Spontaneous Trips</option>
          </select>
        </div>


        <div class="form-group">
          
          <div class="form-check form-check-inline" >
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
            <label class="form-check-label" for="inlineCheckbox1">being inside</label>
          </div>
          
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
            <label class="form-check-label" for="inlineCheckbox2">being outside</label>
          </div>
        </div>
          
      
        <div class="form-group">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">touristy</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">secretive</label>
          </div>
        </div>

        <div class="form-group">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">shopping</label>
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">historic</label>
          </div>
        </div>


        <div class="form-group">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">culture</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">romantic</label>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EnjoyButton