const mongoose = require("mongoose");
const db = require("../models");
const productsSeed = require("./products.json");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/congo", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

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
