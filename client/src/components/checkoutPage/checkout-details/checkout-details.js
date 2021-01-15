import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext";
import "./checkout-details.css";
import { Link } from "react-router-dom";
import {
    Segment,
    Button,
    Loader,
    Message,
    Header,
    Icon,
    Modal,
} from "semantic-ui-react";
import CartContext from "../../../util/cartContext";
import API from "../../../util/API.js";
import AddressModal from "../address-modal/address-modal";
import CardModal from "../card-modal/card-modal";

function CheckoutDetails() {
    function exampleReducer(state, action) {
        switch (action.type) {
            case "OPEN_MODAL":
                return { open: true, dimmer: action.dimmer };
            case "CLOSE_MODAL":
                return { open: false };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    });
    const { open, dimmer } = state;

    const [editState, setEditState] = useState();
    const { userState, editableUserState } = useContext(UserContext);
    const { cartState, setCartIdState, cartIdState } = useContext(CartContext);
    const shippingCost = cartState.cart_total * 0.1 + 3;
    const preTax = cartState.cart_total + shippingCost;
    const tax = parseInt(preTax) * 0.08;
    const total = preTax + tax;

    const [displayState, setDisplayState] = useState("waiting");
    const [shippingState, setShippingState] = useState("active");
    const [paymentState, setPaymentState] = useState("disabled");
    const [confirmState, setConfirmState] = useState("disabled");
    const [orderNum, setOrderNum] = useState();

    const [shippingAddress, setShippingAddress] = useState(
        userState.address[0]
    );
    const [paymentCard, setPaymentCard] = useState(userState.credit_cards[0]);

    function confirmOrder() {
        API.updateProductsQnty(cartIdState);

        API.createOrder({
            user_id: userState._id,
            items: cartState.cart_items,
            item_count: parseInt(cartState.cart_item_count),
            ship_address: shippingAddress,
            total: total,
        }).then(({ data }) => {
            let array = [];
            setCartIdState(array);
            setOrderNum(data.order_num);
            setTimeout(() => {
                setDisplayState("confirmed");
            }, 5000);
        });
    }

    function Shipping() {
        if (shippingAddress) {
            const {
                name,
                address1,
                address2,
                city,
                state,
                zipcode,
            } = shippingAddress;

            return (
                <div className="clearfix">
                    <h2>Shipping Address</h2>
                    <hr />
                    <Segment.Group raised>
                        <Segment id="shipping-address">
                            <Button
                                circular
                                icon="edit"
                                className="mini"
                                id="edit-btn"
                                floated="right"
                                onClick={() => {
                                    setEditState("address");
                                    dispatch({
                                        type: "OPEN_MODAL",
                                        dimmer: "blurring",
                                    });
                                }}
                            />
                            <h5>{name.toUpperCase()}</h5>
                            <p>{address1.toUpperCase()}</p>
                            <p>{address2.toUpperCase()}</p>
                            <p>
                                {city.toUpperCase()}, {state} {zipcode}
                            </p>
                        </Segment>
                    </Segment.Group>

                    <Button
                        content="Looks good"
                        icon="right arrow"
                        labelPosition="right"
                        id="confirm-btn"
                        className="mini green"
                        onClick={(e) => {
                            e.preventDefault();
                            setShippingState("completed");
                            setPaymentState("active");
                        }}
                        floated="right"
                    />
                </div>
            );
        } else {
            return (
                <div className="clearfix">
                    <h2>Shipping Address</h2>
                    <hr />
                    <Segment.Group raised>
                        <Segment id="shipping-address">
                            <Message negative>
                                <Message.Header id="reset-password-message">
                                    You need to
                                    <Link
                                        to={`/user/dashboard/${userState._id}`}
                                    >
                                        {" "}
                                        add an address
                                    </Link>{" "}
                                    to your account to proceed
                                </Message.Header>
                            </Message>
                        </Segment>
                    </Segment.Group>

                    <Button
                        content="Looks good"
                        icon="right arrow"
                        labelPosition="right"
                        id="confirm-btn"
                        className="mini green"
                        onClick={(e) => {
                            e.preventDefault();
                            setShippingState("completed");
                            setPaymentState("active");
                        }}
                        floated="right"
                        disabled
                    />
                </div>
            );
        }
    }

    function Billing() {
        if (paymentCard) {
            const {
                card_number,
                card_name,
                expire_month,
                expire_year,
            } = paymentCard;

            return (
                <div className="clearfix">
                    <h2>Payment Method</h2>
                    <hr />

                    <div class="ui segment clearfix">
                        <div className="row">
                            <div className="col-3">
                                <i className="credit card icon"></i>
                                <span> Card ending in {card_number}</span>
                            </div>
                            <div className="col-3">
                                <p>{card_name.toUpperCase()}</p>
                            </div>

                            <div className="col-3">
                                <p>
                                    {expire_month} / {expire_year}
                                </p>
                            </div>
                            <div className="col-3">
                                <Button
                                    circular
                                    icon="edit"
                                    className="mini"
                                    id="edit-btn"
                                    floated="right"
                                    onClick={() => {
                                        setEditState("card");
                                        dispatch({
                                            type: "OPEN_MODAL",
                                            dimmer: "blurring",
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        content="Hold up, go back"
                        icon="left arrow"
                        labelPosition="left"
                        id="confirm-btn"
                        className="mini red"
                        onClick={(e) => {
                            e.preventDefault();
                            setPaymentState("disabled");
                            setShippingState("active");
                        }}
                        floated="left"
                    />
                    <Button
                        content="All good here"
                        icon="right arrow"
                        labelPosition="right"
                        id="confirm-btn"
                        className="mini green"
                        onClick={(e) => {
                            e.preventDefault();
                            setPaymentState("completed");
                            setConfirmState("active");
                        }}
                        floated="right"
                    />
                </div>
            );
        } else {
            return (
                <div className="clearfix">
                    <h2>Payment Method</h2>
                    <hr />

                    <div class="ui segment clearfix">
                        <Message negative>
                            <Message.Header id="reset-password-message">
                                You need to
                                <Link to={`/user/dashboard/${userState._id}`}>
                                    {" "}
                                    add a payment method
                                </Link>{" "}
                                to your account to proceed
                            </Message.Header>
                        </Message>
                    </div>
                    <Button
                        content="Hold up, go back"
                        icon="left arrow"
                        labelPosition="left"
                        id="confirm-btn"
                        className="mini red"
                        onClick={(e) => {
                            e.preventDefault();
                            setPaymentState("disabled");
                            setShippingState("active");
                        }}
                        floated="left"
                    />
                    <Button
                        content="All good here"
                        icon="right arrow"
                        labelPosition="right"
                        id="confirm-btn"
                        className="mini green"
                        onClick={(e) => {
                            e.preventDefault();
                            setPaymentState("completed");
                            setConfirmState("active");
                        }}
                        floated="right"
                        disabled
                    />
                </div>
            );
        }
    }

    function Confirm() {
        return (
            <div className="clearfix" id="confirm-table">
                <h2>Order Summary</h2>
                <hr />
                <Segment.Group raised >
                    <Segment id="shipping-address">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>
                                        Delivery date: {cartState.delivery_date}
                                    </th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Items</td>
                                    <td className="border-left">
                                        ${cartState.cart_total.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Shipping & handling</td>
                                    <td className="border-left">
                                        ${shippingCost.toFixed(2)}
                                    </td>
                                </tr>
                                <tr className="table-secondary">
                                    <td className="text-right">
                                        <b>Total before tax</b>
                                    </td>
                                    <td className="border-left">
                                        ${preTax.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right">
                                        Estimated tax to be collected
                                    </td>
                                    <td className="border-left">
                                        ${tax.toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr className="table-success">
                                    <td className="text-right">
                                        <b>Order Total:</b>
                                    </td>
                                    <td>${total.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </Segment>
                </Segment.Group>

                <Button
                    content="Go back"
                    icon="left arrow"
                    labelPosition="left"
                    id="confirm-btn"
                    className="mini red"
                    onClick={(e) => {
                        e.preventDefault();
                        setPaymentState("active");
                        setConfirmState("disabled");
                    }}
                    floated="left"
                />
                <Button
                    content="Place Order"
                    icon="right arrow"
                    labelPosition="right"
                    id="confirm-btn"
                    className="mini green"
                    onClick={(e) => {
                        e.preventDefault();
                        setConfirmState("completed");
                        confirmOrder();
                    }}
                    floated="right"
                />
            </div>
        );
    }

    function ConfirmingOrder() {
        return (
            <>
                <Loader active inline="centered">
                    Processing Order...
                </Loader>
            </>
        );
    }

    return (
        <div className="checkout-details">
            {displayState === "confirmed" ? (
                <Message
                    color="green"
                    className="center"
                    id="forgotten-password-form"
                >
                    <span>Success!</span> Order <span>#{orderNum}</span> has
                    been successfully placed.{" "}
                    <Link to="/orders">See my Orders</Link>
                </Message>
            ) : (
                <>
                    <Modal
                        dimmer={dimmer}
                        open={open}
                        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
                    >
                        {editState === "address" && (
                            <AddressModal
                                setEditState={setEditState}
                                setShippingAddress={setShippingAddress}
                                dispatch={dispatch}
                            />
                        )}
                        {editState === "card" && (
                            <CardModal
                                setEditState={setEditState}
                                setPaymentCard={setPaymentCard}
                                dispatch={dispatch}
                            />
                        )}
                    </Modal>

                    <div class="ui three top attached steps" id="checkoutDiv">
                        <div class={`step ${shippingState}`}>
                            <i class="truck icon"></i>
                            <div class="content">
                                <div class="title">Shipping</div>
                                <div class="description">
                                    Choose your shipping options
                                </div>
                            </div>
                        </div>
                        <div class={`step ${paymentState}`}>
                            <i class="payment icon"></i>
                            <div class="content">
                                <div class="title">Billing</div>
                                <div class="description">
                                    Enter billing information
                                </div>
                            </div>
                        </div>
                        <div class={`step ${confirmState}`}>
                            <i class="info icon"></i>
                            <div class="content">
                                <div class="title">Confirm Order</div>
                                <div class="description">
                                    Verify order details
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui attached segment">
                        {shippingState === "active" && Shipping()}
                        {paymentState === "active" && Billing()}
                        {confirmState === "active" && Confirm()}
                        {confirmState === "completed" && ConfirmingOrder()}
                    </div>
                </>
            )}
        </div>
    );
}

export default CheckoutDetails;
