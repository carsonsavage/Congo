import React, { Fragment, Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./contact-us.css";
import Button from "react-bootstrap/Button";

function ContactUs() {
    return (
        <>
            <MDBContainer id="contactus-form">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Write to us</p>
                            <div className="grey-text">
                                <label>Your name</label>
                                <MDBInput
                                    icon="user"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <label>Your email</label>
                                <MDBInput
                                    icon="envelope"
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <label>Subject</label>
                                <select
                                    className="browser-default custom-select"
                                    id="contact-us-select"
                                    group
                                >
                                    <option>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>Your Message</label>
                                <MDBInput
                                    type="textarea"
                                    rows="2"
                                    icon="pencil-alt"
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
