import React, { useContext, useState } from "react";
import "./header.css";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Logo from "./logo/logo.js";
import SearchBar from "./searchBar/search-bar.js";
import UserAccount from "./userAccount/user-account.js";
import Cart from "./cart/cart.js";

function Header() {
    const [userState, setUserState] = useState();

    return (
        <Navbar bg="dark" expand="lg" className="header">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/"><Logo/></Navbar.Brand>
          <SearchBar />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <UserAccount />
              <NavDropdown>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Cart />
        </Navbar>
    );
}

export default Header;
