import React from 'react';
import {CheckoutHeader} from '../../components/header/header.js';
import Wrapper from '../../components/wrapper/wrapper.js';
import {CheckoutConfirmHorizontal, CheckoutConfirmVertical} from '../../components/checkoutPage/checkout-confirm/checkout-confirm.js';
import CheckoutDetails from '../../components/checkoutPage/checkout-details/checkout-details.js';


function Checkout(){
    return (
        <>
        <CheckoutHeader />

        <Wrapper>
            <CheckoutConfirmVertical />
            <CheckoutDetails />
            <CheckoutConfirmHorizontal />
        </Wrapper>
        </>
    )
};

export default Checkout;