import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./contact-us.css";
import Button from "react-bootstrap/Button";
import API from "../../util/API.js";
import { Message } from "semantic-ui-react";

function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [customSubject, setCustomSubject] = useState();
    const [message, setMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    function submitContactUsForm(e) {
        e.preventDefault();
        let contactUsObj = {
            name: name,
            email: email,
            message: message,
        };
        if (subject === "Other") {
            contactUsObj.subject = customSubject;
        } else {
            contactUsObj.subject = subject;
        }

        API.sendContactEmail(contactUsObj).then((data) => {
            //set message to success
            setSuccessMessage(
                "Email was sent successfully. Our support team will be in contact soon"
            );
        });
    }

    return (
        <>
            <MDBContainer id="contactus-form">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                        <form onSubmit={submitContactUsForm}>
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
                                    required
                                />
                                <label>Your email</label>
                                <MDBInput
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label>Subject</label>
                                <select
                                    className="browser-default custom-select"
                                    id="contact-us-select"
                                    group
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
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
                                            required
                                        />
                                    </>
                                )}
                                <label>Your Message</label>
                                <MDBInput
                                    type="textarea"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
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
                            {successMessage && (
                                <Message success>
                                    <Message.Header id="contact-us-message">
                                        <i className="ui icon checkmark"></i>{successMessage}
                                    </Message.Header>
                                </Message>
                            )}
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default ContactUs;
