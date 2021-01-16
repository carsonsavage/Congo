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
    "title": "Do It Afraid: Embracing Courage in the Face of Fear Hardcover – September 1, 2020",
    "price": 17.99,
    "quantity": 30,
    "category": "Books",
    "keywords": [
        "get over fears",
        "conquer the fears holding you back"
    ],
    "features": [
        "Recognize, confront, and conquer the fears",
    ],
    "description": "Recognize, confront, and conquer the fears holding you back from living boldly and freely with renowned Bible teacher and New York Times bestselling author, Joyce Meyer. Fear is the devil's favorite tool in the toolbox of schemes he uses to destroy God's good plan for you. He uses it to hold you back and prevent progress in your relationships, career, and more. In Do It Afraid, Joyce Meyer explains that fear is everywhere and affects everyone. It rules many people, but it doesn't have to rule you any longer. She will teach you how to: Understand fear and recognize how it works in your life. Confront those fears that are holding you back. Change your mindset for lasting freedom from some of the most common fears people face. Remember, courage isn't the absence of fear; it is learning how to move forward in the presence of fear. Courageous people do what they believe in their hearts they should do, no matter how they feel or what doubts fill their minds. When you take ownership of your problems and open your heart to God, He will help bring light into darkness so that you can be free.",
    "images": [
        "https://images-na.ssl-images-amazon.com/images/I/91Xlq4vS6FL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/918Cnh7hQYL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91nHmHBSPVL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/718AxUutTrL.jpg"
    ]
};

product.category = product.category.toLowerCase();
if(Array.isArray(product.images)){
    readWriteFile(product);
} else {
    console.log(new Error("Cannot write file, images is not a valid array") )
    return
}


