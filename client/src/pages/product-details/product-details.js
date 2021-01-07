import React, { useContext, useState } from "react";
import NumberFormat from "react-number-format";
import "./product-details.css";
import { useHistory } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import { Rating } from "semantic-ui-react";
import Wrapper from "../../components/wrapper/wrapper";
import Footer from "../../components/footer/footer";
import SmallProductImages from "../../components/productDetailsPage/small-product-images/small-product-images.js";
import AboutItemList from "../../components/productDetailsPage/product-info/about-item.js";
import ItemDescription from "../../components/productDetailsPage/product-info/item-description.js";
import ProductCta from "../../components/productDetailsPage/cta/product-details-cta.js";

function Orders(props) {
    const { params } = props.match;
    const history = useHistory();

    const sampleImageArray = [
        "https://images-na.ssl-images-amazon.com/images/I/71nhQn8zoUL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71Y7-ZBt24L._SL1240_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71yBHHy5hXL._SL1500_.jpg",
    ];

    const ratingValue = parseInt(Math.floor(Math.random() * 5));
    //set original image here
    const [imgState, setImageState] = useState(sampleImageArray[0]);

    return (
        <>
            <Wrapper>
                <Row className="product-details">
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
                    <Col md={4}>
                        <div className="title">
                            <h2>
                                Storkcraft Graco Solano 4-in-1 Convertible Crib
                                and Changer with Drawer, Fixed Side Crib,
                                Assembly Required (Mattress Not Included), White
                            </h2>
                            <Rating
                                icon="star"
                                defaultRating={ratingValue}
                                maxRating={5}
                                clearable
                            />
                            <p className="inline">
                                {" "}
                                |{" "}
                                <NumberFormat
                                    value={2832}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                />{" "}
                                Ratings
                            </p>
                            <hr />

                            <div>
                                <div className="inline-block price">
                                    <h6>Price:</h6>
                                </div>
                                <h3 className="inline">$234.52</h3>
                            </div>
                            <hr />
                            <h4>About this item</h4>
                            <AboutItemList
                                features={["sturdy", "convertible"]}
                            />
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="product-cta">
                            <ProductCta />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4>Description</h4>
                        <ItemDescription description="lalalalllllllllllllllllllllllllll" />
                    </Col>
                </Row>
            </Wrapper>

            {/* <Footer /> */}
        </>
    );
}

export default Orders;
