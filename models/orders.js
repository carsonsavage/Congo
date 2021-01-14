const mongoose = require("mongoose");
const orderid = require("order-id")("supersecret");

const orderSchema = new mongoose.Schema({
    user_id: { type: String, trim: true },
    items: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            uid: String,
            title: String,
            price: Number,
            quantity: Number,
            category: String,
            keywords: Array,
            features: Array,
            description: String,
            images: Array,
        },
    ],
    ship_address: Object,
    order_num: String,
    total: Number,
    order_date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
