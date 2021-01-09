const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router
  .route("/")
  .post(ordersController.create);

// Matches with "/api/orderss/:id"
router
  .route("/:id")
  .get(ordersController.findById);

module.exports = router;
