import React, { useContext, useState, useEffect } from "react";
import "./account-info.css";
import UserContext from "../../../util/userContext.js";
import { Modal, Button } from "semantic-ui-react";
import ChangePasswordModal from "../change-password-modal/change-password-modal.js";
import API from "../../../util/API";

function AccountInfo() {
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

    const [modalState, setModalState] = useState("");

    const {
        userState,
        editableUserState,
        handleUserInfoChange,
        saveUserInfoChange,
    } = useContext(UserContext);

    const [editState, setEditState] = useState(false);

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [oldPassword, setOldPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordRegexError, setPasswordRegexError] = useState("");
    const [message, setMessage] = useState();

    useEffect(() => {
        if (password === confirmPassword) {
            setPasswordError("");
        } else {
            setPasswordError("Passwords Don't match");
        }
    }, [confirmPassword]);

    useEffect(() => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
        let test = regex.test(password);
        if (!test) {
            setPasswordRegexError(
                "*Password must be a minimun length of 5, and contain one uppercase(A-Z), lowercase(a-z), number(0-9) "
            );
        } else {
            setPasswordRegexError("");
        }
    }, [password]);

    function changeUserPassword() {
        if (!passwordError && !passwordRegexError) {
            //submit change here
            API.changeUserPassword(userState._id, oldPassword, password)
                .then((response) => {
                    //set message here
                    setMessage("success");
                    setPassword("");
                    setConfirmPassword("");
                    setOldPassword("");
                    dispatch({ type: "CLOSE_MODAL" });
                })
                .cateh((err) => {
                    //set message
                    setMessage("negative");
                });
        }
    }

    function enableEdit() {
        setEditState(true);
    }

    function saveEdit() {
        saveUserInfoChange();
        setEditState(false);
    }

    return (
        <div class="ui raised segment clearfix">
            <button class="ui red ribbon label">Overview</button>
            <h4>Account Details</h4>
            {editState ? (
                <>
                    <button
                        className="circular ui icon button"
                        onClick={saveEdit}
                    >
                        <i class="save icon"></i>
                    </button>
                    <hr />
                    <div>
                        <label>First Name: </label>
                        <br />
                        <input
                            value={editableUserState.first_name}
                            onChange={handleUserInfoChange}
                            name="first_name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <br />
                        <input
                            value={editableUserState.last_name}
                            onChange={handleUserInfoChange}
                            name="last_name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <br />
                        <input
                            value={editableUserState.email}
                            onChange={handleUserInfoChange}
                            name="email"
                            type="email"
                        />
                    </div>

                    <div>
                        <label>Phone Number: </label>
                        <br />
                        <input
                            value={editableUserState.phone_num}
                            onChange={handleUserInfoChange}
                            name="phone"
                            type="tel"
                        />
                    </div>
                </>
            ) : (
                <>
                    <button
                        className="circular ui icon button"
                        onClick={enableEdit}
                    >
                        <i class="edit icon"></i>
                    </button>
                    <button
                        className="ui icon button mini float-right"
                        id="change-password-btn"
                        onClick={() => {
                            setModalState("password");
                            dispatch({
                                type: "OPEN_MODAL",
                                dimmer: "blurring",
                            });
                        }}
                    >
                        Change Password
                    </button>
                    <hr />
                    <p>
                        <span>First Name:</span> {editableUserState.first_name}
                    </p>
                    <p>
                        <span>Last Name:</span> {editableUserState.last_name}
                    </p>
                    <p>
                        <span>Email:</span> {editableUserState.email}
                    </p>
                    <p>
                        <span>Phone Number:</span> {editableUserState.phone_num}
                    </p>
                </>
            )}
            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: "CLOSE_MODAL" })}
            >
                {modalState === "password" && (
                    <ChangePasswordModal
                        dispatch={dispatch}
                        password={password}
                        confirmPassword={confirmPassword}
                        oldPassword={oldPassword}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                        setOldPassword={setOldPassword}
                        changeUserPassword={changeUserPassword}
                        passwordError={passwordError}
                        passwordRegexError={passwordRegexError}
                    />
                )}
            </Modal>
        </div>
    );
}

export default AccountInfo;
