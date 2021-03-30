import React from 'react';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useSelector , shallowEqual } from 'react-redux';
import Header from '../header';
import { Link } from 'react-router-dom';
import Delete from './delete.js';
import ModalAddSkill from './modalAddSkill.js';
import DetailMember from './detailMember.js';
import Staticical from './staticical.js';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import './skills.css';

function SkillList() {
  const skillList = useSelector(state => state.User.skillList, shallowEqual);
  return (
    <div>
      <div>
        <Header />
        <div className='rangeHead'>
          <Container className='tabBar'>
            <Row>
              <Col sm={6}><Link to='/skills' className='stylelinkBar_Click'>Skills list</Link></Col>
              <Col sm={6}><Link to='/requirements' className='stylelinkBar'>Requires</Link></Col>
            </Row>
          </Container>
        </div>
        <div className='  mt-2 ml-2 mr-2 '>
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
                    <Form.Control type='text' placeholder='enter skill' className='form_width'/>
                  </Col>
                  <Col sm='2'>
                    <Button variant='primary'>Search</Button>
                  </Col>
                </Form.Group>
              </Form.Row>
            </Form>
          </Row>
        </div>
      </div>
      <Container>
        <Container className='skillsList'>
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
                      <div className='number_of_member'>
                        <DetailMember member={e.member} />
                      </div>
                    </td>
                    <td>
                      <div className='number_of_member'>
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div className='number_of_member'>
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div className='number_of_member'>
                        <DetailMember />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        <DetailMember />
                      </div>
                    </td>
                    <td><Delete name={e} /></td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default SkillList;
