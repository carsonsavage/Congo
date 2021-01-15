import React, { useContext, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { ListGroup, Item } from "react-bootstrap";
import UserContext from "../../../util/userContext";
import "./address-modal.css";

function CardModal({ setEditState, setPaymentCard, dispatch }) {
    const { userState } = useContext(UserContext);
    const [arrayIndex, setArrayIndex] = useState();

    return (
        <>
            <Modal.Header>Choose an address to ship to</Modal.Header>
            <Modal.Content>
                <ListGroup>
                    <form>
                        {userState.credit_cards.map((payment, index) => (
                            <ListGroup.Item key={index}>
                                <input
                                    type="radio"
                                    name="address"
                                    onClick={() => {
                                        setArrayIndex(index);
                                    }}
                                />
                                <div className="row">
                                    <div className="col-3">
                                        <i class="credit card icon"></i>
                                        <span>
                                            {" "}
                                            Card ending in {payment.card_number}
                                        </span>
                                    </div>
                                    <div className="col-3">
                                        <p>{payment.card_name.toUpperCase()}</p>
                                    </div>

                                    <div className="col-3">
                                        <p>
                                            {payment.expire_month} /{" "}
                                            {payment.expire_year}
                                        </p>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </form>
                </ListGroup>
            </Modal.Content>
            <Modal.Actions>
                <div id="model-buttons">
                    <Button
                        negative
                        onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                    >
                        Cancel
                    </Button>
                    <Button
                        positive
                        onClick={() => {
                            setPaymentCard(userState.credit_cards[arrayIndex]);
                            dispatch({ type: "CLOSE_MODAL" });
                        }}
                    >
                        Change
                    </Button>
                </div>
            </Modal.Actions>
        </>
    );
}

export default CardModal;
