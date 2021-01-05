import React from 'react';
import './statement.css';

function Statement(){
    return (
    <div id="carouselslides" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://i.imgur.com/5JId3WT.png" alt="First slide" />
      </div>
      <div className="carousel-item2">
        <img className="d-block w-100" src="https://i.imgur.com/LPDTa02.png" alt="Second slide" />
      </div>
      <div className="carousel-item3">
        <img className="d-block w-100" src="https://i.imgur.com/IDumiJ3.png" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
  </div>
);
}

export default Statement;