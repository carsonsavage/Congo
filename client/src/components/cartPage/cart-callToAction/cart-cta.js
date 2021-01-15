import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart-cta.css";
import { Button } from "semantic-ui-react";
import CartContext from "../../../util/cartContext.js";
import NumberFormat from "react-number-format";

function CartCallToAction() {
    const { cartState } = useContext(CartContext);

    return (
        <div className="cart-cta">
            <h4>
                Subtotal ({cartState.cart_item_count}{" "}
                {cartState.cart_item_count > 1 ? "items" : "item"}):{" "}
                <span>${cartState.cart_total}</span>
            </h4>
            <Link to="/checkout" className="react-link">
                <Button inverted color="green">
                    Checkout
                </Button>
            </Link>
        </div>
    );
}

export default CartCallToAction;
