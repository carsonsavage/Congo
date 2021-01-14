const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findUserResetAndDelete: function ({req}, res) {
        db.Cart.findOneAndDelete({ user_id: req.params.id })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function ({ body }, res) {
        db.ResetPassword.create(body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
