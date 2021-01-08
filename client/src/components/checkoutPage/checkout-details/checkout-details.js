import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext";
import "./checkout-details.css";

function CheckoutDetails() {
    const {userState} = useContext(UserContext);
    const [shippingState, setShippingState] = useState("active");
    const [paymentState, setPaymentState] = useState("disabled");
    const [confirmState, setConfirmState] = useState("disabled");

    console.log(userState.address)

    function Shipping() {
        return (
            <>
                <h2>Shipping</h2>
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
                        setPaymentState("disabled")
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
                        setPaymentState("active")
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
