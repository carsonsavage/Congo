import React, { useContext } from "react";
import SearchContext from "../../../util/searchContext.js";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchCards() {
    const { searchState } = useContext(SearchContext);
    return (
        <>
            {searchState.filtered_results.map(
                ({ _id, title, price, images, quantity }, index) => (
                    <Col>
                        <Link to={`/product/details/${_id}`} key={index} className="react-link">
                            <Card
                                style={{ width: "20rem" }}
                                className="product-cards"
                            >
                                <Card.Img variant="top" src={images[0]} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <h3>${price}</h3>
                                    {quantity < 5 && (
                                        <>
                                            {quantity === 0 ? (
                                                <p className="out-of-stock">
                                                    Sorry this item is out of stock
                                                </p>
                                            ) : (
                                                <p>
                                                    Better hurry, only{" "}
                                                    {quantity} available
                                                </p>
                                            )}
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            )}
        </>
    );
}

export default SearchCards;
