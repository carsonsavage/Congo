const mongoose = require("mongoose");

const resetPasswordSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    verification_code: String,
});

const ResetPassword = mongoose.model("ResetPassword", resetPasswordSchema);

module.exports = ResetPassword;
