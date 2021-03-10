import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BsTrashFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

function Options(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

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
          <BsTrashFill onClick={() => setShowModal(true)} />
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xóa {props.name} ra khỏi danh sách ?</Modal.Body>
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
              <Container style={{ maxWidth: '100%' }}>
                <Form>
                  <Form.Row>
                    <Col >
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' style={{ textAlign: 'center' }} > Name:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='text' defaultValue={props.name} style={{ maxWidth: '100%' }} />
                        </Col>
                        <Form.Label column sm='2'>
                        </Form.Label>
                      </Form.Group>
                    </Col>

                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' style={{ textAlign: 'center' }} >Status:</Form.Label>
                        <Col sm='8'>
                          <Form.Control as='select'>
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
                        <Form.Label column sm='2' style={{ textAlign: 'center' }} > Start:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='date' style={{ maxWidth: '100%' }} />
                        </Col>
                        <Form.Label column sm='2'>
                        </Form.Label>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group as={Row}  >
                        <Form.Label column sm='2' style={{ textAlign: 'center' }} >Deadline:</Form.Label>
                        <Col sm='8'>
                          <Form.Control type='date' style={{ maxWidth: '100%' }} />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseEdit}>
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