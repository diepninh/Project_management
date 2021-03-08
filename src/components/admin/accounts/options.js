import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { BsTrashFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import ModalDetail from './modalDetail.js';

function Options(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
 
  const handleShowModalDel = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShowModalEdit = () => {
    setShowModalEdit(true);
  };
  const handleCloseEdit = () => {
    setShowModalEdit(false);
  }
  return (
    <Container style={{ background: 'none' }}>
      <Row>
        {/* Xóa */}
        <Col sm={4}>
          <BsTrashFill onClick={handleShowModalDel} />
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa {props.user.name} ra khỏi danh sách ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
          </Button>
              <Button variant="primary" onClick={handleClose}>
                Delete
          </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* Chỉnh sửa */}
        <Col sm={4}>
          <BiEdit onClick={handleShowModalEdit} />
          <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} > Name:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' defaultValue={props.user.name} style={{ maxWidth: '100%' }} />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='4' style={{ textAlign: 'center' }} >Email:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' defaultValue={props.user.email} style={{ maxWidth: '100%' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} >Contract_Types:</Form.Label>
                      <Col sm='8'>
                        <Form.Control as='select'>
                          <option>Parttime</option>
                          <option>Offical</option>
                        </Form.Control>
                      </Col>
                      <Form.Label column sm='2'></Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='4' style={{ textAlign: 'center' }} >Date_Of_Birth:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='date' style={{ maxWidth: '100%' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} > Phone:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' placeholder='enter phone' style={{ maxWidth: '100%' }} />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}>
                      <Form.Label column sm='4' style={{ textAlign: 'center' }} >Address:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' placeholder='enter address' style={{ maxWidth: '100%' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} >Sex:</Form.Label>
                      <Col sm='8'>
                        <Form.Check custom inline label="male" type='radio' />
                        <Form.Check custom inline label="female" type='radio' />
                      </Col>
                      <Form.Label column sm='2'></Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}>
                      <Form.Label column sm='4' style={{ textAlign: 'center' }} >DateJoin:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='date' style={{ maxWidth: '100%' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm='6'>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} >Role:</Form.Label>
                      <Col sm='8'>
                        <Form.Control as='select'>
                          <option>admin</option>
                          <option>HR</option>
                          <option>staff</option>
                        </Form.Control>
                      </Col>
                      <Form.Label column sm='2'></Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm='6'>
                    <Form.Group as={Row}>
                      <Form.Label column sm='4' style={{ textAlign: 'center' }} >StartContract:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='date' style={{ maxWidth: '100%' }} />
                      </Col>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseEdit}>
                Edit
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        {/* chi tiết */}
        <Col sm={4}>
          <ModalDetail user ={props.user}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Options;