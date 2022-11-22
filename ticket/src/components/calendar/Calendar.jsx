import "./Calendar.scss";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Date_Picker from '../date-picker/DatePicker'
function Calendar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Date_Picker/>
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