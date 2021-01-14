const mongoose = require("mongoose");
const db = require("../models");
const productsSeed = require("./products.json");

mongoose.connect("mongodb+srv://beshayr:beshayr23@cluster0.m6c2c.mongodb.net/Congo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

db.Product.collection.createIndex({title: "text", keywords: "text", features: "text", category: "text"});

db.Product.deleteMany({})
    .then(() => db.Product.collection.insertMany(productsSeed))
    .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
