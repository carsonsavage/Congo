const router = require("express").Router();
const cartsController = require("../../controllers/cartsController");

// Matches with "/api/user"
router
    .route("/:id/cart")
    .get(cartsController.findById)
    .put(cartsController.update);

module.exports = router;
