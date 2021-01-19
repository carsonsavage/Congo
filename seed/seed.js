const mongoose = require("mongoose");
const db = require("../models");
const productsSeed = require("./products.json");

mongoose.connect(
    `mongodb+srv://${db-username-here}:${db-password-here}@cluster0.ehpyg.mongodb.net/Congo?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

db.Product.collection.createIndex({
    title: "text",
    keywords: "text",
    features: "text",
    category: "text",
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
