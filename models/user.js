const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    password: String,
    isAdmin: { type: Boolean, default: false },
    phone_num: { type: String, trim: true },
    address: [
        {
            name: { type: String, uppercase: true },
            address1: { type: String, uppercase: true },
            address2: { type: String, uppercase: true },
            city: { type: String, uppercase: true },
            state: { type: String, uppercase: true },
            zipcode: { type: String, uppercase: true },
        },
    ],
    credit_cards: [
        {
            card_number: { type: String, uppercase: true },
            card_name: { type: String, uppercase: true },
            expire_month: { type: String, uppercase: true },
            expire_year: { type: String, uppercase: true },
        },
    ],
    date_Updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
