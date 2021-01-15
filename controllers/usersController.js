const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController
module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .sort({ orders: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findByEmail: function (req, res) {
        db.User.find(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            req.body.password = hash;
            db.User.create(req.body)
                .then((dbModel) => res.json(dbModel))
                .catch((err) => res.status(422).json(err));
        });
    },
    update: function (req, res) {
        console.log(req.body);
        db.User.findOneAndReplace(
            { _id: req.params.id },
            req.body,
            {
                returnOriginal: false,
            },
            (err, result) => {
                if (err) {
                    res.status(422).json(err);
                }
                res.json(result);
            }
        );
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
