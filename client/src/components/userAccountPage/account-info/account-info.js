import React, { useContext, useState } from "react";
import "./account-info.css";
import UserContext from "../../../util/userContext.js";

function AccountInfo() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    const [editState, setEditState] = useState(false);

    function enableEdit() {
        setEditState(true)
    }

    function disableEdit() {
        setEditState(false)
    }

    return (
        <div className="account-info">
            <h3>Account Info</h3>
            <hr />


            <h5>last name: {userState.last_name}</h5>
            <h5>email: {userState.email}</h5>
            <h5>phone number: {userState.phone}</h5>
        </div>
    );
}

export default AccountInfo;
