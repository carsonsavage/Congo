import React from 'react';
import Wrapper from '../../components/wrapper/wrapper.js';
import CartCallToAction from '../../components/cartPage/cart-callToAction/cart-cta.js';
import CartItems from '../../components/cartPage/cart-items/cart-items.js';
import Footer from '../../components/footer/footer.js';

function Cart(){
    return (
        <>
        <Wrapper>
            <CartCallToAction />
            <CartItems />
        </Wrapper>

        <Footer />
        </>
    )
};

export default Cart;