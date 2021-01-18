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

    const [searchState, setSearchState] = useState({
        search_query: "",
        search_category: "",
        search_results: [],
        filtered_results: [],
        product_result: {},
        product_categories: [],
    });

    const daysToAdd = Math.floor(Math.random() * 9);
    const date = new Date().addDays(daysToAdd);
    const formatedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

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
        API.getDbCategories().then(({ data }) => {
            let categoryArray = data.map((item) => {
                return item.category;
            });
            let uniqueArray = [...new Set(categoryArray)];
            setSearchState({ ...searchState, product_categories: uniqueArray });
        });
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
                //setUserState({ ...userState, loggedIn: true, ...data });
                window.location.href = "/";
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
