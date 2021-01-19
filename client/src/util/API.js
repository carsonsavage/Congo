import axios from "axios";

export default {
    //call to login user
    login: (user) => {
        return axios.post("/api/user/login", user);
    },

    //call  to register user
    register: (user) => {
        return axios.post("/api/user/register", user);
    },

    //call to update a specific user with data provided
    update: (userId, data) => {
        return axios.put(`/api/user/update/${userId}`, data);
    },

    //updates a users password
    updatePassword: (userId, data) => {
        return axios.put(`/api/user/update/password/${userId}`, data);
    },

    //returns the user in the session on the server, if any
    getUser: () => {
        return axios.get("/api/user");
    },

    //calls the db for a specific email
    checkUser: (email) => {
        return axios.post("/api/user/check", { email: email });
    },

    //logouts user
    logout: () => {
        return axios.get("/api/user/logout");
    },

    //searches for products by category and query
    searchProducts: (category, query) => {
        return axios.get(`/api/products/search/C=${category}&Q=${query}`);
    },

    //calls the db to lookup multiple products and returns them
    getMultipleProducts: (productIdArray) => {
        return axios.post(`/api/products/multiple-search`, {
            array: productIdArray,
        });
    },

    //gets all products in db
    getAllProducts: () => {
        return axios.get("/api/products/getAll");
    },

    //looks up a specific product in the db
    lookupProduct: (productId) => {
        return axios.get(`/api/products/details/${productId}`);
    },

    //gets orders by the userID
    getOrders: (userId) => {
        return axios.get(`/api/orders/${userId}`);
    },

    //creates an order for the user
    createOrder: (orderObj) => {
        return axios.post(`/api/orders`, orderObj);
    },

    //gets the user cart by the userId, if any
    getCart: (userId) => {
        return axios.get(`/api/user/${userId}/cart`);
    },

    //saves the users cart, it will add it to the db if it doesn't exist
    saveCart: (userId, cart) => {
        return axios.put(`/api/user/${userId}/cart`, cart);
    },

    //searches db for the featured products and returns them for use on the homepage featured section
    getFeatured: () => {
        return axios.get("/api/products/featured");
    },

    //checks if the users email already exists
    checkUserEmail: (email) => {
        return axios.post("/api/user/check", { email: email });
    },

    //sends the password reset email
    sendPasswordReset: (userId, email) => {
        axios.post("/api/user/forgot-password/create", {
            user_id: userId,
            email: email,
        });
    },

    //gets the users password reset code. if it exists it will delete it from the database
    getCode: (userId) => {
        return axios.get(`/api/user/forgot-password/${userId}`);
    },

    //calls the db to update a products total inventory to reflect an order being processed
    updateProductsQnty: (cartArray) => {
        axios.put("/api/products/update-quantity", { cart: cartArray });
    },

    //sents the contact us email
    sendContactEmail: (data) => {
        return axios.post("/api/user/contact-us", data);
    },

    //calls the db to get the categories in the db
    getDbCategories: () => {
        return axios.get("/api/products/getCategories");
    },

    //calls db to change the users password , if it checks out
    changeUserPassword: (userId, oldPassword, newPassword) => {
        return axios.put(`/api/user/change-password/${userId}`, {
            oldPassword: oldPassword,
            newPassword: newPassword,
        });
    },
};
