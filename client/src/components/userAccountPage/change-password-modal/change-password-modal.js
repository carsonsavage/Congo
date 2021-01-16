import React from "react";
import { Button, Modal, Message } from "semantic-ui-react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function ChangePasswordModal({
    password,
    confirmPassword,
    oldPassword,
    setPassword,
    setConfirmPassword,
    setOldPassword,
    dispatch,
    changeUserPassword,
    passwordError,
    passwordRegexError,
    message,
}) {
    return (
        <>
            <Modal.Header>Change Your Password</Modal.Header>
            <Modal.Content>
                <Form
                    onSubmit={(event) => {
                        console.log(event);
                    }}
                >
                    <Form.Group>
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="password-check-error">{passwordError}</div>
                    <div className="password-check-error">
                        {passwordRegexError}
                    </div>
                    <Form.Group>
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="password-check-error">{passwordError}</div>
                </Form>
            </Modal.Content>
            {message === "negative" && (
                <Message negative id="change-password-message">
                    <Message.Header>
                        Old password is incorrect. Try again or
                        <Link to="/contact-us"> Contact Us</Link> for help
                    </Message.Header>
                </Message>
            )}

            {message === "success" && (
                <Message success id="change-password-message">
                    <Message.Header>
                        <i className="ui icon check"></i>Password changed
                    </Message.Header>
                </Message>
            )}

            <Modal.Actions>
                <div id="model-buttons">
                    <Button
                        negative
                        onClick={() => {
                            setPassword("");
                            setConfirmPassword("");
                            setOldPassword("");
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
                            changeUserPassword();
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
