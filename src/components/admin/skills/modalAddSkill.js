import React, { useState } from 'react';
import { Container, Modal, Button, Form, Col,Row} from 'react-bootstrap';
import './skills.css';

function ModalAddSkill() {
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
                    <Form.Control type='text' placeholder='enter name skill' className='form_width'/>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' >Intern:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' > Fresher:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' > Junior:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' > Middle:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skillsList' > Senior:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width'/>
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
export default ModalAddSkill;
