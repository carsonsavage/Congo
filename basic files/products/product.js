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
    "title": "Costa Coffee Ground Coffee, Medium and Dark Roast, 2 bags (12oz each), Rainforest Alliance Certified",
    "price": 19.00,
    "quantity": 34,
    "category": "food",
    "keywords": [
        "food",
        "coffee",
        "costa coffee",
        "ground coffee"
    ],
    "features": [
        "FIRST DECISION OF THE DAY: Smooth, nutty medium roast or bold, chocolatey dark roast? Our Signature Blend Medium and Dark Roasts are a blend of 100% Arabica beans from Honduras, Brazil and Colombia",
        "ALWAYS RESPONSIBLY SOURCED: Our beans are our pride and joy and always sourced from Rainforest Alliance Certified farms. Rainforest Alliance is a non-profit that is dedicated to protect biodiversity, amplify the voices of farmers and forest communities, and help them mitigate and adapt to climate change.",
        "LONDON BORN, NOW U.S.A BOUND. From the land of notoriously bad weather comes famously great coffee. Costa Coffee's story began in London, England with two brothers in search of the perfect cup of smooth, bitter-free coffee. Almost 50 years later, London's favorite coffee shop has crossed the pond to the United States",
        "CHOOSE YOUR BREW: How many cups of coffee does it take for you to take on the day? No judgement here. Whether your favorite method is filtered drip, French press, or pour-over Costa Coffee can create the perfect cup"
    ],
    "description": "From the land of notoriously bad weather comes famously great coffee. Almost 50 years ago, Sergio and Bruno Costa came to London and discovered their calling - to bring great tasting coffee to the tea drinkers of Great Britain. After blind-testing 112 variations of coffee the Costa Brothers discovered our first Signature Blend. Now Costa Coffee has arrived in the U.S. and whether you go for exceptionally smooth or delightfully bold, we’ve got you covered",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81lzzU0XPNL._SL1500_.jpg"
};

readWriteFile(product);
