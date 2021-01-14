import React from "react";
import ResetPasswordForm from "../../components/resetPasswordPage/reset-password.js";
import Wrapper from "../../components/wrapper/wrapper.js";

function ResetPassword(props) {
    return (
        <Wrapper>
            <ResetPasswordForm props={props}/>
        </Wrapper>
    );
}

export default ResetPassword;
