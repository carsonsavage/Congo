import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext.js";
import "./payment-card.css";
import { Button } from "semantic-ui-react";
import { Col } from "react-bootstrap";

function PaymentCards({ setCreditCard, setModalState, dispatch }) {
    const { userState, handleCardRemoval } = useContext(UserContext);

    return (
        <>
            {userState.credit_cards.length > 0 ? (
                <>
                    {userState.credit_cards.map((payment, index) => (
                        <div class="ui segment clearfix" key={index}>
                            <div className="row">
                                <Col sm={6}>
                                    <i class="credit card icon"></i>
                                    <span>
                                        {" "}
                                        Card ending in {payment.card_number}
                                    </span>
                                </Col>
                                <Col sm={6}>
                                    <p>{payment.card_name.toUpperCase()}</p>
                                </Col>

                                <Col sm={6}>
                                    <p>
                                        {payment.expire_month} /{" "}
                                        {payment.expire_year}
                                    </p>
                                </Col>
                                <Col sm={6}>
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
                                                    ...userState.credit_cards[
                                                        index
                                                    ],
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
                                </Col>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div class="ui segment clearfix">
                    <h4 className="center-text">
                        Uh Oh... it looks like you have no cards saved
                    </h4>

                    <Button
                        animated="fade"
                        className="green"
                        id="center-btn"
                        onClick={() => {
                            setModalState("card");
                            dispatch({
                                type: "OPEN_MODAL",
                                dimmer: "blurring",
                            });
                        }}
                    >
                        <Button.Content visible>Add a card</Button.Content>
                        <Button.Content hidden>
                            <i className="icon dollar"></i>
                        </Button.Content>
                    </Button>
                </div>
            )}
        </>
    );
}

export default PaymentCards;
