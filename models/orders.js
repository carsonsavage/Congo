const mongoose = require("mongoose");
const orderid = require('order-id')('supersecret');

const orderSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    items: Array,
    ship_address: Object,
    order_num: { type: String, default: orderid.generate() },
    total: Number,
    order_date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;