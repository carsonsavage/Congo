import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import CartController from "./contextControllers/cart-controller.js";
import SearchController from "./contextControllers/search-controller.js";
import UserController from "./contextControllers/user-controller.js";
import OrderController from "./contextControllers/order-controller.js";

ReactDOM.render(
    <CookiesProvider>
        <CartController>
            <SearchController>
                <UserController>
                    <OrderController>
                        <App />
                    </OrderController>
                </UserController>
            </SearchController>
        </CartController>
    </CookiesProvider>,
    document.getElementById("root")
);
