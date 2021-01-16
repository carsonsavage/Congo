import React, { useContext, useState } from "react";
import "./saved-address.css";
import UserContext from "../../../util/userContext.js";
import AddressCards from "../address-card/address-card.js";
import { Button, Modal } from "semantic-ui-react";
import AddAddressModal from "../add-address-modal/add-address-modal.js";
import EditAddressModal from "../edit-address-modal/edit-address-modal.js";

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

function SavedAddress() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    });
    const { open, dimmer } = state;

    const [modalState, setModalState] = useState("");

    const { userState, handleAddressAdd, handleAddressEdit } = useContext(
        UserContext
    );

    const [address, setAddress] = useState({
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
    });

    return (
        <div className="ui raised segment">
            <button className="ui blue ribbon label">Address Book</button>
            <h4>Saved Addresses</h4>
            <button
                className="circular ui icon button"
                onClick={() => {
                    setModalState("address");
                    dispatch({ type: "OPEN_MODAL", dimmer: "blurring" });
                }}
            >
                <i class="plus icon"></i>
            </button>
            <hr />
            {userState.address.length > 0 ? (
                <div className="ui cards">
                    <AddressCards
                        setModalState={setModalState}
                        setAddress={setAddress}
                        dispatch={dispatch}
                    />
                </div>
            ) : (
                <div className="ui stacked segments">
                    <div className="ui segment clearfix">
                        <h4 className="center-text">
                            Where do we send your orders?
                        </h4>

                        <Button
                            animated="fade"
                            className="blue"
                            id="center-btn"
                            onClick={() => {
                                setModalState("address");
                                dispatch({
                                    type: "OPEN_MODAL",
                                    dimmer: "blurring",
                                });
                            }}
                        >
                            <Button.Content visible>
                                Add an address
                            </Button.Content>
                            <Button.Content hidden>
                                <i className="icon address book"></i>
                            </Button.Content>
                        </Button>
                    </div>
                </div>
            )}

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: "CLOSE_MODAL" })}
            >
                {modalState === "address" && (
                    <AddAddressModal
                        dispatch={dispatch}
                        handleAddressAdd={handleAddressAdd}
                        setAddress={setAddress}
                        address={address}
                    />
                )}

                {modalState === "edit" && (
                    <EditAddressModal
                        dispatch={dispatch}
                        setAddress={setAddress}
                        address={address}
                        handleAddressEdit={handleAddressEdit}
                    />
                )}
            </Modal>
        </div>
    );
}

export default SavedAddress;
