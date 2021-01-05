const router = require("express").Router();
const userRoutes = require("./users");
const productRoutes = require("./products");
const orderRoutes = require("./orders");

// routes
router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);

module.exports = router;

