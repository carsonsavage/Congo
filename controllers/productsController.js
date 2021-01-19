const db = require("../models");

// Defining methods for the productsController
module.exports = {
    findAll: function (req, res) {
        return db.Product.find({})
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
    findMultipleId: function ({ body }, res) {
        db.Product.find()
            .where("_id")
            .in(body.array)
            .exec((err, data) => {
                res.json(data);
            });
    },
    create: function (req, res) {
        db.Product.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            returnOriginal: false,
        })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Product.findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    updateQuantity: function (id, qnty, res) {
        db.Product.find({ _id: id }).then((dbModel) => {
            if (!dbModel[0]) {
                console.log("haha it didn't update");
            } else {
                let newQuantity =
                    parseInt(dbModel[0].quantity) - parseInt(qnty);
                db.Product.findByIdAndUpdate(
                    id,
                    {
                        $set: { quantity: newQuantity },
                    },
                    { new: true }
                ).then((data) => {});
            }
        });
    },
    findFeatured: function (req, res) {
        db.Product.find({ featured: true })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    getCategory: function (req, res) {
        db.Product.find({}, { category: 1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
