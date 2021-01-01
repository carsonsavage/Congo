import React from 'react';
import Wrapper from '../../components/wrapper/wrapper.js';
import {CheckoutConfirmHorizontal, CheckoutConfirmVertical} from '../../components/checkoutPage/checkout-confirm/checkout-confirm.js';
import CheckoutDetails from '../../components/checkoutPage/checkout-details/checkout-details.js';


function Checkout(){
    return (
        <>

        <Wrapper>
            <CheckoutConfirmVertical />
            <CheckoutDetails />
            <CheckoutConfirmHorizontal />
        </Wrapper>
        </>
    )
};

export default Checkout;