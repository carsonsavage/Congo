import React, { useState, useEffect } from "react";
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";
import UserContext from "./util/userContext.js";
import API from "./util/API";
import { useCookies } from "react-cookie";

function StateController(props) {
    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    const [cookies, setCookie, removeCookie] = useCookies(["cookieCart"]);

    const [searchState, setSearchState] = useState({
        search_query: "",
        search_category: "",
        search_results: [],
        filtered_results: [],
        product_result: {},
    });

    const [cartIdState, setCartIdState] = useState([]);

    const [savedCartItemsState, setSavedCartItemsState] = useState([]);

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

    useEffect(() => {
        saveCurrentCart();
        //call to get multiple products
        API.getMultipleProducts(cartIdState).then(({ data }) => {
            setSavedCartItemsState(data);
        });
        //set into saved cartitemstate
    }, [cartIdState]);

    useEffect(() => {
        let total = 0;
        let count = 0;
        if (savedCartItemsState[0]) {
            savedCartItemsState.forEach((product) => {
                total = total + product.price;
                count = count + 1;
            });
        }

        total = parseFloat(total.toFixed(2));

        setCartState({
            ...cartState,
            cart_total: total,
            cart_item_count: count,
            cart_items: savedCartItemsState,
        });
    }, [savedCartItemsState]);

    const [userState, setUserState] = useState({
        loggedIn: false,
        _id: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        saved_address: [],
        saved_payments: [],
    });

    const [editableUserState, setEditableUserState] = useState(userState);

    const [ordersState, setOrdersState] = useState({});

    useEffect(() => {
        setEditableUserState(userState);
        loadCart();
    }, [userState]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        //call to check user that is in session
        API.getUser()
            //set to the userState
            .then(({ data }) => {
                if (data) {
                    setUserState({ ...userState, loggedIn: true, ...data });
                    loadCart();
                }
            });
    };

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

    const loadOrders = (userId) => {
        //call to get orders by userId
        //set into ordersState
    };

    const lookupProduct = (productId) => {
        API.lookupProduct(productId).then(({ data }) => {
            setSearchState({ ...searchState, product_result: data[0] });
        });
    };

    const handleSearchChange = (event) => {
        setSearchState({ ...searchState, search_query: event.target.value });
    };

    const handleCategoryChange = (event) => {
        setSearchState({ ...searchState, search_category: event.target.value });
    };

    const handleUserInfoChange = (event) => {
        const { name, value } = event.target;
        setEditableUserState({ ...editableUserState, [name]: [value] });
    };

    const saveUserInfoChange = () => {
        //make api call to save updated user
        //on success, change userState
        setUserState(editableUserState);
    };

    const registerUser = (user) => {
        return API.register(user);
    };

    const loginUser = (user) => {
        API.login(user)
            .then(({ data }) => {
                setUserState({ ...userState, loggedIn: true, ...data });
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logoutUser = () => {
        API.logout().then(({ status }) => {
            if (status === 200) {
                window.location.href = "/";
            }
        });
    };

    const addProductToCart = (productId) => {
        let newCartArray;
        if (cartIdState) {
            newCartArray = cartIdState;
            newCartArray.push(productId);
        } else {
            newCartArray = [productId];
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

    const deleteProductFromCart = (productId) => {
        let deletedArray = [...cartIdState];
        deletedArray.splice(0, 1);
        setCartIdState(deletedArray);
    };

    const searchProducts = (category, query) => {
        API.searchProducts(category, query).then(({ data }) => {
            setSearchState({
                ...searchState,
                search_results: data,
                filtered_results: data,
            });
        });
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
            }}
        >
            <SearchContext.Provider
                value={{
                    searchState,
                    handleSearchChange,
                    searchProducts,
                    lookupProduct,
                }}
            >
                <UserContext.Provider
                    value={{
                        userState,
                        editableUserState,
                        handleUserInfoChange,
                        saveUserInfoChange,
                        registerUser,
                        loginUser,
                        logoutUser,
                    }}
                >
                    {props.children}
                </UserContext.Provider>
            </SearchContext.Provider>
        </CartContext.Provider>
    );
}

export default StateController;
