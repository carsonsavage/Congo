import React from "react";
import "./cart-cards.css";
import { Segment, Button } from "semantic-ui-react";
import { Row, Col, Image, Form } from "react-bootstrap";

function CartCards() {
    function generateOptions(count) {
        let i;
        let genQty = [];
        for (i = 0; i < count; i++) {
            genQty.push(i + 1);
        }
        return (
            <>
                {genQty.map((num) => (
                    <option>{num}</option>
                ))}
            </>
        );
    }

    return (
        <>
            <Segment padded>
                <Row>
                    <Col md={2}>
                        <Image
                            src="https://images-na.ssl-images-amazon.com/images/I/61CAmyJBxBL._AC_SL1000_.jpg"
                            thumbnail
                            className="card-cards"
                        />
                    </Col>
                    <Col md={8}>
                        <h5>
                            IHEIPYE Grandma Sonogram Picture Frame - Baby
                            Announcement Gifts Grandparents Frame - Grandma
                            Pregnancy Announcement Gift, Soon To Be Grandma
                            Gifts, Hello Grandma See You Soon, Rustic Natural
                        </h5>
                        <div className="clearfix cta-divs">
                            <label className="float-left">Qty:</label>
                            <Form.Control
                                as="select"
                                size="sm"
                                className="select float-left"
                            >
                                {generateOptions(13)}
                            </Form.Control>
                        </div>
                        <div>
                            <Button
                                content="Delete"
                                icon="delete"
                                labelPosition="left"
                                className="mini deleteBtn red"
                            />
                        </div>
                    </Col>
                    <Col md={2}>
                        <h5 className="float-right">
                            <span>${12.32}</span>
                        </h5>
                    </Col>
                </Row>
            </Segment>
        </>
    );
}

export default CartCards;
