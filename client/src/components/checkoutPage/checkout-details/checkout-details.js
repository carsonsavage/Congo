import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext";
import "./checkout-details.css";
import { Segment, Button } from "semantic-ui-react";

function CheckoutDetails() {
    const { userState } = useContext(UserContext);
    const [shippingState, setShippingState] = useState("active");
    const [paymentState, setPaymentState] = useState("disabled");
    const [confirmState, setConfirmState] = useState("disabled");

    const [shippingAddress, setShippingAddress] = useState(
        userState.address[0]
    );
    const [paymentCard, setPaymentCard] = useState(userState.credit_cards[0]);

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
            <>
                <h2>Shipping Address</h2>
                <hr />
                <Segment.Group raised>
                    <Segment id="shipping-address" clearing>
                        <h5>{name}</h5>
                        <p>{address1}</p>
                        <p>{address2}</p>
                        <p>{city}, {state} {zipcode}</p>
                    </Segment>
                </Segment.Group>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setShippingState("completed");
                        setPaymentState("active");
                    }}
                >
                    Confirm
                </button>
            </>
        );
    }

    function Billing() {
        const {card_number, card_name, expire_month, expire_year} = paymentCard;
        return (
            <>
                <h2>Billing</h2>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("completed");
                        setConfirmState("active");
                    }}
                >
                    Confirm
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("disabled");
                        setShippingState("active");
                    }}
                >
                    Go Back
                </button>
            </>
        );
    }

    function Confirm() {
        return (
            <>
                <h2>Confirm Order</h2>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setConfirmState("completed");
                    }}
                >
                    Confirm
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("active");
                        setConfirmState("disabled");
                    }}
                >
                    Go Back
                </button>
            </>
        );
    }

    return (
        <div className="checkout-details">
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
                        <div class="description">Enter billing information</div>
                    </div>
                </div>
                <div class={`step ${confirmState}`}>
                    <i class="info icon"></i>
                    <div class="content">
                        <div class="title">Confirm Order</div>
                        <div class="description">Verify order details</div>
                    </div>
                </div>
            </div>
            <div class="ui attached segment">
                {shippingState === "active" && Shipping()}
                {paymentState === "active" && Billing()}
                {confirmState === "active" && Confirm()}
            </div>
        </div>
    );
}

export default CheckoutDetails;
