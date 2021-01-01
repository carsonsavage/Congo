import React from 'react';
import './order-search.css';

function OrderSearch(){
    return (
        <div className="order-search">
            <input type="text" name="orderSearch" />
            <button type="submit">Search Orders</button>
        </div>
    )
};

export default OrderSearch;