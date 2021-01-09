import React from "react";
import Wrapper from "../../components/wrapper/wrapper";
import Logo from "../../components/loginPage/logo/logo.js";
import SignupForm from "../../components/signupPage/signup-form/signup-form.js";
import "./signup.css";

function Signup() {
    return (
        <>
            <Wrapper>
                <div id="signup-page">
                    <Logo />
                    <SignupForm />
                </div>
            </Wrapper>
        </>
    );
}

export default Signup;
