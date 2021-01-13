import React, { useContext, useState } from "react";
import UserContext from "../../../util/userContext.js";
import { Button } from "semantic-ui-react";

function AddressCards({ setAddress, setModalState, dispatch }) {
    const { userState, handleAddressRemoval } = useContext(UserContext);

    return (
        <>
            {userState.address.map((address, index) => (
                <div className="card" key={index}>
                    <div className="content">
                        <div className="cardHeader">{address.name}</div>
                        <div className="description">
                            <address>
                                <p>{address.address1}</p>
                                <p>{address.address2}</p>
                                <p>
                                    {address.city},{address.state}
                                </p>
                                <p>{address.zipcode}</p>
                            </address>
                        </div>
                    </div>
                    <div className="ui buttons">
                        <button
                            className="ui blue button"
                            onClick={(e) => {
                                e.preventDefault();
                                setAddress({
                                    index: index,
                                    ...userState.address[index],
                                });
                                setModalState("edit");
                                dispatch({
                                    type: "OPEN_MODAL",
                                    dimmer: "blurring",
                                });
                            }}
                        >
                            Edit
                        </button>
                        <div className="or"></div>
                        <button
                            className="ui red button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddressRemoval(index);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AddressCards;
