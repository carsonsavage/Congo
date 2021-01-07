import React, { useContext } from "react";
import "./cart-items.css";
import { Header, Icon } from "semantic-ui-react";
import CartCards from "../cart-cards/cart-cards.js";
import CartContext from "../../../util/cartContext.js";

function CartItems() {
    const { cartState } = useContext(CartContext);

    console.log(cartState.cart_items);
    return (
        <div className="cart-items">
            <Header as="h1" textAlign="right">
                <Icon name="cart" />
                <Header.Content>Shopping Cart</Header.Content>
                <h5>Price</h5>
                <hr />
            </Header>
            <CartCards />
            <hr />
            <Header textAlign="right">
                <h4>
                    Subtotal ({cartState.cart_item_count}{" "}
                    {cartState.cart_item_count > 1 ? "items" : "item"}):{" "}
                    <span>${cartState.cart_total}</span>
                </h4>
            </Header>
        </div>
    );
}

export default CartItems;
