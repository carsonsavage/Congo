import React, { useContext, useState } from "react";
import "./saved-payment.css";
import PaymentCards from "../payment-card/payment-card.js";
import UserContext from "../../../util/userContext";
import { Button, Modal } from "semantic-ui-react";
import AddCardModal from "../add-card-modal/add-card-modal.js";
import EditCardModal from "../edit-card-modal/edit-card-modal.js";

function exampleReducer(state, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return { open: true, dimmer: action.dimmer };
        case "CLOSE_MODAL":
            return { open: false };
        default:
            throw new Error();
    }
}

function SavedPayment() {
    const { handleCardAdd, handleCardEdit } = useContext(UserContext);

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    });
    const { open, dimmer } = state;

    const [modalState, setModalState] = useState("");

    const [creditCard, setCreditCard] = useState({
        card_number: "",
        card_name: "",
        expire_month: "",
        expire_year: "",
    });

    return (
        <>
            <div className="ui raised segment">
                <button className="ui green ribbon label">Wallet</button>
                <h4>Payment Methods</h4>
                <hr />
                <button
                    className="circular ui icon button"
                    onClick={() => {
                        setModalState("card");
                        dispatch({ type: "OPEN_MODAL", dimmer: "blurring" });
                    }}
                >
                    <i class="plus icon"></i>
                </button>
                <div class="ui stacked segments">
                    <PaymentCards
                        setCreditCard={setCreditCard}
                        setModalState={setModalState}
                        dispatch={dispatch}
                    />
                </div>
            </div>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: "CLOSE_MODAL" })}
                id="card-modal"
            >
                {modalState === "card" && (
                    <AddCardModal
                        dispatch={dispatch}
                        handleCardAdd={handleCardAdd}
                        setCreditCard={setCreditCard}
                        creditCard={creditCard}
                    />
                )}

                {modalState === "edit" && (
                    <EditCardModal
                        dispatch={dispatch}
                        handleCardEdit={handleCardEdit}
                        setCreditCard={setCreditCard}
                        creditCard={creditCard}
                    />
                )}
            </Modal>
        </>
    );
}

export default SavedPayment;
