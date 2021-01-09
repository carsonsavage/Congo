import React, { useContext } from "react";
import "./order-search.css";
import OrderContext from '../../../util/orderContext.js';

function OrderSearch() {
    const {handleOrderSearchChange} = useContext(OrderContext);
    return (
        <div className="order-search">
            <div class="ui left icon input">
                <input type="text" placeholder="Search orders..." onChange={handleOrderSearchChange}/>
                <i class="search icon"></i>
            </div>
        </div>
    );
}

export default OrderSearch;
