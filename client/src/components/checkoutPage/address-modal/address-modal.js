import React, { useContext, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { ListGroup, Item } from "react-bootstrap";
import UserContext from "../../../util/userContext";
import "./address-modal.css";

function AddressModal({ setEditState, setShippingAddress, dispatch }) {
    const { userState } = useContext(UserContext);
    const [arrayIndex, setArrayIndex] = useState();

    return (
        <>
            <Modal.Header>Choose an address to ship to</Modal.Header>
            <Modal.Content>
                <ListGroup>
                    <form>
                        {userState.address.map((address, index) => (
                            <ListGroup.Item key={index}>
                                <input
                                    type="radio"
                                    name="address"
                                    onClick={() => {
                                        setArrayIndex(index);
                                    }}
                                />
                                <div className="edit-address">
                                    <div className="edit-address-header">
                                        {address.name.toUpperCase()}
                                    </div>
                                    <div className="edit-address-description">
                                        <address>
                                            <p>
                                                {address.address1.toUpperCase()}
                                            </p>
                                            <p>
                                                {address.address2.toUpperCase()}
                                            </p>
                                            <p>
                                                {address.city.toUpperCase()},
                                                {address.state}
                                            </p>
                                            <p>{address.zipcode}</p>
                                        </address>
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
                            setShippingAddress(userState.address[arrayIndex]);
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

export default AddressModal;
