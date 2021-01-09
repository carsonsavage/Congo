const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    uid: { type: String, trim: true },
    title: { type: String, trim: true },
    price: Number,
    quantity: Number,
    category: { type: String, trim: true, lowercase: true },
    keywords: Array,
    features: Array,
    description: String,
    images: Array,
    date_Updated: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;