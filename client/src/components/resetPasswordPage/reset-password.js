import React, { useState } from "react";
import {
    Button,
    Form,
    Segment,
    Header,
    Icon,
    Message,
} from "semantic-ui-react";
import API from "../../util/API.js";
import ReactInputVerificationCode from "react-input-verification-code";

function ResetPasswordForm() {
    const [messageState, setMessageState] = useState("");
    const [code, setCode] = useState("");

    console.log(parseInt(code));

    return (
        <>
            <p>This is the password reset page</p>
            <ReactInputVerificationCode length={6} onChange={setCode} />
            <Button>Submit</Button>
        </>
    );
}

export default ResetPasswordForm;
