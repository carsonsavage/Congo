import React from "react";
import "./statement.css";
import Carousel from "react-bootstrap/Carousel";
import covid from "./images/covid.png";
import charity from "./images/charity.png";
import sale from "./images/sale.png";

function Statement() {
    return (
        <Carousel>
                  
            <Carousel.Item interval={10000}>
                 
                <img className="d-block w-100" src={covid} alt="covid info" />
                           
            </Carousel.Item>
                  
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src={charity}
                    alt="charity info"
                />
                    
            </Carousel.Item>
                  
            <Carousel.Item interval={10000}>
                     
                <img className="d-block w-100" src={sale} alt="sale info" />
                               
            </Carousel.Item>
        </Carousel>
    );
}
export default Statement;
