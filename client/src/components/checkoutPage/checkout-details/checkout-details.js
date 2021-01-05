import React, { useState } from 'react';
import './checkout-details.css';

function Shipping(){
    return <h2>Shipping</h2>
};

function Billing(){
    return <h2>Billing</h2>
};

function Confirm(){
    return <h2>Confirm</h2>
};





function CheckoutDetails() {
    const [displayState, setDisplayState] = useState();
    const [shippingState, setShippingState] = useState("active");
    const [paymentState, setPaymentState] = useState("disabled");
    const [confirmState, setConfirmState] = useState("disabled");

    return (
        <div className="checkout-details">
            <div class="ui three top attached steps" id="checkoutDiv">
                <div class={`step ${shippingState}`}>
                    <i class="truck icon"></i>
                    <div class="content">
                        <div class="title">Shipping</div>
                        <div class="description">Choose your shipping options</div>
                    </div>
                </div>
                <div class="diabled step">
                    <i class="payment icon"></i>
                    <div class="content">
                        <div class="title">Billing</div>
                        <div class="description">Enter billing information</div>
                    </div>
                </div>
                <div class="disabled step">
                    <i class="info icon"></i>
                    <div class="content">
                        <div class="title">Confirm Order</div>
                        <div class="description">Verify order details</div>
                    </div>
                </div>
            </div>
            <div class="ui attached segment">
                {}
            </div>
        </div>
    )
};

export default CheckoutDetails;