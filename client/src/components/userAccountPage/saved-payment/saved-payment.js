import React from "react";
import "./saved-payment.css";
import PaymentCards from '../payment-card/payment-card.js';

function SavedPayment() {
    return (
        <div className="ui raised segment">
            <button className="ui green ribbon label">Wallet</button>
            <h4>Payment Methods</h4>
            <hr />
            <button className="circular ui icon button">
                <i class="plus icon"></i>
            </button>
            <div class="ui stacked segments">
                <PaymentCards />
            </div>
        </div>
    );
}

export default SavedPayment;
