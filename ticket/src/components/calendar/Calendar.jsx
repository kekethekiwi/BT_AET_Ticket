import "./Calendar.scss";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  Input,
  Label
} from 'reactstrap';

function Calendar() {
  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  
  return (
    <>
      <div class="d-grid gap-5">
          <Button variant="btn btn-primary btn-lg" onClick={handleShow}>
            <span class="text-white">When are you going?</span>
            </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>When are you going?</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Label for="exampleDate">Start Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />

          <Label for="exampleDate">End Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<Calendar />);

export default Calendar