import React from "react";
import "./cart-cta.css";
import { Button } from "semantic-ui-react";

function CartCallToAction() {
    return (
        <div className="cart-cta">
            <h3>Cart Call to action</h3>
            <Button inverted color="green">
                <a href="/checkout">Checkout</a>
            </Button>
        </div>
    );
}

export default CartCallToAction;
