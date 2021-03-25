import React, { useState } from 'react';
import { Container, Modal, Button, Form, Col,Row} from 'react-bootstrap';
import './skills.css';

function ModalAddMember() {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <Container className='ml-2'>
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add a skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' > Name:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='@name' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' style={{ textAlign: 'center' }} >ID:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='B00...' style={{ maxWidth: '100%' }} />
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
  );
}
export default ModalAddMember;
