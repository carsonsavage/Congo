const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport.js");

// Matches with "/api/user/"
router
  .route("/")
  .get(usersController.findAll);

// Matches with "/api/user/register"
router
  .route("/register")
  .post(usersController.create);

  // Matches with "/api/user/login"
router
  .route("/login")
  .post(passport.authenticate("local"), (req, res)=>{res.json(req.user)});


module.exports = router;