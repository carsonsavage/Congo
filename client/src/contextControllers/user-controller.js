import React, { useState, useEffect } from "react";
import UserContext from "../util/userContext.js";

function UserController(props) {
    const [userState, setUserState] = useState({
        loggedIn: false,
        _id: "",
        first_name: "",
        last_name: "",
        email: "",
    });

    const [loginErrorState, setLoginErrorState] = useState("");
    const [signupErrorState, setSignupErrorState] = useState("");

    const [editableUserState, setEditableUserState] = useState();

    const handleUserInfoChange = (event) => {
        const { name, value } = event.target;
        setEditableUserState({ ...editableUserState, [name]: value });
    };

    const handleAddressEdit = (editedAddress, index) => {
        let addressArray = editableUserState.address;
        addressArray[index] = editedAddress;
        setUserState({ ...userState, address: addressArray });
    };

    const handleAddressAdd = (newAddress) => {
        let addressArray = editableUserState.address;
        addressArray.push(newAddress);
        setUserState({ ...userState, address: addressArray });
    };

    const handleAddressRemoval = (index) => {
        let addressArray = editableUserState.address;
        addressArray.splice(index, 1);
        setUserState({ ...userState, address: addressArray });
    };

    const handleCardEdit = (editedCard, index) => {
        let cardArray = editableUserState.credit_cards;
        cardArray[index] = editedCard;
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const handleCardAdd = (newCard) => {
        let cardArray = editableUserState.credit_cards;
        cardArray.push(newCard);
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const handleCardRemoval = (index) => {
        let cardArray = editableUserState.credit_cards;
        cardArray.splice(index, 1);
        setUserState({ ...userState, credit_cards: cardArray });
    };

    const saveUserInfoChange = () => {
        //on success, change userState
        setUserState(editableUserState);
    };

    const registerUser = (user) => {
        console.log("reg");
        return API.register(user);
    };

    const loginUser = (user) => {
        API.login(user)
            .then(({ data }) => {
                setLoginErrorState("");
                //setUserState({ ...userState, loggedIn: true, ...data });
                window.location.href = "/";
            })
            .catch((err) => {
                setLoginErrorState("Invalid Username/password");
            });
    };

    const logoutUser = () => {
        API.logout().then(({ status }) => {
            if (status === 200) {
                window.location.href = "/";
            }
        });
    };

    useEffect(() => {
        setEditableUserState(userState);
        loadCart();
        if (userState.loggedIn) {
            API.update(userState._id, userState);
        }
    }, [userState]);

    const loadUser = () => {
        //call to check user that is in session
        API.getUser()
            //set to the userState
            .then((data) => {
                if (data.data) {
                    API.checkUser(data.email).then(({ data }) => {
                        setUserState({
                            ...userState,
                            loggedIn: true,
                            ...data[0],
                        });
                        loadCart();
                    });
                }
            });
    };

    return (
        <UserContext.Provider
            value={{
                userState,
                editableUserState,
                handleUserInfoChange,
                saveUserInfoChange,
                registerUser,
                loginUser,
                logoutUser,
                loginErrorState,
                signupErrorState,
                setSignupErrorState,
                handleAddressAdd,
                handleAddressRemoval,
                handleAddressEdit,
                handleCardAdd,
                handleCardEdit,
                handleCardRemoval,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserController;
