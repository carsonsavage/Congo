import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import "./contact-us.css"
import Button from "react-bootstrap/Button";

function ContactUs() {
    return (

        <>
            <MDBContainer id="contactus-form">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                        <form>
                            <br/>
                            <br/>
                            <p className="h2 text-center mb-4">Write to us!</p>
                            <div className="grey-text">
                                <h4><b>Your name:</b></h4>
                                <MDBInput icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                    <h4><b>Your email:</b></h4>
                                <MDBInput icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                    <h4><b>Subject:</b></h4>
                                <MDBInput icon="tag" group type="text" validate error="wrong" success="right" />
                                <h4><b>Message:</b></h4>
                                <MDBInput type="textarea" rows="2" icon="pencil-alt" />
                            </div>
                            <div className="text-center">
                                <Button
                                    block
                                    size="lg"
                                    type="submit"
                                    color= "green"
                                >
                                    Send
                </Button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default ContactUs
