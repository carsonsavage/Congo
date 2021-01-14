const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findUserResetAndDelete: function (req, res) {
        db.ResetPassword.findOneAndDelete({ user_id: req.params.id })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (obj) {
        return db.ResetPassword.create(obj)
    },
};
