import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext";
import "./checkout-details.css";
import { Segment, Button, Image, Loader } from "semantic-ui-react";
import CartContext from "../../../util/cartContext";
import API from "../../../util/API.js";

function CheckoutDetails() {
    const { userState } = useContext(UserContext);
    const { cartState, cartIdState, setCartIdState, saveCurrentCart } = useContext(CartContext);
    const shippingCost = 2.21;
    const preTax = cartState.cart_total + shippingCost;
    const tax = parseInt((preTax * 0.08).toFixed(2));
    const total = preTax + tax;

    const [displayState, setDisplayState] = useState("waiting");
    const [shippingState, setShippingState] = useState("active");
    const [paymentState, setPaymentState] = useState("disabled");
    const [confirmState, setConfirmState] = useState("disabled");

    const [shippingAddress, setShippingAddress] = useState(
        userState.address[0]
    );
    const [paymentCard, setPaymentCard] = useState(userState.credit_cards[0]);

    function confirmOrder() {
        API.createOrder({
            user_id: userState._id,
            items: cartState.cart_items,
            ship_address: shippingAddress,
            order_num: "124-34395-3234",
            total: total,
        }).then(({ data }) => {
            let array = [];
            setCartIdState(array);
            setDisplayState("confirmed");
        });
    }

    function Shipping() {
        const {
            name,
            address1,
            address2,
            city,
            state,
            zipcode,
        } = shippingAddress;

        return (
            <div className="clearfix">
                <h2>Shipping Address</h2>
                <hr />
                <Segment.Group raised>
                    <Segment id="shipping-address">
                        <Button
                            circular
                            icon="edit"
                            className="mini"
                            id="edit-btn"
                            floated="right"
                        />
                        <h5>{name}</h5>
                        <p>{address1}</p>
                        <p>{address2}</p>
                        <p>
                            {city}, {state} {zipcode}
                        </p>
                    </Segment>
                </Segment.Group>

                <Button
                    content="Looks good"
                    icon="right arrow"
                    labelPosition="right"
                    id="confirm-btn"
                    className="mini green"
                    onClick={(e) => {
                        e.preventDefault();
                        setShippingState("completed");
                        setPaymentState("active");
                    }}
                    floated="right"
                />
            </div>
        );
    }

    function Billing() {
        const {
            card_number,
            card_name,
            expire_month,
            expire_year,
        } = paymentCard;
        return (
            <div className="clearfix">
                <h2>Payment Method</h2>
                <hr />

                <div class="ui segment clearfix">
                    <div className="row">
                        <div className="col-3">
                            <i className="credit card icon"></i>
                            <span>
                                {" "}
                                Card ending in{" "}
                                {card_number.toString().slice(-4)}
                            </span>
                        </div>
                        <div className="col-3">
                            <p>{card_name}</p>
                        </div>

                        <div className="col-3">
                            <p>
                                {expire_month} / {expire_year}
                            </p>
                        </div>
                        <div className="col-3">
                            <Button
                                circular
                                icon="edit"
                                className="mini"
                                id="edit-btn"
                                floated="right"
                            />
                        </div>
                    </div>
                </div>
                <Button
                    content="Hold up, go back"
                    icon="left arrow"
                    labelPosition="left"
                    id="confirm-btn"
                    className="mini red"
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("disabled");
                        setShippingState("active");
                    }}
                    floated="left"
                />
                <Button
                    content="All good here"
                    icon="right arrow"
                    labelPosition="right"
                    id="confirm-btn"
                    className="mini green"
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("completed");
                        setConfirmState("active");
                    }}
                    floated="right"
                />
            </div>
        );
    }

    function Confirm() {
        return (
            <div className="clearfix">
                <h2>Order Summary</h2>
                <hr />
                <Segment.Group raised>
                    <Segment id="shipping-address">
                        <p>Delivery date {cartState.delivery_date}</p>
                        <p>Items: ${cartState.cart_total}</p>
                        <p>Shipping & handling: ${shippingCost}</p>
                        <p>Total before tax: ${preTax}</p>
                        <p>Estimated tax to be collected: ${tax}</p>
                        <h5>Order total: ${total}</h5>
                    </Segment>
                </Segment.Group>

                <Button
                    content="Go back"
                    icon="left arrow"
                    labelPosition="left"
                    id="confirm-btn"
                    className="mini red"
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("active");
                        setConfirmState("disabled");
                    }}
                    floated="left"
                />
                <Button
                    content="Place Order"
                    icon="right arrow"
                    labelPosition="right"
                    id="confirm-btn"
                    className="mini green"
                    onClick={(e) => {
                        e.preventDefault();
                        setConfirmState("completed");
                        confirmOrder();
                    }}
                    floated="right"
                />
            </div>
        );
    }

    function ConfirmingOrder() {
        return (
            <>
                <Loader active inline="centered">
                    Confirming Order...
                </Loader>
            </>
        );
    }

    return (
        <div className="checkout-details">
            {displayState === "confirmed" ? (
                <h2>Confirmed order</h2>
            ) : (
                <>
                    <div class="ui three top attached steps" id="checkoutDiv">
                        <div class={`step ${shippingState}`}>
                            <i class="truck icon"></i>
                            <div class="content">
                                <div class="title">Shipping</div>
                                <div class="description">
                                    Choose your shipping options
                                </div>
                            </div>
                        </div>
                        <div class={`step ${paymentState}`}>
                            <i class="payment icon"></i>
                            <div class="content">
                                <div class="title">Billing</div>
                                <div class="description">
                                    Enter billing information
                                </div>
                            </div>
                        </div>
                        <div class={`step ${confirmState}`}>
                            <i class="info icon"></i>
                            <div class="content">
                                <div class="title">Confirm Order</div>
                                <div class="description">
                                    Verify order details
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui attached segment">
                        {shippingState === "active" && Shipping()}
                        {paymentState === "active" && Billing()}
                        {confirmState === "active" && Confirm()}
                        {confirmState === "completed" && ConfirmingOrder()}
                    </div>
                </>
            )}
        </div>
    );
}

export default CheckoutDetails;
