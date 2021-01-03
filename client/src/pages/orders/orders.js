import React from "react";
import "./orders.css";
import Footer from "../../components/footer/footer";
import Wrapper from "../../components/wrapper/wrapper";
import OrderSearch from "../../components/ordersPage/order-search/order-search.js";
import OrderDisplay from "../../components/ordersPage/order-display/order-display.js";

function Orders() {
    return (
        <>
            <Wrapper>
                <div className="orders-header">
                    <h1 class="ui icon header">
                        <i class="massive box icon"></i>
                        <div class="content">
                            Orders
                        </div>
                    </h1>
                </div>
                <hr />
                <OrderSearch />
                <OrderDisplay />
            </Wrapper>

            <Footer />
        </>
    );
}

export default Orders;
