import React, { useState, useContext } from "react";
import CartContext from "../util/cartContext.js";


function CartController(props) {
    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    const daysToAdd = Math.floor(Math.random() * 9);
    const date = new Date().addDays(daysToAdd);
    const formatedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    const [cartState, setCartState] = useState({
        cart_total: 0,
        cart_item_count: 0,
        cart_items: [],
        delivery_date: formatedDate,
    });

    const [cartIdState, setCartIdState] = useState([]);

    const [savedCartItemsState, setSavedCartItemsState] = useState([]);

    const [cookies, setCookie, removeCookie] = useCookies(["cookieCart"]);

    useEffect(() => {
        saveCurrentCart();
        //call to get multiple products
        let map = new Map();
        let productIdArray = [];
        cartIdState.forEach(({ _id, qnty_selected }) => {
            map.set(_id, qnty_selected);
            productIdArray.push(_id);
        });
        API.getMultipleProducts(productIdArray).then(({ data }) => {
            let productArray = data;
            productArray.forEach(({ _id }, index) => {
                productArray[index].qnty_selected = map.get(_id);
            });

            setSavedCartItemsState(productArray);
        });
        //set into saved cartitemstate
    }, [cartIdState]);

    useEffect(() => {
        let total = 0;
        let count = 0;
        if (savedCartItemsState[0]) {
            savedCartItemsState.forEach(({ price, qnty_selected }) => {
                let productTotal = price * qnty_selected;
                total = total + productTotal;
                count = count + parseInt(qnty_selected);
            });
        }

        setCartState({
            ...cartState,
            cart_total: total,
            cart_item_count: count,
            cart_items: savedCartItemsState,
        });
    }, [savedCartItemsState]);

    const loadCart = () => {
        //call to get cart if someone is logged in
        if (userState.loggedIn) {
            API.getCart(userState._id).then(({ data }) => {
                let cartArray = [];
                if (data) {
                    cartArray = data.cart_items;
                    if (cookies.cookieCart) {
                        cartArray = cartArray.concat(cookies.cookieCart);
                        removeCookie(["cookieCart"], { path: "/" });
                    }
                } else if (cookies.cookieCart) {
                    cartArray = cartArray.concat(cookies.cookieCart);
                    removeCookie(["cookieCart"], { path: "/" });
                }

                let uniqueArray = [...new Set(cartArray)];
                setCartIdState(uniqueArray);
            });
        } else {
            //call to get cart if someone is NOT logged in
            if (cookies.cookieCart) {
                setCartIdState(cookies.cookieCart);
            }
        }
    };

    const addProductToCart = (productId, qntySelected) => {
        let productObj = { _id: productId, qnty_selected: qntySelected };
        let newCartArray;
        if (cartIdState) {
            newCartArray = cartIdState;
            newCartArray.push(productObj);
        } else {
            newCartArray = [productObj];
        }
        let uniqueArray = [...new Set(newCartArray)];
        if (userState.loggedIn) {
            API.saveCart(userState._id, uniqueArray).then((data) => {
                window.location.href = "/cart";
            });
        } else {
            removeCookie(["cookieCart"], { path: "/" });
            setCookie("cookieCart", uniqueArray, { path: "/" });
            window.location.href = "/cart";
        }
    };

    const saveCurrentCart = () => {
        if (userState.loggedIn) {
            API.saveCart(userState._id, cartIdState).then(({ data }) => {});
        } else {
            removeCookie(["cookieCart"], { path: "/" });
            setCookie("cookieCart", cartIdState, { path: "/" });
        }
    };

    const deleteProductFromCart = (index) => {
        let deletedArray = cartIdState;
        deletedArray.splice(parseInt(index), 1);
        setCartIdState([...deletedArray]);
    };

    const updateProductInCart = (index, newQnty) => {
        let updatedArray = cartIdState;
        updatedArray[index].qnty_selected = parseInt(newQnty);
        setCartIdState([...updatedArray]);
    };

    return (
        <CartContext.Provider
            value={{
                cartState,
                setCartState,
                addProductToCart,
                deleteProductFromCart,
                saveCurrentCart,
                cartIdState,
                setCartIdState,
                updateProductInCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartController;
