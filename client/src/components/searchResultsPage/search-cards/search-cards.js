import React, { useContext } from "react";
import SearchContext from "../../../util/searchContext.js";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchCards() {
    const { searchState } = useContext(SearchContext);
    return (
        <>
            {searchState.filtered_results.map(
                ({ _id, title, price, image, quantity }, index) => (
                    <Col>
                        <Link to={`/product/details/${_id}`} key={index}>
                            <Card
                                style={{ width: "20rem" }}
                                className="product-cards"
                            >
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <h3>${price}</h3>
                                    {quantity < 5 && (
                                        <p>
                                            Better hurry, only {quantity}{" "}
                                            available
                                        </p>
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
