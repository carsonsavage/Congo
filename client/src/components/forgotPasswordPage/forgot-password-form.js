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

function ForgotPasswordForm() {
    const [messageState, setMessageState] = useState("");
    
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
                        <input placeholder="your@forgotten-email.com" />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
            </Segment>

            <Message success>
                <Message.Header id="reset-password-message">
                    Check your email for a reset link
                </Message.Header>
            </Message>

            <Message negative>
                <Message.Header id="reset-password-message">
                    Sorry, we couldn't find that email. Try again or you can{" "}
                    <Link to="/contact-us"> Contact Us</Link>
                </Message.Header>
            </Message>
        </div>
    );
}

export default ForgotPasswordForm;
