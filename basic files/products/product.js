const fs = require('fs');
const short = require('short-uuid');
const translator = short();


function readWriteFile(product) {
    fs.readFile("./products.json", "utf8", (error, fileData) => {
        if (error) throw error;
        let data = JSON.parse(fileData);
        data.push(product);

        fs.writeFile("./products.json", JSON.stringify(data, null, 2), (err) => {
            if (err) throw err;
            console.log("Successfully Wrote File");
        })

    });
};

let product = {
    "uid": translator.new(),
    "title": "Baby Einstein Magic Touch Piano Wooden Musical Toy Toddler Toy, Ages 6 months and up",
    "price": 24.99,
    "quantity": 1,
    "category": "Baby",
    "keywords": [
        "toy",
        "Multi use"
    ],
    "features": [
        "wooden",
        "durable",
        "multiple music options"
    ],
    "description": "Wooden piano magically makes music, 3 sheets of music & 6 different songs, child safe and durable materials, Easy to wipe down and clean, Ships in fully enclosed packaging",
    "images": "https://images-na.ssl-images-amazon.com/images/I/71--Y8HdOQL._AC_SL1500_.jpg"
}

readWriteFile(product);
