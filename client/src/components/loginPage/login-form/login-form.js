import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login-form.css";
import { Link } from "react-router-dom";
import UserContext from '../../../util/userContext.js';

export default function Login() {
    const {loginUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        loginUser({email: email, password: password});

    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        class="ui left icon input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                >
                    Login
                </Button>
            </Form>
            <div>
                <div className="ui horizontal divider">Or</div>

                <Link to="/signup">
                    <div
                        className="ui green labeled huge icon button"

                        id="signup-btn"
                    >
                        Sign Up
                        <i className="signup icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
