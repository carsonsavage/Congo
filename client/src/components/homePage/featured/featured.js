import './featured.css';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddToCartBtn from '../../productDetailsPage/cta/add-to-cart-btn.js';

export default () => {
  const array = [{
    "uid": "93W7rhFPmzboCyax1QmKeN",
    "title": "Dole, Pineapple Slices in Juice, 20 Oz",
    "price": 1.12,
    "quantity": 20,
    "category": "food",
    "keywords": [
      "food",
      "pineapple",
      "fruit",
      "grocery",
      "can"
    ],
    "features": [
      "NATURALLY GLUTEN FREE",
      "DELICIOUS PINEAPPLE",
      "HEALTHY SNACKS AND JUICES"
    ],
    "description": "Dole Pineapple Slices, 20 Oz. Founded in Hawaii in 1851, Dole is the world's largest producer and marketer of high-quality fresh fruit and fresh vegetables. The Dole brand means the finest, high-quality products. Dole will continue to meet customers' expectations by consistently providing products that meet the highest standard - the Dole standard. Dole is focused on four pillars of sustainability in all of its operations: water management, carbon footprint, soil conservation and waste reduction. For Dole, anything less is unacceptable. You already know it’s important to have at least 5 servings of fruit and vegetables a day. With Dole Jarred Fruit, it’s easier than ever to get your daily fruit. There’s no cutting, peeling or mess. Just open the jar and taste the goodness of ready-to-eat fruit.",
    "images": ["https://images-na.ssl-images-amazon.com/images/I/61UxD42OI%2BL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81K9TkNtjPL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81HDovdRFcL._SL1500_.jpg"]
  },
  {
    "uid": "2wbEMpDB9wmXWRWK3YP9JT",
    "title": "Red Baron, Classic Four Cheese Pizza, 21.06 Ounce (Frozen)",
    "price": 3.52,
    "quantity": 15,
    "category": "food",
    "keywords": [
      "food",
      "pizza",
      "dinner",
      "frozen",
      "cheese pizza"
    ],
    "features": [
      "Real cheese",
      "Four Premium Cheeses",
      "Real pizza taste and flavor"
    ],
    "description": "Why have just another frozen pizza when you could have Red Baron Classic Pizza?? Red Baron Classic Pizza is the best selling premium topped pizza in the nation. Enjoy the generous toppings that feature 100% real cheeses, premium vegetables and pre-cooked meats. These premium toppings sit on a traditional crust that bakes up crispy every time. Enjoy the best in premium pizza with Red Baron Classic.",
    "images": ["https://www.redbaron.com/images/multi-classic/img-products-multi-classic-4-cheese_703.jpg", "https://images-na.ssl-images-amazon.com/images/I/71FAL%2BQscTL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71xf04K%2Bw4L._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71lxhn0K12L._SL1000_.jpg"]
  },
  {
    "uid": "9GNrc1e5uPSbyTDUqyuh4z",
    "title": "UNCLE BEN'S Ready Whole Grain Medley: Brown Rice & Wild Rice, Ready to Heat, 8.5 Oz Pouches, Pack of 6",
    "price": 11.94,
    "quantity": 30,
    "category": "food",
    "keywords": [
      "food",
      "rice",
      "dinner",
      "quick meals",
      "microwave"
    ],
    "features": [
      "Microwave rice in just 90 seconds",
      "Delicious medley of brown rice and wild rice",
      "Convenient pouch eliminates prep and cleanup",
      "No trans fat, no saturated fat, no cholesterol"
    ],
    "description": "Uncle Ben's Whole Grain Medley: Brown & Wild Rice is a savory mix of brown rice, wild rice and red rice, perfectly seasoned with herbs and spices. This flavorful whole grain medley gives your family the goodness of 100% whole grains and meets the whole grains full daily requirement, in just one serving. Uncle Ben's can help you with a great dinner solution, ready in no time. If you’ve got 90 seconds, then you have the beginnings of a great meal. Plus, the convenient microwaveable pouch eliminates prep and cleanup, so cooking is even quicker and easier. ‡USDA Dietary Guidelines recommend eating 3 servings (48g) or more of whole grains daily.",
    "images": ["https://fa74d61d848a20b729bb-0251b36b713060ab3e0e8321940e01ff.ssl.cf2.rackcdn.com/0054800233350_CF_default_default_large.jpeg"]
  },
  {
    "uid": "wAe8RoybBbKtUh1P1nKkia",
    "title": "Costa Coffee Ground Coffee, Medium and Dark Roast, 2 bags (12oz each), Rainforest Alliance Certified",
    "price": 19,
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
    "images": ["https://images-na.ssl-images-amazon.com/images/I/81lzzU0XPNL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81vmWMERDzL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/91ALJS6oy5L._SL1500_.jpg"]
  },
  {
    "uid": "93W7rhFPmzboCyax1QeNmK",
    "title": "RITZ Peanut Butter Sandwich Cracker Snacks and Cheese Sandwich Crackers, Snack Crackers Variety Pack, 32 Snack Packs",
    "price": 12.79,
    "quantity": 32,
    "category": "food",
    "keywords": [
      "ritz crackers",
      "cheese",
      "peanut butter",
      "snack"
    ],
    "features": [
      "Portable, go-anywhere snack packs ",
      "Cracker sandwiches have filling made with real cheese or real peanut butter",
      "6 sandwiches per pack"
    ],
    "description": "16 RITZ Peanut Butter Sandwich Crackers snack packs and 16 RITZ Cheese Sandwich Crackers ",
    "images": ["https://images-na.ssl-images-amazon.com/images/I/81gMrFSTe9L._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81EvUsHVOYL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81tgayXQkrL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/810rzhF-DNL._SL1500_.jpg"]
  },
  {
    "uid": "wAe8RoybBbKtUh1P1nTtai",
    "title": "Quaker Instant Oatmeal, 4 Flavor Variety Pack, Individual Packets, 48 Count",
    "price": 12.99,
    "quantity": 48,
    "category": "food",
    "keywords": [
      "instant oatmeal",
      "4 flavors",
      "breakfast"
    ],
    "features": [
      "Oats",
      "Variety Pack",
      "Good Source of Fiber"
    ],
    "description": "Quaker Instant Oatmeal",
    "images": ["https://images-na.ssl-images-amazon.com/images/I/911XLyCu1RL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/91NG6aef2cL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81vlXmG5opL._SL1500_.jpg"]
  }];

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={30}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
      {array.map(({title, images, price})=>(
<>
<br></br>
<div style={{ height:400, background: '#f0f7f0' }}>
<h3>{title}</h3>
<div className="product-img-wrapper" id="featuredimage"><img src ={images[0]} height="175" alt="featured product image">
</img>
</div>
<div className="productprice"><p><br></br>${price}</p></div>
<div className="cartbutton"><AddToCartBtn/></div>
</div>

</>
))}
      </ItemsCarousel>

    </div>
  );
};