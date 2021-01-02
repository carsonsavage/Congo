import React, { useContext, useState } from "react";
import "./header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchBar from "./searchBar/search-bar.js";
import Cart from "./cart/cart.js";

function Header() {
    const [userState, setUserState] = useState();

    return (
        <Navbar bg="dark" expand="lg" className="header">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/" className="brand">
                Congo
            </Navbar.Brand>
            <div className="search-bar">
                <SearchBar />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header-text">
                    <Nav.Item>
                        <Nav.Link className="account-text" href={true ? "/user/dashboard/77eiove" : "/login" }>Hello, {"User"}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/orders">
                            Returns & Orders
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <Cart />
        </Navbar>
    );
}

export default Header;
