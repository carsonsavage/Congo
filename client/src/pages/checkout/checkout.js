import React from 'react';
import './checkout.css';
import Wrapper from '../../components/wrapper/wrapper.js';
import CheckoutDetails from '../../components/checkoutPage/checkout-details/checkout-details.js';


function Checkout() {
    return (
        <>

            <Wrapper>
                <div className="clearfix">
                    <CheckoutDetails />
                </div>

            </Wrapper>
        </>
    )
};

export default Checkout;