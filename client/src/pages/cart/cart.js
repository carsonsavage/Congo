import React from "react";
import './cart.css';
import Wrapper from "../../components/wrapper/wrapper.js";
import CartCallToAction from "../../components/cartPage/cart-callToAction/cart-cta.js";
import CartItems from "../../components/cartPage/cart-items/cart-items.js";
import Footer from "../../components/footer/footer.js";
import { Row, Col } from "react-bootstrap";

function Cart() {
    return (
        <>
            <Wrapper>
                <Row className="cart-page">
                    <Col md={9}>
                        <CartItems />
                    </Col>
                    <Col md={3}>
                        <CartCallToAction />
                    </Col>
                </Row>
            </Wrapper>

            <Footer />
        </>
    );
}

export default Cart;
