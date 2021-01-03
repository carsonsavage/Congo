import React from 'react';
import './checkout.css';
import Wrapper from '../../components/wrapper/wrapper.js';
import { CheckoutConfirmHorizontal, CheckoutConfirmVertical } from '../../components/checkoutPage/checkout-confirm/checkout-confirm.js';
import CheckoutDetails from '../../components/checkoutPage/checkout-details/checkout-details.js';


function Checkout() {
    return (
        <>

            <Wrapper>
                <div className="clearfix">
                    <CheckoutDetails />
                    <CheckoutConfirmVertical />
                    <CheckoutConfirmHorizontal />
                </div>

            </Wrapper>
        </>
    )
};

export default Checkout;