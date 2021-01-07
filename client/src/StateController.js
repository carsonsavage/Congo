import React, { useState, useEffect } from "react";
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";
import UserContext from "./util/userContext.js";
import API from "./util/API";
import { useCookies } from "react-cookie";

function StateController(props) {
    const [cookies, setCookie, removeCookie] = useCookies(["cookieCart"]);

    const [searchState, setSearchState] = useState({
        search_query: "",
        search_category: "",
        search_results: [],
        filtered_results: [],
        product_result: {},
    });

    const [savedCartState, setSavedCartState] = useState();

    const [cartState, setCartState] = useState({
        cart_total: 0,
        cart_item_count: 0,
        cart_items: [],
    });

    useEffect(() => {
        if (savedCartState) {
            let total = 0;
            let count = 0;
            savedCartState.forEach((product) => {
                total = total + product.price;
                count = count + 1;
            });

            console.log(total, count);
            setCartState({
                ...cartState,
                cart_total: total,
                cart_item_count: count,
            });
        }
    }, [savedCartState]);

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
            console.log("logged in, getting cart");
            API.getCart(userState._id).then(({ data }) => {
                console.log("got data back");
            });
        } else {
            //call to get cart if someone is NOT logged in
            console.log("not logged in, getting cookie cart");
            setSavedCartState(cookies.cookieCart);
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
        API.lookupProduct(productId).then(({ data }) => {
            if (userState.loggedIn) {
                //save to the dbcart
                console.log("adding to user cart");
            } else {
                //save to the cookies cart
                console.log("adding to cookie cart");
                if (cookies.cookieCart) {
                    //add to the array
                    console.log(cookies.cookieCart);
                    let newCart = cookies.cookieCart;
                    newCart.push(data[0]);
                    console.log(newCart);
                    setCookie("cookieCart", newCart, { path: "/" });
                    //window.location.href = "/"
                    //window.location.href = `/cart/success/${data._id}`;
                } else {
                    setCookie("cookieCart", [data[0]], { path: "/" });
                    //window.location.href = `/cart/success/${data._id}`;
                }
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
            value={{ cartState, setCartState, addProductToCart }}
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
