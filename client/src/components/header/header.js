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
    const { userState } = useContext(UserContext);

    return (
        <Navbar bg="dark" variant="dark" id="mobile-header">
            <Col xs={12}>
                <Row>
                    <Col xs={3}>
                        <div className="logo-div">
                            <Navbar.Brand>Navbar</Navbar.Brand>
                        </div>
                    </Col>
                    <Col xs={5}></Col>
                    <Col xs={4}>
                        <div className="right-div">
                            <Nav>
                                <NavDropdown
                                    title="Dropdown"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link>Dank memes</Nav.Link>
                                <Nav.Link>
                                    <Cart />
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="search-div">
                            <SearchBar />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Navbar>
    );
}
