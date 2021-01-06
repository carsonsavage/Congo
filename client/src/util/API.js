import axios from "axios";

export default {
    login: (user) => {
        return axios.post("/api/user/login", user);
    },

    register: (user) => {
        return axios.post("/api/user/register", user);
    },

    update: (userId, data) => {
        return axios.post(`/api/user/update/${userId}`, data);
    },

    getUser: () => {
        return axios.get("/api/user");
    },

    logout: () => {
        return axios.get("/api/user/logout");
    },

    searchProducts: (category, query) => {
        return axios.get(`/api/products/search/C=${category}&Q=${query}`);
    },

    getOrders: (userId) => {
        return axios.get(`/api/user/${userId}/orders`);
    }
};
