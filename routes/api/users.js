const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const resetPasswordController = require("../../controllers/resetPasswordController.js");
const passport = require("../../config/passport.js");
const randomize = require("randomatic");
const bcrypt = require("bcrypt");
const Emailer = require("../../config/email.js");

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

router.route("/update/password/:id").put((req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        req.body.password = hashedPass;
        usersController.update(req, res);
    });
});

router.route("/forgot-password/create").post((req, res) => {
    req.body.verification_code = randomize("0", 6);
    Emailer.generateResetPasswordEmail(
        req.body.email,
        req.body.verification_code,
        req.body.user_id
    );
    resetPasswordController.create(req.body).then((data) => {
        //send this to generate the email
        console.log(data.verification_code);
        res.sendStatus(200);
    });
});

router
    .route("/forgot-password/:id")
    .get(resetPasswordController.findUserResetAndDelete);

router.route("/contact-us").post((req, res) => {
    Emailer.generateContactUsEmail(req.body);
    res.sendStatus(200);
});

router.route("/change-password/:id").put(usersController.changePassword);

module.exports = router;
