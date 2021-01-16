import React, { useEffect, useState } from "react";
import {
    Button,
    Form,
    Segment,
    Header,
    Icon,
    Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import API from "../../util/API.js";
import ReactInputVerificationCode from "react-input-verification-code";
import "./reset-password.css";

function ResetPasswordForm({ props }) {
    const [messageState, setMessageState] = useState(false);
    const [code, setCode] = useState("");
    const [verificationCode, setVerificationCode] = useState();
    const [showForm, setShowForm] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState();

    useEffect(() => {
        API.getCode(props.match.params.id).then(({ data }) => {
            if (data) {
                console.log(data);
                setMessageState(true);
                setVerificationCode(parseInt(data.verification_code));
            } else {
                setMessageState(false);
            }
        });
    }, []);

    useEffect(() => {
        if (password === confirmPassword) {
            setPasswordError("");
        } else {
            setPasswordError("Passwords Don't match");
        }
    }, [confirmPassword]);

    function checkCode(event) {
        event.preventDefault();
        if (parseInt(verificationCode) === parseInt(code)) {
            setMessageState("success");
            setShowForm(true);
        } else {
            setMessageState("negative");
            setShowForm(false);
        }
    }

    function submitPasswordChange(event) {
        event.preventDefault();
        if (!passwordError) {
            API.updatePassword(props.match.params.id, {
                password: password,
            }).then(({ data }) => {
                if (data) {
                    setMessageState("changed");
                }
            });
        }
    }

    function generateSuccessMessage() {
        return (
            <>
                <Message
                    color="green"
                    className="center"
                    id="forgotten-password-form"
                >
                    <span>Success!</span> Your password was successfully
                    changed. <Link to="/login">Login</Link>
                </Message>
            </>
        );
    }

    function generatePage() {
        return (
            <>
                {messageState === false ? (
                    <Message
                        color="red"
                        className="center"
                        id="forgotten-password-form"
                    >
                        That link is expired. If you need to reset your
                        password, please request a{" "}
                        <Link to="/forgot-password">new code</Link>
                        <br />
                        If you feel you are reaching this message in error,{" "}
                        <Link to="/contact-us"> Contact Us</Link>
                    </Message>
                ) : (
                    <div id="forgotten-password-form">
                        <Header as="h2" icon textAlign="center">
                            <Icon name="exclamation triangle" />
                            <Header.Content>Reset your password</Header.Content>
                        </Header>
                        <hr />
                        <div className="reset-code-div">
                            <span>Input your verification code</span>
                            <div className="input-code">
                                <ReactInputVerificationCode
                                    length={6}
                                    onChange={setCode}
                                />
                            </div>

                            <Button onClick={checkCode}>Submit</Button>
                            {messageState === "success" && (
                                <Message success>
                                    <Message.Header id="reset-password-message">
                                        Success! Reset your password below
                                    </Message.Header>
                                </Message>
                            )}

                            {messageState === "negative" && (
                                <Message negative>
                                    <Message.Header id="reset-password-message">
                                        Sorry, that code is not correct. Try
                                        again,{" "}
                                        <Link to="/forgot-password">
                                            request a new code
                                        </Link>
                                        , or
                                        <Link to="/contact-us">
                                            {" "}
                                            Contact Us
                                        </Link>
                                    </Message.Header>
                                </Message>
                            )}
                        </div>

                        {showForm && (
                            <>
                                <Segment>
                                    <Form onSubmit={submitPasswordChange}>
                                        <Form.Field>
                                            <label>New Password</label>
                                            <input
                                                type="password"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                            />
                                        </Form.Field>
                                        <div className="password-check-error">
                                            {passwordError}
                                        </div>
                                        <Form.Field>
                                            <label>Confirm New Password</label>
                                            <input
                                                type="password"
                                                onChange={(e) => {
                                                    setConfirmPassword(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </Form.Field>
                                        <div className="password-check-error">
                                            {passwordError}
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </Segment>
                            </>
                        )}
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {messageState === "changed"
                ? generateSuccessMessage()
                : generatePage()}
        </>
    );
}

export default ResetPasswordForm;
