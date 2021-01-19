import React from 'react';
import './statement.css';
import Carousel from 'react-bootstrap/Carousel'
function Statement(){
    return (
      <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="..../client/public/images/covid.png"
          alt="covid info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/wDzJrTE.png"
          alt="charity info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/O1SEbKD.png"
          alt="sale info"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
}
export default Statement;