const db = require("../models");

// Defining methods for the productsController
module.exports = {
    findAll: function () {
        return db.Product.find({});
    },
    findByCategory: function (category) {
        return db.Product.find({ category: category });
    },
    findByQuery: function (query) {
        return db.Product.find({ $text: { $search: `${query}` } });
    },
    findByCategoryAndQuery: function (category, query) {
        return db.Product.find({
            category: category,
            $text: { $search: query },
        });
    },
    findById: function (id) {
        return db.Product.find({ _id: id });
    },
    create: function (req, res) {
        db.Product.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Product.findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
