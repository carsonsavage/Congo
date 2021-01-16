import React, { useContext, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import "./product-details.css";
import { useHistory } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import { Rating, Button, Icon, Loader } from "semantic-ui-react";
import Wrapper from "../../components/wrapper/wrapper";
import Footer from "../../components/footer/footer";
import AboutItemList from "../../components/productDetailsPage/product-info/about-item.js";
import ItemDescription from "../../components/productDetailsPage/product-info/item-description.js";
import ProductCta from "../../components/productDetailsPage/cta/product-details-cta.js";
import ImageState from "./imageState.js";
import SearchContext from "../../util/searchContext.js";

function Orders(props) {
    const { searchState, lookupProduct } = useContext(SearchContext);

    const { params } = props.match;
    const history = useHistory();
    const { product_result } = searchState;
    const ratingCount = parseInt(Math.floor(Math.random() * 2946));

    useEffect(() => {
        lookupProduct(params.productId);
    }, []);

    return (
        <>
            {searchState.product_result.title ? (
                <Wrapper>
                    <Button
                        animated
                        size="mini"
                        id="back-to-results"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        <Button.Content visible>
                            Back to search results
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow left" />
                        </Button.Content>
                    </Button>
                    <Row className="product-details">
                        <ImageState images={product_result.images} />
                        <Col md={4}>
                            <div className="title">
                                <h2>{product_result.title}</h2>
                                <Rating
                                    icon="star"
                                    defaultRating={4}
                                    maxRating={5}
                                    clearable
                                />
                                <p className="inline">
                                    {" "}
                                    |{" "}
                                    <NumberFormat
                                        value={ratingCount}
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
                                    <h3 className="inline">
                                        ${product_result.price}
                                    </h3>
                                </div>
                                <hr />
                                <h4>About this item</h4>
                                <AboutItemList
                                    features={product_result.features}
                                />
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="product-cta">
                                <ProductCta price={product_result.price} quantity={product_result.quantity} id={product_result._id} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="description">
                            <hr />
                            <h4>Description</h4>
                            <ItemDescription
                                description={product_result.description}
                            />
                        </Col>
                    </Row>
                </Wrapper>
            ) : (
                <Loader active inline="centered" />
            )}

            {/* <Footer /> */}
        </>
    );
}

export default Orders;
