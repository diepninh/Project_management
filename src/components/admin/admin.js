import React from 'react';
import { h1, Carousel, } from 'react-bootstrap';
import slide1  from '../image/slide1.png';
import slide0  from '../image/banner_2.png'; 
import slide3  from '../image/banner_3.png';  
import './admin.css';
import Header from './header.js'

function Admin() {
  return (
    <div>
      <Header/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide0}
            alt="First slide"height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Second slide" height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide" height={800}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1 style={{ textAlign: 'center' , paddingTop: 20, color: 'blue'}}>Welcome to Bunbu!</h1>
      </div>
    </div>
  );

}
export default Admin;