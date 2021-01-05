const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products/search"
router.route("/search").post(({ body }, res) => {
    const { category, query } = body;
    if (category && query) {
        productsController
            .findByCategoryAndQuery(category, query)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    } else if (category) {
        productsController
            .findByCategory(category)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    } else if (query) {
        productsController
            .findByQuery(query)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    } else {
        productsController
            .findAll()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    }
});

module.exports = router;
