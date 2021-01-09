const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products/search"
router.route("/search/C=:category?&Q=:query?").get(({ params }, res) => {
    let { category, query } = params;
    if (
        category !== "undefined" &&
        query !== "undefined" &&
        category &&
        query
    ) {
        productsController
            .findByCategoryAndQuery(category, query)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    } else if (category !== "undefined" && category) {
        productsController
            .findByCategory(category)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    } else if (query !== "undefined" && query) {
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

router.route("/details/:id").get(({ params }, res) => {
    let { id } = params;
    productsController
        .findById(id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(422).json(err);
        });
});

router
.route("/featurd")
.get(productsController.findFeatured);

router.route("/multiple-search").post(productsController.findMultipleId);

module.exports = router;
