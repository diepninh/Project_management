import React, { useState } from 'react';
import { Container, Modal, Button, Form, Col,Row} from 'react-bootstrap';
import './projects.css';

function ModalAddMember() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <Container className='ml-2'>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add a member to project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='form-style-label' > Name:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='@name' className='form-control-addform' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='form-style-label' >ID:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='B00...' className='form-control-addform' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Add
              </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
export default ModalAddMember;
