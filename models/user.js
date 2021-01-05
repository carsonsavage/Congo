const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    address: Array,
    credit_cards: Array,
    orders: Array,
    date_Updated: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;