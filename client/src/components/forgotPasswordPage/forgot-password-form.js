import React, { useState } from "react";
import {
    Button,
    Form,
    Segment,
    Header,
    Icon,
    Message,
} from "semantic-ui-react";
import "./forgot-password-form.css";
import { Link } from "react-router-dom";
import API from "../../util/API.js";

function ForgotPasswordForm() {
    const [messageState, setMessageState] = useState(false);
    const [email, setEmail] = useState("");

    function checkUserEmail(event) {
        event.preventDefault();
        API.checkUserEmail(email).then(({ data }) => {
            if (data[0]) {
                setMessageState(true);
                API.sendPasswordReset(data[0]._id);
            } else {
                setMessageState(true);
            }
        });
    }

    return (
        <div id="forgotten-password-form">
            <Header as="h2" icon textAlign="center">
                <Icon name="exclamation triangle" />
                <Header.Content>Forgot Password</Header.Content>
            </Header>
            <hr />
            <Segment inverted>
                <Form inverted>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="your@forgotten-email.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Field>
                    <Button type="submit" onClick={checkUserEmail}>
                        Submit
                    </Button>
                </Form>
            </Segment>

            {messageState && (
                <Message success>
                    <Message.Header id="reset-password-message">
                        If your email exists in our system, you will receive a password reset link
                    </Message.Header>
                </Message>
            )}
        </div>
    );
}

export default ForgotPasswordForm;
