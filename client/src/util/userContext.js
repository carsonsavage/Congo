import React from 'react';

const UserContext = React.createContext({
    loggedIn: false,
    _id: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    saved_address: [],
    saved_payments: [],
    orders: []
});

export default UserContext;