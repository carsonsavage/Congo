import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Logo from '../../components/loginPage/logo/logo.js';
import SignupForm from '../../components/signupPage/signup-form/signup-form.js';

function Signup(){
    return (
        <>
        <Wrapper>
            <Logo />
            <SignupForm />
        </Wrapper>
        </>
    )
};

export default Signup;