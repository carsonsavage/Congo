import React, { useContext, useState } from "react";
import "./header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar/search-bar.js";
import Cart from "./cart/cart.js";
import UserContext from "../../util/userContext.js";
import logo from "./logo.svg"

function Header() {
    const { userState } = useContext(UserContext);

    return (
        <Navbar bg="dark" expand="lg" className="header">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home" className="brand">
                <Link to="/" className="react-link">
                    <img src={logo} className="header-logo" alt="congo logo with toucan on top of title" />
                </Link>
            </Navbar.Brand>
            <div className="search-bar">
                <SearchBar />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header-text">
                    <Nav.Item>
                        <Nav.Link className="account-text">
                            <Link
                                to={
                                    userState.loggedIn
                                        ? `/user/dashboard/${userState._id}`
                                        : "/login"
                                }
                                className="react-link"
                            >
                                {userState.loggedIn
                                    ? `Hello, ${userState.first_name}`
                                    : "Login/ Signup"}
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/orders" className="react-link">
                                Returns & Orders
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <Cart />
        </Navbar>
    );
}

export default Header;
