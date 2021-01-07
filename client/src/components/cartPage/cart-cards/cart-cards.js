import React from "react";
//import "./cart-items.css";
import { Header, Icon } from "semantic-ui-react";

function CartCards() {
    return (
        <div className="cart-items">
            <Header as="h1" textAlign="center">
                <Icon name="cart" />
                <Header.Content>Shopping Cart</Header.Content>
                <hr />
            </Header>
        </div>
    );
}

export default CartCards;