import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Logo from '../../components/loginPage/logo/logo.js';
import LoginForm from '../../components/loginPage/login-form/login-form.js';
import LoginBtn from '../../components/loginPage/login-btn/login-btn.js';

function Login(){
    return (
        <>
        <Wrapper>
            <Logo />
            <LoginForm />
            <LoginBtn />
        </Wrapper>
        </>
    )
};

export default Login;