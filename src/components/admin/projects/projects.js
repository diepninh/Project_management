import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Options from './options.js';
import Header from '../header';
import DetailMember from './detailMember.js';
import Staticical from './staticical.js';
import ModalDetailProject from './modalDetailProject.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';

function Projects(props) {
  const ProjectList = useSelector(state => state.Accounts.ProjectList);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleCloseAdd = () => {
    setShowModalAdd(false);
  }
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}></div>
      </div>
      <Container className='mt-2  ml-2 mr-2' style={{ maxWidth: '100%' }}>
        <Row>
          <Col sm={1.5}>
            <Button variant='success'>Preview CSV</Button>
          </Col>
          <Col sm={0.5}>
            <Staticical />
          </Col>
          <Col sm={0.5}>
            <Button variant='primary' className='ml-2' onClick={() => setShowModalAdd(true)}>Add</Button>
          </Col>
          <Col sm={7}></Col>
          <Form >
            <Form.Row>
              <Form.Group as={Row}  >
                <Col sm='10'>
                  <Form.Control type='text' placeholder='enter project' style={{ maxWidth: '100%' }} />
                </Col>
                <Col sm='2'>
                  <Button variant='primary'>Search</Button>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </Row>
      </Container>
      <Container>
        <Container style={{ textAlign: 'center' }}>
          <h2>Projects List</h2>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>
                <Container>
                  <Row>
                    <Col sm='10'>Name</Col>
                    <BsCaretUpFill />
                  </Row>
                  <Row> 
                  <Col sm='10'></Col>
                    <BsCaretDownFill/>
                  </Row>
                </Container>
              </th>
              <th>number of member</th>
              <th>Start</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              ProjectList.map((e, index) => {
                return (
                  <tr key={e.name}>
                    <td>{index + 1}</td>
                    <td>
                      <ModalDetailProject />
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        {e.member.length}
                        <DetailMember />
                      </div>

                    </td>
                    <td>{e.start}</td>
                    <td>{e.deadline}</td>
                    <td>{e.status}</td>
                    <td>
                      <Options name={e.name} member={e.member} start={e.start} deadline={e.deadline} status={e.status} />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        {/* modal add */}
        <Modal show={showModalAdd} onHide={handleCloseAdd} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Add a project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container style={{ maxWidth: '100%' }}>
              <Form>
                <Form.Row>
                  <Col >
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} > Name:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' placeholder='Enter name of project' style={{ maxWidth: '100%' }} />
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
                          <option>done</option>
                          <option>unfinished</option>
                        </Form.Control>
                      </Col>
                      <Form.Label column sm='2'></Form.Label>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' style={{ textAlign: 'center' }} > Member:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' style={{ maxWidth: '100%' }} />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
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
            <Button variant="primary" onClick={handleCloseAdd}>
              Add
              </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
};

export default Projects;