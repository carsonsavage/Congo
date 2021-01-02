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
import './app.css';
import CartContext from "./util/cartContext.js";
import SearchContext from "./util/searchContext.js";

function App() {
  const [searchState, setSearchState] = useState({
    search_query: "",
    search_results: []
});
  const [cartState, setCartState] = useState({
    cart_total: 0,
    cart_item_count: 0,
    cart_items: []
});

const handleSearchChange = event => {
  setSearchState({...searchState, search_query: event.target.value})
};

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      <SearchContext.Provider value={{ searchState, handleSearchChange }}>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/search/:query" component={Search} />

            <Route path="/user/dashboard/:id" component={Dashboard} />

            <Route path="/checkout" component={Checkout} />

            <Route path="/cart" component={Cart} />

            <Route path="/login" component={Login} />

            <Route path="/orders" component={Orders} />
          </Switch>
        </Router>

      </SearchContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
