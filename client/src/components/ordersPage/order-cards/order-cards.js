import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../util/userContext.js";
import "./order-cards.css";

function OrderCards() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <>
            {userState.orders ? (
                userState.orders.map((order, index) => (
                    <Link
                        to={`/user/${userState._id}/order/${order.order_id}`}
                        className="react-link"
                    >
                        <div class="ui segment order-segment" key={index}>
                            <div className="row">
                                <div className="col-3">
                                    <p>Order #: </p>
                                    <span>{order.order_id}</span>
                                </div>
                                <div className="col-3">
                                    <p>Item Count: </p>
                                    <span>{order.items.length}</span>
                                </div>

                                <div className="col-3"></div>
                                <div className="col-3">
                                    <p>Order total: </p>
                                    <span>${order.total}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="order-segment-img">
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/711Z3yoMpRL._SL1500_.jpg" />
                                        <p>Dove mens wash</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="order-segment-img">
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/71mldsB9WHL._AC_SL1500_.jpg" />
                                        <p>SolMo coconut Milk & Jasmine Scented Body</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="order-segment-img">
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/416Fv71ownL._AC_SL1000_.jpg" />
                                        <p>Echo Frames | Smart Glasses</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="order-segment-img">
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61iMqvGqulL._AC_SL1000_.jpg" />
                                        <p>Small Table Lamp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div class="ui segment">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 center">
                            <h2 class="ui icon header">
                                <i className="close icon"></i>
                                <div className="content">
                                    No orders found
                                    <div className="sub header">
                                        If you feel this is in error please{" "}
                                        <Link to="/contact-us">contact us</Link>
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default OrderCards;
