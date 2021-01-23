import React from "react";
import Wrapper from "../../components/wrapper/wrapper";
import Logo from "../../components/loginPage/logo/logo.js";
import SignupForm from "../../components/signupPage/signup-form/signup-form.js";
import "./signup.css";

function Signup(props) {
    return (
        <>
            <Wrapper>
                <div id="signup-page">
                    <Logo />
                    <SignupForm history={props.history} />
                </div>
            </Wrapper>
        </>
    );
}

export default Signup;
