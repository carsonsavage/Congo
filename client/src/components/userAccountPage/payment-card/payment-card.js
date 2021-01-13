import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext.js";
import "./payment-card.css";

function PaymentCards({ setCreditCard, setModalState, dispatch }) {
    const { userState, handleCardRemoval } = useContext(UserContext);

    return (
        <>
        {userState.credit_cards.length > 0 ?
        <>
        {userState.credit_cards.map((payment, index) => (
                <div class="ui segment clearfix" key={index}>
                    <div className="row">
                        <div className="col-3">
                            <i class="credit card icon"></i>
                            <span> Card ending in {payment.card_number}</span>
                        </div>
                        <div className="col-3">
                            <p>{payment.card_name}</p>
                        </div>

                        <div className="col-3">
                            <p>
                                {payment.expire_month} / {payment.expire_year}
                            </p>
                        </div>
                        <div className="col-3">
                            <div
                                class="ui mini buttons float-right"
                                id="paymentBtn"
                            >
                                <button
                                    class="ui positive button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCreditCard({
                                            index: index,
                                            ...userState.credit_cards[index],
                                        });
                                        setModalState("edit");
                                        dispatch({
                                            type: "OPEN_MODAL",
                                            dimmer: "blurring",
                                        });
                                    }}
                                >
                                    Edit
                                </button>
                                <div class="or"></div>
                                <button
                                    class="ui button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCardRemoval(index);
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
        :
        <div class="ui segment clearfix">
            <h4 className="center-text">Uh Oh... it looks like you have no cards saved</h4>
        </div>
        }
            
        </>
    );
}

export default PaymentCards;
