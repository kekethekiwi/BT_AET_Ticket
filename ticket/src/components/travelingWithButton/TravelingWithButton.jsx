import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './TravelingWithButton.css'
const TravelingWithButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div class="d-grid gap-2">
          <Button variant="btn btn-primary btn-lg" onClick={handleShow}>
            <span class="text-white">Who are you traveling with?</span>
            </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Who are you traveling with?</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <input class="form-control" type="text" placeholder="Number of Guests"></input>
        <input class="form-control" type="text" placeholder="Age"></input>
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

export default TravelingWithButton