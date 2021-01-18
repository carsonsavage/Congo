import React, { useState, useEffect } from "react";
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";
import UserContext from "./util/userContext.js";
import OrderContext from "./util/orderContext.js";
import API from "./util/API";
import { useCookies } from "react-cookie";

function StateController(props) {
    return (
        <CartContext.Provider
            value={{
                cartState,
                setCartState,
                addProductToCart,
                deleteProductFromCart,
                saveCurrentCart,
                cartIdState,
                setCartIdState,
                updateProductInCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default StateController;
