import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../../util/cartContext";
import "./cart.css";
import {Cart2} from 'bootstrap-icons-react';

function Cart() {
    const { cartState, setCartState } = useContext(CartContext);

    return (
        <Link to="/cart" className="cart">
            <Cart2 width={30} height={30}/>
            <p>{cartState.cart_item_count}</p>
        </Link>
    );
}

export default Cart;
