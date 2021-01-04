import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState({
        name: `${firstName} ${lastName}`,
        address: "",
        city: "",
        state: "",
        zipcode: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Signup">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
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
                <Form.Group size="lg" controlId="confirm_password">
                    <Form.Label>Confirm Password</Form.Label>
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
                <div className="ui green labeled icon button" id="signup-btn">
                    Sign Up
                    <i className="signup icon" />
                </div>
            </div>
        </div>
    );
}
