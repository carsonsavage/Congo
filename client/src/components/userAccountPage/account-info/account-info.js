import React, { useContext, useState } from "react";
import "./account-info.css";
import UserContext from "../../../util/userContext.js";

function AccountInfo() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    const [editState, setEditState] = useState(false);

    function enableEdit() {
        setEditState(true);
    }

    function saveEdit() {
        setEditState(false);
    }

    return (
        <div class="ui raised segment">
            <button class="ui red ribbon label">Overview</button>
            <h4>Account Details</h4>
            {editState ? (
                <>
                    <button className="circular ui icon button" onClick={saveEdit}>
                        <i class="save icon"></i>
                    </button>
                    <hr />
                    <div>
                        <label>First Name: </label><br/>
                        <input value={userState.first_name} onChange={handleUserInfoChange} name="first_name" type="text"/>
                    </div>
                    <div>
                        <label>Last Name: </label><br/>
                        <input value={userState.last_name} onChange={handleUserInfoChange} name="last_name" type="text"/>
                    </div>
                    <div>
                        <label>Email: </label><br/>
                        <input value={userState.email} onChange={handleUserInfoChange} name="email" type="email"/>
                    </div>

                    <div>
                        <label>Phone Number: </label><br/>
                        <input value={userState.phone} onChange={handleUserInfoChange} name="phone" type="tel"/>
                    </div>
                </>
            ) : (
                <>
                    <button className="circular ui icon button" onClick={enableEdit}>
                        <i class="edit icon"></i>
                    </button>
                    <hr />
                    <p><span>First Name:</span> {userState.first_name}</p>
                    <p><span>Last Name:</span> {userState.last_name}</p>
                    <p><span>Email:</span> {userState.email}</p>
                    <p><span>Phone Number:</span> {userState.phone}</p>
                </>
            )}
        </div>
    );
}

export default AccountInfo;
