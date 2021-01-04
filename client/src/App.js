import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Home from "./pages/home/home.js";
import Search from "./pages/search/search.js";
import Dashboard from "./pages/dashboard/dashboard.js";
import Checkout from "./pages/checkout/checkout.js";
import Cart from "./pages/cart/cart.js";
import Login from "./pages/login/login.js";
import Orders from "./pages/orders/orders.js";
import Signup from './pages/signup/signup.js';
import "./app.css";
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";
import UserContext from "./util/userContext.js";

function App() {

    const [searchState, setSearchState] = useState({
        search_query: "",
        search_results: []
    });
    const [cartState, setCartState] = useState({
        cart_total: 0,
        cart_item_count: 0,
        cart_items: [],
    });

    const [userState, setUserState] = useState({
        loggedIn: false,
        _id: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        saved_address: [],
        saved_payments: []
    });

    const [editableUserState, setEditableUserState] = useState(userState);

    const [ordersState, setOrdersState] = useState();

    const handleSearchChange = (event) => {
        setSearchState({ ...searchState, search_query: event.target.value });
    };

    const handleUserInfoChange = (event) => {
        const { name, value } = event.target;
        setEditableUserState({ ...editableUserState, [name]: [value] });
    };

    const saveUserInfoChange = () => {
        //make api call to save updated user
        //on success, change userState
        setUserState(editableUserState);
    }

    return (
        <CartContext.Provider value={{ cartState, setCartState }}>
            <SearchContext.Provider value={{ searchState, handleSearchChange }}>
                <UserContext.Provider
                    value={{ userState, editableUserState, handleUserInfoChange, saveUserInfoChange }}
                >
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route path="/search/:query" component={Search} />

                            <Route path="/user/dashboard/:id" component={Dashboard} />

                            <Route path="/checkout" component={Checkout} />

                            <Route path="/cart" component={Cart} />

                            <Route path="/login" component={Login} />

                            <Route path="/signup" component={Signup} />

                            <Route path="/orders" component={Orders} />
                        </Switch>
                    </Router>
                </UserContext.Provider>
            </SearchContext.Provider>
        </CartContext.Provider>
    );
}

export default App;
