import React, { useState, useEffect } from "react";
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";
import UserContext from "./util/userContext.js";
import OrderContext from "./util/orderContext.js";
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
                total = total + parseInt(price) * parseInt(qnty_selected);
                count = count + parseInt(qnty_selected);
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
        email: "",
    });

    const [loginErrorState, setLoginErrorState] = useState("");
    const [signupErrorState, setSignupErrorState] = useState("");

    const [editableUserState, setEditableUserState] = useState();

    const [ordersState, setOrdersState] = useState({
        orders: [],
        filtered_orders: [],
        order_query: "",
    });

    useEffect(() => {
        setEditableUserState(userState);
        loadCart();
        if (userState.loggedIn) {
            API.update(userState._id, userState);
        }
    }, [userState]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        //call to check user that is in session
        API.getUser()
            //set to the userState
            .then((data) => {
                if (data.data) {
                    API.checkUser(data.email).then(({ data }) => {
                        setUserState({
                            ...userState,
                            loggedIn: true,
                            ...data[0],
                        });
                        loadCart();
                    });
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
        setEditableUserState({ ...editableUserState, [name]: value });
    };

    const handleAddressEdit = (editedAddress, index) => {
        let addressArray = editableUserState.address;
        addressArray[index] = editedAddress;
        setUserState({ ...userState, address: addressArray });
    };

    const handleAddressAdd = (newAddress) => {
        let addressArray = editableUserState.address;
        addressArray.push(newAddress);
        setUserState({ ...userState, address: addressArray });
    };

    const handleAddressRemoval = (index) => {
        let addressArray = editableUserState.address;
        addressArray.splice(index, 1);
        setUserState({ ...userState, address: addressArray });
    };

    const handleCardEdit = (editedCard, index) => {
        let cardArray = editableUserState.credit_cards;
        cardArray[index] = editedCard;
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const handleCardAdd = (newCard) => {
        let cardArray = editableUserState.credit_cards;
        cardArray.push(newCard);
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const handleCardRemoval = (index) => {
        let cardArray = editableUserState.credit_cards;
        cardArray.splice(index, 1);
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const saveUserInfoChange = () => {
        //on success, change userState
        setUserState(editableUserState);
    };

    const registerUser = (user) => {
        console.log("reg");
        return API.register(user);
    };

    const loginUser = (user) => {
        API.login(user)
            .then(({ data }) => {
                setLoginErrorState("");
                setUserState({ ...userState, loggedIn: true, ...data });
                //window.location.href = "/";
            })
            .catch((err) => {
                setLoginErrorState("Invalid Username/password");
            });
    };

    const logoutUser = () => {
        API.logout().then(({ status }) => {
            if (status === 200) {
                window.location.href = "/";
            }
        });
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
                updateProductInCart,
            }}
        >
            <SearchContext.Provider
                value={{
                    searchState,
                    handleSearchChange,
                    handleCategoryChange,
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
                        loginErrorState,
                        signupErrorState,
                        setSignupErrorState,
                        handleAddressAdd,
                        handleAddressRemoval,
                        handleAddressEdit,
                        handleCardAdd,
                        handleCardEdit,
                        handleCardRemoval,
                    }}
                >
                    <OrderContext.Provider
                        value={{
                            ordersState,
                            loadOrders,
                            handleOrderSearchChange,
                        }}
                    >
                        {props.children}
                    </OrderContext.Provider>
                </UserContext.Provider>
            </SearchContext.Provider>
        </CartContext.Provider>
    );
}

export default StateController;
