import React, { useContext } from "react";
import "./cart-cards.css";
import { Segment, Button } from "semantic-ui-react";
import { Row, Col, Image, Form } from "react-bootstrap";
import CartContext from "../../../util/cartContext.js";

function CartCards() {
    const { cartState, deleteProductFromCart } = useContext(CartContext);

    function generateOptions(count) {
        let i;
        let genQty = [];
        for (i = 0; i < count; i++) {
            genQty.push(i + 1);
        }
        return (
            <>
                {genQty.map((num, index) => (
                    <option key={index}>{num}</option>
                ))}
            </>
        );
    }

    return (
        <>
            {cartState.cart_items.map(
                ({ _id, images, title, quantity, price }, index) => (
                    <Segment padded key={index}>
                        <Row>
                            <Col md={2}>
                                <Image
                                    src={images[0]}
                                    thumbnail
                                    className="card-cards"
                                    alt={title}
                                />
                            </Col>
                            <Col md={8}>
                                <h5>{title}</h5>
                                <div className="clearfix cta-divs">
                                    <label className="float-left">Qty:</label>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        className="select float-left"
                                    >
                                        {generateOptions(quantity)}
                                    </Form.Control>
                                </div>
                                <div>
                                    <Button
                                        content="Delete"
                                        icon="delete"
                                        labelPosition="left"
                                        className="mini deleteBtn red"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            console.log("clicked")
                                            deleteProductFromCart(_id);
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col md={2}>
                                <h5 className="float-right">
                                    <span>${price}</span>
                                </h5>
                            </Col>
                        </Row>
                    </Segment>
                )
            )}
        </>
    );
}

export default CartCards;
