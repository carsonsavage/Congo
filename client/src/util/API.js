import axios from "axios";

export default {
    login: (user) => {
        return axios.post("/api/user/login", user);
    },

    register: (user) => {
        return axios.post("/api/user/register", user);
    },

    update: (userId, data) => {
        return axios.put(`/api/user/update/${userId}`, data);
    },

    updatePassword: (userId, data) => {
        return axios.put(`/api/user/update/password/${userId}`, data);
    },

    getUser: () => {
        return axios.get("/api/user");
    },

    checkUser: (email) => {
        return axios.post("/api/user/check", { email: email });
    },

    logout: () => {
        return axios.get("/api/user/logout");
    },

    searchProducts: (category, query) => {
        return axios.get(`/api/products/search/C=${category}&Q=${query}`);
    },

    getMultipleProducts: (productIdArray) => {
        return axios.post(`/api/products/multiple-search`, {
            array: productIdArray,
        });
    },

    lookupProduct: (productId) => {
        return axios.get(`/api/products/details/${productId}`);
    },

    getOrders: (userId) => {
        return axios.get(`/api/orders/${userId}`);
    },

    createOrder: (orderObj) => {
        return axios.post(`/api/orders`, orderObj);
    },

    getCart: (userId) => {
        return axios.get(`/api/user/${userId}/cart`);
    },

    saveCart: (userId, cart) => {
        return axios.put(`/api/user/${userId}/cart`, cart);
    },

    getFeatured: () => {
        return axios.get("/api/products/featured");
    },

    checkUserEmail: (email) => {
        return axios.post("/api/user/check", { email: email });
    },

    sendPasswordReset: (userId, email) => {
        axios.post("/api/user/forgot-password/create", { user_id: userId, email: email });
    },

    getCode: (userId) => {
        return axios.get(`/api/user/forgot-password/${userId}`);
    },

    updateProductsQnty: (cartArray) => {
        axios.put("/api/products/update-quantity", { cart: cartArray });
    },

    sendContactEmail: (data) => {
        return axios.post("/api/user/contact-us", data);
    },
};
