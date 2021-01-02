import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Logo from '../../components/loginPage/logo/logo.js';
import LoginForm from '../../components/loginPage/login-form/login-form.js';

function Login(){
    return (
        <>
        <Wrapper>
            <Logo />
            <LoginForm />
        </Wrapper>
        </>
    )
};

export default Login;