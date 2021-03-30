import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import './projects.css';

function Options(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <Container className='options'>
      <Row>
        {/* Xóa */}
        <Col sm={4}>
          <BsTrashFill onClick={() => setShowModal(true)} />
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa {props.name} ra khỏi danh sách ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
          </Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Delete
          </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* Chỉnh sửa */}
        <Col sm={4}>
          <BiEdit onClick={() => setShowModalEdit(false)} />
          <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container className='form-control-addform'>
                <Form>
                  <Form.Row>
                    <Col >
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' className='form-style-label' > Name:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='text' defaultValue={props.name} className='form-control-addform' />
                        </Col>
                        <Form.Label column sm='2'>
                        </Form.Label>
                      </Form.Group>
                    </Col>

                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' className='form-style-label' >Status:</Form.Label>
                        <Col sm='8'>
                          <Form.Control as='select' className='form-control-select'>
                            <option>{props.status}</option>
                            <option>{props.status === 'done' ? 'unfinished' : 'done'}</option>
                          </Form.Control>
                        </Col>
                        <Form.Label column sm='2'></Form.Label>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' className='form-style-label' > Start:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='date' className='form-control-addform' />
                        </Col>
                        <Form.Label column sm='2'>
                        </Form.Label>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' className='form-style-label' >Deadline:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='date' className='form-control-addform' />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModalEdit(false)}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

      </Row>
    </Container>
  );
}
export default Options;
