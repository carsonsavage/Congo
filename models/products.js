const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    uid: String,
    title: String,
    price: Number,
    quantity: Number,
    category: String,
    keywords: Array,
    features: Array,
    description: String,
    image: String,
    date_Updated: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;