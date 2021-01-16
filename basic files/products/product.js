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
    "title": "Llama Llama I Love You Board book – Illustrated, December 26, 2014",
    "price": 5.00,
    "quantity": 12,
    "category": "Books",
    "keywords": [
        "Llama book",
        "reading",
        "kids book"
    ],
    "features": [
        "story about llamas",
        "kids i love you book"
    ],
    "description": "With short and simple rhyming text, the Llama Llama board books introduce Llama Llama to babies and toddlers before they’re ready for longer full-length stories. And their small size and durable pages are perfect for little hands.",
    "images": ["https://images-na.ssl-images-amazon.com/images/I/91xQR0hElJL.jpg", "https://images-na.ssl-images-amazon.com/images/I/916ha2D7y4L.jpg"]
};

product.category = product.category.toLowerCase();
if(Array.isArray(product.images)){
    readWriteFile(product);
} else {
    console.log(new Error("Cannot write file, images is not a valid array") )
    return
}


