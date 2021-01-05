import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext.js";

function AddressCards() {
    const { userState, handleUserInfoChange } = useContext(UserContext);

    return (
        <>
            {userState.saved_address.map((address, index) => (
                <div className="card" key={index}>
                    <div className="content">
                        <div className="cardHeader">{address.name}</div>
                        <div className="description">
                            <address>
                                <p>{address.address}</p>
                                <p>{address.city},{address.state}</p>
                                <p>{address.zipcode}</p>
                            </address>
                        </div>
                    </div>
                    <div className="ui buttons">
                        <button className="ui blue button">Edit</button>
                        <div className="or"></div>
                        <button className="ui red button">Remove</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AddressCards;
