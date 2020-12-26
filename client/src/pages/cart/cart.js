import React from 'react';
import {MainHeader} from '../../components/header/header.js';
import Wrapper from '../../components/wrapper/wrapper.js';
import CartCallToAction from '../../components/cartPage/cart-callToAction/cart-cta.js';
import CartItems from '../../components/cartPage/cart-items/cart-items.js';
import Footer from '../../components/footer/footer.js';

function Cart(){
    return (
        <>
        <MainHeader />

        <Wrapper>
            <CartCallToAction />
            <CartItems />
        </Wrapper>

        <Footer />
        </>
    )
};

export default Cart;