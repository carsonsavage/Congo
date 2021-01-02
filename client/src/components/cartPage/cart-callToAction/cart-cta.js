import React from "react";
import { Link } from "react-router-dom";
import "./cart-cta.css";
import { Button } from "semantic-ui-react";

function CartCallToAction() {
    return (
        <div className="cart-cta">
            <h3>Cart Call to action</h3>
            <Button inverted color="green">
                <Link to="/checkout">Checkout</Link>
            </Button>
        </div>
    );
}

export default CartCallToAction;
