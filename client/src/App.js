import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/home.js';
import Search from './pages/search/search.js';
import Dashboard from './pages/dashboard/dashboard.js';
import Checkout from './pages/checkout/checkout.js';
import Cart from './pages/cart/cart.js';
import SignIn from './pages/sign-in/sign-in.js';
import Orders from './pages/orders/orders.js';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />

        <Route path="/search" component={Search} />

        <Route path="/user/dashboard/:id" component={Dashboard} />

        <Route path="/checkout" component={Checkout} />

        <Route path="/cart" component={Cart} />

        <Route path="/sign-in" component={SignIn} />

        <Route path="/orders" component={Orders} />
    </Router>
  );
}

export default App;
