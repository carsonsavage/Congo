import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../util/userContext.js";
import "./order-cards.css";

function OrderCards() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <>
            {userState.orders.map((order, index) => (
                <Link to={`/user/${userState._id}/order/${order.order_id}`} className="react-link">
                    <div class="ui segment order-segment" key={index}>
                        <div className="row">
                            <div className="col-3">
                                <p>Order #: </p><span>{order.order_id}</span>
                            </div>
                            <div className="col-3">
                                <p>Item Count: </p><span>{order.items.length}</span>
                            </div>

                            <div className="col-3"></div>
                            <div className="col-3">
                                <p>Order total: </p><span>${order.total}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default OrderCards;
