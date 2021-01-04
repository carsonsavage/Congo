const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_num: String,
    user_id: String,
    items: Array,
    order_total: Number,
    total: Number,
    order_date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;