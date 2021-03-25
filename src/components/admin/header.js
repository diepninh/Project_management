import React from 'react';
import { Container,Row, Col, Image, Navbar,SplitButton} from 'react-bootstrap';
import * as image from '../image/image.js';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import './admin.css';

function Header(props) {
  return (
    <Container>
      <Row>
        <Navbar bg='light' expand="lg" fixed='top' style={{ paddingLeft: '20%' }}>
          <Navbar.Brand href="#home" style={{ fontSize: 35, color: '#2a448c' }}>
            <Image src={image.bunbu} width={50} height={50} />Bunbu</Navbar.Brand>
          <Col sm={4}></Col>        
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Link to='/accounts' className='styleLink' style={{color : props.colorLinkAcc}}>Accounts</Link>
            <Link to='/skills' className='styleLink' style={{color : props.colorLinkSkill}}>Skills</Link>
            <Link to='/project' className='styleLink' style={{color : props.colorLinkProj}}>Projects</Link>
          </Navbar.Collapse>
          <SplitButton id='dropdown-split-varirants-Outline-primary' title="User">
            <dl className='btnHead'>
              <dt className='optionDrop'><Link to='/profileAdmin'>profile</Link></dt>
              <dt><Link to='/' onClick={() => props.changeStatusLogin(false)}>log out</Link></dt>
            </dl>
          </SplitButton>
          <Col sm={3}></Col>
        </Navbar>       
      </Row>
    </Container>
  );
}
export default Header;
