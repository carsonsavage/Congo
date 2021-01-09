const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findById: function (req, res) {
        db.Cart.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log("here");
        db.Cart.findOneAndUpdate(
            { _id: req.params.id },
            { user_id: req.params.id, cart_items: req.body },
            {
                returnNewDocument: true,
                upsert: true,
            }
        )
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
