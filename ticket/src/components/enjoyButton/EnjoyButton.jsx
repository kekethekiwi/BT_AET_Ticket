import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  Col,
  FormGroup,
  FormText,
  Input,
  Label
} from 'reactstrap';
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
          <FormGroup>
            <FormText color = "muted">
              Select Trip Type
            </FormText>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Input type="select" name="select">
              <option>Planned Trips</option>
              <option>Spontaneous</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> being inside </Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> being outside </Label>
          </FormGroup>

       <br />

          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> touristy </Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> secretive </Label>
          </FormGroup>

      <br />

          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> shopping </Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox"/>
            {' '}
            <Label check> historic </Label>
          </FormGroup>

      <br />

          <FormGroup check inline>
            <Input type="checkbox"/>
              {' '}
              <Label check> culture </Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox"/>
              {' '}
              <Label check> romantic </Label>
          </FormGroup>

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