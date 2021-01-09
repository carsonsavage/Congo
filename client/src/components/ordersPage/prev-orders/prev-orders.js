import React from "react";
import "./prev-orders.css";
import OrderCards from "../order-cards/order-cards.js";

function PrevOrders() {
    return (
        <div className="ui raised segment">
            <button className="ui orange ribbon label">Orders</button>
            <h4>Previous Orders</h4>
            <hr />
            <OrderCards />
        </div>
    );
}

export default PrevOrders;
