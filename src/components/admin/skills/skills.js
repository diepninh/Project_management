import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Header from '../header.js';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import skill from '../../../image/slide3.jpg';
import '../admin.css';


function Skills() {
  return (
    < div>
      <div>
        <Header colorLinkSkill='blue' />
        <div style={{ paddingTop: 80, background: '#7FA9EA', height: 130 }}>
          <Container style={{ background: '#7FA9EA', textAlign: 'center' }}>
            <Row>
              <Col sm={6}><Link to='/skillList' className='stylelinkA' >Skills list</Link></Col>
              <Col sm={6}><Link to='/skillStaff' className='stylelinkA' >Requires</Link></Col>
            </Row>
          </Container>                           
        </div>
        <Image src={skill} width={'100%'} height={650}/>
        <div>
          <h1 style={{ textAlign: 'center', paddingTop: 20, color: '#7FA9EA' }}>Welcome to Bunbu!</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;