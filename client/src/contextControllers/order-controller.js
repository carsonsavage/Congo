import React, { useState, useEffect } from "react";
import OrderContext from "../util/orderContext.js";
import API from "../util/API";

function OrderController(props) {
    const [ordersState, setOrdersState] = useState({
        orders: [],
        filtered_orders: [],
        order_query: "",
    });

    const loadOrders = (userId) => {
        //call to get orders by userId
        API.getOrders(userId)
            //set into ordersState
            .then(({ data }) => {
                setOrdersState({
                    ...ordersState,
                    orders: [...data],
                    filtered_orders: [...data],
                });
            });
    };

    const handleOrderSearchChange = (event) => {
        setOrdersState({ ...ordersState, order_query: event.target.value });
    };

    useEffect(() => {
        if (ordersState.order_query) {
            let filteredArray = [];
            ordersState.orders.forEach((order) => {
                order.items.forEach((item) => {
                    if (
                        item.title
                            .toUpperCase()
                            .includes(ordersState.order_query.toUpperCase())
                    ) {
                        filteredArray.push(order);
                    }
                });
            });

            setOrdersState({ ...ordersState, filtered_orders: filteredArray });
        } else {
            //set orders array
            setOrdersState({
                ...ordersState,
                filtered_orders: ordersState.orders,
            });
        }
    }, [ordersState.order_query]);

    return (
        <OrderContext.Provider
            value={{
                ordersState,
                loadOrders,
                handleOrderSearchChange,
            }}
        >
            {props.children}
        </OrderContext.Provider>
    );
}

export default OrderController;
