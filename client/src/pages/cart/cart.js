import React, { useContext } from "react";
import "./cart.css";
import Wrapper from "../../components/wrapper/wrapper.js";
import CartCallToAction from "../../components/cartPage/cart-callToAction/cart-cta.js";
import CartItems from "../../components/cartPage/cart-items/cart-items.js";
import Footer from "../../components/footer/footer.js";
import { Row, Col } from "react-bootstrap";
import CartContext from "../../util/cartContext.js";
import { Link } from "react-router-dom";

function Cart() {
    const { cartState } = useContext(CartContext);

    return (
        <>
            <Wrapper>
                {cartState.cart_item_count > 0 ? (
                    <Row className="cart-page">
                        <Col md={9}>
                            <CartItems />
                        </Col>
                        <Col md={3}>
                            <CartCallToAction />
                        </Col>
                    </Row>
                ) : (
                    <div className="ui placeholder segment" id="cart-placeholder">
                        <div className="ui icon header">
                            <i className="cart icon"></i>
                            Your cart is currently empty
                        </div>
                        <Link to="/" className="react-link">
                            <div className="ui blue mini button">
                                Continue Shopping
                            </div>
                        </Link>
                    </div>
                )}
            </Wrapper>

            <Footer />
        </>
    );
}

export default Cart;
