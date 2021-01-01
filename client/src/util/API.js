import React from "react";
import axios from "axios";

function API() {
    login = (user) => {
        return axios.post("/api/user/login", user);
    };

    register = (user) => {
        return axios.post("/api/user/register", user);
    };

    update = (userId, data) => {
        return axios.post(`/api/user/update/${userId}`, data);
    };

    getUser = () => {
        return axios.get("/api/user");
    };
}
