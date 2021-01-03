import React from "react";
import "./order-search.css";

function OrderSearch() {
    return (
        <div className="order-search">
            <div class="ui left icon input">
                <input type="text" placeholder="Search orders..." />
                <i class="search icon"></i>
            </div>
        </div>
    );
}

export default OrderSearch;
