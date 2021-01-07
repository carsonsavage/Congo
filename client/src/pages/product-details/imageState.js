import React, { useState, useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import SmallProductImages from "../../components/productDetailsPage/small-product-images/small-product-images.js";

function ImageState({images}) {

    const [imgState, setImageState] = useState();

    useEffect(()=>{
        setImageState(images[0])
    }, [images])

    return (
        <>
            <Col md={1}>
                <div className="small-images">
                    <SmallProductImages
                        images={images}
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