import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../header';
import { Link } from 'react-router-dom';
import Delete from './delete.js';
import ModalAddSkill from './modalAddSkill.js';
import DetailMember from './detailMember.js';
import Staticical from './staticical.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';

function SkillList(props) {
  const skillList = useSelector(state => state.User.skillList)
  return (
    <div>
      <div>
        <Header />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
          <Container style={{ background: '#7FA9EA', textAlign: 'center' }}>
            <Row>
              <Col sm={6}><Link to='/skillList' className='stylelinkA' style={{ color: 'blue' }} >Skills list</Link></Col>
              <Col sm={6}><Link to='/requirements' className='stylelinkA' >Requires</Link></Col>
            </Row>
          </Container>
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
              <ModalAddSkill />
            </Col>
            <Col sm={7}></Col>
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
          </Row>
        </Container>
      </div>
      <Container>
        <Container style={{ textAlign: 'center', }}>
          <h2>Skills list </h2>
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
                    <BsCaretDownFill />
                  </Row>
                </Container>
              </th>
              <th>Intern</th>
              <th>Fresher</th>
              <th>Junior</th>
              <th>Middle</th>
              <th>Senior</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              skillList.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e}</td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        2
                        <DetailMember member={e.member} />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        2
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        2
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        2
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        2
                        <DetailMember />
                      </div>
                    </td>
                    <td><Delete name={e} /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
  )
};

export default SkillList;