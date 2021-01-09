const router = require("express").Router();
const userRoutes = require("./users");
const productRoutes = require("./products");
const orderRoutes = require("./orders");
const cartRoutes = require('./carts.js');
// routes
router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/user", cartRoutes)

module.exports = router;

