const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id: String,
    cart_items: Array
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;