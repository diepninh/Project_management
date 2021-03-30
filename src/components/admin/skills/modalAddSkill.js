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
                  <Form.Label column sm='2' className='skills-list' > Name:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name skill' className='form-width'/>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skills-list' >Intern:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form-width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skills-list' > Fresher:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form_width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skills-list' > Junior:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form-width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skills-list' > Middle:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form-width' />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}  >
                  <Form.Label column sm='2' className='skills-list' > Senior:</Form.Label>
                  <Col sm='8'>
                    <Form.Control type='text' placeholder='enter name staff' className='form-width'/>
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
