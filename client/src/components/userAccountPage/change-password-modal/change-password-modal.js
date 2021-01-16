import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Form, Col } from "react-bootstrap";

function ChangePasswordModal({
    password,
    confirmPassword,
    oldPassword,
    setPassword,
    setConfirmPassword,
    setOldPassword,
    dispatch,
}) {
    return (
        <>
            <Modal.Header>Change Your Password</Modal.Header>
            <Modal.Content>
                <Form
                    onSubmit={(event) => {
                        console.log(event);
                    }}
                ></Form>
            </Modal.Content>
            <Modal.Actions>
                <div id="model-buttons">
                    <Button
                        negative
                        onClick={() => {
                            setPassword("");
                            dispatch({ type: "CLOSE_MODAL" });
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        positive
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            setPassword("");
                            //handleAddressAdd(address);
                            dispatch({ type: "CLOSE_MODAL" });
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Modal.Actions>
        </>
    );
}

export default ChangePasswordModal;
