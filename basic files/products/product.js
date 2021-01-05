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
    "title": "New World - Deluxe Edition",
    "price": 49.99,
    "quantity": 1,
    "category": "Video games",
    "keywords": [
        "",
        ""
    ],
    "features": [
        "Windows 10 game",
        "multiplayer game",
        "online and offline"
    ],
    "description": "Overcome the brutal legions of The Corrupted and draw battle lines with competing players in this land of danger and opportunity. Combine skill and strength in melee combat, attack at range with precision, or master arcane attacks. Bend the wilds to your will by hunting fierce beasts for food and crafting materials, and harvesting valuable resources from the land to fuel your ascent to power. The Deluxe Edition includes the Woodsman armor skin, Woodsman hatchet skin, Mastiff house pet, Rock/Paper/Scissors emote set, and the New World digital art book. Pre-order before New World launches to secure Closed Beta access beginning in Spring 2021 and get Isabella’s amulet, the Fist Bump emote, a guild crest set, and the “Expedition One” unique title.",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71OOpvlO4WL._SL1500_.jpg"
}

readWriteFile(product);
