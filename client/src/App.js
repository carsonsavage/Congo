import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Home from "./pages/home/home.js";
import Search from "./pages/search/search.js";
import Dashboard from "./pages/dashboard/dashboard.js";
import Checkout from "./pages/checkout/checkout.js";
import Cart from "./pages/cart/cart.js";
import Login from "./pages/login/login.js";
import Orders from "./pages/orders/orders.js";
import ContactUs from "./pages/contact-us/contact-us.js";
import Signup from "./pages/signup/signup.js";
import ProductDetails from './pages/product-details/product-details.js';
import "./app.css";
import StateController from "./StateController.js";


function App() {
    return (
        <StateController>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route
                        path="/search/C=:category?&Q=:query?"
                        component={Search}
                    />

                    <Route path="/user/dashboard/:id" component={Dashboard} />

                    <Route path="/product/details/:productId" component={ProductDetails} />

                    <Route path="/checkout" component={Checkout} />

                    <Route path="/cart" component={Cart} />

                    <Route path="/login" component={Login} />

                    <Route path="/signup" component={Signup} />

<<<<<<< Updated upstream
                    <Route path="/orders" component={Orders} />
                </Switch>
            </Router>
        </StateController>
=======
                <Route path="/orders" component={Orders} />
                
                <Route path="/contact-us" component={ContactUs} />
            </Switch>
        </Router>
>>>>>>> Stashed changes
    );
}

export default App;
