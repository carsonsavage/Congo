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
    changePassword: function (req, res) {
        db.User.findById({ _id: req.params.id }).then((dbUser) => {
            bcrypt.compare(
                req.body.oldPassword,
                dbUser.password,
                (err, result) => {
                    if (err) {
                        res.status(422).json(err);
                    }
                    if (result) {
                        bcrypt.hash(
                            req.body.newPassword,
                            10,
                            (err, hashedPass) => {
                                if (err) {
                                    res.status(422).json(err);
                                }
                                db.User.findByIdAndUpdate(
                                    req.params.id,
                                    { password: hashedPass },
                                    { returnOriginal: false }
                                ).then((user) => {
                                    res.sendStatus(200);
                                });
                            }
                        );
                    } else {
                        res.status(422).json(err);
                    }
                }
            );
        });
    },
    resetPassword: function (req, res) {
        db.User.findByIdAndUpdate(
            req.params.id,
            { password: req.body.password },
            { returnOriginal: false }
        ).then((user) => {
            res.sendStatus(200);
        });
    },
};
