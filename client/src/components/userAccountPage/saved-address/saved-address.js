import React, { useContext, useState } from "react";
import "./saved-address.css";
import UserContext from "../../../util/userContext.js";
import AddressCards from '../address-card/address-card.js';

function SavedAddress() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    const [editState, setEditState] = useState(false);

    function enableEdit() {
        setEditState(true);
    }

    function saveEdit() {
        setEditState(false);
    }
    return (
        <div className="ui raised segment">
            <button className="ui blue ribbon label">Address Book</button>
            <h4>Saved Addresses</h4>
            <hr />
            <div className="ui cards"><AddressCards /></div>
        </div>
    );
}

export default SavedAddress;

// {editState ? (
//     <>
//         <button className="circular ui icon button" onClick={saveEdit}>
//             <i class="save icon"></i>
//         </button>
//         <hr />

//     </>
// ) : (
//     <>
//         <button className="circular ui icon button" onClick={enableEdit}>
//             <i class="edit icon"></i>
//         </button>
//         <hr />

//     </>
// )}
