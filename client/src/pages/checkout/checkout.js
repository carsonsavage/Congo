import React from 'react';
import Header from '../../components/header/header.js';
import Wrapper from '../../components/wrapper/wrapper.js';


function Checkout(){
    return (
        <>
        <Header type={"checkout"}/>

        <Wrapper>
            <CheckoutConfirmVertical />
            <CheckoutDetails />
            <CheckoutConfirmHorizontal />
        </Wrapper>
        </>
    )
};

export default Checkout;