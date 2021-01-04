import React from "react";
import { Link } from "react-router-dom";
import "./cart-cta.css";
import { Button } from "semantic-ui-react";

function CartCallToAction() {
    return (
        <div className="cart-cta">
            <h3>Cart Call to action</h3>
            <Link to="/checkout" className="react-link">
                <Button inverted color="green">
                    Checkout
                </Button>
            </Link>
        </div>
    );
}

export default CartCallToAction;
