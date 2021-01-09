import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../util/userContext.js";
import OrderContext from "../../../util/orderContext.js";
import { Popup, Icon } from "semantic-ui-react";
import "./order-cards.css";

function OrderCards() {
    const { userState } = useContext(UserContext);
    const { ordersState } = useContext(OrderContext);

    function convertDate(date) {
        const formatedDate = new Date(date).toLocaleDateString(undefined, {
            weekday: "long",
            month: "short",
            day: "numeric",
        });
        return formatedDate;
    }

    return (
        <>
            {ordersState.filtered_orders ? (
                ordersState.filtered_orders.map((order, index) => (
                    <div class="ui raised segment order-segment" key={index}>
                        <div className="row">
                            <div className="col-2">
                                <p>Order #: </p>
                                <Link
                                    to={`/user/${userState._id}/order/${order._id}`}
                                >
                                    <span>{order.order_num}</span>
                                </Link>
                            </div>
                            <div className="col-2">
                                <p>Item Count: </p>
                                <span>{order.items.length}</span>
                            </div>

                            <div className="col-2">
                                <p>Order date: </p>
                                <span>{convertDate(order.order_date)}</span>
                            </div>
                            <div className="col-2 float-left">
                                <p>Shipping to: </p>
                                <Popup
                                    trigger={
                                        <span>
                                            {order.ship_address.name}{" "}
                                            <Icon name="angle down" />
                                        </span>
                                    }
                                    content={
                                        <>
                                            <p>{order.ship_address.address1}</p>
                                            <p>{order.ship_address.address2}</p>
                                            <p>
                                                {order.ship_address.city},
                                                {order.ship_address.state}{" "}
                                                {order.ship_address.zipcode}
                                            </p>
                                        </>
                                    }
                                    position="bottom center"
                                />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-2">
                                <p>Order total: </p>
                                <span>${order.total}</span>
                            </div>
                        </div>
                        <div className="row">
                            {order.items.map(
                                ({ images, title, _id }, index) => {
                                    return (
                                        <div className="col-2">
                                            <div className="order-segment-img">
                                                <Link
                                                    to={`/product/details/${_id}`}
                                                    className="react-link"
                                                >
                                                    <img src={images[0]} />
                                                </Link>
                                                <p className="small-img-title">
                                                    {title.length > 60
                                                        ? title.substring(0, 60) + " ..."
                                                        : title}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
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
