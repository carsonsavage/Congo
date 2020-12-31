import React from 'react';

const CartContext = React.createContext({
    cart_total: 0,
    cart_item_count: 0,
    cart_items: []
});

export default CartContext;