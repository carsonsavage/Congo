import React, { useEffect, useState, useContext } from "react";
import { Form, Col } from "react-bootstrap";
import BootstrapBtn from "react-bootstrap/Button";
import "./signup-form.css";
import UserContext from "../../../util/userContext.js";
import API from "../../../util/API.js";

export default function Login() {
    const { registerUser, signupErrorState, setSignupErrorState } = useContext(
        UserContext
    );
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [address, setAddress] = useState({
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
    });

    const [creditCard, setCreditCard] = useState({
        card_number: "",
        card_name: "",
        expire_month: "",
        expire_year: "",
    });

    useEffect(() => {
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match");
        } else {
            setPasswordError("");
        }
    }, [confirmPassword]);

    useEffect(() => {
        setAddress({ ...address, name: `${firstName} ${lastName}` });
    }, [firstName, lastName]);

    function handleSubmit(event) {
        event.preventDefault();
        const registerObj = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            phone_num: phoneNumber,
            address: [address],
            credit_cards: [creditCard],
        };
        if (!passwordError) {
            //call to register
            API.checkUser(registerObj.email).then(({ data }) => {
                if (data[0]) {
                    setSignupErrorState("Email already in use");
                } else {
                    registerUser(registerObj).then((res) => {
                        window.location.href = "/login";
                    });
                }
            });
        }
    }

    return (
        <div className="Signup">
            <div className="ui horizontal divider signup-divider">
                User Information
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John"
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Doe"
                            required
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            autoFocus
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Row>

                <Form.Group size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        class="ui left icon input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <div className="password-check-error">{passwordError}</div>

                <Form.Group size="lg" className="">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        class="ui left icon input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="password-check-error">{passwordError}</div>

                <div className="ui horizontal divider signup-divider">
                    Address Information
                </div>

                <Form.Group size="lg">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        class="ui left icon input"
                        type="text"
                        value={address.address1}
                        onChange={(e) =>
                            setAddress({ ...address, address1: e.target.value })
                        }
                        placeholder="Street address or P.O. Box"
                        required
                    />
                    <Form.Control
                        class="ui left icon input"
                        type="text"
                        value={address.address2}
                        onChange={(e) =>
                            setAddress({ ...address, address2: e.target.value })
                        }
                        placeholder="Apt, suite, unit, building, floor, etc."
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            value={address.city}
                            onChange={(e) =>
                                setAddress({ ...address, city: e.target.value })
                            }
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Choose..."
                            onChange={(e) =>
                                setAddress({
                                    ...address,
                                    state: e.target.value,
                                })
                            }
                            required
                        >
                            <option> </option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                            type="text"
                            value={address.zipcode}
                            onChange={(e) =>
                                setAddress({
                                    ...address,
                                    zipcode: e.target.value,
                                })
                            }
                            required
                        />
                    </Form.Group>
                </Form.Row>

                <div className="ui horizontal divider signup-divider">
                    Payment Information
                </div>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            type="tel"
                            inputMode="numeric"
                            maxLength="4"
                            placeholder="xxxx"
                            required
                            onChange={(e) =>
                                setCreditCard({
                                    ...creditCard,
                                    card_number: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Name on card</Form.Label>
                        <Form.Control
                            required
                            onChange={(e) =>
                                setCreditCard({
                                    ...creditCard,
                                    card_name: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Expiration date</Form.Label>
                        <Form.Row>
                            <Col xs={5}>
                                <Form.Control
                                    as="select"
                                    onChange={(e) =>
                                        setCreditCard({
                                            ...creditCard,
                                            expire_month: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option> </option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Control>
                            </Col>
                            <div>/</div>
                            <Col xs={5}>
                                <Form.Control
                                    as="select"
                                    onChange={(e) =>
                                        setCreditCard({
                                            ...creditCard,
                                            expire_year: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option> </option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form.Row>
                <div className="error-statement">{signupErrorState}</div>
                <BootstrapBtn block size="lg" type="submit" id="signup-btn">
                    Signup
                </BootstrapBtn>
            </Form>
        </div>
    );
}
