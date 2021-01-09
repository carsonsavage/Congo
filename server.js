//setting up node env variable reading
const express = require("express");
var session = require("express-session");
require("dotenv").config();
const routes = require("./routes");

//getting express server
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Requiring passport as we've configured it
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
const passport = require("./config/passport.js");
app.use(passport.initialize());
app.use(passport.session());

// Need to add routes here
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ehpyg.mongodb.net/Congo?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//mongodb+srv://beshayr:<beshayr23>@cluster0.m6c2c.mongodb.net/<Congo>?retryWrites=true&w=majority