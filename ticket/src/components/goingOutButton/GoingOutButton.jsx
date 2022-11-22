import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './GoingOutButton.css'
const GoingOutButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div class="d-grid gap-2">
          <Button variant="btn btn-primary btn-lg" onClick={handleShow}>
            <span class="text-white">I like to go out during the...</span>
            </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>I like to go out during the...</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" value="option1" id="exampleRadios1"></input>
          <label class="form-check-label" for="exampleRadios1">Morning</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" value="option2" id="exampleRadios2"></input>
          <label class="form-check-label" for="exampleRadios2">Day</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" value="option3" id="exampleRadios3"></input>
          <label class="form-check-label" for="exampleRadios3">Night</label>
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

export default GoingOutButton