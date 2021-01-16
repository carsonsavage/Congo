import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./contact-us.css";
import Button from "react-bootstrap/Button";

function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [customSubject, setCustomSubject] = useState();
    const [message, setMessage] = useState();

    return (
        <>
            <MDBContainer id="contactus-form">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                        <form>
                            <div className="orders-header center">
                                <h1 className="ui icon header">
                                    <i className="envelope open outline icon"></i>
                                    <div className="content">Write to us</div>
                                </h1>
                            </div>
                            <hr />
                            <div className="grey-text">
                                <label>Your name</label>
                                <MDBInput
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label>Your email</label>
                                <MDBInput
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label>Subject</label>
                                <select
                                    className="browser-default custom-select"
                                    id="contact-us-select"
                                    group
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option>Choose your option...</option>
                                    <option value="Product Inquiry">
                                        Product Inquiry
                                    </option>
                                    <option value="Sales">Sales</option>
                                    <option value="Sales Support">
                                        Sales Support
                                    </option>
                                    <option value="Account Issues">
                                        Account Issues
                                    </option>
                                    <option value="Order Issues/Questions">
                                        Order Issues/Questions
                                    </option>
                                    <option value="Other">Other</option>
                                </select>
                                {subject === "Other" && (
                                    <>
                                        <label>Custom subject</label>
                                        <MDBInput
                                            type="text"
                                            value={customSubject}
                                            onChange={(e) =>
                                                setCustomSubject(e.target.value)
                                            }
                                        />
                                    </>
                                )}
                                <label>Your Message</label>
                                <MDBInput
                                    type="textarea"
                                    rows="4"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                />
                            </div>
                            <div className="text-center">
                                <Button
                                    block
                                    size="lg"
                                    type="submit"
                                    className="ui button green"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default ContactUs;
