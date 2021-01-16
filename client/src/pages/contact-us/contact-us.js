import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./contact-us.css";
import Button from "react-bootstrap/Button";

function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
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
                                <MDBInput type="text" />
                                <label>Your email</label>
                                <MDBInput type="email" />
                                <label>Subject</label>
                                <select
                                    className="browser-default custom-select"
                                    id="contact-us-select"
                                    group
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
                                        <MDBInput type="text" />
                                    </>
                                )}
                                <label>Your Message</label>
                                <MDBInput type="textarea" rows="2" />
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
