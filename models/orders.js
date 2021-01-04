const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_id: String,
    user_id: String,
    products: Array,
    total: Number,
    order_date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;