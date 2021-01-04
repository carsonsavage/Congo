import React, { useContext, useState } from 'react';
import './prev-orders.css';
import UserContext from "../../../util/userContext.js";
import OrderCards from '../order-cards/order-cards.js';

function PrevOrders(){
    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <div className="ui raised segment">
            <button className="ui orange ribbon label">Orders</button>
            <h4>Previous Orders</h4>
            <hr />
            <div class="ui stacked segments">
                <OrderCards />
            </div>
        </div>
    )
};

export default PrevOrders;