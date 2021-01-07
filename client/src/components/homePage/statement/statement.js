import React from 'react';
import './statement.css';
import Carousel from 'react-bootstrap/Carousel'
function Statement(){
    return (
      <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/5JId3WT.png"
          alt="covid info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/LPDTa02.png"
          alt="charity info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/IDumiJ3.png"
          alt="sale info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
}
export default Statement;