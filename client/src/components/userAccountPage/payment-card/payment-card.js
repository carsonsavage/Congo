import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext.js";
import "./payment-card.css";

function PaymentCards() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <>
            {userState.saved_payments.map((payment, index) => (
                <div class="ui segment clearfix">
                    <div className="row">
                        <div className="col-3">
                            <i class="credit card icon"></i>
                            <span>
                                {" "}
                                Card ending in{" "}
                                {payment.card_number.toString().slice(-4)}
                            </span>
                        </div>
                        <div className="col-3">
                            <p>{payment.name}</p>
                        </div>

                        <div className="col-3">
                            <p>{payment.expiration}</p>
                        </div>
                        <div className="col-3">
                            <div
                                class="ui mini buttons float-right"
                                id="paymentBtn"
                            >
                                <button class="ui positive button">Edit</button>
                                <div class="or"></div>
                                <button class="ui button">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PaymentCards;
