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
    "title": "Captain Toad: Treasure Tracker (Nintendo Switch)",
    "price": 60.80,
    "quantity": 1,
    "category": "Video games",
    "keywords": [
        "Treasure Tracker",
        "Nintindo"
    ],
    "features": [
        "Nintindo Switch game",
        "multiplayer game",
        "online and offline"
    ],
    "description": "A free demo of Captain Toad: Treasure Tracker is now available, Explore a variety of tricky sandbox-style levels in Captain Toad: Treasure Tracker, you can rotate the camera and touch the screen for a better view of hidden treasures, We've included a few super mario odyssey levels, too, now you can explore locales from a variety of kingdoms - like new donk city;The Nintendo Switch version can be played with a friend by sharing a pair of Joy-Con controllers; while one player controls Captain Toad, the other can assist with things like turnip cover fire, so you can enjoy tracking treasure together;Compatible with Nintendo Switch only",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81v8i3wCT2L._SL1500_.jpg"
}

readWriteFile(product);
