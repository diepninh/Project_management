import React, { useState } from 'react';
import { Container, Modal, Button, Table, Form, Row, Col, ModalFooter } from 'react-bootstrap';
import { BsFillCaretRightFill } from 'react-icons/bs';
import DeleteMember from './deleteMember.js';
import ModalDetail from './modalDetail.js';
import ModalAddMember from './modalAddMember.js';

function DetailMember(props) {
  const [showModalMember, setShowModalMember] = useState(false);
  
  return (
    <Container>
      <BsFillCaretRightFill color={'gray'} style={{ marginLeft: 30 }} onClick={() => setShowModalMember(true)} />

      <Modal show={showModalMember} onHide={() => setShowModalMember(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Member of skill level</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form >
              <Form.Row>
                <Form.Group as={Row}  >
                  <Col sm='10'>
                    <Form.Control type='text' placeholder='enter skill' style={{ maxWidth: '100%' }} />
                  </Col>
                  <Col sm='2'>
                    <Button variant='primary'>Search</Button>
                  </Col>
                </Form.Group>
              </Form.Row>
            </Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <ModalDetail />
                  </td>
                  <td><DeleteMember /></td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
        <ModalFooter>
          <Container>
            <Row>
              <Col sm='4'>
                <Button variant='success'>Preview CSV</Button>
              </Col>
              <Col sm='6'></Col>
              <Col sm='2'>
                <ModalAddMember />
              </Col>
            </Row>
          </Container>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
export default DetailMember;
