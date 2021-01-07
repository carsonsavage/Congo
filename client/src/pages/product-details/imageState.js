import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import SmallProductImages from "../../components/productDetailsPage/small-product-images/small-product-images.js";

function ImageState({images}) {
    const sampleImageArray = [
        "https://images-na.ssl-images-amazon.com/images/I/71nhQn8zoUL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71Y7-ZBt24L._SL1240_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71yBHHy5hXL._SL1500_.jpg",
    ];

    const [imgState, setImageState] = useState(sampleImageArray[0]);

    return (
        <>
            <Col md={1}>
                <div className="small-images">
                    <SmallProductImages
                        images={sampleImageArray}
                        setImageState={setImageState}
                    />
                </div>
            </Col>
            <Col md={5}>
                <div className="image">
                    <Image src={imgState} fluid />
                </div>
            </Col>
        </>
    );
}

export default ImageState;
