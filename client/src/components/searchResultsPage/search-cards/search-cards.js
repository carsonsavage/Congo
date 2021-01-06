import React, { useContext } from "react";
import SearchContext from "../../../util/searchContext.js";
import { Card } from "react-bootstrap";

function SearchCards() {
    return (
        <>
            <Card style={{ width: "20rem" }}>
                <Card.Img
                    variant="top"
                    src="https://images-na.ssl-images-amazon.com/images/I/717YIsksV5L._SL1500_.jpg"
                />
                <Card.Body>
                    <Card.Title>Crib title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default SearchCards;
