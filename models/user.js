const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    password: String,
    phone_num: { type: String, trim: true },
    address: Array,
    credit_cards: Array,
    date_Updated: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;