const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/posts"
router
  .route("/")
  .get(ordersController.findAll)
  .post(ordersController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(ordersController.findById)
  .put(ordersController.update)
  .delete(ordersController.remove);

module.exports = router;
