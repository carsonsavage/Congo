const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products/search"
router.route("/search").post(({ body }, res) => {
  const {category, query} = body;
    if (category && query) {
        productsController
            .findByCategoryAndQuery(category, query)
            .then((data) => {
                console.log(data.length);
            })
            .catch((error) => {
                console.log(error);
            });
    } else if (category) {
        productsController
            .findByCategory(category)
            .then((data) => {
                console.log(data.length);
            })
            .catch((error) => {
                console.log(error);
            });
    } else if (query) {
        productsController
            .findByQuery(query)
            .then((data) => {
                console.log(data.length);
            })
            .catch((error) => {
              res.status(422).json(err);
            });
    } else {
        productsController
            .findAll()
            .then((data) => {
                console.log(data.length);
            })
            .catch((error) => {
              res.status(422).json(err);
            });
    }
});

module.exports = router;
