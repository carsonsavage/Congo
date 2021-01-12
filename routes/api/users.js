const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport.js");

// Matches with "/api/user/"
router.route("/").get((req, res) => {
    res.json(req.user);
});

router.route("/check").post(usersController.findByEmail);

// Matches with "/api/user/register"
router.route("/register").post(usersController.create);

// Matches with "/api/user/login"
router.route("/login").post(passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});

router.route("/logout").get((req, res) => {
    console.log("logging out");
    req.logout();
    res.sendStatus(200);
});

router.route("/update/:id").put(usersController.update);

module.exports = router;
