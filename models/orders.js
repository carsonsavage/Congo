const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: String,
    items: Array,
    ship_address: Object,
    order_num: String,
    total: Number,
    order_date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
