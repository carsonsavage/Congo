import React, { useContext } from "react";
import "./header.css";
import { Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar/search-bar.js";
import Cart from "./cart/cart.js";
import UserContext from "../../util/userContext.js";
import CartContext from "../../util/cartContext.js";
import logo from "./logo.svg";

export function Header() {
    const { userState, logoutUser } = useContext(UserContext);
    const { saveCurrentCart } = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark" id="desktop-header">
            <Col xs={12}>
                <Row>
                    <Col lg={3}>
                        <div className="logo-div">
                            <Navbar.Brand>
                                <Link to="/" className="react-link">
                                    <img
                                        src={logo}
                                        alt="Congo logo"
                                        className="header-logo"
                                    />
                                </Link>
                            </Navbar.Brand>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="search-bar">
                            <SearchBar />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <Col lg={12}>
                            <div className="right-div">
                                <Nav>
                                    <Col lg={4}>
                                        {userState.loggedIn ? (
                                            <NavDropdown
                                                title={
                                                    <>
                                                        Hello, <br />{" "}
                                                        {userState.first_name}
                                                    </>
                                                }
                                                id="collasible-nav-dropdown"
                                            >
                                                <NavDropdown.Item>
                                                    <Link
                                                        to={`/user/dashboard/${userState._id}`}
                                                        className="react-link"
                                                    >
                                                        View Account
                                                    </Link>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <Button
                                                        color="red"
                                                        onClick={
                                                            (saveCurrentCart,
                                                            logoutUser)
                                                        }
                                                    >
                                                        Logout
                                                    </Button>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        ) : (
                                            <Nav.Link>
                                                <Link
                                                    to="/login"
                                                    className="react-link"
                                                >
                                                    Login/
                                                    <br /> Signup
                                                </Link>
                                            </Nav.Link>
                                        )}
                                    </Col>
                                    <Col lg={4}>
                                        <Nav.Link>
                                            <Link
                                                to="/orders"
                                                className="react-link"
                                            >
                                                Returns & Orders
                                            </Link>
                                        </Nav.Link>
                                    </Col>
                                    <Col lg={4}>
                                        <Nav.Link>
                                            <Cart />
                                        </Nav.Link>
                                    </Col>
                                </Nav>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Navbar>
    );
}

export function MobileHeader() {
    const { userState, logoutUser } = useContext(UserContext);
    const { saveCurrentCart, cartState } = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark" id="mobile-header">
            <Col xs={12}>
                <Row>
                    <Col xs={3}>
                        <div className="logo-div">
                            <Navbar.Brand>
                                <Link to="/" className="react-link">
                                    <img
                                        src={logo}
                                        alt="Congo logo"
                                        className="header-logo"
                                    />
                                </Link>
                            </Navbar.Brand>
                        </div>
                    </Col>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                        <Col xs={12}>
                            <div className="right-div">
                                <Nav>
                                    <Col xs={4}>
                                        {userState.loggedIn ? (
                                            <NavDropdown
                                                title={
                                                    <i
                                                        className="ui icon user"
                                                        id="user-loggedIn"
                                                    ></i>
                                                }
                                                id="collasible-nav-dropdown"
                                            >
                                                <NavDropdown.Item>
                                                    <Link
                                                        to={`/user/dashboard/${userState._id}`}
                                                        className="react-link"
                                                    >
                                                        View Account
                                                    </Link>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <Button
                                                        color="red"
                                                        onClick={
                                                            (saveCurrentCart,
                                                            logoutUser)
                                                        }
                                                    >
                                                        Logout
                                                    </Button>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        ) : (
                                            <Nav.Link>
                                                <Link
                                                    to="/login"
                                                    className="react-link"
                                                >
                                                    <i className="ui icon user"></i>
                                                </Link>
                                            </Nav.Link>
                                        )}
                                    </Col>
                                    <Col xs={4}>
                                        <Nav.Link>
                                            <Link
                                                to="/orders"
                                                className="react-link"
                                            >
                                                <i className="ui icon boxes"></i>
                                            </Link>
                                        </Nav.Link>
                                    </Col>
                                    <Col xs={4}>
                                        <Nav.Link>
                                            <Link
                                                to="/cart"
                                                className="react-link"
                                            >
                                                <i className="ui icon cart"></i>
                                                <p id="mobile-cart-count">
                                                    {cartState.cart_item_count}
                                                </p>
                                            </Link>
                                        </Nav.Link>
                                    </Col>
                                </Nav>
                            </div>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="search-bar">
                            <SearchBar />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Navbar>
    );
}
