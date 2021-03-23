import React from 'react';
import { h1, Carousel, } from 'react-bootstrap';
import * as image from '../image/image.js';
import './admin.css';
import Header from './header.js';

function Admin() {
  return (
    <div>
      <Header/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.slide0}
            alt="First slide"height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.slide1}
            alt="Second slide" height={800}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.slide3}
            alt="Third slide" height={800}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1 className='text-welcom'>Welcome to Bunbu!</h1>
      </div>
    </div>
  );

}
export default Admin;
