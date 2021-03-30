import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap';
import { useSelector , shallowEqual } from 'react-redux';
import Options from './options.js';
import Header from '../header';
import DetailMember from './detailMember.js';
import Staticical from './staticical.js';
import ModalDetailProject from './modalDetailProject.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import './projects.css';

function Projects() {
  const ProjectList = useSelector(state => state.Accounts.ProjectList, shallowEqual);
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <div>
      <div>
        <Header />
        <div className='range-head'></div>
      </div>
      <div className='mt-2 ml-2 mr-2 form-control-addform'>
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
                  <Form.Control type='text' placeholder='enter project' className='form-control-addform' />
                </Col>
                <Col sm='2'>
                  <Button variant='primary'>Search</Button>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </Row>
      </div>
      <Container>
        <Container className='form-style-label'>
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
                      <div className='range-second'>
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
        <Modal show={showModalAdd} onHide={() => setShowModalAdd(false)} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Add a project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container lassName='form-control-addform'>
              <Form>
                <Form.Row>
                  <Col >
                    <Form.Group as={Row}  >
                      <Form.Label column sm='2' className='form-style-label' > Name:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' placeholder='Enter name of project' className='form-control-addform'/>
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
                      <Form.Label column sm='2' className='form-style-label' > Member:</Form.Label>
                      <Col sm='8'>
                        <Form.Control type='text' className='form-control-addform' />
                      </Col>
                      <Form.Label column sm='2'>
                      </Form.Label>
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
            <Button variant="primary" onClick={() => setShowModalAdd(false)}>
              Add
              </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
};

export default Projects;
