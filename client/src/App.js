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
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/user/dashboard/:id">
          <Dashboard />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
