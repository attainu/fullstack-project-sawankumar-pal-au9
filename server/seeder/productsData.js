import Product from "../model/productsModel.js";
let productsData = [
    new Product({    
        "asin": "B01N4HP2ET",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 189,
            "currency": "INR",
            "before_price": 255,
            "savings_amount": 66,
            "savings_percent": 25.88
        },
        "reviews": {
            "total_reviews": 2184,
            "rating": 4.3
        },
        "title": "Himalaya Rich Cocoa Butter Body Cream, 200ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61Yjsa0AspL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FR29PMQ",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 100,
            "savings_percent": 25.06
        },
        "reviews": {
            "total_reviews": 310,
            "rating": 4.6
        },
        "title": "UrbanBotanics® 4 in1 Body Butter For Dry Skin/ Normal Skin/Itchy Skin & Stretch Marks with Shea Butter, Cocoa Butter, Koku...",
        "thumbnail": "https://m.media-amazon.com/images/I/711mhLpWJyL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00E96N6O8",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 240,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 59,
            "savings_percent": 19.73
        },
        "reviews": {
            "total_reviews": 14604,
            "rating": 4.4
        },
        "amazonPrime": true,
        "title": "NIVEA Soft Light Moisturizer for Face, Hand & Body, Non-Sticky Cream with Vitamin E & Jojoba Oil, 300 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51VcYrI1diL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077JSDB6V",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 192,
            "currency": "INR",
            "before_price": 275,
            "savings_amount": 83,
            "savings_percent": 30.18
        },
        "reviews": {
            "total_reviews": 2171,
            "rating": 3.9
        },
        "title": "VLCC Almond Honey Body Lotion, 350ml Buy 1 Get 1 free",
        "thumbnail": "https://m.media-amazon.com/images/I/71CafbWnqgL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07W44MH3W",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 241.5,
            "currency": "INR",
            "before_price": 345,
            "savings_amount": 103.5,
            "savings_percent": 30
        },
        "reviews": {
            "total_reviews": 8611,
            "rating": 4.4
        },
        "title": "Vaseline Intensive Care Cocoa Glow Body Lotion, 24 hr nourishing lotion with 100% Cocoa And Shea Butter, Restores Glow, 40...",
        "thumbnail": "https://m.media-amazon.com/images/I/51H0UkUHduL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B006G84AA6",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 196,
            "currency": "INR",
            "before_price": 260,
            "savings_amount": 64,
            "savings_percent": 24.62
        },
        "reviews": {
            "total_reviews": 5615,
            "rating": 4.3
        },
        "title": "Himalaya Herbals Cocoa Butter Intensive Body Lotion, 400ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71YUs5FUvqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08M497R44",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 189,
            "currency": "INR",
            "before_price": 225,
            "savings_amount": 36,
            "savings_percent": 16
        },
        "reviews": {
            "total_reviews": 21,
            "rating": 4.3
        },
        "title": "DR.RASHEL Goat Milk Cream For Face & Body | Moisturizer| Whitening and Brightening | Face Cream | Body Cream | Softening a...",
        "thumbnail": "https://m.media-amazon.com/images/I/81JmdT8ytVL._AC_UY218_.jpg"
    }),
new Product({ 
        "asin": "B07QHZ1ZHD",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 250,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 449,
            "savings_percent": 64.23
        },
        "reviews": {
            "total_reviews": 49,
            "rating": 4.5
        },
        "title": "Oriflame Milk & Honey Gold Nourshing Hand & Body Cream Organically Sourced Extracts 250ml-31602",
        "thumbnail": "https://m.media-amazon.com/images/I/31boTHM-qIL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00CBRJ34E",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 179,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 120,
            "savings_percent": 40.13
        },
        "reviews": {
            "total_reviews": 7537,
            "rating": 4.3
        },
        "title": "Parachute Advansed Body Lotion Deep Nourish, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61J2NJo5JTL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07VKM2HR5",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 328,
            "currency": "INR",
            "before_price": 448,
            "savings_amount": 120,
            "savings_percent": 26.79
        },
        "reviews": {
            "total_reviews": 3017,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Very Dry Skin, Nourishing Body Milk with 2x Almond Oil, For Men & Women, 600 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71yYPZHUgUL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HN82JBD",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 338,
            "currency": "INR",
            "before_price": 450,
            "savings_amount": 112,
            "savings_percent": 24.89
        },
        "reviews": {
            "total_reviews": 63,
            "rating": 3.7
        },
        "title": "Bare Body Essentials Stretch Marks Cream, Reduce Stretch Marks, Scars, Spots and Skin Discolouration, Tone, Nourish and Ti...",
        "thumbnail": "https://m.media-amazon.com/images/I/61IvBlAPCvL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01F32Q800",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 159,
            "currency": "INR",
            "before_price": 210,
            "savings_amount": 51,
            "savings_percent": 24.29
        },
        "reviews": {
            "total_reviews": 2068,
            "rating": 4.2
        },
        "title": "Himalaya Nourishing Skin Cream, 200ml",
        "thumbnail": "https://m.media-amazon.com/images/I/718ufRgptzL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00IJ72QWQ",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 339,
            "savings_amount": 40,
            "savings_percent": 11.8
        },
        "reviews": {
            "total_reviews": 15601,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Very Dry Skin, Nourishing Body Milk with 2x Almond Oil, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71czTawMPdL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00NW7NTTW",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 318,
            "currency": "INR",
            "before_price": 340,
            "savings_amount": 22,
            "savings_percent": 6.47
        },
        "reviews": {
            "total_reviews": 5056,
            "rating": 4.5
        },
        "title": "NIVEA Body Lotion for Very Dry Skin, Cocoa Nourish, with Coconut Oil & Cocoa Butter, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71okuP9VNsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08R7F98PW",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 562,
            "rating": 4.2
        },
        "title": "Mamaearth Vitamin C Body Lotion - Pack of 2 (400 ml * 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/61lZgg9C62L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00BKY9I62",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 360,
            "savings_amount": 111,
            "savings_percent": 30.83
        },
        "reviews": {
            "total_reviews": 5407,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Dry Skin, Shea Smooth, with Shea Butter, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71BVHds3lNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B077JSDB6V",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 192,
            "currency": "INR",
            "before_price": 275,
            "savings_amount": 83,
            "savings_percent": 30.18
        },
        "reviews": {
            "total_reviews": 2171,
            "rating": 3.9
        },    
        "title": "VLCC Almond Honey Body Lotion, 350ml Buy 1 Get 1 free",
        "thumbnail": "https://m.media-amazon.com/images/I/71CafbWnqgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00CBRJ34E",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 179,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 120,
            "savings_percent": 40.13
        },
        "reviews": {
            "total_reviews": 7537,
            "rating": 4.3
        },
        "title": "Parachute Advansed Body Lotion Deep Nourish, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61J2NJo5JTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VKM2HR5",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 328,
            "currency": "INR",
            "before_price": 448,
            "savings_amount": 120,
            "savings_percent": 26.79
        },
        "reviews": {
            "total_reviews": 3017,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Very Dry Skin, Nourishing Body Milk with 2x Almond Oil, For Men & Women, 600 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71yYPZHUgUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B006G84AA6",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 196,
            "currency": "INR",
            "before_price": 260,
            "savings_amount": 64,
            "savings_percent": 24.62
        },
        "reviews": {
            "total_reviews": 5615,
            "rating": 4.3
        },
        "title": "Himalaya Herbals Cocoa Butter Intensive Body Lotion, 400ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71YUs5FUvqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08M4QF7V9",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 227,
            "currency": "INR",
            "before_price": 310,
            "savings_amount": 83,
            "savings_percent": 26.77
        },
        "reviews": {
            "total_reviews": 19046,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Vaseline Intensive Care Deep Restore Body Lotion, Long Lasting Moisturisation For Healthy, Glowing Skin, 40...",
        "thumbnail": "https://m.media-amazon.com/images/I/51Rkq7ma5CL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VV5R3FB",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 188,
            "currency": "INR",
            "before_price": 275,
            "savings_amount": 87,
            "savings_percent": 31.64
        },
        "reviews": {
            "total_reviews": 3663,
            "rating": 4.1
        },
        "title": "BOROPLUS Doodh Kesar Body Lotion, 400 Ml, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71-9MTubN5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R7F98PW",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 562,
            "rating": 4.2
        },
        "title": "Mamaearth Vitamin C Body Lotion - Pack of 2 (400 ml * 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/61lZgg9C62L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07CPX232F",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 194,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 105,
            "savings_percent": 35.12
        },
        "reviews": {
            "total_reviews": 738,
            "rating": 3.8
        },
        "title": "VLCC De Tan Plus White Glow Moisturising Body Lotion SPF 30 PA+++, 350ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71eWOtgx6uL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W44MH3W",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 241.5,
            "currency": "INR",
            "before_price": 345,
            "savings_amount": 103.5,
            "savings_percent": 30
        },
        "reviews": {
            "total_reviews": 8611,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Vaseline Intensive Care Cocoa Glow Body Lotion, 24 hr nourishing lotion with 100% Cocoa And Shea Butter, Re...",
        "thumbnail": "https://m.media-amazon.com/images/I/51H0UkUHduL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W7D8JY7",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 252,
            "currency": "INR",
            "before_price": 345,
            "savings_amount": 93,
            "savings_percent": 26.96
        },
        "reviews": {
            "total_reviews": 4605,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Vaseline Intensive Care Aloe Fresh Body Lotion, With 100% Aloe Extract, Non Greasy, Non Sticky Formula For ...",
        "thumbnail": "https://m.media-amazon.com/images/I/510Ed1uEj5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00BKY9I62",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 360,
            "savings_amount": 111,
            "savings_percent": 30.83
        },
        "reviews": {
            "total_reviews": 5407,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Dry Skin, Shea Smooth, with Shea Butter, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71BVHds3lNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NZX635H",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 354,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 45,
            "savings_percent": 11.28
        },
        "reviews": {
            "total_reviews": 1090,
            "rating": 4.5
        },
        "title": "NIVEA Nourishing Lotion Body Milk, 400ml and NIVEA Nourishing Lotion Body Milk, 120ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51shDMCVn+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R7CP7GY",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 515,
            "rating": 4.1
        },
        "title": "Mamaearth CoCo Body Lotion For Dry Skin - Pack of 2 (400 ml * 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/615gnQ34t3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W8GZGPP",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 258.75,
            "currency": "INR",
            "before_price": 345,
            "savings_amount": 86.25,
            "savings_percent": 25
        },
        "reviews": {
            "total_reviews": 2265,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Vaseline Healthy Bright Daily Brightening Body Lotion, With Triple Sunscreen For Soft, Smooth, Moisturised,...",
        "thumbnail": "https://m.media-amazon.com/images/I/51SmdDhu40L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W67Z3P7",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 400,
            "currency": "INR",
            "before_price": 410,
            "savings_amount": 10,
            "savings_percent": 2.44
        },
        "reviews": {
            "total_reviews": 1514,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Vaseline Healthy Bright Complete 10 Body Lotion, Anti- Ageing Lotion With Vitamin B3, Aha, Pro-Retinol, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51xvaBJeGAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R7D3K7G",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 798,
            "savings_amount": 399,
            "savings_percent": 50
        },
        "reviews": {
            "total_reviews": 445,
            "rating": 4.2
        },
        "title": "Mamaearth Ubtan Body Lotion - Pack of 2 (400 ml * 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Ui9EVve7L._AC_UL320_.jpg"
    }),
new Product({   
        "asin": "B00KTCNKFG",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 202,
            "currency": "INR",
            "before_price": 235,
            "savings_amount": 33,
            "savings_percent": 14.04
        },
        "reviews": {
            "total_reviews": 1421,
            "rating": 4.2
        },
        "title": "Himalaya Nourishing Body Lotion, 400ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71JNyUcnHIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08M4QGSDY",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 318.75,
            "currency": "INR",
            "before_price": 425,
            "savings_amount": 106.25,
            "savings_percent": 25
        },
        "reviews": {
            "total_reviews": 506,
            "rating": 4.7
        },
        "title": "Sponsored Ad - Dove Supple Bounce Body Lotion, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71xbVK4jMgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00VHSU69O",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 196,
            "currency": "INR",
            "before_price": 260,
            "savings_amount": 64,
            "savings_percent": 24.62
        },
        "reviews": {
            "total_reviews": 1700,
            "rating": 4.1
        },
        "title": "Himalaya Herbals Aloe and Cucumber Refreshing Body Lotion, 400ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71F3F6Tf2pL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00NW7NTTW",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 318,
            "currency": "INR",
            "before_price": 340,
            "savings_amount": 22,
            "savings_percent": 6.47
        },
        "reviews": {
            "total_reviews": 5056,
            "rating": 4.5
        },
        "title": "NIVEA Body Lotion for Very Dry Skin, Cocoa Nourish, with Coconut Oil & Cocoa Butter, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71okuP9VNsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0719CVYZR",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 206,
            "currency": "INR",
            "before_price": 275,
            "savings_amount": 69,
            "savings_percent": 25.09
        },
        "reviews": {
            "total_reviews": 791,
            "rating": 4.2
        },
        "title": "VLCC Almond Honey Body Lotion, 350ml Buy 1 Get 1 free",
        "thumbnail": "https://m.media-amazon.com/images/I/714YDAiDYDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HH315YD",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": false,
            "current_price": 200,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 609,
            "rating": 4.1
        },
        "title": "Santoor Perfumed Body Lotion for Whitening & UV Protection, 250ml (Buy 1 Get 1) with Sandalwood & Sakura Extracts",
        "thumbnail": "https://m.media-amazon.com/images/I/41G+LK-90+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082T9ZFDK",
        "category": "Beauty",
        "product":"Body Lotion and Creams",
        "type":"Body Lotion and Creams",
        "price": {
            "discounted": true,
            "current_price": 391,
            "currency": "INR",
            "before_price": 559,
            "savings_amount": 168,
            "savings_percent": 30.05
        },
        "reviews": {
            "total_reviews": 3235,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion, Aloe Hydration, with Aloe Vera, for Men & Women, 600 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71JN4KCdlvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0836YNC2V",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 495,
            "currency": "INR",
            "before_price": 550,
            "savings_amount": 55,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - Pilgrim Volcanic Lava Ash Face Mask | with Yugdugu & White Lotus | Korean K-Beauty | Deep Cleans & Unclog P...",
        "thumbnail": "https://m.media-amazon.com/images/I/81+XdPu+7hL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W9TMSVF",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 250,
            "savings_percent": 50.1
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.1
        },
        "title": "Sponsored Ad - WOW Skin Science Sunscreen Matte Finish - Spf 55 Pa+++ - Very High Broad Spectrum - Uva &Uvb Protection - Q...",
        "thumbnail": "https://m.media-amazon.com/images/I/71zpu612ieL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0183C3F2Q",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 164,
            "currency": "INR",
            "before_price": 180,
            "savings_amount": 16,
            "savings_percent": 8.89
        },
        "reviews": {
            "total_reviews": 5437,
            "rating": 4
        },
        "title": "NIVEA Men Crème, Dark Spot Reduction, Non Greasy Moisturizer, Cream with UV Protect, 75 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61ywqABdT6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0777K7BLR",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 199,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 151,
            "savings_percent": 43.14
        },
        "reviews": {
            "total_reviews": 11784,
            "rating": 3.8
        },
        "title": "UrbanGabru CharCoal Peel Off Mask | Deep skin cleansing Mask 60gm",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZKtBgABmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B004JOB5IE",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 577,
            "currency": "INR",
            "before_price": 770,
            "savings_amount": 193,
            "savings_percent": 25.06
        },
        "reviews": {
            "total_reviews": 292,
            "rating": 3.7
        },
        "title": "L'Oreal Paris Men Expert White Activ Whitening Moisturing Fluid, 50 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71myeZ3rzSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081RGT5WL",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 245,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 105,
            "savings_percent": 30
        },
        "reviews": {
            "total_reviews": 142,
            "rating": 3.8
        },
        "title": "Qraa Men Haldi Chandan Face Pack for Skin Brightening/Lightening/De-Tan with Turmeric Oil and Sandalwood, 120 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61hw7z+8ymL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00X9UOCEI",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 209,
            "currency": "INR",
            "before_price": 260,
            "savings_amount": 51,
            "savings_percent": 19.62
        },
        "reviews": {
            "total_reviews": 5418,
            "rating": 4.1
        },
        "title": "NIVEA Men Face Wash, Oil Control for 12hr Oil Control with 10x Vitamin C Effect, 150 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61TE0E25rDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W8QWGFD",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 549,
            "savings_amount": 50,
            "savings_percent": 9.11
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 5
        },
        "title": "Man Matters Face Serum | 10% Niacinamide and 2% Vitamin C (Kakadu Plum- Purest form of Vitamin C) | Co-created by Dermatol...",
        "thumbnail": "https://m.media-amazon.com/images/I/71D-qudLe0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0836YL2JZ",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 395,
            "currency": "INR",
            "before_price": 400,
            "savings_amount": 5,
            "savings_percent": 1.25
        },
        "reviews": {
            "total_reviews": 47,
            "rating": 4.2
        },
        "title": "Pilgrim Face Scrub for De Tan, Exfoliation, Glowing Skin, Blackhead Removal, Dry, Oily, Combination Skin, Men and Women, K...",
        "thumbnail": "https://m.media-amazon.com/images/I/71iL5h1QrNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S71R2CW",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 750,
            "savings_amount": 401,
            "savings_percent": 53.47
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 4.6
        },
        "title": "khadi Herbal Vitamin C Serum For Face, With Hyaluronic Acid for Glowing Skin, De-Pigmentation, Skin Brightening, Men and W...",
        "thumbnail": "https://m.media-amazon.com/images/I/81MHDSuihlL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TG3QC5D",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 132,
            "currency": "INR",
            "before_price": 165,
            "savings_amount": 33,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 647,
            "rating": 4.1
        },
        "title": "POND'S Men Energy Burst Face Gel Healthy Hydrated Energized Skin, 55 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61edywibS-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B086T3S3CY",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": false,
            "current_price": 550,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Macaria Skin Whitening Cream For Man/Full Body Whitening Skin Fairness Cream/Ivanka Intimate Beauty Cream",
        "thumbnail": "https://m.media-amazon.com/images/I/81SFK-iEohL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0836Y7S2C",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 495,
            "currency": "INR",
            "before_price": 550,
            "savings_amount": 55,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 331,
            "rating": 3.8
        },
        "title": "Pilgrim Vitamin C Serum For Face, Oil Based, Hyaluronic Acid Night Face Serum for Glowing Skin, De-Pigmentation, Skin Brig...",
        "thumbnail": "https://m.media-amazon.com/images/I/71utWPmoq4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HXC966S",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 199,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 200,
            "savings_percent": 50.13
        },
        "reviews": {
            "total_reviews": 43,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Pollution Safe Anti-Pollution Face Mist with Herbashield (50ml) | Prevents Ageing, Acne & dark spots | Derm...",
        "thumbnail": "https://m.media-amazon.com/images/I/51n3qgvkuEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08251PK69",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 199,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 200,
            "savings_percent": 50.13
        },
        "reviews": {
            "total_reviews": 305,
            "rating": 3.8
        },
        "title": "Sponsored Ad - WOW Skin Science UV Water Transparent Sunscreen Spray SPF 30 - Quick Absorbing - Oil Free - with Raspberry ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61pFPedfzeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JFDLLRC",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 808,
            "currency": "INR",
            "before_price": 930,
            "savings_amount": 122,
            "savings_percent": 13.12
        },
        "reviews": {
            "total_reviews": 1369,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Cetaphil Moisturising Cream, 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/51sLyXHGPeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00XRJBOBA",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 143,
            "currency": "INR",
            "before_price": 195,
            "savings_amount": 52,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 5783,
            "rating": 4.3
        },
        "title": "NIVEA Men Body Wash, Active Clean with Active Charcoal, Shower Gel for Body, Face & Hair, 250 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/81X+oenD5LL._AC_UL320_.jpg"
    }),            
new Product({
        "asin": "B079KPMXRT",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 330,
            "currency": "INR",
            "before_price": 450,
            "savings_amount": 120,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 1567,
            "rating": 3.7
        },
        "title": "UrbanGabru Insta Glow Fairness Cream with Anti pimple and SPF 50 - No Parabens or Sulphates 50g",
        "thumbnail": "https://m.media-amazon.com/images/I/71l5nYk6FcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QWCJCWV",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 322,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 177,
            "savings_percent": 35.47
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.4
        },
        "title": "NAVIA Riztics Whitening Cream with Whitening Booster for Men",
        "thumbnail": "https://m.media-amazon.com/images/I/51LkAQo+GYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WLSGJFC",
        "category": "Beauty",
        "product":"Mens Beauty",
        "type":"Mens Beauty",
        "price": {
            "discounted": true,
            "current_price": 495,
            "currency": "INR",
            "before_price": 500,
            "savings_amount": 5,
            "savings_percent": 1
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Sponsored Ad - Pilgrim Retinol Night Cream with Vitamin C | Anti-ageing, Discover Youthful & Glowing Skin | For Wrinkles, ...",
        "thumbnail": "https://m.media-amazon.com/images/I/715pFVtxWVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WJ3XBGQ",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 1614,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1385,
            "savings_percent": 46.18
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Sponsored Ad - Infantbond 56 in 1 New Born Baby Complete Daily Items Combo(0-6 Months)(Apple) (Purple for Baby Boy & Baby ...",
        "thumbnail": "https://m.media-amazon.com/images/I/813Nk3HmguL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L3Y5Z5H",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1250,
            "savings_percent": 62.53
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Sponsored Ad - KOOCHI POOCHI Junior and Young Boys 100% Cotton Blue Shirt, Toddler,Infant Kid Short Sleeve Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/91BIu3sGfZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08VDX5TVJ",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 1519,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1480,
            "savings_percent": 49.35
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - Infantbond New Born Baby 41 in 1 All Daily Essentials Clothing Set(Pack of 41 Items)(0-6 Months)",
        "thumbnail": "https://m.media-amazon.com/images/I/81o-iYgtJSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075M73LP2",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 518,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 481,
            "savings_percent": 48.15
        },
        "reviews": {
            "total_reviews": 301,
            "rating": 4.2
        },
        "title": "BabyBlossom Infants Soft Fabric Thermal Front Open Top and Pyjama (BBTHERMO1, Multicolour, 0-3 Months) - Pack of 3",
        "thumbnail": "https://m.media-amazon.com/images/I/81u+YggEyoL._AC_UL320_.jpg"
    }),            
new Product({
        "asin": "B08MBVP82K",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 150,
            "savings_percent": 25.04
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.9
        },
        "title": "NEPEE New Born Baby Winter Wear Keep Warm Cartoon Printing Baby Clothes Sets Cotton Baby Boys Girls Fleece Infant Cloth Ca...",
        "thumbnail": "https://m.media-amazon.com/images/I/71gz5oKBFYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07L5PT5PL",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 429,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 370,
            "savings_percent": 46.31
        },
        "reviews": {
            "total_reviews": 32,
            "rating": 3.8
        },
        "title": "SR CREATIONS Born Baby Poly Cotton Solid Color T-Shirt and Shorts Combo Set for Infant 0-6 Months (Multicolour; Pack of 10)",
        "thumbnail": "https://m.media-amazon.com/images/I/71GXl6lXDgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07T7P97G2",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 519,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 80,
            "savings_percent": 13.36
        },
        "reviews": {
            "total_reviews": 5666,
            "rating": 4.4
        },
        "title": "wishkey colorful non toxic bpa free 9 rattles and 3 teethers toys set for babies ,infants- Multi color",
        "thumbnail": "https://m.media-amazon.com/images/I/71cbQlEcJpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DNS9DFL",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1200,
            "savings_percent": 60.03
        },
        "reviews": {
            "total_reviews": 229,
            "rating": 4
        },
        "title": "Kurtzy Cotton Baby Girl Dress, Frock with Nappies for Infant (0 to 6 Months) Set of 8",
        "thumbnail": "https://m.media-amazon.com/images/I/918ovS3tBWL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07B4Z8C4C",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 700,
            "savings_percent": 53.89
        },
        "reviews": {
            "total_reviews": 2406,
            "rating": 4.2
        },
        "title": "Kiddeo Baby Boy's and Baby Girl's Cotton Bodysuits Pack of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/71K9ooAattL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BPWQ9YZ",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 170,
            "currency": "INR",
            "before_price": 880,
            "savings_amount": 710,
            "savings_percent": 80.68
        },
        "reviews": {
            "total_reviews": 974,
            "rating": 4.1
        },
        "title": "Little Hub Gift Set for Infants (Orange, 0-3 months)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Euw4-00xL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0747F1W83",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 1893,
            "rating": 4.8
        },
        "title": "Antson Double Sided Water Proof Baby Mat Carpet Baby Crawl Play Mat Kids Infant Crawling Play Mat Carpet Baby Gym Water Re...",
        "thumbnail": "https://m.media-amazon.com/images/I/71hSkaG4RoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S7K6SQN",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 990,
            "savings_amount": 491,
            "savings_percent": 49.6
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.8
        },
        "title": "KSHIVA New Born Baby Pure Cotton Printed Regular Fit Sando Innerwear Baniyan Kids Vest Infants Sleeveless Undershirts for ...",
        "thumbnail": "https://m.media-amazon.com/images/I/711X94gNkeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SKG2M39",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 339,
            "currency": "INR",
            "before_price": 555,
            "savings_amount": 216,
            "savings_percent": 38.92
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 2
        },
        "title": "obbi Baby Hosiery Cap Booty and Mitten Set for Infants Combo Pack (Multicolor (Pack of 3), 0-3 Months)",
        "thumbnail": "https://m.media-amazon.com/images/I/915Ssb1Sh3L._AC_UL320_.jpg"
    }),            
new Product({
        "asin": "B07TJW18TX",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 1699,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 300,
            "savings_percent": 15.01
        },
        "reviews": {
            "total_reviews": 26,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Toddylon New Born Baby, Products (0-6 Months) (55, Products)",
        "thumbnail": "https://m.media-amazon.com/images/I/71dMCtll4OL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0852226ZC",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 200,
            "savings_percent": 40.08
        },
        "reviews": {
            "total_reviews": 72,
            "rating": 3.5
        },
        "title": "Sponsored Ad - GoodFeel Woolen Cap for Baby Boys and Baby Girls [GFBCAP17]",
        "thumbnail": "https://m.media-amazon.com/images/I/71WrjdujvFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08QGQMXVD",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 539,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 460,
            "savings_percent": 46.05
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 5
        },
        "title": "Babytoons Newborn Infant Baby 100% Cotton Hosiery Clothing Set (6 Jhablas+6 Nappies+6 Caps), 0-6 Months (Multicolor)",
        "thumbnail": "https://m.media-amazon.com/images/I/71WHKDglf0L._AC_UL320_.jpg"
    }),        
new Product({
        "asin": "B08LCFT3NW",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 300,
            "savings_percent": 42.92
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Koochie-Koo Infant Baby Girls Boys Fleece Booties (0-6 months) Winter Non-Skid Soft Sole Warm Cozy Shoes with Grippers New...",
        "thumbnail": "https://m.media-amazon.com/images/I/81R9dk3dEiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FXL47XN",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 430,
            "currency": "INR",
            "before_price": 540,
            "savings_amount": 110,
            "savings_percent": 20.37
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 5
        },
        "title": "ANGAAKAR CLOTHINGS Infants Baby Diaper Legging Track Pant for Kids Boys and Girls Babies with Bottom Ribs - Soft and Comfo...",
        "thumbnail": "https://m.media-amazon.com/images/I/41V+ZWdADQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084H4MQNX",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 1799,
            "currency": "INR",
            "before_price": 2299,
            "savings_amount": 500,
            "savings_percent": 21.75
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "AKworam Portable Square Folding Cradle Swing Ghodiyu with Hammock and Mosquito Net for Infants (Silver)",
        "thumbnail": "https://m.media-amazon.com/images/I/71LLT94eusL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S4789YW",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 489,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 310,
            "savings_percent": 38.8
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.8
        },
        "title": "Shyam Collection Baby Boy and Girl Full Sleeves Soft Hosiery Vests,Jhabla T-Shirt with Pyjama Pants Dress for Kids Infant ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71NKga3ZI9L._AC_UL320_.jpg"
    }),                 
new Product({
        "asin": "B08PNZPMFW",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 4.7
        },
        "title": "APYAcart Presents New Born Baby Winter Wear Keep Warm Baby Clothes 5Pcs Sets Cotton Baby Boys Girls Unisex Baby Fleece/Fal...",
        "thumbnail": "https://m.media-amazon.com/images/I/618FQSHSWVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08VHGVPWL",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 200,
            "savings_percent": 28.61
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "BABY ATLAS Presents Born Baby Pure Cotton Printed Innerwear baniyan Kids Vest Infants Sando Unisex Sleeveless Regular fit ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71iE4rwHL2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08K39ZDM5",
        "category": "Beauty",
        "product": "Baby",
        "type": "Baby",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 75,
            "rating": 4.3
        },
        "title": "YUV Baby-Boy's Regular Fit Pant (Pack of 5)",
        "thumbnail": "https://m.media-amazon.com/images/I/81SDTZWV31L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01KQGZZY8",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 609,
            "currency": "INR",
            "before_price": 905,
            "savings_amount": 296,
            "savings_percent": 32.71
        },
        "reviews": {
            "total_reviews": 8871,
            "rating": 4
        },
        "title": "Sponsored Ad - Maybelline New York The Blushed Nudes Palette Eyeshadow, 9g",
        "thumbnail": "https://m.media-amazon.com/images/I/71bX9J1gW9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NL67ZDW",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": false,
            "current_price": 799,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.1
        },
        "title": "Sponsored Ad - SUGAR Cosmetics Contour De Force Highlighter Palette - 01 Glow Genius Longlasting Formula, Lightweight",
        "thumbnail": "https://m.media-amazon.com/images/I/611UvPEoJCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SV3L3Y2",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 489,
            "currency": "INR",
            "before_price": 550,
            "savings_amount": 61,
            "savings_percent": 11.09
        },
        "reviews": {
            "total_reviews": 93,
            "rating": 4
        },
        "title": "Sponsored Ad - Bellina Face Primer Makeup, Oil Free Matte Base Lightweight, Soften Blemishes Pores for All Skin Types 30 m...",
        "thumbnail": "https://m.media-amazon.com/images/I/712pPADxG7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Y5CQF52",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 789,
            "savings_amount": 490,
            "savings_percent": 62.1
        },
        "reviews": {
            "total_reviews": 1725,
            "rating": 3.8
        },
        "title": "TYA Makeup Kit + 5 Pcs Makeup Brush + 2 Pc Blender Puff Combo",
        "thumbnail": "https://m.media-amazon.com/images/I/41D9AsFarKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SR3WV5N",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 224,
            "currency": "INR",
            "before_price": 249,
            "savings_amount": 25,
            "savings_percent": 10.04
        },
        "reviews": {
            "total_reviews": 1099,
            "rating": 4.1
        },
        "title": "Swiss Beauty MakeUp Fixer Natural Aloe Vera with Vitamin-E, Face MakeUp, White, 50ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51vOm41X9fL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08TT7N1B1",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 371.3,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 927.7,
            "savings_percent": 71.42
        },
        "reviews": {
            "total_reviews": 72,
            "rating": 4
        },
        "title": "CC Cream Sunisa For Face Makeup Air CUSHION CC CREAM MUSHROOM HEAD FOUNDATION WITH WATERPROOF FORMULA. 20G",
        "thumbnail": "https://m.media-amazon.com/images/I/713fwyjinfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08QTRNQQ6",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 203,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 796,
            "savings_percent": 79.68
        },
        "reviews": {
            "total_reviews": 102,
            "rating": 3.8
        },
        "title": "Authentic Store Huda Nude Eyeshadow Palette 18 Color Makeup Palette Highlighters Eye Make Up High Pigmented Professional M...",
        "thumbnail": "https://m.media-amazon.com/images/I/619Ihoj62lL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07WTM9SFJ",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 181,
            "currency": "INR",
            "before_price": 199,
            "savings_amount": 18,
            "savings_percent": 9.05
        },
        "reviews": {
            "total_reviews": 1366,
            "rating": 4
        },
        "title": "Swiss Beauty Professional Liquid Concealer, Face MakeUp, Sand-Sable, 5.6g",
        "thumbnail": "https://m.media-amazon.com/images/I/41yS79pBncL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08B8QSY7Q",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 200,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 99,
            "savings_percent": 33.11
        },
        "reviews": {
            "total_reviews": 334,
            "rating": 3.9
        },
        "title": "Lakmé Absolute Blur Perfect Makeup Primer, Peach, 10 g",
        "thumbnail": "https://m.media-amazon.com/images/I/41fWU714tVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JJLQT8Z",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1200,
            "savings_percent": 75.05
        },
        "reviews": {
            "total_reviews": 1295,
            "rating": 3.9
        },
        "title": "MACPLUS Premium Quality Makeup Brush Set, 24 Pieces Set with Black Leather Case",
        "thumbnail": "https://m.media-amazon.com/images/I/71ObCVmqebL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MZ22983",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1100,
            "savings_percent": 68.79
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 5
        },
        "title": "SWIPA Festive Budget Makeup Care Combo-3652(Pack of 9)",
        "thumbnail": "https://m.media-amazon.com/images/I/61w0utFUobL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RZG9HD1",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 989,
            "savings_amount": 690,
            "savings_percent": 69.77
        },
        "reviews": {
            "total_reviews": 1886,
            "rating": 3.6
        },
        "title": "KYLIE Makeup Brushes Set Premium Synthetic Kabuki Foundation Face Powder Blush Eyeshadow Brush Makeup Brush Kit with Blend...",
        "thumbnail": "https://m.media-amazon.com/images/I/41JkQ1K2fKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BM21W6Z",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 1998,
            "savings_amount": 1199,
            "savings_percent": 60.01
        },
        "reviews": {
            "total_reviews": 739,
            "rating": 4.2
        },
        "title": "House of Quirk Makeup Cosmetic Storage Case with Adjustable Compartment - Black(25x22x9cm)",
        "thumbnail": "https://m.media-amazon.com/images/I/71CxAWBlE1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07WVRFS9N",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 204,
            "currency": "INR",
            "before_price": 229,
            "savings_amount": 25,
            "savings_percent": 10.92
        },
        "reviews": {
            "total_reviews": 1016,
            "rating": 4.1
        },
        "title": "Swiss Beauty Ultimate 9 Color Eyeshadow Palette, Eye MakeUp, Multicolor-05, 9g",
        "thumbnail": "https://m.media-amazon.com/images/I/51fpEch89wL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07K6JJKTV",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 189,
            "currency": "INR",
            "before_price": 794,
            "savings_amount": 605,
            "savings_percent": 76.2
        },
        "reviews": {
            "total_reviews": 2160,
            "rating": 3.5
        },
        "title": "Miss & Mam Makeup Brush Set of 7(Colour May Vary) with Storage box + sponge puff(Colour May Vary)",
        "thumbnail": "https://m.media-amazon.com/images/I/41pESU-4ubL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W5D1KXZ",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "AVTY 6-in-1 Makeup Sponge (Multicolour)",
        "thumbnail": "https://m.media-amazon.com/images/I/61f4rF+RwNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0757MYFPW",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 165,
            "currency": "INR",
            "before_price": 300,
            "savings_amount": 135,
            "savings_percent": 45
        },
        "reviews": {
            "total_reviews": 2428,
            "rating": 4
        },
        "title": "Blue Heaven Studio Perfection Primer, Clear, 30g (Outer Package May Vary)",
        "thumbnail": "https://m.media-amazon.com/images/I/519a5iGfgtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01FQKLSYK",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 259,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 740,
            "savings_percent": 74.07
        },
        "reviews": {
            "total_reviews": 2513,
            "rating": 3.5
        },
        "title": "Generic Foundation, Eyeshadow Makeup Brush Set, Pink (Set Of 10), 100 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61GzL9p+ehL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07D7FGTYX",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 1179,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1820,
            "savings_percent": 60.69
        },
        "reviews": {
            "total_reviews": 107,
            "rating": 4
        },
        "title": "VikriDa Girl's 2 in 1 Cosmetic and Real Makeup Palette with Mirror kit with Trolley for Kids - Pink Color",
        "thumbnail": "https://m.media-amazon.com/images/I/61dntvKVoFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08ML7VLDM",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 215,
            "currency": "INR",
            "before_price": 250,
            "savings_amount": 35,
            "savings_percent": 14
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 3.7
        },
        "title": "Sponsored Ad - Eyetex Dazller Eyeliner Waterproof - (Purple), 1.1g with FREE INSIDE Eyetex Dazller Lipcolour, 4.5g",
        "thumbnail": "https://m.media-amazon.com/images/I/611iCC6RWHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KS32ZVW",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 180,
            "currency": "INR",
            "before_price": 200,
            "savings_amount": 20,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 60,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Eyetex Dazller Foundation Stick, 9g - Honey FS31",
        "thumbnail": "https://m.media-amazon.com/images/I/711QD+8HSoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01JLZ8L8W",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 710,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 89,
            "savings_percent": 11.14
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Palladio Beauty MATTE BRONZER 0.35 oz, No Tan Lines, 10 g",
        "thumbnail": "https://m.media-amazon.com/images/I/81SFWH8j84L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JXSCTKG",
        "category": "Beauty",
        "product": "Makeup Essentials",
        "type": "Makeup Essentials",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 998,
            "savings_amount": 499,
            "savings_percent": 50
        },
        "reviews": {
            "total_reviews": 211,
            "rating": 3.8
        },
        "title": "Sponsored Ad - SUGAR Cosmetics Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic with Sharpener Waterproof Kohl,Creamy Tex...",
        "thumbnail": "https://m.media-amazon.com/images/I/51HtrTLx-LL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08G58FRG9",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 2300,
            "savings_amount": 1901,
            "savings_percent": 82.65
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Zaveri Pearls Green & Pink Stones South Indian Style Temple Necklace & Earring Set For Women-ZPFK9639",
        "thumbnail": "https://m.media-amazon.com/images/I/71GfS2-ppnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081ND4K2V",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 493,
            "currency": "INR",
            "before_price": 3330,
            "savings_amount": 2837,
            "savings_percent": 85.2
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Zaveri Pearls Traditional Kundan & Pearls Necklace Set For Women-ZPFK9097",
        "thumbnail": "https://m.media-amazon.com/images/I/71qscv1El7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07N4K151V",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 690,
            "currency": "INR",
            "before_price": 4330,
            "savings_amount": 3640,
            "savings_percent": 84.06
        },
        "reviews": {
            "total_reviews": 53,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Zaveri Pearls Mesmerising Kundan & Pearls Bridal Necklace Set For Women-ZPFK8291",
        "thumbnail": "https://m.media-amazon.com/images/I/71iSLwPcuLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DFNQD2Z",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 348,
            "currency": "INR",
            "before_price": 5645,
            "savings_amount": 5297,
            "savings_percent": 93.84
        },
        "reviews": {
            "total_reviews": 4239,
            "rating": 3.2
        },
        "title": "Sukkhi Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women (CB73381)",
        "thumbnail": "https://m.media-amazon.com/images/I/912iX-Sve0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JGH84Y",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 489,
            "currency": "INR",
            "before_price": 6895,
            "savings_amount": 6406,
            "savings_percent": 92.91
        },
        "reviews": {
            "total_reviews": 719,
            "rating": 3.2
        },
        "title": "Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women (SKR48716)",
        "thumbnail": "https://m.media-amazon.com/images/I/71qsZwPnzOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LB3P8N8",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 395,
            "currency": "INR",
            "before_price": 2995,
            "savings_amount": 2600,
            "savings_percent": 86.81
        },
        "reviews": {
            "total_reviews": 1699,
            "rating": 3.6
        },
        "title": "Sukkhi Dazzling Gold Plated Wedding Jewellery Austrian Diamond Choker Necklace Set Combo For Women (413CB1900)",
        "thumbnail": "https://m.media-amazon.com/images/I/71koEgPDDdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RY3R7DB",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1200,
            "savings_percent": 70.63
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 3.7
        },
        "title": "Mansiyaorange Party One Gram Gold Forming Premium Long Haram Multi Color Jewellery Necklace/Juelry/jwelry Set Jewellery fo...",
        "thumbnail": "https://m.media-amazon.com/images/I/81vg24zfx0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JG681F",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 454,
            "currency": "INR",
            "before_price": 6545,
            "savings_amount": 6091,
            "savings_percent": 93.06
        },
        "reviews": {
            "total_reviews": 711,
            "rating": 4.1
        },
        "title": "Sukkhi Sensational Pearl Gold Plated Kundan Set of 3 Necklace Combo for Women (SKR48722)",
        "thumbnail": "https://m.media-amazon.com/images/I/71nyYXxJXjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P73DF79",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 527,
            "currency": "INR",
            "before_price": 5445,
            "savings_amount": 4918,
            "savings_percent": 90.32
        },
        "reviews": {
            "total_reviews": 785,
            "rating": 4
        },
        "title": "Sukkhi Trendy Kundan Gold Plated Wedding Jewellery Pearl Choker Necklace Set for Women (N73544)",
        "thumbnail": "https://m.media-amazon.com/images/I/81IQvh43G8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F5HLV7D",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 3845,
            "savings_amount": 3396,
            "savings_percent": 88.32
        },
        "reviews": {
            "total_reviews": 368,
            "rating": 3.1
        },
        "title": "Sukkhi Exclusive Gold Plated Wedding Jewellery Kundan Choker Necklace Set For Women (N73395)",
        "thumbnail": "https://m.media-amazon.com/images/I/81R0Nh4WFpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F5M1VW2",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 389,
            "currency": "INR",
            "before_price": 3545,
            "savings_amount": 3156,
            "savings_percent": 89.03
        },
        "reviews": {
            "total_reviews": 542,
            "rating": 3.1
        },
        "title": "Sukkhi Dazzling Pearl Gold Plated Wedding Jewellery Kundan Peacock Meenakari Necklace Set & Kada Combo For Women (CB73405)",
        "thumbnail": "https://m.media-amazon.com/images/I/713JdTzDG-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081NJF6QX",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 396,
            "currency": "INR",
            "before_price": 2967,
            "savings_amount": 2571,
            "savings_percent": 86.65
        },
        "reviews": {
            "total_reviews": 52,
            "rating": 4
        },
        "title": "Sponsored Ad - Zaveri Pearls Green Beads & Floral Kundan Necklace Set For Women-ZPFK9098",
        "thumbnail": "https://m.media-amazon.com/images/I/71hdU7vpuhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JG1NDY",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 594,
            "currency": "INR",
            "before_price": 6895,
            "savings_amount": 6301,
            "savings_percent": 91.39
        },
        "reviews": {
            "total_reviews": 187,
            "rating": 3.6
        },
        "title": "Sukkhi Sparkling Gold Plated Wedding Jewellery Austrian Diamond Set of 4 Necklace Combo for Women (SKR48715)",
        "thumbnail": "https://m.media-amazon.com/images/I/711ZldF8GQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KGMGVVP",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 525,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 474,
            "savings_percent": 47.45
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 4
        },
        "title": "Savya Jewels Yellow and Pink Fabric Flower Jewellery Necklace 2 with Maang Tika and Earrings, Bracelets for Women Girls Se...",
        "thumbnail": "https://m.media-amazon.com/images/I/71gxZEczNsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JG9G4Q",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 433,
            "currency": "INR",
            "before_price": 6195,
            "savings_amount": 5762,
            "savings_percent": 93.01
        },
        "reviews": {
            "total_reviews": 321,
            "rating": 3.3
        },
        "title": "Sukkhi Fascinating Pearl Gold Plated Necklace Mangalsutra & Kada Combo for Women (SKR48721)",
        "thumbnail": "https://m.media-amazon.com/images/I/81jHimGr3+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z1XTWMY",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 3795,
            "savings_amount": 3396,
            "savings_percent": 89.49
        },
        "reviews": {
            "total_reviews": 29,
            "rating": 3.9
        },
        "title": "Sukkhi Classic LCT Gold Plated Wedding Jewellery Pearl Long Haram Necklace Set For Women (N83782)",
        "thumbnail": "https://m.media-amazon.com/images/I/71YtiyjFXML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HQ2DYW5",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 171,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 328,
            "savings_percent": 65.73
        },
        "reviews": {
            "total_reviews": 209,
            "rating": 4.1
        },
        "title": "Total Fashion Afghani Oxidised German Silver Jewellery Stylish Antique Designer Chain Pendant Necklace Set for Women & Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/71GOx8L8hVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08CSRXKZN",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 290,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1309,
            "savings_percent": 81.86
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.8
        },
        "title": "Balika Vadhu Jewellery Designer Pink Yellow Jwellery Set for Women & Girls (Mehandi/Haldi/Bridal/Baby Shower)",
        "thumbnail": "https://m.media-amazon.com/images/I/81Zy36Jd3OL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071L1R4JW",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 1347,
            "savings_amount": 1048,
            "savings_percent": 77.8
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 3.3
        },
        "title": "Sponsored Ad - Zaveri Pearls Traditional Necklace Set For Women - ZPFK6138",
        "thumbnail": "https://m.media-amazon.com/images/I/81dcoGiIS6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZYTXLCP",
        "category": "Beauty",
        "product": "Jewellery",
        "type": "Jewellery",
        "price": {
            "discounted": true,
            "current_price": 690,
            "currency": "INR",
            "before_price": 6360,
            "savings_amount": 5670,
            "savings_percent": 89.15
        },
        "reviews": {
            "total_reviews": 23,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Zaveri Pearls Traditional Kundan & Green Beads Bridal Choker Necklace Set For Women-ZPFK8686",
        "thumbnail": "https://m.media-amazon.com/images/I/71VhNuYkFsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08QNGFV3H",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 500,
            "savings_percent": 62.58
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - Black Snow Men's Designer Striped Round Neck T-Shirt - Beige",
        "thumbnail": "https://m.media-amazon.com/images/I/81aoZc0z6BL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PSY32ZZ",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 1050,
            "savings_percent": 75.05
        },
        "reviews": {
            "total_reviews": 65,
            "rating": 3.4
        },
        "title": "BLIVE Regular fit Solid Men's Henley Neck Full Sleeve Cotton Blend T Shirts",
        "thumbnail": "https://m.media-amazon.com/images/I/61hh8wS16wL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S186GS4",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 349,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.6
        },
        "title": "Max Women's Regular T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71GIFRqzoDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JN3XDH",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 369,
            "currency": "INR",
            "before_price": 598,
            "savings_amount": 229,
            "savings_percent": 38.29
        },
        "reviews": {
            "total_reviews": 659,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Amazon Brand - Symbol Women's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81CDbVHpDqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0855WVBY6",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 959.4,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 639.6,
            "savings_percent": 40
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - OCEAN RACE Women's T-Shirt(Pack of 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/61-zAKH+KeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083JMBJ5W",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 369,
            "currency": "INR",
            "before_price": 598,
            "savings_amount": 229,
            "savings_percent": 38.29
        },
        "reviews": {
            "total_reviews": 578,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Amazon Brand - Symbol Women's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/814EhzELxVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085BM2488",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 499,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 42,
            "rating": 4.3
        },
        "title": "Jockey Men's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61+2DvWoxJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08NCTHGMB",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 135,
            "rating": 3.9
        },
        "title": "Design Cafe Dual Colour Full Sleeves Printed Signature Round Neck Cotton T-Shirt for Men's",
        "thumbnail": "https://m.media-amazon.com/images/I/51CqzzZLO9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08N72L1RV",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 900,
            "savings_percent": 69.28
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "EYEBOGLER Men's T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/51PKIDxXHjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08CDRGNHH",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 900,
            "savings_percent": 69.28
        },
        "reviews": {
            "total_reviews": 798,
            "rating": 3.8
        },
        "title": "EYEBOGLER Regular Fit Men's Cotton T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61jSkUzUykL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FGDC6HY",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 296,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 703,
            "savings_percent": 70.37
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 3.4
        },
        "title": "RG Womens' Long T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/41QjqcAs4EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07LBL3VWC",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 241,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 158,
            "savings_percent": 39.6
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 3.3
        },
        "title": "Sugr Women's Regular fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81fLyOwtdhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KKP45ZX",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 309,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 190,
            "savings_percent": 38.08
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Van Heusen Woman Women's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71ufy3EbS8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01G3MQ804",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 795,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 18,
            "rating": 4.2
        },
        "title": "berge' Ladies Polyester Dry Fit Western Shirts & Tshirts for Women, Quick Drying & Breathable Fabric, Gym Wear Tees & Work...",
        "thumbnail": "https://m.media-amazon.com/images/I/61+ooYdC+SL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06XN5NTKZ",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 145,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 5,
            "savings_percent": 3.33
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 2.6
        },
        "title": "iberry's Women's T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71x6cer82xL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01K1VPWBO",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 865,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 167,
            "rating": 3.8
        },
        "title": "Duke Men's T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/91d6fI2usvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06Y2284FW",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 539,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 360,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 14123,
            "rating": 4.1
        },
        "title": "Allen Solly Men's Polo",
        "thumbnail": "https://m.media-amazon.com/images/I/81mE0KcpjJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00W05Z1L6",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 489,
            "savings_amount": 90,
            "savings_percent": 18.4
        },
        "reviews": {
            "total_reviews": 4581,
            "rating": 4.3
        },
        "title": "Jockey Men's Cotton T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71KGZdTyvtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NF4CD53",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 897,
            "savings_amount": 398,
            "savings_percent": 44.37
        },
        "reviews": {
            "total_reviews": 2887,
            "rating": 3.9
        },
        "title": "Amazon Brand - Symbol Men's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81IrA-ibhLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08N25T6V4",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 950,
            "savings_percent": 73.13
        },
        "reviews": {
            "total_reviews": 79,
            "rating": 3.8
        },
        "title": "EYEBOGLER Men's Solid Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61tZQmRl5oL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08X6T4PJY",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 950,
            "savings_percent": 79.23
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Veirdo Men's Cotton Half Sleeve Color Block T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61TfEGYIQiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07B2Y26C1",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 698,
            "currency": "INR",
            "before_price": 3199,
            "savings_amount": 2501,
            "savings_percent": 78.18
        },
        "reviews": {
            "total_reviews": 1813,
            "rating": 3.5
        },
        "title": "AWG ALL WEATHER GEAR Men's Regular Fit T-Shirt (Pack of 4)",
        "thumbnail": "https://m.media-amazon.com/images/I/715xyTRQM7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XXTSDL4",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 394,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 605,
            "savings_percent": 60.56
        },
        "reviews": {
            "total_reviews": 257,
            "rating": 3.8
        },
        "title": "Try This Men's T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/518hyyUXihL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085BMDGDP",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 489,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 119,
            "rating": 4.1
        },
        "title": "Jockey Men's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61AN+tNN7-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XY8ZJSX",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 539,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 60,
            "savings_percent": 10.02
        },
        "reviews": {
            "total_reviews": 349,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Classic Polo Men's Regular Fit Polos (C-4SEASON-201AFP)",
        "thumbnail": "https://m.media-amazon.com/images/I/61xpLit59FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TRH5FRH",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1050,
            "savings_percent": 70.05
        },
        "reviews": {
            "total_reviews": 2991,
            "rating": 4
        },
        "title": "Sponsored Ad - AELOMART Men's Cotton T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71zggz-oAyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07CQMYL95",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 519,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 180,
            "savings_percent": 25.75
        },
        "reviews": {
            "total_reviews": 5871,
            "rating": 4
        },
        "title": "Chromozome Men's Plain Regular Fit T-Shirt (Pack Of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/81RmZgxA8cL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084L9LPM6",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 509,
            "currency": "INR",
            "before_price": 2397,
            "savings_amount": 1888,
            "savings_percent": 78.77
        },
        "reviews": {
            "total_reviews": 3859,
            "rating": 3.8
        },
        "title": "Scott International Men's Regular Fit T-Shirt (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B012STP7EO",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 459,
            "savings_amount": 110,
            "savings_percent": 23.97
        },
        "reviews": {
            "total_reviews": 4592,
            "rating": 4.3
        },
        "title": "Jockey Men's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/610+aTtlKfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084P6BR4F",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 900,
            "savings_percent": 75.06
        },
        "reviews": {
            "total_reviews": 72,
            "rating": 3.7
        },
        "title": "SHAUN Women's T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71q0gqcG0bL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08W9PVS7W",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 800,
            "savings_percent": 66.72
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 4.5
        },
        "title": "JUNEBERRY Tie Dye T-Shirt for Women/Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/515WK8bKtFL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08WRHNNN6",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 700,
            "savings_percent": 70.07
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Nefies Women's Regular Fit T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61A6pK41qGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08QWRX775",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 169,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 4
        },
        "title": "EASYBUY Women's T Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71Q+tdSLMVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08W3LJ8MR",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 700,
            "savings_percent": 70.07
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "ABSOLUTE DEFENSE Believe Tshirt for Women",
        "thumbnail": "https://m.media-amazon.com/images/I/61q8s9vS9SL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08W595BCC",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 379,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 820,
            "savings_percent": 68.39
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.2
        },
        "title": "JUNEBERRY Cotton Half Sleeve Regular Fit Printed T-Shirt for Women/Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/61FyD4PweXL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08VDDJ2MM",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 229,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 270,
            "savings_percent": 54.11
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 4.2
        },
        "title": "Cloth Theory Women's Regular T-Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81lP7paWnVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08BLN373N",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 629,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 670,
            "savings_percent": 51.58
        },
        "reviews": {
            "total_reviews": 397,
            "rating": 4.2
        },
        "title": "Sponsored Ad - LAYA Women's T-Shirt (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71hkGnwBYGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T9FWYYK",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 779,
            "currency": "INR",
            "before_price": 2249,
            "savings_amount": 1470,
            "savings_percent": 65.36
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 4.1
        },
        "title": "Sponsored Ad - ESMONT Women's Regular Fit T-Shirt (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71pIlNU0rvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07YB8WQ26",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1500,
            "savings_percent": 75.04
        },
        "reviews": {
            "total_reviews": 43,
            "rating": 3.5
        },
        "title": "Sponsored Ad - THE BLAZZE Women's T-Shirt (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71M5oxkJJEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W3F8PX9",
        "category": "Clothing",
        "product": "T-Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 250,
            "savings_percent": 41.74
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - Two Dots Women's Regular fit T-Shirt - Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/814w-POVXjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082SSC15Y",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 439,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 860,
            "savings_percent": 66.2
        },
        "reviews": {
            "total_reviews": 21,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Amazon Brand - Symbol Men's Regular Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/91ptdhuUkAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08J4ZGCMJ",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 639,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 860,
            "savings_percent": 57.37
        },
        "reviews": {
            "total_reviews": 14,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Amazon Brand - Symbol Men's Regular Fit Formal Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81r6rEn0cLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KDQSGH6",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 544,
            "currency": "INR",
            "before_price": 700,
            "savings_amount": 156,
            "savings_percent": 22.29
        },
        "reviews": {
            "total_reviews": 78,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Men's Regular Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/311iALxpcUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075KK8SZ4",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 419,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 780,
            "savings_percent": 65.05
        },
        "reviews": {
            "total_reviews": 6324,
            "rating": 4
        },
        "title": "Diverse Men's Regular Fit Formal Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81qlnA0rJEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P94YRR3",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 319,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 980,
            "savings_percent": 75.44
        },
        "reviews": {
            "total_reviews": 462,
            "rating": 3.5
        },
        "title": "FUNDAY FASHION Women's Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71JfmkqEmQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KT6XZQM",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 491,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 708,
            "savings_percent": 59.05
        },
        "reviews": {
            "total_reviews": 1251,
            "rating": 3.9
        },
        "title": "Harpa Women's Top",
        "thumbnail": "https://m.media-amazon.com/images/I/61johBWz7dL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P583B44",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 405,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1094,
            "savings_percent": 72.98
        },
        "reviews": {
            "total_reviews": 497,
            "rating": 3.7
        },
        "title": "J B Fashion Women's Plain Regular Fit Top",
        "thumbnail": "https://m.media-amazon.com/images/I/61+U84CWRmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L5QTTVW",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 629,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 770,
            "savings_percent": 55.04
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Sponsored Ad - Carlton London Women's Regular Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71refsdHYiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PBJH6Z8",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 319,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 980,
            "savings_percent": 75.44
        },
        "reviews": {
            "total_reviews": 302,
            "rating": 3.7
        },
        "title": "FUNDAY FASHION Women's Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/611OdAFRzVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DMQRD6F",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 650,
            "savings_percent": 46.46
        },
        "reviews": {
            "total_reviews": 2521,
            "rating": 3.5
        },
        "title": "Allen Solly Men's Plain Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81+CFCcAUCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0751DGDPJ",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 1849,
            "savings_amount": 1300,
            "savings_percent": 70.31
        },
        "reviews": {
            "total_reviews": 2092,
            "rating": 3.8
        },
        "title": "Dennis Lingo Men's Solid Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/51H7N13gtnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08CPK2PRC",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1550,
            "savings_percent": 77.54
        },
        "reviews": {
            "total_reviews": 178,
            "rating": 3.4
        },
        "title": "LookMark Men's Plain Regular fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/516rg2v2vyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HK7159P",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 1849,
            "savings_amount": 1300,
            "savings_percent": 70.31
        },
        "reviews": {
            "total_reviews": 4338,
            "rating": 3.9
        },
        "title": "Dennis Lingo Men's Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61YQd1wdQBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07GSH9F29",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 2099,
            "savings_amount": 1350,
            "savings_percent": 64.32
        },
        "reviews": {
            "total_reviews": 1791,
            "rating": 4.1
        },
        "title": "Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0848DJN36",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1300,
            "savings_percent": 65.03
        },
        "reviews": {
            "total_reviews": 1030,
            "rating": 4
        },
        "title": "Tryme Fashion Men's Regular Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61tVLb2OfrL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RRL8GD8",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 339,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 960,
            "savings_percent": 73.9
        },
        "reviews": {
            "total_reviews": 237,
            "rating": 3.4
        },
        "title": "FUNDAY FASHION Women's Formal Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/51N5OZtTQwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P98442G",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 379,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1120,
            "savings_percent": 74.72
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 3.4
        },
        "title": "FUNDAY FASHION Women's Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/815HlTMk9SL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01F38LBDS",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 433.33,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1065.67,
            "savings_percent": 71.09
        },
        "reviews": {
            "total_reviews": 344,
            "rating": 3.5
        },
        "title": "J B Fashion Women's Animal Print Regular fit (Shirt White L)",
        "thumbnail": "https://m.media-amazon.com/images/I/61gqf3Ufn4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BL65R1Q",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 364,
            "rating": 3.6
        },
        "title": "DAMEN MODE Women Red Checkered Cotton Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61YVo2e2gHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZB2R2MT",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 319,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 980,
            "savings_percent": 75.44
        },
        "reviews": {
            "total_reviews": 145,
            "rating": 3.6
        },
        "title": "FurryFlair Women's Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71sXXtqt-zL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TJ7F5RZ",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 900,
            "savings_percent": 60.04
        },
        "reviews": {
            "total_reviews": 529,
            "rating": 3.8
        },
        "title": "Kandy Men's Regular Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61aZfcC6KaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07G4GWJ8Y",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1900,
            "savings_percent": 76.03
        },
        "reviews": {
            "total_reviews": 490,
            "rating": 4
        },
        "title": "Dennis Lingo Men's Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TWW491F",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 469,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 730,
            "savings_percent": 60.88
        },
        "reviews": {
            "total_reviews": 499,
            "rating": 3.8
        },
        "title": "GRITSTONES Men's Regular Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61YQ-jKQmOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HQLCPZV",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1500,
            "savings_amount": 1001,
            "savings_percent": 66.73
        },
        "reviews": {
            "total_reviews": 54,
            "rating": 3.7
        },
        "title": "VeBNoR Men's Slim Fit Stylish Full Sleeve Shirts (Multi Color)",
        "thumbnail": "https://m.media-amazon.com/images/I/81sRRxktdDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HH3ZWVZ",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 579,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1120,
            "savings_percent": 65.92
        },
        "reviews": {
            "total_reviews": 598,
            "rating": 4
        },
        "title": "Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71ss0vZBehL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DMQRFZG",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 650,
            "savings_percent": 46.46
        },
        "reviews": {
            "total_reviews": 969,
            "rating": 3.8
        },
        "title": "Allen Solly Men's Solid Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71e7nNzvfvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085LGX6H4",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 731,
            "currency": "INR",
            "before_price": 1450,
            "savings_amount": 719,
            "savings_percent": 49.59
        },
        "reviews": {
            "total_reviews": 109,
            "rating": 3.8
        },
        "title": "Sponsored Ad - LEVIZO Men's Regular Fit Casual Stripe Shirts",
        "thumbnail": "https://m.media-amazon.com/images/I/71fX7kVc+lL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HHBYSBM",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 629,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1070,
            "savings_percent": 62.98
        },
        "reviews": {
            "total_reviews": 598,
            "rating": 4
        },
        "title": "Sponsored Ad - Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/71PZwcdpYUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08JQH2DCS",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 545,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 954,
            "savings_percent": 63.64
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 3.3
        },
        "title": "Sponsored Ad - GLOBALRANG Men's Checkered Casual Half Sleeve Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/91YlEM0PBHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079MGQML8",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 500,
            "savings_percent": 38.49
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 3.3
        },
        "title": "Sponsored Ad - Twist Men's Regular Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/81h3+IWuQuL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06Y2J6QC6",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 431,
            "rating": 3.8
        },
        "title": "Sponsored Ad - DAMEN MODE Women's Cotton Checkered Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61Q+I3Byg9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MZ1QQW9",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1650,
            "savings_percent": 82.54
        },
        "reviews": {
            "total_reviews": 419,
            "rating": 3.4
        },
        "title": "Leriya Fashion Women's Plain Regular fit Top",
        "thumbnail": "https://m.media-amazon.com/images/I/61A4bKSgm4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0826PPN4S",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 481,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 718,
            "savings_percent": 59.88
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 2
        },
        "title": "MIZAGO Women's Classic Fit Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/616pnwevuUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F2MDK8R",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 700,
            "savings_percent": 58.38
        },
        "reviews": {
            "total_reviews": 155,
            "rating": 3.8
        },
        "title": "C.Cozami Women's Regular Fit Double Pocket Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/717KBCZjvIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z7N1ZHC",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 584,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 615,
            "savings_percent": 51.29
        },
        "reviews": {
            "total_reviews": 150,
            "rating": 3.4
        },
        "title": "MIZAGO Women's Casual Shirt",
        "thumbnail": "https://m.media-amazon.com/images/I/61dEvk7tdJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NGLKY4D",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 421,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 778,
            "savings_percent": 64.89
        },
        "reviews": {
            "total_reviews": 654,
            "rating": 3.9
        },
        "title": "HARPA Women's Plain Regular Fit Top",
        "thumbnail": "https://m.media-amazon.com/images/I/61k2j6NAL1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075VRD1LX",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 497,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 702,
            "savings_percent": 58.55
        },
        "reviews": {
            "total_reviews": 254,
            "rating": 3.7
        },
        "title": "C.Cozami Women's Casual Long Sleeves Double Pocket Rayon Shirts",
        "thumbnail": "https://m.media-amazon.com/images/I/71QNEFh89YL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08J3T7YDH",
        "category": "Clothing",
        "product": "Shirt",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 500,
            "savings_percent": 55.62
        },
        "reviews": {
            "total_reviews": 15,
            "rating": 3.5
        },
        "title": "RC Fashion Denim Plain Shirt for Women & Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/71E05wC+4DL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S7DG3S7",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 629,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2370,
            "savings_percent": 79.03
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Barebeauty Women's Baluchari Lycra Blend Saree With Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/71BuwfgyhUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SJV3JVS",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2250,
            "savings_percent": 75.03
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Sponsored Ad - Barebeauty Women's Baluchari Silk Saree With Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/61iw7USDABL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085HS2G7N",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 2200,
            "savings_percent": 84.65
        },
        "reviews": {
            "total_reviews": 224,
            "rating": 3.4
        },
        "title": "Anni Designer Women's Rama Color Banarasi Silk Saree",
        "thumbnail": "https://m.media-amazon.com/images/I/91WCQ88UV5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XXV9RLV",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2450,
            "savings_percent": 81.69
        },
        "reviews": {
            "total_reviews": 428,
            "rating": 3.9
        },
        "title": "GoSriKi Women's Jute Silk with Blouse Piece Embroidery Sarees",
        "thumbnail": "https://m.media-amazon.com/images/I/61dbP1wFneL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07WFHK4L6",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 2247,
            "savings_amount": 1648,
            "savings_percent": 73.34
        },
        "reviews": {
            "total_reviews": 399,
            "rating": 3.6
        },
        "title": "Yashika Georgette Saree with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/710UYeqiESL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082QZ8KRP",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 379,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2620,
            "savings_percent": 87.36
        },
        "reviews": {
            "total_reviews": 1230,
            "rating": 4
        },
        "title": "PERFECTBLUE Women`s Art Silk saree with Blouse Piece(Sa9na3shadeVariation)",
        "thumbnail": "https://m.media-amazon.com/images/I/715NYXDhD-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DDNPSZQ",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1700,
            "savings_percent": 85.04
        },
        "reviews": {
            "total_reviews": 3345,
            "rating": 3.3
        },
        "title": "GoSriKi Art Silk Saree with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/61EvPLNdVBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RPGDB39",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 2300,
            "savings_percent": 88.5
        },
        "reviews": {
            "total_reviews": 2628,
            "rating": 3.2
        },
        "title": "Anni Designer Women's Art Silk with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/91yPghSgR8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07H71G1D7",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 2200,
            "savings_percent": 88.04
        },
        "reviews": {
            "total_reviews": 1456,
            "rating": 3.3
        },
        "title": "Anni Designer Georgette Saree with Blouse Piece (Black Gerog_Black_Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/6145npqbg4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PF6YRHB",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 699,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 171,
            "rating": 4.3
        },
        "title": "VAIVIDHYAM Designer Sarees Women's Banarasi Cotton Silk Saree With Blouse Piece.",
        "thumbnail": "https://m.media-amazon.com/images/I/61B8o9UlqpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SWR4QVJ",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 2300,
            "savings_percent": 88.5
        },
        "reviews": {
            "total_reviews": 1297,
            "rating": 3.5
        },
        "title": "ANNI DESIGNER Women's Art Silk Saree with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/91K7kfay53L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07FCLK5R7",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 2200,
            "savings_percent": 88.04
        },
        "reviews": {
            "total_reviews": 3390,
            "rating": 3.4
        },
        "title": "ANNI DESIGNER Women Silk Saree with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/91Nfpvp1yhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08J82S2PT",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1700,
            "savings_percent": 85.04
        },
        "reviews": {
            "total_reviews": 643,
            "rating": 3.1
        },
        "title": "Gosriki Silk Saree with Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/81Ew2qNSXVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KLP9WFG",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 2200,
            "savings_percent": 84.65
        },
        "reviews": {
            "total_reviews": 244,
            "rating": 3.7
        },
        "title": "ANNI DESIGNER Women's Silk Saree With Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/913VtoIq8DL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08Q8SG137",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 395,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 604,
            "savings_percent": 60.46
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 2
        },
        "title": "Navabi Export Women's Bandhani Lichi Soft Silk Saree With Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/71BzVE6vM+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RRHZPC5",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2700,
            "savings_percent": 90.03
        },
        "reviews": {
            "total_reviews": 1665,
            "rating": 3.6
        },
        "title": "Anni Designer Women's Art Silk Saree With Blouse",
        "thumbnail": "https://m.media-amazon.com/images/I/9114kTDpPUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082XBVCYC",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1300,
            "savings_percent": 76.52
        },
        "reviews": {
            "total_reviews": 571,
            "rating": 3.6
        },
        "title": "PISARA Women's Banarasi Art Silk Saree With Un-Stitched Blouse",
        "thumbnail": "https://m.media-amazon.com/images/I/91i2qlD-Z-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085TKVCWC",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1233,
            "currency": "INR",
            "before_price": 4599,
            "savings_amount": 3366,
            "savings_percent": 73.19
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 3.6
        },
        "title": "Sponsored Ad - YIPSY FASHION Women's Paithani Silk Saree With Blouse Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/81JjQY3T-BL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085TKVW76",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1043,
            "currency": "INR",
            "before_price": 4599,
            "savings_amount": 3556,
            "savings_percent": 77.32
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 3.5
        },
        "title": "Sponsored Ad - YIPSY FASHION Women's Jacquard Silk Blend Saree With Un-stitched Blouse",
        "thumbnail": "https://m.media-amazon.com/images/I/81uTEGC0HFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DVCXTV5",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1232,
            "currency": "INR",
            "before_price": 5599,
            "savings_amount": 4367,
            "savings_percent": 78
        },
        "reviews": {
            "total_reviews": 35,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Yipsy Fashion Women's Banarasi Silk Blend Saree",
        "thumbnail": "https://m.media-amazon.com/images/I/91Haopl1c6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WCHGWY7",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2500,
            "savings_percent": 83.36
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4
        },
        "title": "satyam weaves women's ethnic wear banarasi cotton silk woven jacquard saree. (Kery)",
        "thumbnail": "https://m.media-amazon.com/images/I/91aFmzs5YOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HRWZDNF",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 489,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1510,
            "savings_percent": 75.54
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.4
        },
        "title": "PERFECTBLUE Women's Digital Cotton Linen Blend Saree with Unstitched Blouse Piece(DigiPatta)",
        "thumbnail": "https://m.media-amazon.com/images/I/81Y+je7CEgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JJW3LR6",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 4700,
            "savings_percent": 94.02
        },
        "reviews": {
            "total_reviews": 414,
            "rating": 3
        },
        "title": "Anni Designer Cotton Saree With Blouse Piece (Pack Of 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/813gBue+-vL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DMKLYRR",
        "category": "Clothing",
        "product": "Saree",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1043,
            "currency": "INR",
            "before_price": 4599,
            "savings_amount": 3556,
            "savings_percent": 77.32
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Yipsy Fashion Women's Woven Silk Blend Saree (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/8130Wskx67L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WBNBW25",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1499,
            "currency": "INR",
            "before_price": 2399,
            "savings_amount": 900,
            "savings_percent": 37.52
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 2.9
        },
        "title": "Sponsored Ad - GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown",
        "thumbnail": "https://m.media-amazon.com/images/I/61ab5d6JAWL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DFCQQC9",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 809,
            "currency": "INR",
            "before_price": 1149,
            "savings_amount": 340,
            "savings_percent": 29.59
        },
        "reviews": {
            "total_reviews": 52,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Artemis Floral/Geomatric Print Sleeveless Night Gown",
        "thumbnail": "https://m.media-amazon.com/images/I/81C26vxIv1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PKQFP89",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 447,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2552,
            "savings_percent": 85.1
        },
        "reviews": {
            "total_reviews": 15,
            "rating": 3.7
        },
        "title": "WHOOSEE Women's Anarkali Maxi Gown (Black_Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/71XrQ0kxRGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NPGQ514",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 269,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 630,
            "savings_percent": 70.08
        },
        "reviews": {
            "total_reviews": 72,
            "rating": 2.5
        },
        "title": "Shree Khodal Art Malbari Silk Blue SemiStitched Long Anarkali Gown(Original product)",
        "thumbnail": "https://m.media-amazon.com/images/I/61CC9++1Z1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08X2NF8MQ",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1100,
            "savings_percent": 55.03
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4
        },
        "title": "Fashion Web Women's Velvet Sequins Semi-Stitched Anarkali Gown",
        "thumbnail": "https://m.media-amazon.com/images/I/61O07oBRsJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08B5YQ2N2",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1400,
            "savings_percent": 70.04
        },
        "reviews": {
            "total_reviews": 50,
            "rating": 4
        },
        "title": "Shree Villa Women's Embroidered Soft Taffeta Silk Semi Stitched Anarkali Gown(Maroon,Free Size) (Maroon)",
        "thumbnail": "https://m.media-amazon.com/images/I/71tHpftg1FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08BCNH1QF",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 929,
            "currency": "INR",
            "before_price": 2899,
            "savings_amount": 1970,
            "savings_percent": 67.95
        },
        "reviews": {
            "total_reviews": 43,
            "rating": 3.7
        },
        "title": "Vaani Creation Women's Anarkali Maxi Gown (Green_Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Y5hFkPtbL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08LZKPV5Q",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 999,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 2000,
            "savings_percent": 66.69
        },
        "reviews": {
            "total_reviews": 64,
            "rating": 3.6
        },
        "title": "Bollyclues Women's Mono Net Embroidered Pink Semi Stitch Gown(BC-Chain_Semi Stitch)",
        "thumbnail": "https://m.media-amazon.com/images/I/714D5kTPK+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08LB9PNZK",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1299,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1700,
            "savings_percent": 56.69
        },
        "reviews": {
            "total_reviews": 29,
            "rating": 4.1
        },
        "title": "Bollyclues Women's Mono Net Embroidered Grey Semi Stitch Gown(Grey-Botti_Semi Stitch)",
        "thumbnail": "https://m.media-amazon.com/images/I/71SmqaTUMGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KGFZN92",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 4
        },
        "title": "CHEMAX Women's Embroidered Taffeta Silk Semi Stitched Anarkali Gown(FREE SIZE)",
        "thumbnail": "https://m.media-amazon.com/images/I/71ev4I1ZE3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KJ551LD",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 3.6
        },
        "title": "BELLUXA Women's Taffeta Silk Gown (Blue, Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/71XpjsORw-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SKB6RCG",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 866,
            "currency": "INR",
            "before_price": 1899,
            "savings_amount": 1033,
            "savings_percent": 54.4
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 4.4
        },
        "title": "Nir Fashion Women's Fit And Flare Knee Length Gown (Nir Fashion_Pink_free size)",
        "thumbnail": "https://m.media-amazon.com/images/I/71Ji2hUMr7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XRGSN3T",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 558,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 741,
            "savings_percent": 57.04
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 3.9
        },
        "title": "FrionKandy Women's Rayon Checkered Print Full Maxi Length Gown Dress (Yellow, Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/613vGf6BsoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FXHRT71",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1050,
            "savings_percent": 65.67
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 3.2
        },
        "title": "Varudi Fashion Multi Color Heavy Soft Net Fabric Embroidery Work Round Neck Sleevesless Long Semi Sticthed Gown For Women ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61c9cdOOFqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SQDKD68",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 339,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 5660,
            "savings_percent": 94.35
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "Women Pink Kurti Long Dress Printed Gown Anarkali Kurti Sleevless Kurti for Women & Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/61dcAJuPBcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RYTK7LB",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 978,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1021,
            "savings_percent": 51.08
        },
        "reviews": {
            "total_reviews": 423,
            "rating": 4
        },
        "title": "Electomania Women's Silk Underskirt (SH02399_White _Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/41rS-qOPTwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084Q4HGY5",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1990,
            "savings_amount": 1291,
            "savings_percent": 64.87
        },
        "reviews": {
            "total_reviews": 125,
            "rating": 4
        },
        "title": "Sponsored Ad - Sashay Boutique Women's Anarkali Maxi Dress",
        "thumbnail": "https://m.media-amazon.com/images/I/61OJYr2fWTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07R794FHG",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 505,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 494,
            "savings_percent": 49.45
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.7
        },
        "title": "Sponsored Ad - VINDHWASHNI Women Satin Solid Above knee Nighty With Wrap Gown",
        "thumbnail": "https://m.media-amazon.com/images/I/717WVFPBFRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VBFN7KH",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 447,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 552,
            "savings_percent": 55.26
        },
        "reviews": {
            "total_reviews": 77,
            "rating": 3.9
        },
        "title": "Sponsored Ad - VINDHWASHNI Women's Satin Plain Solid Full Length Nighty",
        "thumbnail": "https://m.media-amazon.com/images/I/61Twkz2JRIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R8TJF9C",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1400,
            "savings_percent": 70.04
        },
        "reviews": {
            "total_reviews": 25,
            "rating": 3.3
        },
        "title": "Sponsored Ad - 0-Degree Women Cotton Printed Ankle Length Maxi Night Gown Nighty Combo Pack of 2 Combo Pack of 3",
        "thumbnail": "https://m.media-amazon.com/images/I/81+Erx-B28L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08RNYC7MT",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 425,
            "currency": "INR",
            "before_price": 1899,
            "savings_amount": 1474,
            "savings_percent": 77.62
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 3.7
        },
        "title": "TRUNDZ Women's Printed Soft Cotton Nighty/Night Gown Dark Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/81k3Jt+6OLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088BZ2S1C",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 415,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1284,
            "savings_percent": 75.57
        },
        "reviews": {
            "total_reviews": 91,
            "rating": 4
        },
        "title": "Monique Women's Ethnic Mandala Print Maternity Long Gown Anarkali Midi Dress (BIGELE-NB13 , Navy blue , Free Size )",
        "thumbnail": "https://m.media-amazon.com/images/I/7199GtgQg9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08NTTC31Y",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1598,
            "savings_amount": 899,
            "savings_percent": 56.26
        },
        "reviews": {
            "total_reviews": 164,
            "rating": 4.4
        },
        "title": "NEGLIGEE Women's Cotton Abstract Print Knee Length Nighty (Pack of 2) (2C0508_Black & Brown_Free Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/71-6h3RPzCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PHPPJSN",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 539,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1060,
            "savings_percent": 66.29
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Varudi Fashion Multi Color Heavy Soft Net Fabric Embroidery Work Round Neck Sleevesless Long Semi Sticthed Gown For Women ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61P4P5VoGUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085CDYJFF",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1699,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 3300,
            "savings_percent": 66.01
        },
        "reviews": {
            "total_reviews": 469,
            "rating": 4.4
        },
        "title": "Fancy Lifestyle Women's Long Anarkali Gown Type Lahenga Choli (Semi-Stitched)",
        "thumbnail": "https://m.media-amazon.com/images/I/91p5juUx9-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L9M55LC",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 3999,
            "savings_amount": 3150,
            "savings_percent": 78.77
        },
        "reviews": {
            "total_reviews": 47,
            "rating": 3.7
        },
        "title": "Fast Fashions Women's Semi Stitched Taffeta Silk Anarkali Gown",
        "thumbnail": "https://m.media-amazon.com/images/I/81SQ-2OgINL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0859YJ5SD",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1198,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 801,
            "savings_percent": 40.07
        },
        "reviews": {
            "total_reviews": 192,
            "rating": 4
        },
        "title": "ELECTOMANIA Women's Spandex A-line 6-Layers Hoopless Slips Floor Length Petticoat Crinoline Underskirt for Wedding Dress (...",
        "thumbnail": "https://m.media-amazon.com/images/I/417h1QOvWDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089N1S7XY",
        "category": "Clothing",
        "product": "Gown",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1595,
            "savings_amount": 1196,
            "savings_percent": 74.98
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 3.8
        },
        "title": "Monique Brand Fine Quality Cotton Women's/Girls Traditional Rajasthani Jaipuri Printed Maternity Summer Long Gown Middi Ma...",
        "thumbnail": "https://m.media-amazon.com/images/I/71xhbMnVlTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B019XSHCG4",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 698,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1801,
            "savings_percent": 72.07
        },
        "reviews": {
            "total_reviews": 1407,
            "rating": 3.7
        },
        "title": "Ben Martin Men's Relaxed Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/616xchp1ECL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08LZRVYZ1",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 950,
            "savings_percent": 63.38
        },
        "reviews": {
            "total_reviews": 75,
            "rating": 3.5
        },
        "title": "Dotiq Men's Regular Fit/Casual Denim Fabric/Comfortable/Classic 5-Pocket Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71tofDe1MZL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DMZZQ2M",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 698,
            "currency": "INR",
            "before_price": 2998,
            "savings_amount": 2300,
            "savings_percent": 76.72
        },
        "reviews": {
            "total_reviews": 1258,
            "rating": 3.5
        },
        "title": "Ben Martin Men's Regular Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61Don-d8JfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B06Y6MHSVR",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1850,
            "savings_percent": 74.03
        },
        "reviews": {
            "total_reviews": 610,
            "rating": 3.5
        },
        "title": "Ben Martin Men's Regular Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61TwfPRLhrL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07CN938R4",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 779,
            "currency": "INR",
            "before_price": 1899,
            "savings_amount": 1120,
            "savings_percent": 58.98
        },
        "reviews": {
            "total_reviews": 1264,
            "rating": 4
        },
        "title": "AKA CHIC Women's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71AgFdgRD2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TVX9M12",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 414,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 185,
            "savings_percent": 30.88
        },
        "reviews": {
            "total_reviews": 344,
            "rating": 3.7
        },
        "title": "Heel & Toe Women's Slim Fit Jeans Pant (Pack of 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/71q7hSzevfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B073HFN9V6",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 529,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1470,
            "savings_percent": 73.54
        },
        "reviews": {
            "total_reviews": 1807,
            "rating": 3.7
        },
        "title": "Broadstar Women's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/513imnW-m-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07K31DXM5",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 1899,
            "savings_amount": 1000,
            "savings_percent": 52.66
        },
        "reviews": {
            "total_reviews": 401,
            "rating": 4
        },
        "title": "Miss Chase Women's Navy Blue Skinny Fit High Rise Clean Look Regular Length Stretchable Denim Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71azEcLvb6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088X1S46P",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 598,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 901,
            "savings_percent": 60.11
        },
        "reviews": {
            "total_reviews": 208,
            "rating": 3.9
        },
        "title": "Men's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61SCAuhMhPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B076CR4CXR",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 590,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 609,
            "savings_percent": 50.79
        },
        "reviews": {
            "total_reviews": 2008,
            "rating": 3.6
        },
        "title": "Urbano Fashion Men's Black Slim Fit Denim Jeans Stretchable",
        "thumbnail": "https://m.media-amazon.com/images/I/51UlwkHPtmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0893VLKN6",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 800,
            "savings_percent": 50.03
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.4
        },
        "title": "Styzon Men's Relaxed Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71OfDWX0IIL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07VB9Q9XB",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 850,
            "savings_percent": 56.7
        },
        "reviews": {
            "total_reviews": 340,
            "rating": 3.4
        },
        "title": "Urbano Fashion Men's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61S5a0LL0sL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07MGRJYZX",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 850,
            "savings_percent": 50.03
        },
        "reviews": {
            "total_reviews": 178,
            "rating": 3
        },
        "title": "Campus Sutra Men Cut and Sew Denim Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/51PAjY776nL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07VB9R1WL",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 639,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 960,
            "savings_percent": 60.04
        },
        "reviews": {
            "total_reviews": 182,
            "rating": 3.6
        },
        "title": "Urbano Fashion Men's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61N1hOGfVLL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08D9T6K5M",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 675,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 924,
            "savings_percent": 57.79
        },
        "reviews": {
            "total_reviews": 70,
            "rating": 3.6
        },
        "title": "Urbano Fashion Men's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71m0W58-zQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01MQHAN4O",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 504,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 695,
            "savings_percent": 57.96
        },
        "reviews": {
            "total_reviews": 467,
            "rating": 3.3
        },
        "title": "Urbano Fashion Black Slim Fit Stretch Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/51ArJkrtqtL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077NJHLV4",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1850,
            "savings_percent": 74.03
        },
        "reviews": {
            "total_reviews": 292,
            "rating": 3.3
        },
        "title": "Ben Martin Men's Regular Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61+wT3sYB7L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08DRR9R3F",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 859,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 1740,
            "savings_percent": 66.95
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 4
        },
        "title": "Integriti Men's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/714mVFatpRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07MV7CS22",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 635,
            "currency": "INR",
            "before_price": 2299,
            "savings_amount": 1664,
            "savings_percent": 72.38
        },
        "reviews": {
            "total_reviews": 1567,
            "rating": 3.4
        },
        "title": "L,Zard Men's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/618r4PBS73L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B082MDVDDJ",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 569,
            "currency": "INR",
            "before_price": 1799,
            "savings_amount": 1230,
            "savings_percent": 68.37
        },
        "reviews": {
            "total_reviews": 82,
            "rating": 3.4
        },
        "title": "Amazon Brand - Symbol Men's Stretch Skinny Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/81+sfXvdrSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08GSKF9YK",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 150,
            "savings_percent": 20.03
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Sponsored Ad - Max Women's MACY1BAZDARK Blue Regular Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71d2fZBmrmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085J98FJV",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 620,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1379,
            "savings_percent": 68.98
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 2.8
        },
        "title": "Sponsored Ad - Amazon Brand - Symbol Women's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71Ae9a5O6jL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZVRH7X4",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 1900,
            "savings_percent": 73.11
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "Sponsored Ad - AKA CHIC Women's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71IC6Qiv9QL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZVRQKDY",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 879,
            "currency": "INR",
            "before_price": 2699,
            "savings_amount": 1820,
            "savings_percent": 67.43
        },
        "reviews": {
            "total_reviews": 35,
            "rating": 3.8
        },
        "title": "Sponsored Ad - AKA CHIC Women's Tapered Fit Relaxed Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/81Ysnlhb8eL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QRZ1X2N",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 579,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1120,
            "savings_percent": 65.92
        },
        "reviews": {
            "total_reviews": 671,
            "rating": 3.8
        },
        "title": "ZXN Clothing Women's & Girls' Regular Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61KuMWWVwLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08LZGJDNL",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 379,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 620,
            "savings_percent": 62.06
        },
        "reviews": {
            "total_reviews": 34,
            "rating": 3.5
        },
        "title": "Shabana Creation Women's Regular Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/511ZD9E6qgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0798MRB9V",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1100,
            "savings_percent": 73.38
        },
        "reviews": {
            "total_reviews": 519,
            "rating": 3.9
        },
        "title": "jannon Women's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61MSUry5E8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01F15MPVA",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 587,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 712,
            "savings_percent": 54.81
        },
        "reviews": {
            "total_reviews": 1154,
            "rating": 3.9
        },
        "title": "NIFTY Women's Slim Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/61PodjlLrUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07WSWJ35X",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 602,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1097,
            "savings_percent": 64.57
        },
        "reviews": {
            "total_reviews": 248,
            "rating": 4
        },
        "title": "Amazon Brand - Symbol Women's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/81Vl8nxoJIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07CN1HKDF",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 1899,
            "savings_amount": 1050,
            "savings_percent": 55.29
        },
        "reviews": {
            "total_reviews": 903,
            "rating": 4
        },
        "title": "AKA CHIC Women's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/71tG8qg3oDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W3TDXXZ",
        "category": "Clothing",
        "product": "Jeans",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 979,
            "currency": "INR",
            "before_price": 2699,
            "savings_amount": 1720,
            "savings_percent": 63.73
        },
        "reviews": {
            "total_reviews": 169,
            "rating": 4.3
        },
        "title": "AKA CHIC Women's Skinny Fit Jeans",
        "thumbnail": "https://m.media-amazon.com/images/I/813TiH8DH2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08TQL2FYP",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 29190,
            "currency": "INR",
            "before_price": 32540,
            "savings_amount": 3350,
            "savings_percent": 10.3
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Dell Inspiron 3505 15.6\" HD Anti Glare Display Laptop (Athlon Gold 3150U / 4GB / 256 SSD / Integrated Graphics / Win 10 + ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71tJecS6jjL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08MPP51VB",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 34794,
            "currency": "INR",
            "before_price": 38210,
            "savings_amount": 3416,
            "savings_percent": 8.94
        },
        "reviews": {
            "total_reviews": 59,
            "rating": 3.8
        },
        "title": "Dell Inspiron 3505 15.6\" FHD Anti Glare Display Laptop (Ryzen-3 3250U / 8GB / 256 SSD / Vega Graphics / 1 Yr NBD / Win 10 ...",
        "thumbnail": "https://m.media-amazon.com/images/I/51MKXqHKBQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08NXRZJYR",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 40399,
            "currency": "INR",
            "before_price": 43999,
            "savings_amount": 3600,
            "savings_percent": 8.18
        },
        "reviews": {
            "total_reviews": 51,
            "rating": 3.6
        },
        "title": "Dell Inspiron 15 (3501) 15.6-inch FHD Display, 10th Generation Intel Core i3, 8GB RAM, 1 TB HDD, Windows (R) 10 Home Singl...",
        "thumbnail": "https://m.media-amazon.com/images/I/719vIKTyr6L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08D6Y52PS",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 34990,
            "currency": "INR",
            "before_price": 39124,
            "savings_amount": 4134,
            "savings_percent": 10.57
        },
        "reviews": {
            "total_reviews": 462,
            "rating": 2.6
        },
        "title": "DELL Inspiron 3493 14-inch HD Thin & Light Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Sil...",
        "thumbnail": "https://m.media-amazon.com/images/I/71wsC-ZENhL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08KY7QQ7H",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 40125,
            "currency": "INR",
            "before_price": 46000,
            "savings_amount": 5875,
            "savings_percent": 12.77
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4
        },
        "title": "Dell Inspiron 3505 15.6-inch FHD Laptop (Ryzen 3 3250U/8GB/256GB SSD+1TB HDD/Windows 10/MS Office 2019/AMD Radeon Vega Gra...",
        "thumbnail": "https://m.media-amazon.com/images/I/51CYuZNUcoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08D6M1Y6D",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24802,
            "currency": "INR",
            "before_price": 27208,
            "savings_amount": 2406,
            "savings_percent": 8.84
        },
        "reviews": {
            "total_reviews": 324,
            "rating": 3.8
        },
        "title": "HP 15s Thin and Light Laptop (Intel Celeron N4020/4GB/1TB HDD/Windows 10 Home), du1044tu",
        "thumbnail": "https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07THW9WFM",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 43990,
            "currency": "INR",
            "before_price": 53238,
            "savings_amount": 9248,
            "savings_percent": 17.37
        },
        "reviews": {
            "total_reviews": 293,
            "rating": 4.4
        },
        "title": "HP 14 Laptop (Ryzen 5 3500U/8GB/1TB HDD + 256GB SSD/Win 10/Microsoft Office 2019/Radeon Vega 8 Graphics), DK0093AU",
        "thumbnail": "https://m.media-amazon.com/images/I/81w4VMSLLzL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08WBB369L",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 62990,
            "currency": "INR",
            "before_price": 76379,
            "savings_amount": 13389,
            "savings_percent": 17.53
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 4.1
        },
        "title": "HP Pavilion 11th Gen Intel Core i5 Thin & Light 14-Inch FHD Laptop (16GB/512GB SSD/Windows 10/MS Office/Backlit/Fingerprin...",
        "thumbnail": "https://m.media-amazon.com/images/I/71hmqIQJFdL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08KJ92N9V",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 28442,
            "currency": "INR",
            "before_price": 39999,
            "savings_amount": 11557,
            "savings_percent": 28.89
        },
        "reviews": {
            "total_reviews": 56,
            "rating": 3.4
        },
        "title": "HP 245 G7 Laptop 2D8C6PA (AMD Ryzen 3-3300U/4GB Ram/ 1TB HDD/ 14.0 inch HD /Windows-10/AMD Radeon Vega 6 Graphics/ Dark As...",
        "thumbnail": "https://m.media-amazon.com/images/I/91-L0ug+WQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08G24RGKS",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 36990,
            "currency": "INR",
            "before_price": 42103,
            "savings_amount": 5113,
            "savings_percent": 12.14
        },
        "reviews": {
            "total_reviews": 422,
            "rating": 3.8
        },
        "title": "HP 14 Ultra Thin & Light 14-inch Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf...",
        "thumbnail": "https://m.media-amazon.com/images/I/81MEmcBaxVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0864HXDG1",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 83990,
            "currency": "INR",
            "before_price": 92990,
            "savings_amount": 9000,
            "savings_percent": 9.68
        },
        "reviews": {
            "total_reviews": 297,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storag...",
        "thumbnail": "https://m.media-amazon.com/images/I/81vKT2GiQKL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0883JQQJQ",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 102990,
            "currency": "INR",
            "before_price": 117900,
            "savings_amount": 14910,
            "savings_percent": 12.65
        },
        "reviews": {
            "total_reviews": 70,
            "rating": 4.2
        },
        "title": "Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) -...",
        "thumbnail": "https://m.media-amazon.com/images/I/71YRSVXhgQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08N5WRWNW",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 142900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 66,
            "rating": 4.3
        },
        "title": "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)",
        "thumbnail": "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B073Q5R6VR",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 67990,
            "currency": "INR",
            "before_price": 77200,
            "savings_amount": 9210,
            "savings_percent": 11.93
        },
        "reviews": {
            "total_reviews": 3253,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver",
        "thumbnail": "https://m.media-amazon.com/images/I/51TdkJSqeQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B081JWZSSX",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 227990,
            "currency": "INR",
            "before_price": 239900,
            "savings_amount": 11910,
            "savings_percent": 4.96
        },
        "reviews": {
            "total_reviews": 58,
            "rating": 4.3
        },
        "title": "Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B081JWZQJB",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 199900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 241,
            "rating": 4.4
        },
        "title": "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08TQQ4ZHM",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 23990,
            "currency": "INR",
            "before_price": 30690,
            "savings_amount": 6700,
            "savings_percent": 21.83
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 3.9
        },
        "title": "Lenovo IdeaPad Slim 3i Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.7K...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B081Z4H8BM",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24978,
            "currency": "INR",
            "before_price": 30690,
            "savings_amount": 5712,
            "savings_percent": 18.61
        },
        "reviews": {
            "total_reviews": 1211,
            "rating": 3.3
        },
        "title": "Lenovo Ideapad S145 AMD A6-9225 15.6 inch HD Thin and Light Laptop (4GB/1TB/Windows 10/Grey/1.85Kg), 81N30063IN",
        "thumbnail": "https://m.media-amazon.com/images/I/61PXjYVtmqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B087D3JHGB",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 30990,
            "currency": "INR",
            "before_price": 38490,
            "savings_amount": 7500,
            "savings_percent": 19.49
        },
        "reviews": {
            "total_reviews": 334,
            "rating": 3.4
        },
        "title": "Lenovo Ideapad Slim 3 AMD Ryzen 3 15.6 inch Full HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 2019/Platinum ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CQG6PDK",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 27899,
            "currency": "INR",
            "before_price": 34190,
            "savings_amount": 6291,
            "savings_percent": 18.4
        },
        "reviews": {
            "total_reviews": 218,
            "rating": 3.6
        },
        "title": "Lenovo Ideapad Slim 3 AMD Athlon Silver 3050U 15.6 inch HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 2019/Pl...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08DHT9JSK",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 25780,
            "currency": "INR",
            "before_price": 35999,
            "savings_amount": 10219,
            "savings_percent": 28.39
        },
        "reviews": {
            "total_reviews": 14,
            "rating": 3.5
        },
        "title": "Lenovo 82C700D4IH V15 ADA Laptop (AMD Athlon Silver 3050U/4GB Ram/ 1TB HDD/ 15.6 inch HD AG/ DOS/Integrated AMD Radeon Gra...",
        "thumbnail": "https://m.media-amazon.com/images/I/51RSK3t7tsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JCMB3RF",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 33990,
            "currency": "INR",
            "before_price": 49590,
            "savings_amount": 15600,
            "savings_percent": 31.46
        },
        "reviews": {
            "total_reviews": 264,
            "rating": 3.6
        },
        "title": "Lenovo IdeaPad Slim 3i 10th Gen Intel Core i3 14 inch Full HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/MS Office 20...",
        "thumbnail": "https://m.media-amazon.com/images/I/61s7sJEpsVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088CG6812",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 29990,
            "currency": "INR",
            "before_price": 34990,
            "savings_amount": 5000,
            "savings_percent": 14.29
        },
        "reviews": {
            "total_reviews": 54,
            "rating": 3.7
        },
        "title": "Acer Aspire 3 AMD Ryzen 3 15.6-inch Full HD 1366 x 768 Display Thin and Light Laptop (4GB Ram/1TB HDD/Window 10, Home/Inte...",
        "thumbnail": "https://m.media-amazon.com/images/I/610oaBCr+XL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08QNMYDQ9",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 22990,
            "currency": "INR",
            "before_price": 33000,
            "savings_amount": 10010,
            "savings_percent": 30.33
        },
        "reviews": {
            "total_reviews": 41,
            "rating": 2.9
        },
        "title": "Acer One 14 14-inch Laptop AMD A6 Processor (4GB RAM/1TB HDD/AMD Radeon Integrated Graphics/Windows 10 Home 64 Bit) Z3-471",
        "thumbnail": "https://m.media-amazon.com/images/I/81OjPmGscaL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08J491Z28",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 25990,
            "currency": "INR",
            "before_price": 37500,
            "savings_amount": 11510,
            "savings_percent": 30.69
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 2.5
        },
        "title": "Acer One 14 Pentium Dual Core - (4 GB/1 TB HDD/Windows 10 Home) Z2-485 Thin and Light Laptop (14 inch, Silver, 1.8 kg)",
        "thumbnail": "https://m.media-amazon.com/images/I/61xkZLrtL9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CY9SL14",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 26990,
            "currency": "INR",
            "before_price": 37500,
            "savings_amount": 10510,
            "savings_percent": 28.03
        },
        "reviews": {
            "total_reviews": 141,
            "rating": 3.5
        },
        "title": "Acer Acer One Intel Pentium Gold 4415U Processor 14-inch Display 1366 x 768 Laptop (4 GB Ram/1TB HDD/Windows 10 Home/Integ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61S1y24GgmL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08T69P9ZF",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 32425.05,
            "currency": "INR",
            "before_price": 47100,
            "savings_amount": 14674.95,
            "savings_percent": 31.16
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.3
        },
        "title": "Acer Extensa 15 10th Gen Intel Core i3-1005G1 15.6' Full HD Display Thin and Light Laptop(4GB RAM/1 TB HDD/Win10/Integrate...",
        "thumbnail": "https://m.media-amazon.com/images/I/71FsqYE2p-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08XMF2X8M",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 51290,
            "currency": "INR",
            "before_price": 69999,
            "savings_amount": 18709,
            "savings_percent": 26.73
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 4
        },
        "title": "Acer Aspire 5 Thin and Light Laptop Intel Core I5 11th Gen ( 8 GB/512 GB SSD/ Windows 10 Home/ Iris Xe Graphic) A515-56-54...",
        "thumbnail": "https://m.media-amazon.com/images/I/71q9NsahLQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B083RD58F6",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 30674,
            "currency": "INR",
            "before_price": 32182.5,
            "savings_amount": 1508.5,
            "savings_percent": 4.69
        },
        "reviews": {
            "total_reviews": 506,
            "rating": 3.5
        },
        "title": "HP 15 db1069AU 15.6-inch Laptop (3rd Gen Ryzen 3 3200U/4GB/1TB HDD/Windows 10/MS Office/Radeon Vega 3 Graphics), Jet Black",
        "thumbnail": "https://m.media-amazon.com/images/I/71JZWpHPV+L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08TBVBKN5",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 23750,
            "currency": "INR",
            "before_price": 24686,
            "savings_amount": 936,
            "savings_percent": 3.79
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.4
        },
        "title": "HP Notebook PC 245 G7 14-inch Laptop ATHLON-3050U/4GB/1TB/Windows 10 Home/ 1 Year Warranty (21Z04PA)",
        "thumbnail": "https://m.media-amazon.com/images/I/61M2uHOa9vL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08NXYT6VY",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 59990,
            "currency": "INR",
            "before_price": 89999,
            "savings_amount": 30009,
            "savings_percent": 33.34
        },
        "reviews": {
            "total_reviews": 42,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Acer Swift 3 AMD Ryzen 5 4500U 14-inch Display Ultra Thin and Light Laptop (8GB Ram/512GB SSD/Window 10, Ho...",
        "thumbnail": "https://m.media-amazon.com/images/I/71RyFvRsm+L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HLYQ4ZM",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 56990,
            "currency": "INR",
            "before_price": 83368,
            "savings_amount": 26378,
            "savings_percent": 31.64
        },
        "reviews": {
            "total_reviews": 180,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Lenovo ThinkPad E14 Intel Core i5 10th Gen 14-inch Full HD IPS Thin and Light Laptop (8GB RAM/ 1TB HDD + 12...",
        "thumbnail": "https://m.media-amazon.com/images/I/71k3N4gxNeL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08C5W6PL2",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24990,
            "currency": "INR",
            "before_price": 31496,
            "savings_amount": 6506,
            "savings_percent": 20.66
        },
        "reviews": {
            "total_reviews": 116,
            "rating": 3.5
        },
        "title": "HP Chromebook 14a-na0003TU 14-inch Thin & Light Touchscreen Laptop (Intel N4020/4GB/64GB SSD + 256GB Expandable/Chrome OS/...",
        "thumbnail": "https://m.media-amazon.com/images/I/613WULNEr1L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08T6SJ215",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 35999,
            "currency": "INR",
            "before_price": 39788,
            "savings_amount": 3789,
            "savings_percent": 9.52
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 3.7
        },
        "title": "HP 15 Thin & Light 15.6-inch FHD Laptop (Ryzen 3 3250U/8GB/1TB HDD/Win 10 Home/MS Office/1.76 Kg/Natural Silver), 15s-gr00...",
        "thumbnail": "https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B087S25JL2",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 36317,
            "currency": "INR",
            "before_price": 40348.5,
            "savings_amount": 4031.5,
            "savings_percent": 9.99
        },
        "reviews": {
            "total_reviews": 1612,
            "rating": 3.9
        },
        "title": "HP 14 10th Gen Intel Core i3 14-inch Laptop (i3-1005G1/4GB/256GB SSD/Windows 10 Home/Jet Black), 14s cf3047TU",
        "thumbnail": "https://m.media-amazon.com/images/I/71bxvTX6TYL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08XBZBFCQ",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 67990,
            "currency": "INR",
            "before_price": 82227,
            "savings_amount": 14237,
            "savings_percent": 17.31
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4
        },
        "title": "HP Pavilion 11th Gen Intel Core i5 Processor 15.6-inch FHD Laptop with Alexa Built-in (16GB/512GB SSD/Win 10/MS Offce/2GB ...",
        "thumbnail": "https://m.media-amazon.com/images/I/51sbPFGXFqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HHB9Q2M",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 41490,
            "currency": "INR",
            "before_price": 53283,
            "savings_amount": 11793,
            "savings_percent": 22.13
        },
        "reviews": {
            "total_reviews": 23,
            "rating": 3.6
        },
        "title": "HP 14 10th Gen Intel Core i3 14-inch FHD Laptop with Built-in 4G LTE (i3-1005G1/8GB/1TB HDD/Win 10/MS Office/Win 10/Natura...",
        "thumbnail": "https://m.media-amazon.com/images/I/71lMJxLkIqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08P6J2JZR",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 40990,
            "currency": "INR",
            "before_price": 44908.5,
            "savings_amount": 3918.5,
            "savings_percent": 8.73
        },
        "reviews": {
            "total_reviews": 116,
            "rating": 3.8
        },
        "title": "HP 15 Thin & Light 15.6-inch FHD Laptop (Ryzen 5 3450U/8GB/1TB HDD/Vega 8 Graphics/Windows 10 Home/MS Office/Jet Black/1.7...",
        "thumbnail": "https://m.media-amazon.com/images/I/719F8WdfBzL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08C5WLK3P",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24990,
            "currency": "INR",
            "before_price": 31496,
            "savings_amount": 6506,
            "savings_percent": 20.66
        },
        "reviews": {
            "total_reviews": 61,
            "rating": 3.9
        },
        "title": "HP Chromebook 14a-na0002TU 14-inch Laptop (Celeron N4020/4GB/64GB SSD/Chrome OS/Integrated Graphics), Ceremic White",
        "thumbnail": "https://m.media-amazon.com/images/I/61Gnrgw0mrL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088CFBMRP",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 44984,
            "currency": "INR",
            "before_price": 53209,
            "savings_amount": 8225,
            "savings_percent": 15.46
        },
        "reviews": {
            "total_reviews": 154,
            "rating": 3.6
        },
        "title": "Sponsored Ad - Acer Aspire 3 Intel Core i5-10th Gen 15.6 - inch 1920 x 1080 Thin and Light Laptop (8GB Ram/1TB HDD/Window ...",
        "thumbnail": "https://m.media-amazon.com/images/I/810mRHoIxML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FRP9LKS",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 679,
            "currency": "INR",
            "before_price": 2000,
            "savings_amount": 1321,
            "savings_percent": 66.05
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Thermal Grizzly Kryonaut - 1.0 Gram with authentication Code",
        "thumbnail": "https://m.media-amazon.com/images/I/71O5WPvlbXL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JQJS9SB",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24880,
            "currency": "INR",
            "before_price": 27885,
            "savings_amount": 3005,
            "savings_percent": 10.78
        },
        "reviews": {
            "total_reviews": 34,
            "rating": 3.2
        },
        "title": "HP Notebook 250 G7 Laptop 2A9A5PA#ACJ (Intel Celeron N4020/4GB Ram/1TB HDD/15.6 inch HD/Windows 10/Intel UHD Graphics/1.78...",
        "thumbnail": "https://m.media-amazon.com/images/I/91KI7EcBzKL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08T6THSMQ",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 40990,
            "currency": "INR",
            "before_price": 52500,
            "savings_amount": 11510,
            "savings_percent": 21.92
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.6
        },
        "title": "HP 15 Thin & Light 15.6-inch FHD Laptop (Ryzen 3 3250U/8GB/256GB SSD + 1TB HDD/Win 10 Home/MS Office/1.82 Kg/Natural Silve...",
        "thumbnail": "https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JM3ZLHF",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 40990,
            "currency": "INR",
            "before_price": 50696,
            "savings_amount": 9706,
            "savings_percent": 19.15
        },
        "reviews": {
            "total_reviews": 154,
            "rating": 4.2
        },
        "title": "HP All-in-One 24-df0215in 23.8-Inch FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 20...",
        "thumbnail": "https://m.media-amazon.com/images/I/71MW1E0je-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08T62GYWZ",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 15999,
            "currency": "INR",
            "before_price": 59999,
            "savings_amount": 44000,
            "savings_percent": 73.33
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.6
        },
        "title": "(Renewed) HP 18.5 Inch All In One Desktop set (Intel C2D -E8400 Dual Core/4 GB/160 GB /Ultra Slim CPU/18.5\" Monitor+Keyboa...",
        "thumbnail": "https://m.media-amazon.com/images/I/61eXcT9hheL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JMNDXW6",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 25638,
            "currency": "INR",
            "before_price": 27874,
            "savings_amount": 2236,
            "savings_percent": 8.02
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "HP 21 Desktop All in One PC with Alexa Built-in (Intel Celeron J4025/4GB/1TB HDD/Win 10), 21-b0101in",
        "thumbnail": "https://m.media-amazon.com/images/I/81MXosERN8L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0839G6TBW",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 34990,
            "currency": "INR",
            "before_price": 46230,
            "savings_amount": 11240,
            "savings_percent": 24.31
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 3
        },
        "title": "HP S01 Slim SO1-pF0311in Desktop (9th Gen i5 9400/4GB/1TB/Windows 10, Home/Integrated Graphics), Jet Black",
        "thumbnail": "https://m.media-amazon.com/images/I/31R2JKZlLqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B081JXDZFM",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 199900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 40,
            "rating": 3.9
        },
        "title": "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Silver",
        "thumbnail": "https://m.media-amazon.com/images/I/71y+lIHVdAL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08RDWLXM9",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 104465,
            "currency": "INR",
            "before_price": 122900,
            "savings_amount": 18435,
            "savings_percent": 15
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "(Renewed) New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)",
        "thumbnail": "https://m.media-amazon.com/images/I/71DIt6oIe3L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07V6SHBJP",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 118404,
            "currency": "INR",
            "before_price": 119900,
            "savings_amount": 1496,
            "savings_percent": 1.25
        },
        "reviews": {
            "total_reviews": 161,
            "rating": 4.3
        },
        "title": "Apple MacBook Air (13-inch, 8GB RAM, 256GB Storage, 1.6GHz Intel Core i5) - Space Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/51FQpz-zY1L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0864KFBNP",
        "category": "Computers and Laptops",
        "product": "Apple MacBook",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 104900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 4.3
        },
        "title": "New Apple Mac Mini (3.0GHz 6-core 8th-Generation Intel Core i5 Processor, 8GB RAM, 512GB)",
        "thumbnail": "https://m.media-amazon.com/images/I/712B4P3yOnL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08MBV6YDR",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 41300,
            "currency": "INR",
            "before_price": 49900,
            "savings_amount": 8600,
            "savings_percent": 17.23
        },
        "reviews": {
            "total_reviews": 78,
            "rating": 3.3
        },
        "title": "DELL Inspiron 3501 15.6-inch FHD Laptop (10th Gen Core i3-1035G1/8GB/1TB HDD/Window 10 + Microsoft Office/NoDvD/Integrated...",
        "thumbnail": "https://m.media-amazon.com/images/I/612G4reLx3L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08MQLRQ9K",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 45490,
            "currency": "INR",
            "before_price": 51553,
            "savings_amount": 6063,
            "savings_percent": 11.76
        },
        "reviews": {
            "total_reviews": 33,
            "rating": 4.4
        },
        "title": "Dell Vostro 3405 14\" FHD AG Display Laptop (Ryzen-5 3500U / 8GB / 512 SSD / Vega Graphics / Win 10 + Office H&S/ Dune Colo...",
        "thumbnail": "https://m.media-amazon.com/images/I/51CEknIIHcL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08RXZCXH6",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 50190,
            "currency": "INR",
            "before_price": 55283,
            "savings_amount": 5093,
            "savings_percent": 9.21
        },
        "reviews": {
            "total_reviews": 27,
            "rating": 2.8
        },
        "title": "Dell Vostro 3400 14\" FHD Anti Glare Display Laptop (11th Gen i5-1135G7 / 8GB / 1TB / Integrated Graphics / Win 10 + MS Off...",
        "thumbnail": "https://m.media-amazon.com/images/I/8147cwFm2PL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08M61GDYJ",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 70836,
            "currency": "INR",
            "before_price": 74538,
            "savings_amount": 3702,
            "savings_percent": 4.97
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 3.3
        },
        "title": "Dell Inspiron 5406 11th Gen 14inch FHD 2in1 Laptop(i5-1135G7 / 8GB / 512 SSD / Iris Xe Graphics /Win 10/ MS Office 19/ Act...",
        "thumbnail": "https://m.media-amazon.com/images/I/51Xayr3mRTL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07QB34C7P",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 33990,
            "currency": "INR",
            "before_price": 42572,
            "savings_amount": 8582,
            "savings_percent": 20.16
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 3.7
        },
        "title": "Dell New Latitude 3000 Series 14\"---Core i3 8th Gen || 4 GB || 1 TB || DOS-Ubantu || 1 Year ADP+NBD Dell Warranty || 14 \" ...",
        "thumbnail": "https://m.media-amazon.com/images/I/81fvkgHhGoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07LB7QQZF",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 20990,
            "currency": "INR",
            "before_price": 48990,
            "savings_amount": 28000,
            "savings_percent": 57.15
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.3
        },
        "title": "(Renewed) Dell Latitude E6410-i5-4 GB-320 GB 14-inch Laptop (1st Gen Core i5/4GB/320GB/Windows 7/Integrated Graphics), Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/41I7mH1-OSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08GY2DR2Z",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 72990,
            "currency": "INR",
            "before_price": 78193,
            "savings_amount": 5203,
            "savings_percent": 6.65
        },
        "reviews": {
            "total_reviews": 149,
            "rating": 3.8
        },
        "title": "Dell G3 3500 Gaming Laptop with 15.6 Inch 120 Hz FHD Display (10th Gen i5-10300H/ 8 GB/ 1TB+256 SSD/ Win 10/ NVIDIA GTX 16...",
        "thumbnail": "https://m.media-amazon.com/images/I/61s0UA4pmVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B071X5CVWP",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 29999,
            "currency": "INR",
            "before_price": 89999,
            "savings_amount": 60000,
            "savings_percent": 66.67
        },
        "reviews": {
            "total_reviews": 143,
            "rating": 4.2
        },
        "title": "Dell Latitude E5440 14in Notebook PC - Intel Core i5-4300u 1.9GHz 8GB 128 SSD Windows 10 Professional (Renewed)",
        "thumbnail": "https://m.media-amazon.com/images/I/71A5UVtGb4L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HPY2N4W",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 36190,
            "currency": "INR",
            "before_price": 40265,
            "savings_amount": 4075,
            "savings_percent": 10.12
        },
        "reviews": {
            "total_reviews": 15,
            "rating": 3.6
        },
        "title": "Dell Inspiron 3505 15\" FHD Anti Glare Display Laptop (Ryzen-3 3250U / 4 GB / 1TB+256 SSD / Vega Graphics / 1 Yr NBD / Win ...",
        "thumbnail": "https://m.media-amazon.com/images/I/510MXxwvsiL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FBZD13D",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 33089,
            "currency": "INR",
            "before_price": 34990,
            "savings_amount": 1901,
            "savings_percent": 5.43
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 3.5
        },
        "title": "(Renewed) Dell Inspiron 3493 14-inch HD Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Intel HD Graphics/Silver...",
        "thumbnail": "https://m.media-amazon.com/images/I/41RZDMVztzL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08M61GDYJ",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 70836,
            "currency": "INR",
            "before_price": 74538,
            "savings_amount": 3702,
            "savings_percent": 4.97
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 3.3
        },
        "title": "Dell Inspiron 5406 11th Gen 14inch FHD 2in1 Laptop(i5-1135G7 / 8GB / 512 SSD / Iris Xe Graphics /Win 10/ MS Office 19/ Act...",
        "thumbnail": "https://m.media-amazon.com/images/I/51Xayr3mRTL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08D71JSGX",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 875,
            "rating": 3.4
        },
        "title": "Dell Vostro 3491 14-inch FHD Laptop (10th Gen i3-1005G1/4GB/1TB HDD + 256GB SSD/Win 10 + MS Office/Intel HD Graphics/Black...",
        "thumbnail": "https://m.media-amazon.com/images/I/714FrZZMQcL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08QCKPLZX",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 62690,
            "currency": "INR",
            "before_price": 69812,
            "savings_amount": 7122,
            "savings_percent": 10.2
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4.1
        },
        "title": "Dell Inspiron 3501 15-inch FHD Laptop (11th Gen i5-1135G7/8GB/1TB HDD/256GB SSD/Win 10 + MS Office/2GB Graphics/Soft Mint)",
        "thumbnail": "https://m.media-amazon.com/images/I/61kwF967nJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088CF3VX6",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 32999,
            "currency": "INR",
            "before_price": 44999,
            "savings_amount": 12000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 38,
            "rating": 3.8
        },
        "title": "Acer Aspire 3 A315-23 15.6-inch Laptop (AMD Athlon Silver 3050U dual-core/4GB/1TB HDD/Window 10, Home, 64Bit/AMD RadeonTM ...",
        "thumbnail": "https://m.media-amazon.com/images/I/610oaBCr+XL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08PN1P5GB",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 37890,
            "currency": "INR",
            "before_price": 45000,
            "savings_amount": 7110,
            "savings_percent": 15.8
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3
        },
        "title": "Acer Aspire 3 A315-56 (UN.HS5SI.039) Intel Core i3-10th Gen 15.6 - inch 1920 x 1080 Thin and Light Laptop (8GB Ram/1TB HDD...",
        "thumbnail": "https://m.media-amazon.com/images/I/71GvNlDMfYL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08D8H4382",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 28999,
            "currency": "INR",
            "before_price": 30500,
            "savings_amount": 1501,
            "savings_percent": 4.92
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 3.1
        },
        "title": "Acer One 14 Z2-485 14-inch Laptop (Intel Pentium Gold Processor) 4415U/4GB/1TB HDD/Windows 10 Home Single Language 64 Bit ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61W8JPJNNML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08XMB4Z77",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 56990,
            "currency": "INR",
            "before_price": 89999,
            "savings_amount": 33009,
            "savings_percent": 36.68
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Acer Aspire 7 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) A715-42G G...",
        "thumbnail": "https://m.media-amazon.com/images/I/41Dq1jqMhyL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088CFBMRP",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 44984,
            "currency": "INR",
            "before_price": 53209,
            "savings_amount": 8225,
            "savings_percent": 15.46
        },
        "reviews": {
            "total_reviews": 154,
            "rating": 3.6
        },
        "title": "Acer Aspire 3 Intel Core i5-10th Gen 15.6 - inch 1920 x 1080 Thin and Light Laptop (8GB Ram/1TB HDD/Window 10/Intel UHD Gr...",
        "thumbnail": "https://m.media-amazon.com/images/I/810mRHoIxML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088CFBQFN",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 30990,
            "currency": "INR",
            "before_price": 45999,
            "savings_amount": 15009,
            "savings_percent": 32.63
        },
        "reviews": {
            "total_reviews": 252,
            "rating": 2.9
        },
        "title": "Acer Aspire 3 Intel Core i3-10th Gen 15.6 - inch 1920 x 1080 Thin and Light Laptop (4GB Ram/1TB HDD/Window 10/Integrated G...",
        "thumbnail": "https://m.media-amazon.com/images/I/81YUWJOwMDL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08QG68JXS",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 29999,
            "currency": "INR",
            "before_price": 32999,
            "savings_amount": 3000,
            "savings_percent": 9.09
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 4
        },
        "title": "Acer Extensa 15 EX215-22-A7D9 (NX.EG9SI.001) Laptop (AMD Athlon Gold/ 4GB RAM/ 1TB HDD/ Windows 10 Home/ AMD Radeon Graphi...",
        "thumbnail": "https://m.media-amazon.com/images/I/71FsqYE2p-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HQP9P3H",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 39984.6,
            "currency": "INR",
            "before_price": 55999,
            "savings_amount": 16014.4,
            "savings_percent": 28.6
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.1
        },
        "title": "Acer Aspire 5 A514-53-316M Thin and Light Laptop (Core i3 10th Gen/4 GB + 32 GB Optane/512 GB SSD/Windows 10 Home/14 inch,...",
        "thumbnail": "https://m.media-amazon.com/images/I/41UE8BDqh9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HR2VDHD",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 57990,
            "currency": "INR",
            "before_price": 79999,
            "savings_amount": 22009,
            "savings_percent": 27.51
        },
        "reviews": {
            "total_reviews": 249,
            "rating": 4.3
        },
        "title": "Acer Nitro 5 AN515-43 15.6 inch FHD IPS Display Gaming Laptop (AMD Ryzen 5 3550H Processor/8GB Ram/512GB SSD/Win10/GTX 165...",
        "thumbnail": "https://m.media-amazon.com/images/I/61gv6ERzCBL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08SD5Z4K8",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 49990,
            "currency": "INR",
            "before_price": 69999,
            "savings_amount": 20009,
            "savings_percent": 28.58
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 3.6
        },
        "title": "Acer Aspire 5 15.6 inch Laptop(Intel Core i5 11th Generation/8GB/512GB SSD/Windows 10 Home/Intel Iris Xe Graphics),Black A...",
        "thumbnail": "https://m.media-amazon.com/images/I/81fz6fJCPoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08VT7FFXJ",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 52990,
            "currency": "INR",
            "before_price": 69999,
            "savings_amount": 17009,
            "savings_percent": 24.3
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4
        },
        "title": "Sponsored Ad - Acer Aspire 5 Intel Core i5 11th Generation 14\" - (8 GB/512 GB SSD/Windows 10 Home/Intel Iris Xe Graphics /...",
        "thumbnail": "https://m.media-amazon.com/images/I/71WWsLtrJPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B088FLW4TW",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 59989,
            "currency": "INR",
            "before_price": 79999,
            "savings_amount": 20010,
            "savings_percent": 25.01
        },
        "reviews": {
            "total_reviews": 273,
            "rating": 3.9
        },
        "title": "Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram/1TB HDD/Windows 10 ...",
        "thumbnail": "https://m.media-amazon.com/images/I/81IXuyeJhYL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08GG89SGB",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 41990,
            "currency": "INR",
            "before_price": 60690,
            "savings_amount": 18700,
            "savings_percent": 30.81
        },
        "reviews": {
            "total_reviews": 138,
            "rating": 4
        },
        "title": "Lenovo IdeaPad S145 AMD Ryzen 5 15.6\" FHD Thin and Light Laptop (8GB/512GB SSD/Windows10/Office/Platinum Grey/1.85Kg), 81U...",
        "thumbnail": "https://m.media-amazon.com/images/I/61PXjYVtmqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08Q7JSR2F",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 22490,
            "currency": "INR",
            "before_price": 34680,
            "savings_amount": 12190,
            "savings_percent": 35.15
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 1
        },
        "title": "Lenovo E41-45 (82BF000JIH) Laptop (AMD A6-7350B/ 4GB RAM/ 1TB HDD/ Win 10 Home SL/ 14 Inch Screen), 1 Year Warranty",
        "thumbnail": "https://m.media-amazon.com/images/I/41T2Oimq0AL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08G5M5WTG",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 23990,
            "currency": "INR",
            "before_price": 28590,
            "savings_amount": 4600,
            "savings_percent": 16.09
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 1
        },
        "title": "Lenovo Ideapad Slim 3 15.6\" HD Thin and Light Laptop (AMD 3020e/4GB/1TB HDD/Windows 10/Grey/1.85Kg), 81W100HHIN",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08N18DV1Z",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 36,
            "rating": 2.9
        },
        "title": "Lenovo V145-AMD-A6 15.6 inch HD Laptop (4GB RAM/ 1TB HDD/ Windows 10 Home/ Black/ 2.1 kg), 81MT006YIH",
        "thumbnail": "https://m.media-amazon.com/images/I/314rRH-BnJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CZX6QKP",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 28519,
            "currency": "INR",
            "before_price": 35900,
            "savings_amount": 7381,
            "savings_percent": 20.56
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 3
        },
        "title": "Lenovo V15 AMD RYZEN 3 3250U 15.6-inch HD Laptop (4GB/1TB/DOS/Grey/1.85Kg),82C70016IH",
        "thumbnail": "https://m.media-amazon.com/images/I/61koe2VO+jL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JCDHPGF",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 170,
            "rating": 3.4
        },
        "title": "Lenovo IdeaPad Slim 3 AMD 3020e 15.6 inch HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/Integrated AMD Radeon Graphics/...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B087D4K9RL",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 44990,
            "currency": "INR",
            "before_price": 66190,
            "savings_amount": 21200,
            "savings_percent": 32.03
        },
        "reviews": {
            "total_reviews": 528,
            "rating": 3.4
        },
        "title": "Lenovo Ideapad Slim 3i 10th Gen Intel Core i5 15.6 inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/MS Office/Grey/1.85K...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JCP96XL",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 28465,
            "currency": "INR",
            "before_price": 34890,
            "savings_amount": 6425,
            "savings_percent": 18.42
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 2.6
        },
        "title": "Lenovo IdeaPad Slim 3 AMD Athlon Silver 3050U 15.6 inch HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 2019/In...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08P3LX5BQ",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 59336,
            "currency": "INR",
            "before_price": 92290,
            "savings_amount": 32954,
            "savings_percent": 35.71
        },
        "reviews": {
            "total_reviews": 53,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Lenovo IdeaPad Slim 5i 11th Gen Intel Core i5 15.6-inch FHD IPS Thin & Light Laptop (8GB/1TB HDD + 256GB SS...",
        "thumbnail": "https://m.media-amazon.com/images/I/61WNxdAeAoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B087D3HNLB",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 43990,
            "currency": "INR",
            "before_price": 63790,
            "savings_amount": 19800,
            "savings_percent": 31.04
        },
        "reviews": {
            "total_reviews": 302,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Lenovo Ideapad Slim 3i 10th Gen Intel Core i5 15.6 inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/Grey/...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CQ9C48X",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 34490,
            "currency": "INR",
            "before_price": 43790,
            "savings_amount": 9300,
            "savings_percent": 21.24
        },
        "reviews": {
            "total_reviews": 288,
            "rating": 2.7
        },
        "title": "Lenovo Ideapad Slim 3i 10th Gen Intel Core i3 15.6 inch Full HD Thin and Light Laptop (4GB/1TB HDD/Windows 10/MS Office 20...",
        "thumbnail": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FMT179D",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 21990,
            "currency": "INR",
            "before_price": 26890,
            "savings_amount": 4900,
            "savings_percent": 18.22
        },
        "reviews": {
            "total_reviews": 374,
            "rating": 3.5
        },
        "title": "Lenovo IdeaCentre AIO 330 19.5-inch All-in-One Desktop (Intel Celeron J4025/4GB/1TB HDD/DOS/Integrated Intel UHD Graphics/...",
        "thumbnail": "https://m.media-amazon.com/images/I/71Yv-Un2nTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DVD7P7J",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 33989,
            "currency": "INR",
            "before_price": 41790,
            "savings_amount": 7801,
            "savings_percent": 18.67
        },
        "reviews": {
            "total_reviews": 47,
            "rating": 3.7
        },
        "title": "Lenovo IdeaCentre AIO 3 21.5” FHD All-in-One Desktop (AMD Athlon Silver 3050U –2.3GHz Base Speed/8GB/1TB HDD/Win10/Office/...",
        "thumbnail": "https://m.media-amazon.com/images/I/81XxfD6a3PL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MFLBM63",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 14999,
            "currency": "INR",
            "before_price": 69999,
            "savings_amount": 55000,
            "savings_percent": 78.57
        },
        "reviews": {
            "total_reviews": 39,
            "rating": 3.6
        },
        "title": "(Renewed) Lenovo ThinkCentre 17 inch All In One Desktop set (Intel C2D - Dual Core/4 GB/160 GB /17\" Monitor+Keyboard+Mouse...",
        "thumbnail": "https://m.media-amazon.com/images/I/81NH3EB65TL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08F7Y8BMF",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 24999,
            "currency": "INR",
            "before_price": 89999,
            "savings_amount": 65000,
            "savings_percent": 72.22
        },
        "reviews": {
            "total_reviews": 79,
            "rating": 4.1
        },
        "title": "(Renewed) Lenovo 19 Inch All In One Desktop set (Core i5 4th Gen/8 GB/500 GB Tiny CPU//19\" Monitor+Keyboard+Mouse+ FHD Web...",
        "thumbnail": "https://m.media-amazon.com/images/I/61hPQcayWDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0844XMQHM",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 18931,
            "currency": "INR",
            "before_price": 60000,
            "savings_amount": 41069,
            "savings_percent": 68.45
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 2.9
        },
        "title": "(Renewed) Lenovo ThinkCenter M92P Desktop (Intel Quad Core i5 (3rd Gen) 3.2 GHz, 8 GB RAM/ 500 GB HDD/ Windows 10, MS Offi...",
        "thumbnail": "https://m.media-amazon.com/images/I/61P3Y0XIWnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MB4PXCW",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 41300,
            "currency": "INR",
            "before_price": 49990,
            "savings_amount": 8690,
            "savings_percent": 17.38
        },
        "reviews": {
            "total_reviews": 14,
            "rating": 3.2
        },
        "title": "Dell Inspiron 3501 15.6-inch FHD Laptop (10th Gen Core i3/8GB/1TB HDD/Windows 10 + MS Office 2019/Intel HD Graphics/1.83 k...",
        "thumbnail": "https://m.media-amazon.com/images/I/51CYuZNUcoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08MPWFK22",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 56390,
            "currency": "INR",
            "before_price": 59999,
            "savings_amount": 3609,
            "savings_percent": 6.02
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.5
        },
        "title": "Dell Vostro 3400 14\" FHD Anti Glare Display Laptop (11th Gen i5-1135G7 / 8GB / 512 SSD / Integrated Graphics / Win 10 + Of...",
        "thumbnail": "https://m.media-amazon.com/images/I/51CEknIIHcL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08TBSWGJH",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 19499,
            "currency": "INR",
            "before_price": 80000,
            "savings_amount": 60501,
            "savings_percent": 75.63
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "(Renewed) Dell Optiplex 790 Desktop (IntelCore i3/8 GB RAM/ 500 GB HDD/ Windows 10 Pro ,MS Office/Intel Q65 Express Chipse...",
        "thumbnail": "https://m.media-amazon.com/images/I/61wqsR2wrUL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0811D6Z6R",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 14999,
            "currency": "INR",
            "before_price": 59999,
            "savings_amount": 45000,
            "savings_percent": 75
        },
        "reviews": {
            "total_reviews": 29,
            "rating": 3.3
        },
        "title": "(Renewed) Dell Optiplex 380 Desktop (Intel Core 2 Duo E7500 2.93 Ghz, 4 GB RAM/ 320 GB HDD/ Windows 7, MS Office, USB, Eth...",
        "thumbnail": "https://m.media-amazon.com/images/I/41JjuhTOn6L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FDWRQ5M",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 39670,
            "currency": "INR",
            "before_price": 45900,
            "savings_amount": 6230,
            "savings_percent": 13.57
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 3
        },
        "title": "Dell Inspiron 3880 10th Gen Intel Core i3 Desktop (8GB RAM/1TB HDD/Windows 10/Ms Office 2019/WiFi, Bluetooth) (Desktop wit...",
        "thumbnail": "https://m.media-amazon.com/images/I/81boK-BpHAL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07F8XZN69",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 12538,
            "currency": "INR",
            "before_price": 20600,
            "savings_amount": 8062,
            "savings_percent": 39.14
        },
        "reviews": {
            "total_reviews": 4187,
            "rating": 4.4
        },
        "title": "Dell P Series 24-inch (60.96 cm) Screen Full HD (1080p) LED-Lit Monitor with IPS Panel - P2419H (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/91ddm+P-VCL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B085LKKYCK",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 35940,
            "currency": "INR",
            "before_price": 39999,
            "savings_amount": 4059,
            "savings_percent": 10.15
        },
        "reviews": {
            "total_reviews": 24,
            "rating": 3.7
        },
        "title": "Dell Vostro 3471 9th Gen Intel Core i3 Desktop (4GB RAM/1TB HDD/Windows 10/WiFi) (Black, 3 Years Warranty) (Desktop with D...",
        "thumbnail": "https://m.media-amazon.com/images/I/51hnsaSdQdL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07436JM87",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 927,
            "rating": 4.3
        },
        "title": "Dell 21.5-inch (54.6 cm) LED Backlit Computer Monitor - Full HD, TN Panel with VGA, HDMI Ports - E2218HN (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/51xdTrdI5AL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CHK959B",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 12595,
            "currency": "INR",
            "before_price": 59999,
            "savings_amount": 47404,
            "savings_percent": 79.01
        },
        "reviews": {
            "total_reviews": 55,
            "rating": 3.5
        },
        "title": "(Renewed) Dell Optiplex High Performance Desktop Intel Core i5 650/ 4 GB/ 250 GB HDD/Licensed Win 10 Pro/MS Office/USB/LAN...",
        "thumbnail": "https://m.media-amazon.com/images/I/31dvbBlzH4L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B013RI9V7O",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 7499,
            "currency": "INR",
            "before_price": 10560,
            "savings_amount": 3061,
            "savings_percent": 28.99
        },
        "reviews": {
            "total_reviews": 101,
            "rating": 4.2
        },
        "title": "Dell E2216HV 21.5-inch Full HD LED Backlit Computer Monitor (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/814FWB9zXNL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07PBHSW26",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 8800,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 1199,
            "savings_percent": 11.99
        },
        "reviews": {
            "total_reviews": 105,
            "rating": 4
        },
        "title": "DELL 21.5 inch SE2219HX Ultra Thin Bezel LED Backlit Computer Monitor (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/516uAGJoQpL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07W6G9NKL",
        "category": "Computers and Laptops",
        "product": "Dell",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 38450,
            "currency": "INR",
            "before_price": 45000,
            "savings_amount": 6550,
            "savings_percent": 14.56
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 2.7
        },
        "title": "Dell Inspiron 22 3280 All-in-One Desktop (Core i3 (8th Gen)/4GB RAM/1TB HDD/54.61 cm (21.5 inch) FHD/Windows 10 Home with ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71VAqGam3bL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01H1Q8P3E",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 469,
            "rating": 4.1
        },
        "title": "HP 18.5 inch (46.9 cm) LED Backlit Computer Monitor - HD, TN Panel with VGA Port - 19KA (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/91+2ScsOxkL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DYHLT2Z",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 1199,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 300,
            "savings_percent": 20.01
        },
        "reviews": {
            "total_reviews": 297,
            "rating": 4.1
        },
        "title": "HP Multimedia DHS-2101 HD Speaker with 3.5mm Audio Jack for Desktop Office Home Stereo Small Speaker (8CA76AA)",
        "thumbnail": "https://m.media-amazon.com/images/I/713zKV7I-eL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08S17WBPS",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 50990,
            "currency": "INR",
            "before_price": 59240,
            "savings_amount": 8250,
            "savings_percent": 13.93
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "HP All-in-One 23.8-Inch FHD with Alexa Built-in (10th Gen Intel Core i3-10100T/8GB/512GB SSD/Win 10/MS Office 2019/Natural...",
        "thumbnail": "https://m.media-amazon.com/images/I/41IcTvuTCUL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08R6X5BNT",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 9990,
            "currency": "INR",
            "before_price": 11434,
            "savings_amount": 1444,
            "savings_percent": 12.63
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 3.6
        },
        "title": "HP 23.8 inch(60.45 cm) Ultra-Thin LED Backlit Computer Monitor - 3 Side Micro Bezel, Full HD, 60 Hz, IPS Panel with VGA, H...",
        "thumbnail": "https://m.media-amazon.com/images/I/81mL23UU0SL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08J822C8F",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 12949,
            "currency": "INR",
            "before_price": 22999,
            "savings_amount": 10050,
            "savings_percent": 43.7
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.4
        },
        "title": "(Renewed) HP Mini 8300 Desktop USFF (Core I3 2120 3.30 ghz, 8 GB RAM, 500gb HDD, Win 10 Pro, MS Office/ Intel HD Graphics/...",
        "thumbnail": "https://m.media-amazon.com/images/I/41wlq6sFGuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08GDBK3LD",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 51693,
            "currency": "INR",
            "before_price": 56962,
            "savings_amount": 5269,
            "savings_percent": 9.25
        },
        "reviews": {
            "total_reviews": 31,
            "rating": 4.4
        },
        "title": "HP 23.8-inch FHD All in One Desktop with Alexa Built-in(10th Gen Intel Core i3-1005G1/8GB/512 GB SSD/Windows 10/ MS Office...",
        "thumbnail": "https://m.media-amazon.com/images/I/71GnqlGKQfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08H2CYVMD",
        "category": "Computers and Laptops",
        "product": "HP",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 33850,
            "currency": "INR",
            "before_price": 36258,
            "savings_amount": 2408,
            "savings_percent": 6.64
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "HP All-in-One 22 -inch FHD Desktop (AMD Ryzen 3-3250U/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon Graphics), 22-dd0201in",
        "thumbnail": "https://m.media-amazon.com/images/I/71MW1E0je-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07QXSC9QM",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 24999,
            "currency": "INR",
            "before_price": 39999,
            "savings_amount": 15000,
            "savings_percent": 37.5
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.6
        },
        "title": "Acer Aspire UN.GNVSI.013 A315-21 AMD A4 15.6-inch Laptop (A4-9120 4GB/1TB HDD/Windows 10 Home/Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/61LI+v91+iL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08HQZN76N",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Laptop",
        "price": {
            "discounted": true,
            "current_price": 89990,
            "currency": "INR",
            "before_price": 109000,
            "savings_amount": 19010,
            "savings_percent": 17.44
        },
        "reviews": {
            "total_reviews": 148,
            "rating": 4.1
        },
        "title": "Acer Nitro 5 Intel Core i7 10750H 15.6\" FHD IPS 144Hz Display Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256 GB SSD/W...",
        "thumbnail": "https://m.media-amazon.com/images/I/71Pp8PLPNAL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08CL2MP8N",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 34151,
            "currency": "INR",
            "before_price": 46099,
            "savings_amount": 11948,
            "savings_percent": 25.92
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 2.9
        },
        "title": "Acer Veriton M200 Desktop with 19.5 inch HD Monitor (Intel Core i3-8100 Processor/4GB/1TB/Window 10 Home 64Bit/Integrated ...",
        "thumbnail": "https://m.media-amazon.com/images/I/7122vxuE9OL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L5GZSYY",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 11594,
            "currency": "INR",
            "before_price": 21495,
            "savings_amount": 9901,
            "savings_percent": 46.06
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 3.9
        },
        "title": "Acer B227Q 21.5\" IPS LED Full HD Monitor - Inbuilt HD Web CAM with MIC - Height Adjustment Pivot - 2WX2 Speakers with Eye ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71rcKx0b+1L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B076PGBM25",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 14000,
            "savings_amount": 7001,
            "savings_percent": 50.01
        },
        "reviews": {
            "total_reviews": 1037,
            "rating": 4.3
        },
        "title": "Acer 21.5 inch LED Backlit Computer Monitor I IPS Full HD I Zero Frame Design I VGA, HDMI Port I Acer Eye Care Features an...",
        "thumbnail": "https://m.media-amazon.com/images/I/714mr6GxecL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07CYJ47JB",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 13000,
            "currency": "INR",
            "before_price": 14000,
            "savings_amount": 1000,
            "savings_percent": 7.14
        },
        "reviews": {
            "total_reviews": 656,
            "rating": 4.3
        },
        "title": "Acer Nitro VG240YB 23.8 inch Full HD IPS Monitor I AMD Radeon Freesync Technology I 1MS VRB I 75Hz Refresh I 2 x HDMI and ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71JPEEGxpWL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B010NCOGM2",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 8300,
            "savings_amount": 1301,
            "savings_percent": 15.67
        },
        "reviews": {
            "total_reviews": 39,
            "rating": 4.2
        },
        "title": "Acer 19.5 inch (49.53 cm) LED Backlit Computer Monitor - K202HQL (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/61RBvidchhL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07JDH2C8X",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 7999,
            "currency": "INR",
            "before_price": 13800,
            "savings_amount": 5801,
            "savings_percent": 42.04
        },
        "reviews": {
            "total_reviews": 469,
            "rating": 4.2
        },
        "title": "Acer 21.5 Inch Full HD IPS Ultra Slim (6.6mm Thick) Monitor I Frameless Design I AMD Free Sync I Eye Care Features I Stere...",
        "thumbnail": "https://m.media-amazon.com/images/I/71wRe7xkcSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07GYZDYK7",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 16495,
            "currency": "INR",
            "before_price": 21000,
            "savings_amount": 4505,
            "savings_percent": 21.45
        },
        "reviews": {
            "total_reviews": 356,
            "rating": 4.1
        },
        "title": "Acer 31.5-inch (80.01 cm) Curved Full HD LED Backlit Computer Monitor with Stereo Speakers - ED322Q (White)",
        "thumbnail": "https://m.media-amazon.com/images/I/A1OUm0nT0uL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0792TPZ5T",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 9999,
            "currency": "INR",
            "before_price": 19200,
            "savings_amount": 9201,
            "savings_percent": 47.92
        },
        "reviews": {
            "total_reviews": 216,
            "rating": 4.1
        },
        "title": "Acer B227Q 21.5\" IPS LED Full HD Monitor - Inbuilt HD Web CAM with MIC - Height Adjustment Pivot - 2W X 2 Speakers with Ey...",
        "thumbnail": "https://m.media-amazon.com/images/I/61JDUmtNxDL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00TKCJU1Y",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 6500,
            "currency": "INR",
            "before_price": 9990,
            "savings_amount": 3490,
            "savings_percent": 34.93
        },
        "reviews": {
            "total_reviews": 125,
            "rating": 3.7
        },
        "title": "ACER 19.5-inch (49.53 cm) LED Backlit Computer Monitor with VGA Ports - K202HQL (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/51FzSfg18eL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00SJ3UAPU",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 7690,
            "currency": "INR",
            "before_price": 8000,
            "savings_amount": 310,
            "savings_percent": 3.88
        },
        "reviews": {
            "total_reviews": 170,
            "rating": 4
        },
        "title": "Acer K222HQL 21.5-Inch Full HD LED Backlit Computer Monitor",
        "thumbnail": "https://m.media-amazon.com/images/I/A1NUicxs0GL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07S31CP9G",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 7499,
            "currency": "INR",
            "before_price": 10300,
            "savings_amount": 2801,
            "savings_percent": 27.19
        },
        "reviews": {
            "total_reviews": 360,
            "rating": 4.3
        },
        "title": "Acer Nitro QG221Q 21.5 Inch Full HD Gaming Monitor - VA Panel - 1 MS - 75 Hz - 250 Nits - AMD Free Sync - 1 X VGA 2 X HDMI...",
        "thumbnail": "https://m.media-amazon.com/images/I/61p1tcPeU4L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01LY5QWLW",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 612,
            "rating": 4.2
        },
        "title": "Acer 18.5 inch HD Backlit LED LCD Monitor - 200 Nits - VGA Port - EB192Q (Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/61aeMYRTzjL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B06XJ6RB5V",
        "category": "Computers and Laptops",
        "product": "Acer",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 39990,
            "currency": "INR",
            "before_price": 54000,
            "savings_amount": 14010,
            "savings_percent": 25.94
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Acer Veriton Z1951 7th Generation Corei3-7100T 4GB RAM,1TB HDD, DOS 19.5\" HD Screen All in One Desktop",
        "thumbnail": "https://m.media-amazon.com/images/I/21WJ8+Gls3L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B084DP91SS",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 40990,
            "currency": "INR",
            "before_price": 51690,
            "savings_amount": 10700,
            "savings_percent": 20.7
        },
        "reviews": {
            "total_reviews": 75,
            "rating": 3.5
        },
        "title": "Lenovo Ideacentre A340 21.5-inch FHD IPS All-in-One Desktop (10th Gen Intel Core i3/8GB/1TB HDD/Windows10/Office 2019/with...",
        "thumbnail": "https://m.media-amazon.com/images/I/8187XpGLLUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0823LPZF5",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 19899,
            "currency": "INR",
            "before_price": 26890,
            "savings_amount": 6991,
            "savings_percent": 26
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Lenovo 330-F0D70070IN Celeron 4GB RAM,1TB HDD,DOS 19.5\" All in One Desktop PC",
        "thumbnail": "https://m.media-amazon.com/images/I/31j9MSiOCpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SGDWMCG",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 7679,
            "currency": "INR",
            "before_price": 10890,
            "savings_amount": 3211,
            "savings_percent": 29.49
        },
        "reviews": {
            "total_reviews": 404,
            "rating": 4.3
        },
        "title": "Lenovo 54.6 cm (21.5 inch) Near Edgeless Monitor with LED Display, VA Panel, AMD Free Synch, HDMI and VGA inputs, TUV Cert...",
        "thumbnail": "https://m.media-amazon.com/images/I/61ThXwFY7-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08N5C4SZF",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 45990,
            "currency": "INR",
            "before_price": 56190,
            "savings_amount": 10200,
            "savings_percent": 18.15
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4
        },
        "title": "Lenovo IdeaCentre AIO 3 21.5-inch FHD IPS All-in-One Desktop (AMD Ryzen 5/8GB/1TB HDD + 256GB SSD/Win10/Office 2019/AMD Ra...",
        "thumbnail": "https://m.media-amazon.com/images/I/81XxfD6a3PL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DNMH6YM",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 56828,
            "currency": "INR",
            "before_price": 68090,
            "savings_amount": 11262,
            "savings_percent": 16.54
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 3.2
        },
        "title": "Lenovo IdeaCentre A340 23.8-inch FHD All-in-One Desktop (10th Gen Intel Core i5/8GB/1TB HDD/Windows 10/Office 2019/with Sl...",
        "thumbnail": "https://m.media-amazon.com/images/I/811zyFsMcoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PTXVFPK",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 60990,
            "currency": "INR",
            "before_price": 76190,
            "savings_amount": 15200,
            "savings_percent": 19.95
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Lenovo IdeaCentre A340 23.8” FHD IPS All-in-One Desktop (10th Gen Intel Core i5/8GB/1TB HDD+256GB SSD/Win 10/Office/with S...",
        "thumbnail": "https://m.media-amazon.com/images/I/811zyFsMcoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08566X6PY",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 42990,
            "currency": "INR",
            "before_price": 48690,
            "savings_amount": 5700,
            "savings_percent": 11.71
        },
        "reviews": {
            "total_reviews": 71,
            "rating": 3.8
        },
        "title": "Lenovo IdeaCentre A340 21.5-inch Full HD IPS All-in-One Desktop (10th Gen Intel Core i3/8GB/1TB HDD/Windows 10/with Slim D...",
        "thumbnail": "https://m.media-amazon.com/images/I/81obO+WZ-sL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DVBWNMX",
        "category": "Computers and Laptops",
        "product": "Lenovo",
        "type": "Computer",
        "price": {
            "discounted": true,
            "current_price": 38990,
            "currency": "INR",
            "before_price": 50590,
            "savings_amount": 11600,
            "savings_percent": 22.93
        },
        "reviews": {
            "total_reviews": 41,
            "rating": 4
        },
        "title": "Lenovo IdeaCentre AIO 3 21.5-inch FHD All-in-One Desktop (AMD Ryzen 3/8GB/1TB HDD + 256GB SSD/Windows10/Office 2019/AMD Ra...",
        "thumbnail": "https://m.media-amazon.com/images/I/81XxfD6a3PL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZGVX9HS",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 216,
            "currency": "INR",
            "before_price": 270,
            "savings_amount": 54,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 315,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Cinthol Charcoal Deep Cleansing and Deo Bath Soap for Oil-free Skin, Pack of 3 (125g each)",
        "thumbnail": "https://m.media-amazon.com/images/I/61gqTEW8lNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MXHP8K4",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 261,
            "currency": "INR",
            "before_price": 280,
            "savings_amount": 19,
            "savings_percent": 6.79
        },
        "reviews": {
            "total_reviews": 843,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Cinthol Original Bath Soap 99.9% Germ Protection, 100g (Pack of 8)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Z1wAoMoLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07C93MWWL",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 360,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 6792,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Dove Cream Beauty Bathing Bar With ¼ Moisturizing Cream To Give You Softer, Smoother Skin, 100 g (Pack of 8)",
        "thumbnail": "https://m.media-amazon.com/images/I/51d-dLAvPyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CDW1E8E",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 135,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 933,
            "rating": 4.4
        },
        "title": "Himalaya Neem and Turmeric Soap, 125g (Buy 3 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/611GgOYLwwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088TZ3B3N",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 88,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 581,
            "rating": 4.4
        },
        "title": "Lifebuoy Lemon Fresh 100% Stronger Germ Protection Soap Bar, 125 g (Pack of 4)",
        "thumbnail": "https://m.media-amazon.com/images/I/61yZL5FBf6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B086T4WGRY",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 200,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5301,
            "rating": 4.5
        },
        "title": "Dettol Original Germ Protection Bathing Soap bar, 125 gm, Buy 4 Get 1 Free",
        "thumbnail": "https://m.media-amazon.com/images/I/61R9Fg4UGmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06WWR7W3V",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 164,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 7410,
            "rating": 4.4
        },
        "title": "Pears Soft & Fresh Bathing Bar Soap with 98% Pure Glycerine & Mint Extracts For Fresh Glow 125g (Pack of 4)",
        "thumbnail": "https://m.media-amazon.com/images/I/51EspAFAcQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00B0QCNXU",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 132,
            "currency": "INR",
            "before_price": 135,
            "savings_amount": 3,
            "savings_percent": 2.22
        },
        "reviews": {
            "total_reviews": 4307,
            "rating": 4.3
        },
        "title": "Santoor Sandal and Almond Milk Soap (Buy 4 Get 1 Free 125g each)",
        "thumbnail": "https://m.media-amazon.com/images/I/71Sb8MIS5IL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00FQH5I2M",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 170,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4273,
            "rating": 4.4
        },
        "title": "NIVEA Soap, Creme Soft, For Hands And Body, 125g (BUY 2 GET 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/71b5SRkcr5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0744K8LWY",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 240,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 10538,
            "rating": 4.5
        },
        "title": "Pears Pure & Gentle Moisturising Bathing Bar Soap with Glycerine For Golden Glow 125g (Pack of 5)",
        "thumbnail": "https://m.media-amazon.com/images/I/51We9VI5nvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08D15SVNX",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 101,
            "currency": "INR",
            "before_price": 114,
            "savings_amount": 13,
            "savings_percent": 11.4
        },
        "reviews": {
            "total_reviews": 146,
            "rating": 4.4
        },
        "title": "LUX Jasmine & Vitamin E Soap, Bathing Soap With Long Lasting Floral Fragrance, Leaves Skin Glowing, Soft And Moisturized, ...",
        "thumbnail": "https://m.media-amazon.com/images/I/51nS1r37imL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07S5MQR4X",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 135,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 15,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 1912,
            "rating": 4.3
        },
        "title": "Santoor Aloe Fresh Soap with Aloe Vera and Lime, 125g (Buy 4 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/81qdj8aFtCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00BMR071W",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4899,
            "rating": 4.5
        },
        "title": "Mysore Sandal Soap,450g (150x3) (Pack Of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71eJAaD6aBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B086H6LMBM",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 170,
            "currency": "INR",
            "before_price": 250,
            "savings_amount": 80,
            "savings_percent": 32
        },
        "reviews": {
            "total_reviews": 263,
            "rating": 4.3
        },
        "title": "Savlon Glycerin Germ Protection Bathing Soap Bar, 125g (Pack of 5)",
        "thumbnail": "https://m.media-amazon.com/images/I/71nJ9UlKjvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07R69CDHD",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 135,
            "currency": "INR",
            "before_price": 153,
            "savings_amount": 18,
            "savings_percent": 11.76
        },
        "reviews": {
            "total_reviews": 1394,
            "rating": 4.4
        },
        "title": "Liril Lemon & Tea Tree Soap, Maintains Oil Balance For Fresh And Moisturized Skin, Buy 3 (125 g each) & Get 1 Free (75 g)",
        "thumbnail": "https://m.media-amazon.com/images/I/61oYfImcEoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08B8QDQFZ",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 280,
            "currency": "INR",
            "before_price": 400,
            "savings_amount": 120,
            "savings_percent": 30
        },
        "reviews": {
            "total_reviews": 158,
            "rating": 4.4
        },
        "title": "Rexona Coconut & Olive Oil Soap, 150 g (Pack of 8)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Aqe6JKFUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V6DPTJ1",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 198,
            "currency": "INR",
            "before_price": 220,
            "savings_amount": 22,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 301,
            "rating": 4.4
        },
        "title": "Cinthol Lime Bath Soap 99.9% Germ Protection, 100g (Pack of 9)",
        "thumbnail": "https://m.media-amazon.com/images/I/610Z3YBVwHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0744LDS2H",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 231,
            "currency": "INR",
            "before_price": 240,
            "savings_amount": 9,
            "savings_percent": 3.75
        },
        "reviews": {
            "total_reviews": 3044,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Dove Cream Beauty Bathing Bar With ¼ Moisturizing Cream To Give You Softer, Smoother Skin, 100 g (Buy 4 Get...",
        "thumbnail": "https://m.media-amazon.com/images/I/51RYK5fVaTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08NVXJ73Z",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 180,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Sponsored Ad - SmartWash Disinfectant Moisturizing Hand Wash (Gentle Geranium) Extra Strong Germ Protection Hand Soap Liqu...",
        "thumbnail": "https://m.media-amazon.com/images/I/71K+xx3GPcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B077GZ5D23",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 113,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 37,
            "savings_percent": 24.67
        },
        "reviews": {
            "total_reviews": 8940,
            "rating": 4.2
        },
        "title": "Park Avenue Premium Men’s Soap, Shea Butter+ Coconut Oil, 125g (BUY 3 GET 1)",
        "thumbnail": "https://m.media-amazon.com/images/I/71N8c+06c1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08D149RTQ",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 256,
            "currency": "INR",
            "before_price": 320,
            "savings_amount": 64,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 197,
            "rating": 4.6
        },
        "title": "Lux Rose & Vitamin E Beauty Soap Bar For Glowing Skin Combo Offer Pack 8x150 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61OPCWmMO-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0079Z9CGM",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 90,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1551,
            "rating": 4.5
        },
        "title": "Biotique Basil And Parsley Revitalizing Body Soap, 150g",
        "thumbnail": "https://m.media-amazon.com/images/I/51g+zdKqWnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0845CWWCD",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 325,
            "rating": 4.6
        },
        "title": "Fiama Gel Bar Celebration Pack with 5 unique Gel Bars, 125g (Buy 4 get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SD1KKPL",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 244.8,
            "currency": "INR",
            "before_price": 306,
            "savings_amount": 61.2,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 1716,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Liril Lemon & Tea Tree Soap, Maintains Oil Balance For Fresh And Moisturized Skin, 125 g (Pack of 6)",
        "thumbnail": "https://m.media-amazon.com/images/I/61jNb3JtSyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08G2BJTC3",
        "category": "Grocery",
        "product": "Soaps",
        "type": "Soaps",
        "price": {
            "discounted": true,
            "current_price": 288,
            "currency": "INR",
            "before_price": 360,
            "savings_amount": 72,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 99,
            "rating": 4.7
        },
        "title": "Fiama Gel Bar Blackcurrant and Bearberry, 125g (Count of 6)",
        "thumbnail": "https://m.media-amazon.com/images/I/61hQaR4JZ2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01ITJ6642",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 59,
            "currency": "INR",
            "before_price": 62,
            "savings_amount": 3,
            "savings_percent": 4.84
        },
        "reviews": {
            "total_reviews": 285,
            "rating": 4.4
        },
        "amazonPrime": false,
        "title": "Sponsored Ad - Surf Excel Easy Wash Detergent Powder, Superfine Powder That Dissolves Easily And Removes Tough Stains, 500 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61gHH5yLxTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00TS894OI",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 360,
            "currency": "INR",
            "before_price": 400,
            "savings_amount": 40,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 1351,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Surf Excel Quick Wash Detergent Powder, 2 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61yL+B8UjAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DRKZDHT",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 184.5,
            "currency": "INR",
            "before_price": 359,
            "savings_amount": 174.5,
            "savings_percent": 48.61
        },
        "reviews": {
            "total_reviews": 619,
            "rating": 4.2
        },
        "title": "More Light Extra Power Detergent powder 4kg",
        "thumbnail": "https://m.media-amazon.com/images/I/51J2SNCx0jL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07G3MWKC3",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 400,
            "currency": "INR",
            "before_price": 425,
            "savings_amount": 25,
            "savings_percent": 5.88
        },
        "reviews": {
            "total_reviews": 6091,
            "rating": 4.3
        },
        "title": "Mr. White Detergent Powder - 5 Kg with Free 2Kg",
        "thumbnail": "https://m.media-amazon.com/images/I/71LdFI8GP+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089MF1K69",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 533,
            "currency": "INR",
            "before_price": 725,
            "savings_amount": 192,
            "savings_percent": 26.48
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 4.8
        },
        "title": "Tide Plus Extra Power Detergent Washing Powder - 6 kg + 2 kg Free = 8kg (Lemon and Mint)",
        "thumbnail": "https://m.media-amazon.com/images/I/71v+67aeZuL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07FGNXBJ4",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 392,
            "currency": "INR",
            "before_price": 450,
            "savings_amount": 58,
            "savings_percent": 12.89
        },
        "reviews": {
            "total_reviews": 5554,
            "rating": 4.3
        },
        "title": "Mr. White Detergent Powder - 5 kg with Free 2kg",
        "thumbnail": "https://m.media-amazon.com/images/I/71LdFI8GP+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZYZY6HY",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 755,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3728,
            "rating": 4.5
        },
        "title": "Tide Plus Extra Power Detergent Washing Powder - 7 kg (Jasmine and Rose) with Free Detergent Powder - 3 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/81F9IU4rW0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0153BQ0QI",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 219,
            "currency": "INR",
            "before_price": 255,
            "savings_amount": 36,
            "savings_percent": 14.12
        },
        "reviews": {
            "total_reviews": 3775,
            "rating": 4.2
        },
        "title": "Mr. White Detergent Powder - 4Kg",
        "thumbnail": "https://m.media-amazon.com/images/I/715iEu9nisL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089MFSP39",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 415,
            "rating": 4.6
        },
        "title": "Surf Excel Easy Wash Detergent Powder, 4 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61rDJVoKpeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079QKYMTY",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 653,
            "currency": "INR",
            "before_price": 685,
            "savings_amount": 32,
            "savings_percent": 4.67
        },
        "reviews": {
            "total_reviews": 2314,
            "rating": 4.5
        },
        "title": "Tide Plus Extra Power Detergent Washing Powder - 6 kg (Lemon and Mint) with Free Detergent Powder - 2 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/81mxYJYuzRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00TS8ABHC",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 414,
            "currency": "INR",
            "before_price": 460,
            "savings_amount": 46,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 12644,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Surf Excel Easy Wash Detergent Powder, Superfine Powder That Dissolves Easily And Removes Tough Stains, 4 Kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61rDJVoKpeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CJUH830",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 240,
            "currency": "INR",
            "before_price": 320,
            "savings_amount": 80,
            "savings_percent": 25
        },
        "reviews": {
            "total_reviews": 5258,
            "rating": 4.3
        },
        "title": "Genteel Liquid Detergent - Pack of 2 (1kg+1kg)",
        "thumbnail": "https://m.media-amazon.com/images/I/71YUPlRyARL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HXT7HPK",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 339,
            "currency": "INR",
            "before_price": 349,
            "savings_amount": 10,
            "savings_percent": 2.87
        },
        "reviews": {
            "total_reviews": 41,
            "rating": 4.2
        },
        "title": "Tide Ultra Anti-Germ Detergent Washing Powder 2kg+1kg FREE",
        "thumbnail": "https://m.media-amazon.com/images/I/81TPJOhm-ZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DDZYVN2",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 181,
            "currency": "INR",
            "before_price": 359,
            "savings_amount": 178,
            "savings_percent": 49.58
        },
        "reviews": {
            "total_reviews": 306,
            "rating": 4
        },
        "title": "More Light Extra Power Detergent Powder, 4 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/716NiSXs37L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BHH4CGG",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 225,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2089,
            "rating": 4.4
        },
        "title": "Ariel Complete Detergent Washing Powder - 1 kg with Free Detergent Washing Powder - 500 g",
        "thumbnail": "https://m.media-amazon.com/images/I/710UuYn9-+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079QHPJY9",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 185,
            "currency": "INR",
            "before_price": 215,
            "savings_amount": 30,
            "savings_percent": 13.95
        },
        "reviews": {
            "total_reviews": 7795,
            "rating": 4.4
        },
        "title": "Tide Plus Extra Power Detergent Washing Powder - 2 kg (Lemon and Mint)",
        "thumbnail": "https://m.media-amazon.com/images/I/81nvxpsflUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00TS88Q7Y",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 390,
            "currency": "INR",
            "before_price": 480,
            "savings_amount": 90,
            "savings_percent": 18.75
        },
        "reviews": {
            "total_reviews": 7813,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Surf Excel Matic Front Load Detergent Washing Powder, Specially Designed For Tough Stain Removal In Front L...",
        "thumbnail": "https://m.media-amazon.com/images/I/61yyfbS1tvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VKMWF6R",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 150,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 205,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Love & Care Soft Woollens Expert Care Wash Liquid Detergent, 500 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51kVCHNZiYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CJVQ9F2",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 260,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4583,
            "rating": 4.4
        },
        "title": "Rin Detergent Powder 4 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61PVtMs8KwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PXND4T6",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 595,
            "currency": "INR",
            "before_price": 675,
            "savings_amount": 80,
            "savings_percent": 11.85
        },
        "reviews": {
            "total_reviews": 3204,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Surf Excel Matic Top Load Detergent Washing Powder, Specially Designed For Tough Stain Removal In Top Load ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61oD2flgekL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Q4PCXY",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 465,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 636,
            "rating": 4.4
        },
        "title": "Tide Plus Extra Power Detergent Washing Powder - 4 kg + 1 Kg Free (Jasmine and Rose)",
        "thumbnail": "https://m.media-amazon.com/images/I/51QQP95GdsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F889J16",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 340,
            "currency": "INR",
            "before_price": 390,
            "savings_amount": 50,
            "savings_percent": 12.82
        },
        "reviews": {
            "total_reviews": 9207,
            "rating": 4.4
        },
        "title": "Surf Excel Matic Front Load Liquid Detergent Refill Pouch -Super Saver Pack Designed For 100% Tough Stain Removal In Front...",
        "thumbnail": "https://m.media-amazon.com/images/I/71AfKPJFjoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079QKXP84",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 358,
            "rating": 4.4
        },
        "title": "Tide Plus Detergent Washing Powder with double Power Lemon and Mint Pack - 1 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/81fjIPmrakL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088M9SX31",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 386,
            "currency": "INR",
            "before_price": 420,
            "savings_amount": 34,
            "savings_percent": 8.1
        },
        "reviews": {
            "total_reviews": 454,
            "rating": 4.3
        },
        "title": "Tide Ultra 3 in 1 Clean Detergent Washing Powder - 4 Kg (3 Kg + 1 Kg Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/81RRIgXLYLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089DS53S7",
        "category": "Grocery",
        "product": "Detergents",
        "type": "Detergents",
        "price": {
            "discounted": true,
            "current_price": 410,
            "currency": "INR",
            "before_price": 470,
            "savings_amount": 60,
            "savings_percent": 12.77
        },
        "reviews": {
            "total_reviews": 4359,
            "rating": 4.3
        },
        "title": "Ariel Matic Liquid Detergent, Front Load, 2 Litre",
        "thumbnail": "https://m.media-amazon.com/images/I/61S7AKkd7RL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088NN7LPT",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 3599,
            "currency": "INR",
            "before_price": 5500,
            "savings_amount": 1901,
            "savings_percent": 34.56
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Lifelong Aspire 1000W Multi-Function 10L Wet and Dry Vacuum Cleaner with Blower Function",
        "thumbnail": "https://m.media-amazon.com/images/I/81a2xnpCcUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088PLFWHH",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 4551,
            "currency": "INR",
            "before_price": 6800,
            "savings_amount": 2249,
            "savings_percent": 33.07
        },
        "reviews": {
            "total_reviews": 14,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Lifelong Aspire Pro 1000W Multi-Function Wet and Dry Vacuum Cleaner | High Capacity Stainless Steel Tank | ...",
        "thumbnail": "https://m.media-amazon.com/images/I/81zxRvimfBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RCGTZ4M",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 5122,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 4877,
            "savings_percent": 48.77
        },
        "reviews": {
            "total_reviews": 181,
            "rating": 3.8
        },
        "title": "Sponsored Ad - AGARO Ace 1600-Watts, 21.5 kPa Suction Power, 21 litres Wet & Dry Stainless Steel Vacuum Cleaner with Blowe...",
        "thumbnail": "https://m.media-amazon.com/images/I/71Z8wOB-WTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SVMKKVP",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 7504,
            "currency": "INR",
            "before_price": 10999,
            "savings_amount": 3495,
            "savings_percent": 31.78
        },
        "reviews": {
            "total_reviews": 58,
            "rating": 3.8
        },
        "title": "Sponsored Ad - AGARO 33289 Twister 2200 Watts Dry Vacuum Cleaner with Powerful 25 kPa Suction Power & in-Built Blower, 6 l...",
        "thumbnail": "https://m.media-amazon.com/images/I/71nyiKS0uiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SLNG3LW",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 4395,
            "currency": "INR",
            "before_price": 8995,
            "savings_amount": 4600,
            "savings_percent": 51.14
        },
        "reviews": {
            "total_reviews": 2591,
            "rating": 4
        },
        "title": "Inalsa Vacuum Cleaner Wet and Dry Micro WD10 with 3in1 Multifunction Wet/Dry/Blowing| 14KPA Suction and Impact Resistant P...",
        "thumbnail": "https://m.media-amazon.com/images/I/61tMhX1c2KL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07L4TP3WB",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 616,
            "currency": "INR",
            "before_price": 2000,
            "savings_amount": 1384,
            "savings_percent": 69.2
        },
        "reviews": {
            "total_reviews": 1223,
            "rating": 3.4
        },
        "title": "JAKMISTER 600 W, 70 Miles/Hour Unbreakable Plastic Electric Air Blower Dust PC Vacuum Cleaner (Standard Size, Red)",
        "thumbnail": "https://m.media-amazon.com/images/I/41F2BFb5nNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B077MF79HM",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 200,
            "currency": "INR",
            "before_price": 225,
            "savings_amount": 25,
            "savings_percent": 11.11
        },
        "reviews": {
            "total_reviews": 2154,
            "rating": 4.3
        },
        "title": "Colin Glass Cleaner Spray - 500 ml (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/61m7sz8fu4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08CXFBSJ2",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 620,
            "currency": "INR",
            "before_price": 1200,
            "savings_amount": 580,
            "savings_percent": 48.33
        },
        "reviews": {
            "total_reviews": 149,
            "rating": 3.4
        },
        "title": "Hiscin Mop Floor Cleaner with Bucket Set Offer with Big Wheels for Best 360 Degree Easy Magic Cleaning, 4 Microfiber (Colo...",
        "thumbnail": "https://m.media-amazon.com/images/I/41NgZzgkmaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JCJRP7V",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 123,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 27,
            "savings_percent": 18
        },
        "reviews": {
            "total_reviews": 756,
            "rating": 4.3
        },
        "title": "Sanifresh Ultrashine Toilet Cleaner - 1.5X Extra Strong Extra Clean, 500ml (Buy 2 get 1 free)",
        "thumbnail": "https://m.media-amazon.com/images/I/71evGTla8TL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B072J83V9W",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 6462,
            "currency": "INR",
            "before_price": 9995,
            "savings_amount": 3533,
            "savings_percent": 35.35
        },
        "reviews": {
            "total_reviews": 3258,
            "rating": 4.4
        },
        "title": "Philips PowerPro FC9352/01 Compact Bagless Vacuum Cleaner (Blue)",
        "thumbnail": "https://m.media-amazon.com/images/I/41xQDop2T5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LZSWXWI",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": false,
            "current_price": 160,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 643,
            "rating": 3.8
        },
        "title": "Pidilite T16 Roff Cera Clean Professional Tile, Floor and Ceramic Cleaner (1 Litre) - Concentrated liquid for tough stains...",
        "thumbnail": "https://m.media-amazon.com/images/I/41jv64F8g1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B016D3J92M",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 276,
            "currency": "INR",
            "before_price": 320,
            "savings_amount": 44,
            "savings_percent": 13.75
        },
        "reviews": {
            "total_reviews": 9612,
            "rating": 4.5
        },
        "title": "Harpic Powerplus Disinfectant Toilet Cleaner, Original, 1 L (Pack of 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/61z8h3l3DvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08X2247NT",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 850,
            "savings_percent": 50.03
        },
        "reviews": {
            "total_reviews": 1323,
            "rating": 4
        },
        "title": "Zofey Car Vacuum, Hantun Portable Handheld Auto Vacuum Cleaner for Car, 6000Pa Powerful Suction Lightweight Automatic Car ...",
        "thumbnail": "https://m.media-amazon.com/images/I/51sGcJQQ2GL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01HGN96GW",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": false,
            "current_price": 172,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3936,
            "rating": 4.4
        },
        "title": "Harpic Disinfectant Bathroom Cleaner Liquid, Lemon - 1 L | With Sodium Hypochlorite 0.5% w/w Min.",
        "thumbnail": "https://m.media-amazon.com/images/I/514HorCFh2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00NWFVVG2",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": false,
            "current_price": 168,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5568,
            "rating": 4.4
        },
        "title": "Harpic Powerplus Disinfectant Toilet Cleaner, Original - 1 L",
        "thumbnail": "https://m.media-amazon.com/images/I/51mcTjM3OyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00V9NHDI4",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 3299,
            "currency": "INR",
            "before_price": 3799,
            "savings_amount": 500,
            "savings_percent": 13.16
        },
        "reviews": {
            "total_reviews": 4547,
            "rating": 3.8
        },
        "title": "Eureka Forbes Trendy Zip 1000-Watt Vacuum Cleaner (Black/Red)",
        "thumbnail": "https://m.media-amazon.com/images/I/61R-vPbvY9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00F3ABSXU",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 3249,
            "currency": "INR",
            "before_price": 4499,
            "savings_amount": 1250,
            "savings_percent": 27.78
        },
        "reviews": {
            "total_reviews": 5815,
            "rating": 3.6
        },
        "title": "Eureka Forbes Quick Clean DX 1200-Watt Vacuum Cleaner for Home with Free Reusable dust Bag (Red)",
        "thumbnail": "https://m.media-amazon.com/images/I/71JS5wMHfnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0013DMISU",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 590,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 409,
            "savings_percent": 40.94
        },
        "reviews": {
            "total_reviews": 216,
            "rating": 4.2
        },
        "title": "Mr Muscle Kitchen Cleaner 750ml Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/61H0LLM2YSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DD11Z1D",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 122,
            "currency": "INR",
            "before_price": 129,
            "savings_amount": 7,
            "savings_percent": 5.43
        },
        "reviews": {
            "total_reviews": 923,
            "rating": 4.3
        },
        "title": "Lizol Kitchen Power Cleaner Liquid Spray 450 ml | Removes 99.9% germs | Cleans Stove, Chimney & Sink",
        "thumbnail": "https://m.media-amazon.com/images/I/61imKatVPHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00NWFXTJY",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 300,
            "currency": "INR",
            "before_price": 362,
            "savings_amount": 62,
            "savings_percent": 17.13
        },
        "reviews": {
            "total_reviews": 6582,
            "rating": 4.5
        },
        "title": "Lizol Disinfectant Surface & Floor Cleaner Liquid, Citrus - 2 L | Kills 99.9% Germs",
        "thumbnail": "https://m.media-amazon.com/images/I/61WGQvZPyRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08VN97KDC",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Zeecell Mop Stick Floor Cleaning - Mop Rod Stainless Steel 360 Spin Cleaning Mop Rod Mop Stick Rod with Ref...",
        "thumbnail": "https://m.media-amazon.com/images/I/71Myb7KLoOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06XQ4WJV1",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 999,
            "currency": "INR",
            "before_price": 1340,
            "savings_amount": 341,
            "savings_percent": 25.45
        },
        "reviews": {
            "total_reviews": 1723,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Kohler - 98100IN-0 Cuff Health Faucet, Premium Hygiene Spray with Metal Hose and Holder (White)",
        "thumbnail": "https://m.media-amazon.com/images/I/41N332FSlZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PSH3D3W",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 600,
            "savings_percent": 50.04
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.3
        },
        "title": "Sponsored Ad - Kristy Mart® Magnetic Window Cleaner Clean Wash Brush, High Window Squeegee Cleaner with Scrubber, 3 in 1 T...",
        "thumbnail": "https://m.media-amazon.com/images/I/71rkne94MqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00JBNZPFM",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 8999,
            "savings_amount": 2000,
            "savings_percent": 22.22
        },
        "reviews": {
            "total_reviews": 6373,
            "rating": 4.1
        },
        "title": "Karcher WD 3 Multi-Purpose Vacuum Cleaner",
        "thumbnail": "https://m.media-amazon.com/images/I/81FmgV2Fu0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07C1C5BLV",
        "category": "Grocery",
        "product": "Cleaners",
        "type": "Cleaners",
        "price": {
            "discounted": true,
            "current_price": 3195,
            "currency": "INR",
            "before_price": 4595,
            "savings_amount": 1400,
            "savings_percent": 30.47
        },
        "reviews": {
            "total_reviews": 5369,
            "rating": 4
        },
        "title": "Inalsa Spruce-1200W Vacuum Cleaner for Home with Blower Function and Reusable dust Bag (Red/Black)",
        "thumbnail": "https://m.media-amazon.com/images/I/61ASZPYJvjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SMHBYJ9",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 558,
            "currency": "INR",
            "before_price": 574,
            "savings_amount": 16,
            "savings_percent": 2.79
        },
        "reviews": {
            "total_reviews": 2320,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Airwick Freshmatic Refill Life Scents Turquoise Oasis - 250 ml & Scents of India Freshmatic Air Freshener R...",
        "thumbnail": "https://m.media-amazon.com/images/I/51fLr-sgQ4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00YUBI2DM",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 264,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 35,
            "savings_percent": 11.71
        },
        "reviews": {
            "total_reviews": 1152,
            "rating": 4
        },
        "title": "Sponsored Ad - Airwick Freshmatic Life Scents Air-freshner Refill, Orange Blossom - 250 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51YUBz43mBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MSXD5CX",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": false,
            "current_price": 550,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1976,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Airwick Freshmatic Refill Life Scents Summer Delights - 250 ml and Airwick Freshmatic Refill Life Scents Tu...",
        "thumbnail": "https://m.media-amazon.com/images/I/61mpSwCszPL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CJURT6Q",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 126,
            "currency": "INR",
            "before_price": 149,
            "savings_amount": 23,
            "savings_percent": 15.44
        },
        "reviews": {
            "total_reviews": 558,
            "rating": 4.3
        },
        "title": "Godrej aer Home Air Freshener Spray - 240ml (Morning Misty Meadows)",
        "thumbnail": "https://m.media-amazon.com/images/I/6127VBhQ0tL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07K8YB27K",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 170,
            "currency": "INR",
            "before_price": 179,
            "savings_amount": 9,
            "savings_percent": 5.03
        },
        "reviews": {
            "total_reviews": 570,
            "rating": 4.3
        },
        "title": "Godrej aer spray, Premium Air Freshener - Relax (240 ml/137g)",
        "thumbnail": "https://m.media-amazon.com/images/I/616fuyzW-6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01HBJIKYU",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 178,
            "currency": "INR",
            "before_price": 210,
            "savings_amount": 32,
            "savings_percent": 15.24
        },
        "reviews": {
            "total_reviews": 4076,
            "rating": 4.3
        },
        "title": "Odonil Bathroom Air Freshener Blocks , Mixed Fragrances -75gm ( Buy 3 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/711wdwUW6NL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07GJRP6X4",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 212,
            "currency": "INR",
            "before_price": 265,
            "savings_amount": 53,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 3215,
            "rating": 4.3
        },
        "title": "Godrej aer Pocket, Bathroom Air Fragrance - Assorted Pack of 5 (5x10g)",
        "thumbnail": "https://m.media-amazon.com/images/I/71S-pAaf6GL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PHTP7L3",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 239,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 111,
            "savings_percent": 31.71
        },
        "reviews": {
            "total_reviews": 1286,
            "rating": 4
        },
        "title": "Godrej aer spray, Air Freshener - Cool Surf Blue & Fresh Lush Green (Pack of 2, 240 ml each)",
        "thumbnail": "https://m.media-amazon.com/images/I/61aS1RUIoUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00HY5NACO",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 110,
            "currency": "INR",
            "before_price": 130,
            "savings_amount": 20,
            "savings_percent": 15.38
        },
        "reviews": {
            "total_reviews": 95,
            "rating": 3.7
        },
        "title": "Premium Sandal Room Freshener - 125 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71Y3axsEAdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01IEIBUIU",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 144,
            "currency": "INR",
            "before_price": 160,
            "savings_amount": 16,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 5146,
            "rating": 4.2
        },
        "title": "Godrej aer pocket, Bathroom Air Fragrance - Assorted Pack of 3 (3x10g)",
        "thumbnail": "https://m.media-amazon.com/images/I/71EWxBb2xtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085TSS9VN",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 298,
            "savings_amount": 49,
            "savings_percent": 16.44
        },
        "reviews": {
            "total_reviews": 1030,
            "rating": 3.8
        },
        "title": "Amazon Brand - Solimo Home Air Freshener Spray, 300 ml - Fresh Citrus & Lavender Mist",
        "thumbnail": "https://m.media-amazon.com/images/I/7105dc5wPML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00KIMHR0Q",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 134,
            "currency": "INR",
            "before_price": 141,
            "savings_amount": 7,
            "savings_percent": 4.96
        },
        "reviews": {
            "total_reviews": 1308,
            "rating": 4.2
        },
        "title": "Odonil Bathroom Air Freshener Blocks, Mixed Fragrances - 50gm (Buy 3 Get 1 free)",
        "thumbnail": "https://m.media-amazon.com/images/I/71vNaMD7T7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07YFBYRTG",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 640,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 159,
            "savings_percent": 19.9
        },
        "reviews": {
            "total_reviews": 1002,
            "rating": 3.8
        },
        "title": "Godrej aer Smart Matic - BLUETOOTH ENABLED Automatic Air Freshener Kit, Alive 225ml (134g)",
        "thumbnail": "https://m.media-amazon.com/images/I/61-9a1kx0rL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0144P0BJ6",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": false,
            "current_price": 99,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 205,
            "rating": 4.1
        },
        "title": "Odonil One Touch Air Sanitizer Freshener - Floral Bouquet Combo - (1 Dispenser + 7.8g/12ml refill)",
        "thumbnail": "https://m.media-amazon.com/images/I/81pe0u6wSYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B072Q5VP76",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 120,
            "currency": "INR",
            "before_price": 141,
            "savings_amount": 21,
            "savings_percent": 14.89
        },
        "reviews": {
            "total_reviews": 3106,
            "rating": 4.2
        },
        "title": "Odonil Bathroom Air Freshener Blocks – 50 g (Buy 3 get 1)",
        "thumbnail": "https://m.media-amazon.com/images/I/71vNaMD7T7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00WWZPWUO",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 105,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 45,
            "savings_percent": 30
        },
        "reviews": {
            "total_reviews": 291,
            "rating": 4.1
        },
        "title": "Godrej aer spray, Home & Office Air Freshener - Musk After Smoke (240 ml)",
        "thumbnail": "https://m.media-amazon.com/images/I/61mTw+zirIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VCC76MN",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 219,
            "currency": "INR",
            "before_price": 235,
            "savings_amount": 16,
            "savings_percent": 6.81
        },
        "reviews": {
            "total_reviews": 242,
            "rating": 4.2
        },
        "title": "Odonil Bathroom Air Freshener Zipper Mix -50gm (10gm*5)",
        "thumbnail": "https://m.media-amazon.com/images/I/71IAhBs19lL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07FPKJ7MP",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 400,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 99,
            "savings_percent": 19.84
        },
        "reviews": {
            "total_reviews": 1741,
            "rating": 3.7
        },
        "title": "Godrej aer matic, Automatic Air Freshener Kit with Flexi Control - Violet Valley Bloom (225 ml)",
        "thumbnail": "https://m.media-amazon.com/images/I/61bUKsoToJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00FPYTK52",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 32,
            "rating": 4.4
        },
        "title": "Natural Homemade Air Fresheners :The Ultimate Guide",
        "thumbnail": "https://m.media-amazon.com/images/I/51DVdWEi+NL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KTLGLFM",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 119,
            "currency": "INR",
            "before_price": 149,
            "savings_amount": 30,
            "savings_percent": 20.13
        },
        "reviews": {
            "total_reviews": 1030,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Air Freshener Spray - Earthy Sandalwood, 300ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71dddX88hDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PL1FM43",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": false,
            "current_price": 499,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 28,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Udbhav Creations LLP Gold Modern Electric Shock Proof Camphor Diffuser Incense Burner Fragrance Holder for ...",
        "thumbnail": "https://m.media-amazon.com/images/I/512jVu4cTCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079LBY4RM",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 279,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 20,
            "savings_percent": 6.69
        },
        "reviews": {
            "total_reviews": 172,
            "rating": 4
        },
        "title": "Sponsored Ad - Airwick Freshmatic 'Scents of India' Air-freshner Refill, Nagpur Narangi - 250 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/517RcKv9Z3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Q124MH8",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 339,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 60,
            "savings_percent": 15.04
        },
        "reviews": {
            "total_reviews": 262,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Airwick Essential Mist Automatic Fragrance Mist Diffuser refill, Calming Rose - 20 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51sGXs-uqVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08QCV97RL",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 190,
            "currency": "INR",
            "before_price": 270,
            "savings_amount": 80,
            "savings_percent": 29.63
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 2.7
        },
        "title": "Geofresh Ayurvedic Instant Mouth Freshener Spray TRIPLE COMBO(Cool Mint + Elaichi + Paan) 15G",
        "thumbnail": "https://m.media-amazon.com/images/I/41nrqDT99cL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PGPZH1C",
        "category": "Grocery",
        "product": "Freshners",
        "type": "Freshners",
        "price": {
            "discounted": true,
            "current_price": 320,
            "currency": "INR",
            "before_price": 358,
            "savings_amount": 38,
            "savings_percent": 10.61
        },
        "reviews": {
            "total_reviews": 391,
            "rating": 4.2
        },
        "title": "Godrej aer spray, Premium Air Freshener - Passion & Alive (Pack of 2, 240 ml each)",
        "thumbnail": "https://m.media-amazon.com/images/I/71fASyk7HQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T2VXBPJ",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 156.75,
            "currency": "INR",
            "before_price": 209,
            "savings_amount": 52.25,
            "savings_percent": 25
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 4.5
        },
        "title": "Sponsored Ad - L'Oreal Paris Dream Lengths Conditioner, 192.5 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51cY7fT--9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MWJ1KD9",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 544,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 355,
            "savings_percent": 39.49
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 4.1
        },
        "title": "DAILY HOME ESSENTIALS - 2 Pack Multipurpose Lemon Floral Design Seat Pad (40 x 40 cm) | Best for Car, Office, Chair, Swing...",
        "thumbnail": "https://m.media-amazon.com/images/I/91aSe4LYvaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00MY5GSOG",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 519,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1480,
            "savings_percent": 74.04
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 4.4
        },
        "title": "Johnson's Face Care Daily Essentials Refreshing Gel Wash (150ml)",
        "thumbnail": "https://m.media-amazon.com/images/I/31hq0NL48OL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PKH5NWG",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 1200,
            "savings_amount": 401,
            "savings_percent": 33.42
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Daily Home Essentials Ultra Soft Plush Baby Blankets for Boys & Girls. Lightweight & Super Comfortable Swaddle(70 x 95 cm)...",
        "thumbnail": "https://m.media-amazon.com/images/I/71l0Kw5x1GL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07FNFZLV3",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 1600,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 39,
            "rating": 4.4
        },
        "title": "Indulgeo Essentials Rose Gold Daily Oil (15 ml)",
        "thumbnail": "https://m.media-amazon.com/images/I/61prfwOdj4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KXX9822",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 229,
            "currency": "INR",
            "before_price": 249,
            "savings_amount": 20,
            "savings_percent": 8.03
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "DAILY HOME ESSENTIALS Waffle Kitchen Towel 4 Pack (Waffle Towel 40 x 60 cm, Beige)",
        "thumbnail": "https://m.media-amazon.com/images/I/81M5PFUExjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081D57YLS",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 185,
            "currency": "INR",
            "before_price": 400,
            "savings_amount": 215,
            "savings_percent": 53.75
        },
        "reviews": {
            "total_reviews": 983,
            "rating": 4.2
        },
        "title": "Inditradition Stainless Steel Strainer Kitchen Drain Basin Basket Filter Stopper Drainer Sink Jali, 9 cm (Silver)",
        "thumbnail": "https://m.media-amazon.com/images/I/51aqgGZxoFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08Q426CDD",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 727,
            "currency": "INR",
            "before_price": 969,
            "savings_amount": 242,
            "savings_percent": 24.97
        },
        "reviews": {
            "total_reviews": 59,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Daily Skincare Essentials Box",
        "thumbnail": "https://m.media-amazon.com/images/I/81bWbrnGtqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0761196MM",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 275,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5082,
            "rating": 4.5
        },
        "title": "Listerine Cool Mint Mouthwash Removes 99.9% Germs, 250ml (Buy 2 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/6103u-7EQ9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F8D6QLL",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 320,
            "currency": "INR",
            "before_price": 370,
            "savings_amount": 50,
            "savings_percent": 13.51
        },
        "reviews": {
            "total_reviews": 9000,
            "rating": 4.5
        },
        "title": "Surf Excel Matic Top Load Liquid Detergent Refill Pouch - Super Saver Pack Specially Designed For 100% Tough Stain Removal...",
        "thumbnail": "https://m.media-amazon.com/images/I/61lOFfJj4yL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0755KPWFW",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 193,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3308,
            "rating": 4.5
        },
        "title": "Dettol Liquid Disinfectant for Multi-Purpose Germ Protection, Menthol Cool, 500 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61CVgEB-KDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0748GRXVF",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 275,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 224,
            "savings_percent": 44.89
        },
        "reviews": {
            "total_reviews": 1210,
            "rating": 3.5
        },
        "title": "Inditradition 3 in 1 Kitchen Sink Organizer (for Dishwasher Liquid, Brush, Cloth, Soap, Sponge), Plastic",
        "thumbnail": "https://m.media-amazon.com/images/I/61YjZcVmuAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01MA0VPOS",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 825,
            "currency": "INR",
            "before_price": 1075,
            "savings_amount": 250,
            "savings_percent": 23.26
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Johnson's Daily Essentials Gentle Exfoliating face wash 150 ml with Ayur, Product in Combo",
        "thumbnail": "https://m.media-amazon.com/images/I/41X9fYag-DL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LNA2MQK",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 198,
            "currency": "INR",
            "before_price": 209,
            "savings_amount": 11,
            "savings_percent": 5.26
        },
        "reviews": {
            "total_reviews": 19431,
            "rating": 4.5
        },
        "title": "Dettol Original Germ Protection Handwash Liquid Soap Refill, 1500ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61KhcBJFnIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CJUIPWS",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 99,
            "currency": "INR",
            "before_price": 136,
            "savings_amount": 37,
            "savings_percent": 27.21
        },
        "reviews": {
            "total_reviews": 5969,
            "rating": 4.2
        },
        "title": "Sanifresh Ultrashine 1L ( 500 + 500) Toilet Cleaner -1.5X Extra Strong Extra Clean with Odonil Room Freshner Blocks 50 g Free",
        "thumbnail": "https://m.media-amazon.com/images/I/71puz2cZKJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00BKY9I62",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 360,
            "savings_amount": 111,
            "savings_percent": 30.83
        },
        "reviews": {
            "total_reviews": 5427,
            "rating": 4.4
        },
        "title": "NIVEA Body Lotion for Dry Skin, Shea Smooth, with Shea Butter, For Men & Women, 400 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/71BVHds3lNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B016VXORNA",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 294,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4102,
            "rating": 4.5
        },
        "title": "Scotch-Brite Sponge Wipe 5 Pcs pack ( Multipurpose)",
        "thumbnail": "https://m.media-amazon.com/images/I/91sgMWK2T4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B009VELS34",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 325,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 435,
            "rating": 4.2
        },
        "title": "Forest Essentials Delicate Facial Cleanser, Saffron and Neem, 50ml",
        "thumbnail": "https://m.media-amazon.com/images/I/713jVGdY27L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07FS7C7B8",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 710,
            "currency": "INR",
            "before_price": 730,
            "savings_amount": 20,
            "savings_percent": 2.74
        },
        "reviews": {
            "total_reviews": 5608,
            "rating": 4.5
        },
        "title": "Bournvita Health Drink, 2 kg pack",
        "thumbnail": "https://m.media-amazon.com/images/I/61hpzB8pZjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079P9LV89",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 1200,
            "savings_amount": 301,
            "savings_percent": 25.08
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.5
        },
        "title": "DAILY HOME ESSENTIALS - 11 Pack Cotton Terry Kitchen Linen Set (Kitchen Towels, Dish Cloth, Oven Mitt, Pot Holder & Pan Ha...",
        "thumbnail": "https://m.media-amazon.com/images/I/81Mryz0YEiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DKJ818C",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 274,
            "currency": "INR",
            "before_price": 310,
            "savings_amount": 36,
            "savings_percent": 11.61
        },
        "reviews": {
            "total_reviews": 11936,
            "rating": 4.4
        },
        "title": "Dabur Chyawanprash: 2X Immunity ,helps build Strength and Stamina-1Kg",
        "thumbnail": "https://m.media-amazon.com/images/I/71gDoilY5-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07575648V",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 195,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 104,
            "savings_percent": 34.78
        },
        "reviews": {
            "total_reviews": 1036,
            "rating": 4
        },
        "title": "Brite Guard Cellulose Cleaning Sponge Mop (20 x 16 x 0.5 cm, Multicolour) - Pack of 5 Pieces",
        "thumbnail": "https://m.media-amazon.com/images/I/81p0Ia89NFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W278G3L",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": true,
            "current_price": 1199,
            "currency": "INR",
            "before_price": 2148,
            "savings_amount": 949,
            "savings_percent": 44.18
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Essential Spirit Anti Aging Serum With Premium Rose Water - For Wrinkles, Fine Line & Pigmentation - 100% Pure and Natural...",
        "thumbnail": "https://m.media-amazon.com/images/I/518n1PgyzlL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06VX8YR6Q",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 195,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 6802,
            "rating": 4.2
        },
        "title": "Ezee Plastic Garbage Bag - 19X21 Inch, 90 Piece,medium, Black, 3 Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/71Ak4uVyp1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00NWFVVG2",
        "category": "Grocery",
        "product": "Daily Essentials",
        "type": "Daily Essentials",
        "price": {
            "discounted": false,
            "current_price": 168,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5568,
            "rating": 4.4
        },
        "title": "Harpic Powerplus Disinfectant Toilet Cleaner, Original - 1 L",
        "thumbnail": "https://m.media-amazon.com/images/I/51mcTjM3OyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B076ZTSW47",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 729,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 671,
            "savings_percent": 47.93
        },
        "reviews": {
            "total_reviews": 1570,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Floral Foliage 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Teal",
        "thumbnail": "https://m.media-amazon.com/images/I/A10JxZghPJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0747TNHXG",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 759,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 641,
            "savings_percent": 45.79
        },
        "reviews": {
            "total_reviews": 648,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Fresh Ferns 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Violet",
        "thumbnail": "https://m.media-amazon.com/images/I/91VcSimZCdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08B5JJKWT",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 800,
            "savings_percent": 66.72
        },
        "reviews": {
            "total_reviews": 2179,
            "rating": 3.6
        },
        "title": "HIYANSHI HOME FURNISHING Microfiber Double Bedsheet with 2 Pillow Covers (Grey 2) 90 x 90 inches",
        "thumbnail": "https://m.media-amazon.com/images/I/91pp1ln6e5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07CN7NJQS",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 570,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1029,
            "savings_percent": 64.35
        },
        "reviews": {
            "total_reviews": 10271,
            "rating": 4
        },
        "title": "HUESLAND by Ahmedabad Cotton 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Yellow, Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/71z-ghsEFSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SKK16WG",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 800,
            "savings_percent": 66.72
        },
        "reviews": {
            "total_reviews": 78,
            "rating": 3.2
        },
        "title": "HIYANSHI HOME FURNISHING Glace Cotton King Size Trangle Design Double Bedsheet 180 TC with 2 Pillow Covers",
        "thumbnail": "https://m.media-amazon.com/images/I/71VTgFkTG7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FT2KXGD",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 400,
            "savings_percent": 57.22
        },
        "reviews": {
            "total_reviews": 856,
            "rating": 3
        },
        "title": "IVAZA Premium 160 TC Polycotton Latest Beautiful 3D bedsheet Double Bed with Two Pillow Covers(Picock White)",
        "thumbnail": "https://m.media-amazon.com/images/I/A1D8FAppcmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W4V11P9",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 539,
            "currency": "INR",
            "before_price": 1799,
            "savings_amount": 1260,
            "savings_percent": 70.04
        },
        "reviews": {
            "total_reviews": 3047,
            "rating": 4.1
        },
        "title": "Divine Casa 100% Cotton Geometric Print Mix N Match Bedsheet for Double Bed (Lime, Teal and Off White)",
        "thumbnail": "https://m.media-amazon.com/images/I/81iDqTDVr+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S1MFHGT",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1200,
            "savings_amount": 801,
            "savings_percent": 66.75
        },
        "reviews": {
            "total_reviews": 20,
            "rating": 3.1
        },
        "title": "Bedsheet Hub Presents Rajasthani Jaipuri Modern Sanganeri Print Cotton Double Bedsheet with 2 Pillow Covers (Queen Size) (...",
        "thumbnail": "https://m.media-amazon.com/images/I/81R4lKNIdCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R6DM8BJ",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 352,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 647,
            "savings_percent": 64.76
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 3
        },
        "title": "PRIDHI 180TC Pure Glace Cotton Double Bedsheet with 2 Pillow Cover Design 10",
        "thumbnail": "https://m.media-amazon.com/images/I/81KgzSo23FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08JKP9HFH",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 329,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 670,
            "savings_percent": 67.07
        },
        "reviews": {
            "total_reviews": 139,
            "rating": 3.6
        },
        "title": "BSB HOME® 3D Printed 144 Tc Microfiber Double Bedsheet with 2 King Size Pillow Covers (White and Brown, 90X90 Inches)",
        "thumbnail": "https://m.media-amazon.com/images/I/513ISFWfHsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HRTH1HK",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 700,
            "savings_percent": 70.07
        },
        "reviews": {
            "total_reviews": 1283,
            "rating": 3.1
        },
        "title": "VYBBA Microfiber 144 TC Bedsheet (Double Bedsheet with 2 Pillow Cover _ Multicolour )",
        "thumbnail": "https://m.media-amazon.com/images/I/61HAb7mz1-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L6PBM4X",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 1249,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1750,
            "savings_percent": 58.35
        },
        "reviews": {
            "total_reviews": 156,
            "rating": 3.9
        },
        "title": "VAS COLLECTIONS® Glace Cotton Combo Pack of 5 Double Bedsheets with 10 King Size Pillow Cover,Size-228X228,Pillow Size-20X...",
        "thumbnail": "https://m.media-amazon.com/images/I/81McjMMc5iL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SJMRQB5",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 290,
            "currency": "INR",
            "before_price": 2021,
            "savings_amount": 1731,
            "savings_percent": 85.65
        },
        "reviews": {
            "total_reviews": 24,
            "rating": 3.6
        },
        "title": "Trazz™ Prime Collection Glace Cotton 188 TC Premium Double Sized bedsheet with 2 Free Maching Pillow Covers(90 * 90) Inch ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61W96TDlxDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PMBKJ13",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 469,
            "currency": "INR",
            "before_price": 800,
            "savings_amount": 331,
            "savings_percent": 41.38
        },
        "reviews": {
            "total_reviews": 342,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Room Darkening Blackout Door Curtain, 7 Feet (Grey)",
        "thumbnail": "https://m.media-amazon.com/images/I/81-D1xgUqGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZJRDKDP",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 469,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 530,
            "savings_percent": 53.05
        },
        "reviews": {
            "total_reviews": 112,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Rudra Hub Polyresin Solid Grommet Curtain, 7 Feet, Brown, Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/41f0N5ABEpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08537JYC9",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 300,
            "savings_percent": 50.08
        },
        "reviews": {
            "total_reviews": 25,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Home Sizzler Abstract Flower 1 Piece Maroon Long Door Curtain, 9 feet",
        "thumbnail": "https://m.media-amazon.com/images/I/71856gClMfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084L24GVM",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 850,
            "savings_percent": 56.7
        },
        "reviews": {
            "total_reviews": 152,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Inaayat Creations Polyester Solid Grommet Door Curtain, 9 Feet, Grey, Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/71sdfB83pVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01M1GSOSS",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 4856,
            "rating": 4.2
        },
        "title": "Home Sizzler Eyelet Polyester Door Curtains ,7ft (Set of 2)(Brown)",
        "thumbnail": "https://m.media-amazon.com/images/I/81gwOUTORrL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0845XFKM7",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 85,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 214,
            "savings_percent": 71.57
        },
        "reviews": {
            "total_reviews": 86,
            "rating": 3.8
        },
        "title": "Inaya Creations Present Stylish 1 PC Kolavari Curtain (Black, 4 x 5)",
        "thumbnail": "https://m.media-amazon.com/images/I/51MC8XEDQrL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08J88V5C6",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 229,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 670,
            "savings_percent": 74.53
        },
        "reviews": {
            "total_reviews": 193,
            "rating": 4.5
        },
        "title": "ROOMIAC - The Elegant Rooms Premium Thick 1 Piece Polyester Long Crush Curtains - Green, 9ft",
        "thumbnail": "https://m.media-amazon.com/images/I/61B-MGFLD6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088T97JY9",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 298,
            "currency": "INR",
            "before_price": 1100,
            "savings_amount": 802,
            "savings_percent": 72.91
        },
        "reviews": {
            "total_reviews": 449,
            "rating": 4.3
        },
        "title": "ROOMIAC - The Elegant Rooms Polyester & Polyester Blend Floral Grommet Curtain, 7 Feet, White, Pack of 1",
        "thumbnail": "https://m.media-amazon.com/images/I/717p4HTOF0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R3MXYN9",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 184,
            "currency": "INR",
            "before_price": 2000,
            "savings_amount": 1816,
            "savings_percent": 90.8
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 4.6
        },
        "title": "Curtain King Premium Fully Transparent Net Sheer Curtains with Beautiful Zigzag Pattern (White, 7 Feet)",
        "thumbnail": "https://m.media-amazon.com/images/I/816s9RrDHlL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NQ7GX18",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 301,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 498,
            "savings_percent": 62.33
        },
        "reviews": {
            "total_reviews": 2142,
            "rating": 4.3
        },
        "title": "Polyester Blend Solid Window Curtain, 5 Feet, Aqua Blue, Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/81QJIMwb0EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KXSZ5GH",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 195,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 804,
            "savings_percent": 80.48
        },
        "reviews": {
            "total_reviews": 1175,
            "rating": 3.8
        },
        "title": "Fabric Print Grommet Door Curtain, 7ft, Aqua, Pack of 1",
        "thumbnail": "https://m.media-amazon.com/images/I/81V6XXZfUmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07S41N9BV",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1100,
            "savings_percent": 73.38
        },
        "reviews": {
            "total_reviews": 549,
            "rating": 3.9
        },
        "title": "Galaxy Home Decor Solid Plain Curtains for Door 7 Feet, Pack of 2, Aqua (Aqua, Door 7 Feet)",
        "thumbnail": "https://m.media-amazon.com/images/I/71cRq+dXPGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01DA4NSHO",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 550,
            "savings_percent": 55.06
        },
        "reviews": {
            "total_reviews": 5180,
            "rating": 4.2
        },
        "title": "Home Sizzler Abstract 2 Piece Eyelet Polyester Door Curtain Set - 7ft, Brown",
        "thumbnail": "https://m.media-amazon.com/images/I/81MWLey3tjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08DG79SHR",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 555,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 444,
            "savings_percent": 44.44
        },
        "reviews": {
            "total_reviews": 418,
            "rating": 4.4
        },
        "title": "Soulful Creations Polyester Floral Curtain, Window - 5 Feet, Pink Bale, Pack of 3",
        "thumbnail": "https://m.media-amazon.com/images/I/81Dp673jaBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08F9WF55F",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 900,
            "savings_percent": 60.04
        },
        "reviews": {
            "total_reviews": 1454,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Cloth Fusion Microfiber Satin Striped Cushion Filler, (16x16) Inches, White- Pack of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/51N3dTg2M0L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T8N3N4S",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 900,
            "savings_amount": 501,
            "savings_percent": 55.67
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 2
        },
        "title": "Sponsored Ad - Samrat Hollow Fiber Filler Quality Cushion (16X16 Inches; White) -Set of 5 Door mat Free with Cushions",
        "thumbnail": "https://m.media-amazon.com/images/I/41ffTwwiXRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081NZ6SS9",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 729,
            "savings_amount": 330,
            "savings_percent": 45.27
        },
        "reviews": {
            "total_reviews": 75,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Microfibre Filled Cushion,12x12 Inch, Set of 3",
        "thumbnail": "https://m.media-amazon.com/images/I/61ZR1tB5dxL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08VQ864B8",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 318,
            "currency": "INR",
            "before_price": 500,
            "savings_amount": 182,
            "savings_percent": 36.4
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Stay&Shop. Microfiber Cushion Filler (16x16-inches, White) - Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/41FpaiK90VL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01B0GDBV2",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 495,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1004,
            "savings_percent": 66.98
        },
        "reviews": {
            "total_reviews": 607,
            "rating": 4.2
        },
        "title": "JDX Micro Fibre Silknise Cushion Filler (40X40cms, White) - Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/71H7FRMQxwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FYC1WJT",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 325,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 374,
            "savings_percent": 53.51
        },
        "reviews": {
            "total_reviews": 520,
            "rating": 3.3
        },
        "title": "Leo fab Presents Microfiber No Filler Cushion (White, 16 x 16) Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/41+tddhjn8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01B0EI7SG",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1200,
            "savings_percent": 75.05
        },
        "reviews": {
            "total_reviews": 1086,
            "rating": 4.1
        },
        "title": "JDX White Filler Cushion (12X12) or 30X30 cm (Set of 5)",
        "thumbnail": "https://m.media-amazon.com/images/I/71+3Uh3eDzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B078WBPTKP",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 320,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 179,
            "savings_percent": 35.87
        },
        "reviews": {
            "total_reviews": 703,
            "rating": 3.3
        },
        "title": "Charms Gift Basket Plush Soft Kiss Love Heart Pillow for Sofa Cushion, 12x12-inch - Set of 6",
        "thumbnail": "https://m.media-amazon.com/images/I/51KN5QSBmJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01N47O3ZW",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 440,
            "currency": "INR",
            "before_price": 1299,
            "savings_amount": 859,
            "savings_percent": 66.13
        },
        "reviews": {
            "total_reviews": 332,
            "rating": 3.8
        },
        "title": "the purple tree Faux Fur Cushion - (Velvet, White, Standard Size)",
        "thumbnail": "https://m.media-amazon.com/images/I/51o4wU+HE+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07L763N19",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 790,
            "currency": "INR",
            "before_price": 800,
            "savings_amount": 10,
            "savings_percent": 1.25
        },
        "reviews": {
            "total_reviews": 1454,
            "rating": 4.2
        },
        "title": "Cloth Fusion Microfiber Satin Striped Square Cushion Filler, (16x16) Inches, White- Pack of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/515P5ItUqVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07GCM539F",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 345,
            "currency": "INR",
            "before_price": 538,
            "savings_amount": 193,
            "savings_percent": 35.87
        },
        "reviews": {
            "total_reviews": 1158,
            "rating": 4.1
        },
        "title": "Urban Arts Premium Cushion Fillers - Pack of 2 Pcs, 12 x 18 Inches, White",
        "thumbnail": "https://m.media-amazon.com/images/I/41eRvlF8qYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QX71HS8",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 650,
            "savings_percent": 65.07
        },
        "reviews": {
            "total_reviews": 1944,
            "rating": 4
        },
        "title": "AEROHAVEN™ Set of 5 Decorative Hand Made Jute Throw/Pillow Cushion Covers - (16 X 16 INCHES)",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZtX+XF0SL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00QUQ8WE4",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": false,
            "current_price": 358,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1304,
            "rating": 4
        },
        "title": "Recron Certified Dream Fibre Cushion - 41 cm x 41 cm, Pack of 2, White",
        "thumbnail": "https://m.media-amazon.com/images/I/61QrwniGcqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VK5B5J6",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 544,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1055,
            "savings_percent": 65.98
        },
        "reviews": {
            "total_reviews": 794,
            "rating": 3.8
        },
        "title": "Safunooza Hotel Quality Hollow Fiber Filler Cushion (White) -Set of 5 (16x16)",
        "thumbnail": "https://m.media-amazon.com/images/I/71OPmcF0kyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B076ZNW4K6",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 759,
            "currency": "INR",
            "before_price": 1150,
            "savings_amount": 391,
            "savings_percent": 34
        },
        "reviews": {
            "total_reviews": 741,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Premium Anti-Slip Microfibre Bathmat - 60cm x 40cm, Pale Grey, Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/918SJ4MpxpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MT8BFM6",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1099,
            "savings_amount": 400,
            "savings_percent": 36.4
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 4.4
        },
        "title": "Sponsored Ad - ATMAH Door Mat (Coir, 45 x 75 Cm)",
        "thumbnail": "https://m.media-amazon.com/images/I/71oZDH3PNzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07YG5N9BF",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 275,
            "currency": "INR",
            "before_price": 375,
            "savings_amount": 100,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 2.9
        },
        "title": "Sponsored Ad - ATMAH Rubber Step mat, Size 9inch x 30inch",
        "thumbnail": "https://m.media-amazon.com/images/I/61BVikl+17L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01MRZZQMO",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 189,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 110,
            "savings_percent": 36.79
        },
        "reviews": {
            "total_reviews": 2250,
            "rating": 3.5
        },
        "title": "Story@Home Handicraft Style Eco Series 2 Piece Cotton Blend Door Mat Set - 40 x 60 cm or 16\"x24\", Multi",
        "thumbnail": "https://m.media-amazon.com/images/I/81Uu9wkq6BL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LJCDNH4",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 279,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 470,
            "savings_percent": 62.75
        },
        "reviews": {
            "total_reviews": 8649,
            "rating": 4
        },
        "title": "Saral Home Turquoise Soft Microfiber Anti-Skid Bath Mat (Pack of 2, 35x50 cm)",
        "thumbnail": "https://m.media-amazon.com/images/I/A1f9OfRLK5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SQJHN3G",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 329,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 170,
            "savings_percent": 34.07
        },
        "reviews": {
            "total_reviews": 739,
            "rating": 3.8
        },
        "title": "SHF Door Mat (Multicolour, Cotton, 33x53 cm), Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/61n6A38lQ-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07S2WBP2Z",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 350,
            "savings_percent": 58.43
        },
        "reviews": {
            "total_reviews": 1256,
            "rating": 3.8
        },
        "title": "AEROHAVEN™ Glorious Super Soft Microfiber Abstract Moroccan Designer Anti Slip Bathmat (Blue, 40 cm x 60 cm)",
        "thumbnail": "https://m.media-amazon.com/images/I/81O3W78Ru9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LYGFYFK",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 189,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 410,
            "savings_percent": 68.45
        },
        "reviews": {
            "total_reviews": 782,
            "rating": 3.8
        },
        "title": "Status Polypropylene Anti Slip Floor Door Mat in Home Kitchen Office Entrance Mats ( 38x58 cm) -Pack of 1 (Green, 15 x 23)",
        "thumbnail": "https://m.media-amazon.com/images/I/71nM8Oa0ldL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084Q651C9",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 450,
            "savings_percent": 60.08
        },
        "reviews": {
            "total_reviews": 1090,
            "rating": 4
        },
        "title": "Saral Home Bath Mat (Brown, Microfiber, 35X50 CM), Set of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/81hqqUf-UaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RM3MMQ8",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 400,
            "savings_percent": 50.06
        },
        "reviews": {
            "total_reviews": 216,
            "rating": 3.3
        },
        "title": "SHF Door Mat (Multicolour, Cotton, 40x60 cm), Set of 4",
        "thumbnail": "https://m.media-amazon.com/images/I/81r0lB0BHnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L1SZQY1",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 400,
            "savings_percent": 50.06
        },
        "reviews": {
            "total_reviews": 46,
            "rating": 3.2
        },
        "title": "Fresh Zone 100% Cotton Door mat Home & Office Set of 4 Piece 40x60 cm",
        "thumbnail": "https://m.media-amazon.com/images/I/71g2DLaY3pL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07S8K9QGD",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 500,
            "savings_percent": 62.58
        },
        "reviews": {
            "total_reviews": 850,
            "rating": 3.8
        },
        "title": "Tex Homz Artificial Grass Door Mat for Home, Balcony (Natural Green, Polyester, 45x70 cm)",
        "thumbnail": "https://m.media-amazon.com/images/I/81ifET6QxhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08BYVDJHC",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 239,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 460,
            "savings_percent": 65.81
        },
        "reviews": {
            "total_reviews": 555,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Bathmat (100% Cotton, 20X30 Inch)",
        "thumbnail": "https://m.media-amazon.com/images/I/81iVTS5qWzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TYV9GJW",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 242,
            "currency": "INR",
            "before_price": 249,
            "savings_amount": 7,
            "savings_percent": 2.81
        },
        "reviews": {
            "total_reviews": 1721,
            "rating": 3.5
        },
        "title": "Kuber Industries Microfiber Anti Slip 3 Pieces Door Mat 14\"x21\"(Red, Maroon & Green) -CTLTC11444",
        "thumbnail": "https://m.media-amazon.com/images/I/713+01M4y+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WRB2M2L",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 450,
            "savings_percent": 64.38
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Modern Fab Pure Microfiber Super Soft Anti Skid Door Mat - 50 cm x 80 cm",
        "thumbnail": "https://m.media-amazon.com/images/I/81iYqCZM22L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HHZGLQ8",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 1399,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 1,
            "savings_percent": 0.07
        },
        "reviews": {
            "total_reviews": 115,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Soulveda Kraftz Handcrafted Wooden Prayer Jhula Suitable for Prayer Room Decorative/Gift Items/God Idol/Fes...",
        "thumbnail": "https://m.media-amazon.com/images/I/41Yz-saCYHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00JGQ3KVK",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 5900,
            "currency": "INR",
            "before_price": 6990,
            "savings_amount": 1090,
            "savings_percent": 15.59
        },
        "reviews": {
            "total_reviews": 1288,
            "rating": 3.9
        },
        "title": "Crompton Uranus Ceiling Fan with Decorative Lights - 1200 mm (Ivory)",
        "thumbnail": "https://m.media-amazon.com/images/I/617Ju3EL5EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08RN6DX5J",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 169,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 730,
            "savings_percent": 81.2
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.7
        },
        "title": "SAF Set of 3 Couple Peacock with Flower Pot UV Textured Home Decorative Gift Item Self Adeshive Painting 18 Inch X 12 Inch...",
        "thumbnail": "https://m.media-amazon.com/images/I/519hhjYaQIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GG78GH3",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 348,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 251,
            "savings_percent": 41.9
        },
        "reviews": {
            "total_reviews": 121,
            "rating": 4.1
        },
        "title": "ANGORA CREATIONS Decorative Marble dust/Polyresin Cow and Calf Showpiece Idols and Figurines for Spiritual Vastu Nandi Poo...",
        "thumbnail": "https://m.media-amazon.com/images/I/61fY54VR-BL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BNHWDL4",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 355,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 644,
            "savings_percent": 64.46
        },
        "reviews": {
            "total_reviews": 1277,
            "rating": 3.9
        },
        "title": "Wall1ders Atulya Arts 3D Hexagon Acrylic Decorative Wall-Stickers with 10 Butterfly Stickers (Silver) - Pack of 28",
        "thumbnail": "https://m.media-amazon.com/images/I/61X40KONn4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PZ8XR2P",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 199,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 1200,
            "savings_percent": 85.78
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 3
        },
        "title": "SAF Set of 3 Hexagon Ganesha UV Textured Home Decorative Gift item Self adeshive Painting 17 Inch X 17 Inch SANFHX1012",
        "thumbnail": "https://m.media-amazon.com/images/I/51ObG9R0Z5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01DBPDMHS",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 329,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 870,
            "savings_percent": 72.56
        },
        "reviews": {
            "total_reviews": 2645,
            "rating": 3.4
        },
        "title": "eCraftIndia Antique Music Decorative Canon Brass Showpiece (10 cm x 10 cm x 23.75 cm, Red and Brown)",
        "thumbnail": "https://m.media-amazon.com/images/I/71XO0veg2JL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L3QGGPJ",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 698,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1801,
            "savings_percent": 72.07
        },
        "reviews": {
            "total_reviews": 104,
            "rating": 4
        },
        "title": "JR Handicrafts World Round Flower Border Designer URLI (Set of 1) Decorative Beautiful Handcrafted Bowl for Floating Flowe...",
        "thumbnail": "https://m.media-amazon.com/images/I/51c0gDHfMsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TRTK1ZS",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1889,
            "savings_amount": 1490,
            "savings_percent": 78.88
        },
        "reviews": {
            "total_reviews": 256,
            "rating": 4.4
        },
        "title": "SAF Set of 4 Dream, Hope, Belive, Try Motivational UV Coated Home Decorative Gift Item Framed Painting 19 inch X 19 inch S...",
        "thumbnail": "https://m.media-amazon.com/images/I/81-xpAo1YdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08XB2QYKP",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 400,
            "savings_percent": 57.22
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "CraftVatika Nordic Geometric Candle Holders Tealight Candle Holder/ Candle Stand/ Candles Tea Light Holder Decorative Item...",
        "thumbnail": "https://m.media-amazon.com/images/I/81m67u8YgDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WX948YR",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 400,
            "savings_percent": 57.22
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "CraftVatika Thumbs Up Sign Gesture Showpiece Statue Decorative Item Collectible Figurines for Home Living Room",
        "thumbnail": "https://m.media-amazon.com/images/I/613IQFBqQ5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "9389717345",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 333.9,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 165.1,
            "savings_percent": 33.09
        },
        "reviews": {
            "total_reviews": 24652,
            "rating": 4.5
        },
        "title": "Sponsored Ad - The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)",
        "thumbnail": "https://m.media-amazon.com/images/I/91bde4XkXrL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9390391512",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 900,
            "savings_percent": 64.33
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.8
        },
        "title": "Sponsored Ad - World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books)",
        "thumbnail": "https://m.media-amazon.com/images/I/81rh1n8dj-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "0670094978",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 478,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 221,
            "savings_percent": 31.62
        },
        "reviews": {
            "total_reviews": 548,
            "rating": 4.2
        },
        "title": "Unfinished: A Memoir",
        "thumbnail": "https://m.media-amazon.com/images/I/81tHdhbrGEL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9387779262",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 750,
            "savings_amount": 301,
            "savings_percent": 40.13
        },
        "reviews": {
            "total_reviews": 14963,
            "rating": 4.5
        },
        "title": "My First Library: Boxset of 10 Board Books for Kids",
        "thumbnail": "https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "178633089X",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 300,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 199,
            "savings_percent": 39.88
        },
        "reviews": {
            "total_reviews": 8935,
            "rating": 4.6
        },
        "title": "Ikigai: The Japanese secret to a long and happy life",
        "thumbnail": "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "0099590085",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 247,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 352,
            "savings_percent": 58.76
        },
        "reviews": {
            "total_reviews": 28711,
            "rating": 4.6
        },
        "title": "Sapiens: A Brief History of Humankind",
        "thumbnail": "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "0008386595",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 300,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 199,
            "savings_percent": 39.88
        },
        "reviews": {
            "total_reviews": 9016,
            "rating": 4.7
        },
        "title": "Think Like a Monk: The secret of how to harness the power of positivity and be happy now",
        "thumbnail": "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "1542094135",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 123,
            "currency": "INR",
            "before_price": 225,
            "savings_amount": 102,
            "savings_percent": 45.33
        },
        "reviews": {
            "total_reviews": 4916,
            "rating": 4.2
        },
        "title": "One Arranged Murder",
        "thumbnail": "https://m.media-amazon.com/images/I/61r-WomIz0L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XY6TCSK",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 500,
            "savings_amount": 151,
            "savings_percent": 30.2
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 3.8
        },
        "title": "The Cushion Company Polyester TCC Soft Throw Pillows (12x18 Inch, White), Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/51yL+hhLkgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08CKPTXP1",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 440,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 259,
            "savings_percent": 37.05
        },
        "reviews": {
            "total_reviews": 354,
            "rating": 4.4
        },
        "title": "PIXEL HOME Square Floor Cushions Natural Cotton Printed Design with Cotton Filler (Lemon Print) (PIX - Boxy - Lemon)",
        "thumbnail": "https://m.media-amazon.com/images/I/91SucSfY2YL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QY94VBS",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 427,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 272,
            "savings_percent": 38.91
        },
        "reviews": {
            "total_reviews": 2795,
            "rating": 4.3
        },
        "title": "AEROHAVEN Set of 5 Designer Decorative Throw Pillow/Cushion Covers - CC122 - (16 inch x 16 inch, Multicolour)",
        "thumbnail": "https://m.media-amazon.com/images/I/518e4DdqgWL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089WJCYBL",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 300,
            "savings_percent": 37.55
        },
        "reviews": {
            "total_reviews": 61,
            "rating": 4
        },
        "title": "Shree Mart Cushion Seat Flex Pillow, Gel Orthopedic Seat Cushion Pad for Car, Office Chair, Wheelchair, or Home (Blue)",
        "thumbnail": "https://m.media-amazon.com/images/I/71kE9GzBliL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08M66KHKH",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Premium Hotel Quality Reliance Microfiber Filled Cushion (16X16 Inches; White) -Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/51cxZzMSoOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07N5JYDMM",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 348,
            "currency": "INR",
            "before_price": 3499,
            "savings_amount": 3151,
            "savings_percent": 90.05
        },
        "reviews": {
            "total_reviews": 87,
            "rating": 3.5
        },
        "title": "Generic Polyester Nonwoven 2 -Piece Packed Cushions - 24\" x 24\", White",
        "thumbnail": "https://m.media-amazon.com/images/I/41a-CZkAUwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01AD1XB9C",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 182,
            "rating": 3.9
        },
        "title": "JDX Hollow Fiber 16x16-inch Filler Cushion-White (Set of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/711vCGT-YAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BSL89V7",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1150,
            "savings_percent": 76.72
        },
        "reviews": {
            "total_reviews": 724,
            "rating": 3.8
        },
        "title": "HOMECRUST Cotton Cushion Fillers, 16 x 16 inch, White -Set of 2 Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/3165aTZuvuL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08371J12H",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 300,
            "savings_percent": 42.92
        },
        "reviews": {
            "total_reviews": 84,
            "rating": 4.3
        },
        "title": "The Cushion Company TCC Micro Fiber Rectangular Cushion Filler for Bed/Sofa (12 x 20 inches, White) - Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/41pfv3KdmPL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Z497DC",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 279,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 720,
            "savings_percent": 72.07
        },
        "reviews": {
            "total_reviews": 700,
            "rating": 4.1
        },
        "title": "AEROHAVEN Set of 5 Multi Colored Decorative Hand Made Jute Cushion Covers - CC14 - (16 Inch x 16 Inch, Multicolor)",
        "thumbnail": "https://m.media-amazon.com/images/I/71oGqwnp9jL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QYBB7XP",
        "category": "Home Decorators",
        "product": "Cusions",
        "type": "Cusions",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 250,
            "savings_percent": 35.77
        },
        "reviews": {
            "total_reviews": 737,
            "rating": 4.2
        },
        "title": "AEROHAVEN Cotton Abstract Decorative Throw Pillow/Cushion Covers (Multicolour, 16 x 16 inch) Set of 5",
        "thumbnail": "https://m.media-amazon.com/images/I/71lLaX58+PL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DW6TX8F",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 1150,
            "savings_percent": 71.92
        },
        "reviews": {
            "total_reviews": 390,
            "rating": 3.7
        },
        "title": "Blexos Darbar Panel Brown Printed Polyester Curtains for Door 7 Feet, Pack of 2, Brown (Brown, Door 7 Feet)",
        "thumbnail": "https://m.media-amazon.com/images/I/61d1BwLzLOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00NRQOYZG",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 479,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 720,
            "savings_percent": 60.05
        },
        "reviews": {
            "total_reviews": 1553,
            "rating": 4.2
        },
        "title": "Homefab India'S Set Of 2 Royal Silky Cream Door Curtains(Hf042) 7X4Ft.",
        "thumbnail": "https://m.media-amazon.com/images/I/51QH5p3Yz7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07J3K6SRP",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 429,
            "currency": "INR",
            "before_price": 1099,
            "savings_amount": 670,
            "savings_percent": 60.96
        },
        "reviews": {
            "total_reviews": 445,
            "rating": 4.3
        },
        "title": "Polyresin Print Curtain, 8 Feet, Brown (Pack of 2)",
        "thumbnail": "https://m.media-amazon.com/images/I/81FqFgJ2ZuL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KWLB4CX",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 900,
            "savings_percent": 60.04
        },
        "reviews": {
            "total_reviews": 119,
            "rating": 3.7
        },
        "title": "Galaxy Home Decor 3 Piece Combination Polyester 5 ft Window Curtains (Pink)",
        "thumbnail": "https://m.media-amazon.com/images/I/91-UQ3Z+xEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NF67SC9",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 629,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 870,
            "savings_percent": 58.04
        },
        "reviews": {
            "total_reviews": 1753,
            "rating": 4.2
        },
        "title": "LaVichitra Polyester Door Curtain with Floral Net (7ft, Yellow) -2 Pieces",
        "thumbnail": "https://m.media-amazon.com/images/I/81oseadEMML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R7K8288",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 400,
            "savings_percent": 44.49
        },
        "reviews": {
            "total_reviews": 47,
            "rating": 3.6
        },
        "title": "Sponsored Ad - Rayna Decor 1 Piece Suede Velvet Texture Eyelet Door Curtain (4.5 x 7 feet) Turkish Blue1",
        "thumbnail": "https://m.media-amazon.com/images/I/91TECNifoGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08P5P7WZ7",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 200,
            "savings_percent": 33.39
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Rayna Decor Faux Silk Soft Eyelet Window Curtain - Set of 2 (4 x 5 feet , Grey )",
        "thumbnail": "https://m.media-amazon.com/images/I/81RodBWVQjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08296SBPP",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 2000,
            "savings_amount": 1351,
            "savings_percent": 67.55
        },
        "reviews": {
            "total_reviews": 113,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Decoscapes Polyester & Polyester Blend Floral Grommet Curtain, Door - 7 Feet, Grey, Pack of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/813sta7BGAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07889L7PK",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 380,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 419,
            "savings_percent": 52.44
        },
        "reviews": {
            "total_reviews": 1194,
            "rating": 4.2
        },
        "title": "Home Sizzler Shalimar Frill Panel Garden 2 Piece Eyelet Polyester Window Curtain Set - 5ft, Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/81dRAItVB7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07S7FX4LB",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 109,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 290,
            "savings_percent": 72.68
        },
        "reviews": {
            "total_reviews": 1271,
            "rating": 3.7
        },
        "title": "Srk Trendz Polyresin Grommet Window Curtain, 5 Feet, Wine, Pack of 1",
        "thumbnail": "https://m.media-amazon.com/images/I/61owGnLFbTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P8F74L9",
        "category": "Home Decorators",
        "product": "Curtains",
        "type": "Curtains",
        "price": {
            "discounted": true,
            "current_price": 219,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 580,
            "savings_percent": 72.59
        },
        "reviews": {
            "total_reviews": 1320,
            "rating": 3.7
        },
        "title": "Geo Nature Polyester Eyelet Door Curtain (7 feet, Dark Pink) - Pack of 2 Piece",
        "thumbnail": "https://m.media-amazon.com/images/I/71ND0bBUp3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NDFF743",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 934,
            "currency": "INR",
            "before_price": 3099,
            "savings_amount": 2165,
            "savings_percent": 69.86
        },
        "reviews": {
            "total_reviews": 64,
            "rating": 3.1
        },
        "title": "RN HOME FURNISHING Combo 160 GMS Glace Cotton Set of 4 Double Bedsheet and 8 Pillow Covers (Multicolour)",
        "thumbnail": "https://m.media-amazon.com/images/I/71PeeT17ENL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HRRBS6Z",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 570,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 629,
            "savings_percent": 52.46
        },
        "reviews": {
            "total_reviews": 3171,
            "rating": 4.1
        },
        "title": "SheetKart Floral 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Sea Green",
        "thumbnail": "https://m.media-amazon.com/images/I/A1bD9ur6IvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B016J5I5GU",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 995,
            "savings_amount": 396,
            "savings_percent": 39.8
        },
        "reviews": {
            "total_reviews": 4599,
            "rating": 4.1
        },
        "title": "HUESLAND by Ahmedabad Cotton Superior Cotton Double Bedsheet with 2 Pillow Covers - Green",
        "thumbnail": "https://m.media-amazon.com/images/I/51BlBTWj08L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08NZT59RV",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 355,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 644,
            "savings_percent": 64.46
        },
        "reviews": {
            "total_reviews": 27,
            "rating": 3.3
        },
        "title": "PRIDHI 180TC Polly Cotton Double Bedsheet with 2 Pillow Cover Rajasthani New Design7",
        "thumbnail": "https://m.media-amazon.com/images/I/41XmmFWksbL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JP1JFZ6",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 570,
            "currency": "INR",
            "before_price": 995,
            "savings_amount": 425,
            "savings_percent": 42.71
        },
        "reviews": {
            "total_reviews": 2140,
            "rating": 4.2
        },
        "title": "HUESLAND by Ahmedabad Cotton 144 TC Cotton Double Bedsheet with 2 Pillow Covers - Grey and Yellow",
        "thumbnail": "https://m.media-amazon.com/images/I/714Ig1a-a2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B06Y55KBRT",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 759,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 641,
            "savings_percent": 45.79
        },
        "reviews": {
            "total_reviews": 3510,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Lily Bloom 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green",
        "thumbnail": "https://m.media-amazon.com/images/I/91WpPGL-YmL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07712B75R",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 729,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 671,
            "savings_percent": 47.93
        },
        "reviews": {
            "total_reviews": 1425,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Ditsy Dale 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/91fa+q71ndL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B077121LLW",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 759,
            "currency": "INR",
            "before_price": 1400,
            "savings_amount": 641,
            "savings_percent": 45.79
        },
        "reviews": {
            "total_reviews": 1287,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Amazon Brand - Solimo Floral Swirls 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Purple",
        "thumbnail": "https://m.media-amazon.com/images/I/91OSxZ3oA9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082PPLHQN",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1399,
            "savings_amount": 750,
            "savings_percent": 53.61
        },
        "reviews": {
            "total_reviews": 1158,
            "rating": 4
        },
        "title": "Loreto – A Quality Linen Brand 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers - Polka, Yellow & Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/71vDkHrBhTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08BZPQMQQ",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 389,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 610,
            "savings_percent": 61.06
        },
        "reviews": {
            "total_reviews": 1940,
            "rating": 4
        },
        "title": "BADOTI Poly Cotton Printed 1 Double Bedsheet with 2 Pillow Covers (Double, Blue Heart)",
        "thumbnail": "https://m.media-amazon.com/images/I/81IbLgtiIkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T7RJTKF",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 498,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1001,
            "savings_percent": 66.78
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.4
        },
        "title": "Ab Home Decor 210 TC Glace Cotton Satin Stripes Plain Bedsheet for Double Bed King Size with Two Pillow Covers for Home-Ho...",
        "thumbnail": "https://m.media-amazon.com/images/I/519Gxf9GfwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L57HF3Z",
        "category": "Home Decorators",
        "product": "Bedsheets",
        "type": "Bedsheets",
        "price": {
            "discounted": true,
            "current_price": 439,
            "currency": "INR",
            "before_price": 1099,
            "savings_amount": 660,
            "savings_percent": 60.05
        },
        "reviews": {
            "total_reviews": 232,
            "rating": 4
        },
        "title": "TIB Cotton Feel Polycotton King Size Bed Sheet with 2 Pillow Covers,90X100 Inches, Box Multi",
        "thumbnail": "https://m.media-amazon.com/images/I/51KiZpHb4KL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V4FHKDF",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 248,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 251,
            "savings_percent": 50.3
        },
        "reviews": {
            "total_reviews": 228,
            "rating": 3.7
        },
        "title": "Status PVC Rubber Outdoor Door Mat for Home/Bathroom/Bedroom/Office/Main Door/Rainy Season (41x61 cm,Black)-Pack of 1",
        "thumbnail": "https://m.media-amazon.com/images/I/711jZoRxMBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NCYBRBB",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 450,
            "savings_percent": 60.08
        },
        "reviews": {
            "total_reviews": 759,
            "rating": 3.9
        },
        "title": "Saral Home Bath Mat (Brown, Microfiber, 35X50 CM), Set of 2",
        "thumbnail": "https://m.media-amazon.com/images/I/81nUvkWlONL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08JVQK133",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 2799,
            "currency": "INR",
            "before_price": 5499,
            "savings_amount": 2700,
            "savings_percent": 49.1
        },
        "reviews": {
            "total_reviews": 31,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Carpet Collection Shaggy Modern Rug Soft Handwoven Plain California Premium Shag Collection with 3x5 feet (...",
        "thumbnail": "https://m.media-amazon.com/images/I/61DoFLXMsiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0899NTKG7",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 249,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 750,
            "savings_percent": 75.08
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Sponsored Ad - Master Home Pure Cotton Super Soft Anti Skid Water Obsorbing Bath Mat - 50 cm x 80 cm, Multi Color",
        "thumbnail": "https://m.media-amazon.com/images/I/81hzLBUWn2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0899D8C28",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 220,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 779,
            "savings_percent": 77.98
        },
        "reviews": {
            "total_reviews": 40,
            "rating": 3.7
        },
        "title": "Sponsored Ad - Master Home Pure Cotton Super Soft Anti Skid Water Obsorbing Bath Mat - 50 cm x 80 cm, Multi Color",
        "thumbnail": "https://m.media-amazon.com/images/I/71IRWBjogEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08BYW9DHJ",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 239,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 460,
            "savings_percent": 65.81
        },
        "reviews": {
            "total_reviews": 41,
            "rating": 3.4
        },
        "title": "Sponsored Ad - Master Decore Pure Cotton Bathmats 50x80 cm, 20X30 Inch",
        "thumbnail": "https://m.media-amazon.com/images/I/816cvwv5XoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HSHR3TM",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 379,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 420,
            "savings_percent": 52.57
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.4
        },
        "title": "SRX Production New Microfibre Door mats Cute Panda Design - Microfiber Water Absorbent Bathroom - Floor -Kitchen with Supe...",
        "thumbnail": "https://m.media-amazon.com/images/I/71GN6T0TOZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08X3PVPZP",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 220,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 479,
            "savings_percent": 68.53
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Modern Fab Pure Microfiber Super Soft Anti Skid Door Mat - 50 cm x 80 cm",
        "thumbnail": "https://m.media-amazon.com/images/I/81rszWVV6QL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08WHPSWQN",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.8
        },
        "title": "RYLAN Chenille Microfiber Bath Mat for Bathroom Entrance Soft Door Mat/Home Hotel Balcony Floor Carpet, Doormat for Home, ...",
        "thumbnail": "https://m.media-amazon.com/images/I/71VilT1J5-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HP8B8X9",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 355,
            "currency": "INR",
            "before_price": 1650,
            "savings_amount": 1295,
            "savings_percent": 78.48
        },
        "reviews": {
            "total_reviews": 52,
            "rating": 4.1
        },
        "title": "ROYAL SWADESHI DECOR - PVC Cushion Dirt Rub Off Mesh Entrance Doormat | Foot Mat with Anti-Slip Rubber Back | Door Mat for...",
        "thumbnail": "https://m.media-amazon.com/images/I/51fTJKxGIHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08L6ZR11T",
        "category": "Home Decorators",
        "product": "Doormats",
        "type": "Doormats",
        "price": {
            "discounted": true,
            "current_price": 299,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 400,
            "savings_percent": 57.22
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "SRX SR Production All New Microfibre Door mats Cute Cate Shape mat for Kids - Microfiber Absorbent Bathroom Mats - with Su...",
        "thumbnail": "https://m.media-amazon.com/images/I/71S9+MTkiML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "9388144317",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 99,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 51,
            "savings_percent": 34
        },
        "reviews": {
            "total_reviews": 14904,
            "rating": 4.4
        },
        "title": "The Richest Man in Babylon",
        "thumbnail": "https://m.media-amazon.com/images/I/81+ybHMWm9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9390166268",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 240,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 159,
            "savings_percent": 39.85
        },
        "reviews": {
            "total_reviews": 5315,
            "rating": 4.5
        },
        "title": "Sponsored Ad - The Psychology of Money",
        "thumbnail": "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9387944891",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 210,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 140,
            "savings_percent": 40
        },
        "reviews": {
            "total_reviews": 9142,
            "rating": 4.4
        },
        "title": "Sponsored Ad - The 5 AM Club: Own Your Morning, Elevate Your Life",
        "thumbnail": "https://m.media-amazon.com/images/I/71eijJe2ntL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "0143451847",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 140,
            "currency": "INR",
            "before_price": 250,
            "savings_amount": 110,
            "savings_percent": 44
        },
        "reviews": {
            "total_reviews": 90,
            "rating": 4.7
        },
        "title": "Grandparents' Bag of Stories",
        "thumbnail": "https://m.media-amazon.com/images/I/712b9PkcstL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "0670095206",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 183,
            "currency": "INR",
            "before_price": 250,
            "savings_amount": 67,
            "savings_percent": 26.8
        },
        "reviews": {
            "total_reviews": 1390,
            "rating": 4.3
        },
        "title": "The Archer",
        "thumbnail": "https://m.media-amazon.com/images/I/71pjaEBslxL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "110744277X",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 469,
            "currency": "INR",
            "before_price": 750,
            "savings_amount": 281,
            "savings_percent": 37.47
        },
        "reviews": {
            "total_reviews": 1722,
            "rating": 4.3
        },
        "title": "The Official Cambridge Guide To Ielts Student's Book With Answers With Dvd Rom",
        "thumbnail": "https://m.media-amazon.com/images/I/91oc6Hcx1ML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "935376517X",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 135,
            "currency": "INR",
            "before_price": 225,
            "savings_amount": 90,
            "savings_percent": 40
        },
        "reviews": {
            "total_reviews": 207,
            "rating": 4.5
        },
        "title": "101 Panchatantra Stories for Children: Colourful Illustrated Stories",
        "thumbnail": "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "1444775812",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 280,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 119,
            "savings_percent": 29.82
        },
        "reviews": {
            "total_reviews": 23669,
            "rating": 4.6
        },
        "title": "A Man Called Ove: The life-affirming bestseller that will brighten your day",
        "thumbnail": "https://m.media-amazon.com/images/I/916fuxlx90L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08776ZZY4",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 91.2,
            "currency": "INR",
            "before_price": 99,
            "savings_amount": 7.8,
            "savings_percent": 7.88
        },
        "reviews": {
            "total_reviews": 39763,
            "rating": 4.5
        },
        "title": "Think and Grow Rich",
        "thumbnail": "https://m.media-amazon.com/images/I/711RcAn0EiL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9389432014",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": true,
            "current_price": 319,
            "currency": "INR",
            "before_price": 650,
            "savings_amount": 331,
            "savings_percent": 50.92
        },
        "reviews": {
            "total_reviews": 2667,
            "rating": 4.4
        },
        "title": "World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set",
        "thumbnail": "https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "9389432642",
        "category": "Home Decorators",
        "product": "Books",
        "type": "Books",
        "price": {
            "discounted": false,
            "current_price": 149,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 167,
            "rating": 4.4
        },
        "title": "Sponsored Ad - The Power of A Positive Attitude: Your Road To Success",
        "thumbnail": "https://m.media-amazon.com/images/I/81-5+1yT9sL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08C47FKRD",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 269,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 430,
            "savings_percent": 61.52
        },
        "reviews": {
            "total_reviews": 418,
            "rating": 4.3
        },
        "title": "JAIPUR ACE Polyresin Monk Showpiece Small Multicolour,Set of 4",
        "thumbnail": "https://m.media-amazon.com/images/I/41US6j8QmzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HWZZ7RJ",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 324,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1175,
            "savings_percent": 78.39
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Radhika Gift Items Kamdhenu Cow with Calf and Krishna Idol Showpiece in Brass Like Metal for Home Décor and Decorative Gif...",
        "thumbnail": "https://m.media-amazon.com/images/I/51i-HNVqzML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084DCPLQ3",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 385,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 414,
            "savings_percent": 51.81
        },
        "reviews": {
            "total_reviews": 163,
            "rating": 4.4
        },
        "title": "Techno E-Tail 20 LED Waterdrop Decorative String Lights, Diwali Christmas Fairy Lights for Home Decoration (Warm White)",
        "thumbnail": "https://m.media-amazon.com/images/I/71JtWWEGPKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F8Q2YQ9",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 149,
            "currency": "INR",
            "before_price": 355,
            "savings_amount": 206,
            "savings_percent": 58.03
        },
        "reviews": {
            "total_reviews": 621,
            "rating": 3.9
        },
        "title": "DEVU PARBAT ENTERPRISE Stone Glossy and Decorative Garden and Glass Pebbles (Multicolour)",
        "thumbnail": "https://m.media-amazon.com/images/I/61SuIl6+McL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MBYSLSR",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 159,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1340,
            "savings_percent": 89.39
        },
        "reviews": {
            "total_reviews": 111,
            "rating": 4.3
        },
        "title": "Wolpin Wall Stickers DIY Wallpaper Decal (45 x 500 cm) 3D Brick Self Adhesive House Office Decorative PVC Vinyl, Living Ro...",
        "thumbnail": "https://m.media-amazon.com/images/I/71HmY04AQZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00RFQH03M",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 1546,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 3453,
            "savings_percent": 69.07
        },
        "reviews": {
            "total_reviews": 15,
            "rating": 4.4
        },
        "title": "Sponsored Ad - 999Store Multiple Frames Wall Art Panels Wooden Frame Printed Forest River Like Modern Wall Art Painting - ...",
        "thumbnail": "https://m.media-amazon.com/images/I/719JtbMknXL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07H1GVVG2",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 798,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1201,
            "savings_percent": 60.08
        },
        "reviews": {
            "total_reviews": 638,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Webelkart Iron Mirror Wall Sconce Tealight Holder",
        "thumbnail": "https://m.media-amazon.com/images/I/71l76zyEzUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B010D908JK",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 1499,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 3500,
            "savings_percent": 70.01
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 4.8
        },
        "title": "Sponsored Ad - 999Store Framed Ready to Hang Multiple Frames Printed Wooden Frame red Leaves Wall Art Panels for Living Ro...",
        "thumbnail": "https://m.media-amazon.com/images/I/81g+1UjtRGL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GCMCT84",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 172,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 827,
            "savings_percent": 82.78
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.4
        },
        "title": "RV Art Decorative Elephant with Bell Door hangings for Main Door Living/Rooms (Set of 2 Piece)",
        "thumbnail": "https://m.media-amazon.com/images/I/61BRvBLDQ4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TP8V7LP",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 1819,
            "savings_amount": 1420,
            "savings_percent": 78.06
        },
        "reviews": {
            "total_reviews": 512,
            "rating": 4.3
        },
        "title": "SAF Set of 4 Work Hard Dream Big Motivational UV Coated Home Decorative Gift Item Framed Painting 19 inch X 19 inch SAF_SE...",
        "thumbnail": "https://m.media-amazon.com/images/I/51dorVUUaRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B078Y8CKFQ",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 664,
            "currency": "INR",
            "before_price": 875,
            "savings_amount": 211,
            "savings_percent": 24.11
        },
        "reviews": {
            "total_reviews": 50,
            "rating": 4.4
        },
        "title": "ExclusiveLane 'Birds and Bell' Garden Balcony Wall Decorative Hanging and Wind Chimes for Home with Good Sound (Metal and ...",
        "thumbnail": "https://m.media-amazon.com/images/I/61fOxMPjtjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MC9VP5X",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 1,
            "savings_percent": 0.29
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "Vijayalakshmi Clay Item Hollow Face Aquarium Decorative Ornaments for Fish Tank (Multicolor)",
        "thumbnail": "https://m.media-amazon.com/images/I/61iJ-WgCvzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T1XX8MB",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 349,
            "currency": "INR",
            "before_price": 399,
            "savings_amount": 50,
            "savings_percent": 12.53
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.7
        },
        "title": "Sponsored Ad - Vail Creations Made in India Decorative Items for Birthday Party (Black Happy Birthday Banner, 3 Golden Fri...",
        "thumbnail": "https://m.media-amazon.com/images/I/91E8vjNleJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MBW1TS8",
        "category": "Home Decorators",
        "product": "Decoratives",
        "type": "Decoratives",
        "price": {
            "discounted": true,
            "current_price": 159,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 1340,
            "savings_percent": 89.39
        },
        "reviews": {
            "total_reviews": 93,
            "rating": 4.4
        },
        "title": "Wolpin Wall Stickers DIY Wallpaper Decal (45 x 500 cm) 3D Brick Self Adhesive Home Office Decorative PVC Vinyl, Living Roo...",
        "thumbnail": "https://m.media-amazon.com/images/I/71ohtkj8w-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08696XB4B",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 8499,
            "savings_amount": 1500,
            "savings_percent": 17.65
        },
        "reviews": {
            "total_reviews": 14958,
            "rating": 4.2
        },
        "title": "Redmi 9A (Nature Green, 2GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor",
        "thumbnail": "https://m.media-amazon.com/images/I/71hDPUM7VPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08697N43N",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 8799,
            "currency": "INR",
            "before_price": 10999,
            "savings_amount": 2200,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 12262,
            "rating": 4
        },
        "title": "Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08697MJDK",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 9499,
            "currency": "INR",
            "before_price": 11999,
            "savings_amount": 2500,
            "savings_percent": 20.84
        },
        "reviews": {
            "total_reviews": 15614,
            "rating": 4.2
        },
        "title": "Redmi 9 Prime (Mint Green, 4GB RAM, 64GB Storage)- Full HD+ Display & AI Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/71TwXw2LQRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08697N43M",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 7499,
            "currency": "INR",
            "before_price": 9499,
            "savings_amount": 2000,
            "savings_percent": 21.05
        },
        "reviews": {
            "total_reviews": 14958,
            "rating": 4.2
        },
        "title": "Redmi 9A (Nature Green, 3GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor",
        "thumbnail": "https://m.media-amazon.com/images/I/71hDPUM7VPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086978F2L",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 8499,
            "savings_amount": 1500,
            "savings_percent": 17.65
        },
        "reviews": {
            "total_reviews": 14958,
            "rating": 4.2
        },
        "title": "Redmi 9A (Sea Blue, 2GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor",
        "thumbnail": "https://m.media-amazon.com/images/I/71hDPUM7VPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MTC7B5",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 21490,
            "currency": "INR",
            "before_price": 25990,
            "savings_amount": 4500,
            "savings_percent": 17.31
        },
        "reviews": {
            "total_reviews": 1002,
            "rating": 4
        },
        "title": "Sponsored Ad - OPPO F17 Pro (Metallic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61lKU7ZIOQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08LRGD1T1",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 35990,
            "currency": "INR",
            "before_price": 38990,
            "savings_amount": 3000,
            "savings_percent": 7.69
        },
        "reviews": {
            "total_reviews": 95,
            "rating": 4
        },
        "title": "Sponsored Ad - OPPO Reno5 Pro 5G (Astral Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/8145DElqceL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444SXZ6",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 11990,
            "currency": "INR",
            "before_price": 15990,
            "savings_amount": 4000,
            "savings_percent": 25.02
        },
        "reviews": {
            "total_reviews": 3330,
            "rating": 4
        },
        "title": "Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B084455L6M",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2207,
            "rating": 4
        },
        "title": "OPPO A12 (Black, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71bp9IpcK-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCDPMR",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 14990,
            "currency": "INR",
            "before_price": 19990,
            "savings_amount": 5000,
            "savings_percent": 25.01
        },
        "reviews": {
            "total_reviews": 4440,
            "rating": 4.1
        },
        "title": "Oppo A52 (Twilight Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71FPmXaDfbL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B084454YKR",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 10990,
            "currency": "INR",
            "before_price": 12990,
            "savings_amount": 2000,
            "savings_percent": 15.4
        },
        "reviews": {
            "total_reviews": 3330,
            "rating": 4
        },
        "title": "OPPO A31 (Mystery Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444XVNP",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 10990,
            "currency": "INR",
            "before_price": 12990,
            "savings_amount": 2000,
            "savings_percent": 15.4
        },
        "reviews": {
            "total_reviews": 3330,
            "rating": 4
        },
        "title": "OPPO A31 (Fantasy White, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L8DV7BX",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 48999,
            "currency": "INR",
            "before_price": 54900,
            "savings_amount": 5901,
            "savings_percent": 10.75
        },
        "reviews": {
            "total_reviews": 328,
            "rating": 4.2
        },
        "title": "Sponsored Ad - New Apple iPhone 11 (64GB) - Black",
        "thumbnail": "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01LZKSVRB",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 25990,
            "currency": "INR",
            "before_price": 29900,
            "savings_amount": 3910,
            "savings_percent": 13.08
        },
        "reviews": {
            "total_reviews": 6233,
            "rating": 4
        },
        "title": "Apple iPhone 7 (32GB) - Black",
        "thumbnail": "https://m.media-amazon.com/images/I/41D9NDiSzjL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XVLNMC7",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 45998,
            "currency": "INR",
            "before_price": 54900,
            "savings_amount": 8902,
            "savings_percent": 16.21
        },
        "reviews": {
            "total_reviews": 1102,
            "rating": 4.3
        },
        "title": "Apple iPhone 8 Plus (128GB) - Silver",
        "thumbnail": "https://m.media-amazon.com/images/I/51ReE2MXWPL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01LXAS8M2",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 29998,
            "currency": "INR",
            "before_price": 34900,
            "savings_amount": 4902,
            "savings_percent": 14.05
        },
        "reviews": {
            "total_reviews": 778,
            "rating": 4.3
        },
        "title": "Apple iPhone 7 (128GB) - Black",
        "thumbnail": "https://m.media-amazon.com/images/I/41sXDQkmnGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XVMJF2D",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 85900,
            "currency": "INR",
            "before_price": 121300,
            "savings_amount": 35400,
            "savings_percent": 29.18
        },
        "reviews": {
            "total_reviews": 605,
            "rating": 4.5
        },
        "title": "Apple iPhone 11 Pro (256GB) - Space Grey",
        "thumbnail": "https://m.media-amazon.com/images/I/61m6DjujESL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L8BQ4H9",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 57504,
            "currency": "INR",
            "before_price": 59900,
            "savings_amount": 2396,
            "savings_percent": 4
        },
        "reviews": {
            "total_reviews": 17425,
            "rating": 4.5
        },
        "title": "New Apple iPhone 11 (128GB) - Green",
        "thumbnail": "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B016BQVIZ2",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": false,
            "current_price": 2800,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Just mobile Quattro™ Folio The distinguished leather case stand for the new iPhone 6 Plus & 6s Plus - Black",
        "thumbnail": "https://m.media-amazon.com/images/I/31kWPuV5V8L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGJJ559",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 13999,
            "currency": "INR",
            "before_price": 15999,
            "savings_amount": 2000,
            "savings_percent": 12.5
        },
        "reviews": {
            "total_reviews": 90979,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71dujTTJDZL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGGYWL6",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 16499,
            "currency": "INR",
            "before_price": 19999,
            "savings_amount": 3500,
            "savings_percent": 17.5
        },
        "reviews": {
            "total_reviews": 134147,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCCSDD",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 4000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 3774,
            "rating": 4.1
        },
        "title": "Samsung Galaxy M11 (Metallic Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71hqi389rcL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGN617M",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 16499,
            "currency": "INR",
            "before_price": 19999,
            "savings_amount": 3500,
            "savings_percent": 17.5
        },
        "reviews": {
            "total_reviews": 134147,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M31 (Space Black, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71OxJeyywSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DJCJBB3",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 18499,
            "currency": "INR",
            "before_price": 22999,
            "savings_amount": 4500,
            "savings_percent": 19.57
        },
        "reviews": {
            "total_reviews": 43202,
            "rating": 4.3
        },
        "title": "Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGH8D2R",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": false,
            "current_price": 13999,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 90979,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MQ622N",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 5999,
            "currency": "INR",
            "before_price": 8499,
            "savings_amount": 2500,
            "savings_percent": 29.42
        },
        "reviews": {
            "total_reviews": 9640,
            "rating": 3.4
        },
        "title": "Samsung Galaxy M01 Core (Black, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71AYb2AGHXL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07KXCKPZZ",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 7990,
            "currency": "INR",
            "before_price": 9990,
            "savings_amount": 2000,
            "savings_percent": 20.02
        },
        "reviews": {
            "total_reviews": 2756,
            "rating": 4.1
        },
        "title": "Vivo Y91i (Ocean Blue, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51FnmxwFHDL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08LRCM9L9",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 9990,
            "currency": "INR",
            "before_price": 13990,
            "savings_amount": 4000,
            "savings_percent": 28.59
        },
        "reviews": {
            "total_reviews": 62,
            "rating": 4.2
        },
        "title": "Vivo Y12s (Glacier Blue, 3GB, 32GB ) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71MeL149KBL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KF2QYN",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 8490,
            "currency": "INR",
            "before_price": 11990,
            "savings_amount": 3500,
            "savings_percent": 29.19
        },
        "reviews": {
            "total_reviews": 764,
            "rating": 4.1
        },
        "title": "Vivo Y91i (Ocean Blue, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51-T19jXchL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MS6FBP",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 12990,
            "currency": "INR",
            "before_price": 16990,
            "savings_amount": 4000,
            "savings_percent": 23.54
        },
        "reviews": {
            "total_reviews": 891,
            "rating": 4.2
        },
        "title": "Vivo Y20 (Purist Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51GkdMbNKfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444WMFG",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 20990,
            "currency": "INR",
            "before_price": 24990,
            "savings_amount": 4000,
            "savings_percent": 16.01
        },
        "reviews": {
            "total_reviews": 151,
            "rating": 3.8
        },
        "title": "Vivo V20 SE Gravity Black, 8GB RAM, 128GB Storage",
        "thumbnail": "https://m.media-amazon.com/images/I/61OnG1u9yLL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MT22SH",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 13990,
            "currency": "INR",
            "before_price": 17990,
            "savings_amount": 4000,
            "savings_percent": 22.23
        },
        "reviews": {
            "total_reviews": 891,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Vivo Y20 (Purist Blue, 6GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51GkdMbNKfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B084457GL6",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 23190,
            "currency": "INR",
            "before_price": 27990,
            "savings_amount": 4800,
            "savings_percent": 17.15
        },
        "reviews": {
            "total_reviews": 609,
            "rating": 4.2
        },
        "title": "Vivo V20 (Sunset Melody, 8GB RAM, 128GB ROM) Without Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/31SKhPpcaeL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08445DF2X",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 20995,
            "currency": "INR",
            "before_price": 29990,
            "savings_amount": 8995,
            "savings_percent": 29.99
        },
        "reviews": {
            "total_reviews": 2450,
            "rating": 4.2
        },
        "title": "Vivo V19 (Piano Black, 8GB RAM, 128GB Storage) Without Offer",
        "thumbnail": "https://m.media-amazon.com/images/I/61GUsaWdigL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MV4H2W",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 10990,
            "currency": "INR",
            "before_price": 12990,
            "savings_amount": 2000,
            "savings_percent": 15.4
        },
        "reviews": {
            "total_reviews": 3330,
            "rating": 4
        },
        "title": "OPPO A31 (Lake Green, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71AHtKejSlL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCD5YS",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 14990,
            "currency": "INR",
            "before_price": 19990,
            "savings_amount": 5000,
            "savings_percent": 25.01
        },
        "reviews": {
            "total_reviews": 4440,
            "rating": 4.1
        },
        "title": "OPPO A52 (Stream White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71RadpHBLhL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07PP2K69Z",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 8990,
            "currency": "INR",
            "before_price": 13990,
            "savings_amount": 5000,
            "savings_percent": 35.74
        },
        "reviews": {
            "total_reviews": 3994,
            "rating": 4.2
        },
        "title": "OPPO A5S (Black, 3GB RAM, 32GB Storage) With No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZU4VsevqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07Y24S2WY",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 10669,
            "currency": "INR",
            "before_price": 15990,
            "savings_amount": 5321,
            "savings_percent": 33.28
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 3.9
        },
        "title": "Oppo A5s (Blue, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/81uJLUPkbvL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444S686",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 7990,
            "currency": "INR",
            "before_price": 10990,
            "savings_amount": 3000,
            "savings_percent": 27.3
        },
        "reviews": {
            "total_reviews": 2207,
            "rating": 4
        },
        "title": "OPPO A12 (Silver, 3GB RAM, 32GB Storage) With No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71EOR9S6maL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MS6R6V",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 12990,
            "currency": "INR",
            "before_price": 15990,
            "savings_amount": 3000,
            "savings_percent": 18.76
        },
        "reviews": {
            "total_reviews": 858,
            "rating": 4
        },
        "title": "OPPO A53 (Fairy White, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71cnZVgDIoL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MTTDJQ",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 14990,
            "currency": "INR",
            "before_price": 20990,
            "savings_amount": 6000,
            "savings_percent": 28.59
        },
        "reviews": {
            "total_reviews": 2783,
            "rating": 4.2
        },
        "title": "OPPO F15 (Blazing Blue, 4GB RAM, 128GB Storage, with offer)",
        "thumbnail": "https://m.media-amazon.com/images/I/512yCSc9nQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07PSHLRJ8",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 7990,
            "currency": "INR",
            "before_price": 10990,
            "savings_amount": 3000,
            "savings_percent": 27.3
        },
        "reviews": {
            "total_reviews": 829,
            "rating": 4.1
        },
        "title": "OPPO A1K (Red, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71XTesfK-bL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08696XM8J",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 9499,
            "currency": "INR",
            "before_price": 11999,
            "savings_amount": 2500,
            "savings_percent": 20.84
        },
        "reviews": {
            "total_reviews": 15614,
            "rating": 4.2
        },
        "title": "Redmi 9 Prime (Space Blue, 4GB RAM, 64GB Storage)- Full HD+ Display & AI Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/71TwXw2LQRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086977TR6",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 4000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 28317,
            "rating": 4.2
        },
        "title": "Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage) - 48MP Quad Camera & Full HD+ Display",
        "thumbnail": "https://m.media-amazon.com/images/I/716tvc8pVEL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077PWBC78",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 12999,
            "currency": "INR",
            "before_price": 16999,
            "savings_amount": 4000,
            "savings_percent": 23.53
        },
        "reviews": {
            "total_reviews": 35349,
            "rating": 4.2
        },
        "title": "Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)- Latest 8nm Snapdragon 720G & Alexa Hands-Free",
        "thumbnail": "https://m.media-amazon.com/images/I/811axeBSeRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MTR9JT",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 12999,
            "currency": "INR",
            "before_price": 16999,
            "savings_amount": 4000,
            "savings_percent": 23.53
        },
        "reviews": {
            "total_reviews": 4553,
            "rating": 3.9
        },
        "title": "Redmi 9 Power (Electric Green, 6GB RAM, 128GB Storage) - 6000mAh Battery | 48MP Quad Camera | Snapdragon 662 Processor",
        "thumbnail": "https://m.media-amazon.com/images/I/61EIaUqatTL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08695YMYC",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 4000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 28317,
            "rating": 4.2
        },
        "title": "Redmi Note 9 (Aqua Green, 4GB RAM, 64GB Storage) - 48MP Quad Camera & Full HD+ Display",
        "thumbnail": "https://m.media-amazon.com/images/I/716tvc8pVEL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B086977J48",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 8493,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 1506,
            "savings_percent": 15.06
        },
        "reviews": {
            "total_reviews": 36414,
            "rating": 4.1
        },
        "title": "Redmi 8A Dual (Sky White, 3GB RAM, 64GB Storage) – Dual Cameras & 5,000 mAH Battery",
        "thumbnail": "https://m.media-amazon.com/images/I/710p2f-zAdL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086985T6R",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 8799,
            "currency": "INR",
            "before_price": 10999,
            "savings_amount": 2200,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 12262,
            "rating": 4
        },
        "title": "Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07X4R63DF",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 36414,
            "rating": 4.1
        },
        "title": "Redmi 8A Dual (Sea Blue, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery",
        "thumbnail": "https://m.media-amazon.com/images/I/71yXShgxvpL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086982VLG",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 9499,
            "currency": "INR",
            "before_price": 11999,
            "savings_amount": 2500,
            "savings_percent": 20.84
        },
        "reviews": {
            "total_reviews": 15614,
            "rating": 4.2
        },
        "title": "Redmi 9 Prime (Matte Black, 4GB RAM, 64GB Storage) - Full HD+ Display & AI Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/71TwXw2LQRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086982ZKF",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 4000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 28317,
            "rating": 4.2
        },
        "title": "Redmi Note 9 (Arctic White, 4GB RAM, 64GB Storage) - 48MP Quad Camera & Full HD+ Display",
        "thumbnail": "https://m.media-amazon.com/images/I/716tvc8pVEL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L8BV998",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 55999,
            "currency": "INR",
            "before_price": 59900,
            "savings_amount": 3901,
            "savings_percent": 6.51
        },
        "reviews": {
            "total_reviews": 17425,
            "rating": 4.5
        },
        "title": "New Apple iPhone 11 (128GB) - (Product) RED",
        "thumbnail": "https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XVMDRZW",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 95900,
            "currency": "INR",
            "before_price": 123900,
            "savings_amount": 28000,
            "savings_percent": 22.6
        },
        "reviews": {
            "total_reviews": 564,
            "rating": 4.5
        },
        "title": "Apple iPhone 11 Pro Max (256GB) - Midnight Green",
        "thumbnail": "https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L5HBCSH",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": false,
            "current_price": 84900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 717,
            "rating": 4.4
        },
        "title": "Sponsored Ad - New Apple iPhone 12 Mini (256GB) - Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L8BJ9VC",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 55999,
            "currency": "INR",
            "before_price": 59900,
            "savings_amount": 3901,
            "savings_percent": 6.51
        },
        "reviews": {
            "total_reviews": 17425,
            "rating": 4.5
        },
        "title": "New Apple iPhone 11 (128GB) - Black",
        "thumbnail": "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L89VM35",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 55999,
            "currency": "INR",
            "before_price": 59900,
            "savings_amount": 3901,
            "savings_percent": 6.51
        },
        "reviews": {
            "total_reviews": 17425,
            "rating": 4.5
        },
        "title": "Sponsored Ad - New Apple iPhone 11 (128GB) - White",
        "thumbnail": "https://m.media-amazon.com/images/I/71QE00iB9IL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L5T31M6",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 134304,
            "currency": "INR",
            "before_price": 139900,
            "savings_amount": 5596,
            "savings_percent": 4
        },
        "reviews": {
            "total_reviews": 206,
            "rating": 4.5
        },
        "title": "New Apple iPhone 12 Pro Max (256GB) - Pacific Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L5TTX14",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 66900,
            "currency": "INR",
            "before_price": 69900,
            "savings_amount": 3000,
            "savings_percent": 4.29
        },
        "reviews": {
            "total_reviews": 717,
            "rating": 4.4
        },
        "title": "New Apple iPhone 12 Mini (64GB) - Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XVLH742",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 85900,
            "currency": "INR",
            "before_price": 121300,
            "savings_amount": 35400,
            "savings_percent": 29.18
        },
        "reviews": {
            "total_reviews": 605,
            "rating": 4.5
        },
        "title": "Apple iPhone 11 Pro (256GB) - Gold",
        "thumbnail": "https://m.media-amazon.com/images/I/61fkdeyq5QL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGH88GL",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 15999,
            "currency": "INR",
            "before_price": 17999,
            "savings_amount": 2000,
            "savings_percent": 11.11
        },
        "reviews": {
            "total_reviews": 90979,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M21 (Midnight Blue, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71dujTTJDZL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08Q493SCC",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 4299,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 1700,
            "savings_percent": 28.34
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.3
        },
        "title": "Sponsored Ad - I KALL K4 (5.5 Inch, 2GB, 16GB, 4GVolTe) (Gold)",
        "thumbnail": "https://m.media-amazon.com/images/I/41-8P7mAWGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DJCJBBN",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 20499,
            "currency": "INR",
            "before_price": 24999,
            "savings_amount": 4500,
            "savings_percent": 18
        },
        "reviews": {
            "total_reviews": 43202,
            "rating": 4.3
        },
        "title": "Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KDZGVK",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 4000,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 3774,
            "rating": 4.1
        },
        "title": "Samsung Galaxy M11 (Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71K413NPv9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGH8ML7",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 15999,
            "currency": "INR",
            "before_price": 17199,
            "savings_amount": 1200,
            "savings_percent": 6.98
        },
        "reviews": {
            "total_reviews": 90979,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M21 (Raven Black, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08RS6KQ67",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 14849,
            "currency": "INR",
            "before_price": 20999,
            "savings_amount": 6150,
            "savings_percent": 29.29
        },
        "reviews": {
            "total_reviews": 16,
            "rating": 2.5
        },
        "title": "(Renewed) Samsung F41 Fusion Blue 6+128GB RAM",
        "thumbnail": "https://m.media-amazon.com/images/I/41RzbWS3MDL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HG8S7KP",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 20490,
            "currency": "INR",
            "before_price": 24990,
            "savings_amount": 4500,
            "savings_percent": 18.01
        },
        "reviews": {
            "total_reviews": 134147,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M31 (Ocean Blue, 8GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCDPNV",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 16990,
            "currency": "INR",
            "before_price": 19990,
            "savings_amount": 3000,
            "savings_percent": 15.01
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.6
        },
        "title": "Vivo Y50 (Iris Blue, 8GB RAM, 128GB Storage) Without Offer",
        "thumbnail": "https://m.media-amazon.com/images/I/51-Lt4PMadL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCC67C",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 13990,
            "currency": "INR",
            "before_price": 18990,
            "savings_amount": 5000,
            "savings_percent": 26.33
        },
        "reviews": {
            "total_reviews": 660,
            "rating": 4.1
        },
        "title": "Vivo Y30 (Dazzle Blue, 4GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61J79fezUgL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KCCSF7",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 8490,
            "currency": "INR",
            "before_price": 11990,
            "savings_amount": 3500,
            "savings_percent": 29.19
        },
        "reviews": {
            "total_reviews": 764,
            "rating": 4.1
        },
        "title": "Vivo Y91i (Black, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51+yaqN2O0L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07KX1S161",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 7990,
            "currency": "INR",
            "before_price": 9990,
            "savings_amount": 2000,
            "savings_percent": 20.02
        },
        "reviews": {
            "total_reviews": 1564,
            "rating": 4.2
        },
        "title": "Vivo Y91i (Fusion Black, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51ZoulFBPGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08LRD6YM1",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 14990,
            "currency": "INR",
            "before_price": 18990,
            "savings_amount": 4000,
            "savings_percent": 21.06
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 3.6
        },
        "title": "Vivo Y20G (Purist Blue, 6GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51YRlT-paHL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DJ8GTWJ",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": false,
            "current_price": 11990,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 31821,
            "rating": 4.3
        },
        "title": "Vivo U10 (Electric Blue, 5000 mAH 18W Fast Charge Battery, 3GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/51ltipMHjiL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086KG11W3",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 13990,
            "currency": "INR",
            "before_price": 18990,
            "savings_amount": 5000,
            "savings_percent": 26.33
        },
        "reviews": {
            "total_reviews": 660,
            "rating": 4.1
        },
        "title": "Vivo Y30 (Emerald Black, 4GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61424WwLFjL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07DJL15MJ",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 9990,
            "currency": "INR",
            "before_price": 10990,
            "savings_amount": 1000,
            "savings_percent": 9.1
        },
        "reviews": {
            "total_reviews": 31821,
            "rating": 4.3
        },
        "title": "Vivo U10 (Thunder Black,5000 mAH 18W Fast Charge Battery, 3GB RAM, 32GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/51EnyMldjGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08445DF2X",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 20995,
            "currency": "INR",
            "before_price": 29990,
            "savings_amount": 8995,
            "savings_percent": 29.99
        },
        "reviews": {
            "total_reviews": 2450,
            "rating": 4.2
        },
        "title": "Vivo V19 (Piano Black, 8GB RAM, 128GB Storage) Without Offer",
        "thumbnail": "https://m.media-amazon.com/images/I/61GUsaWdigL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MT22SH",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 13990,
            "currency": "INR",
            "before_price": 17990,
            "savings_amount": 4000,
            "savings_percent": 22.23
        },
        "reviews": {
            "total_reviews": 891,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Vivo Y20 (Purist Blue, 6GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/51GkdMbNKfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444XXKV",
        "category": "Mobiles",
        "product": "Vivo",
        "type": "Vivo",
        "price": {
            "discounted": true,
            "current_price": 22990,
            "currency": "INR",
            "before_price": 30990,
            "savings_amount": 8000,
            "savings_percent": 25.81
        },
        "reviews": {
            "total_reviews": 2450,
            "rating": 4.2
        },
        "title": "Vivo V19 (Mystic Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/61DlqYmSLOL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B071P3764Z",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 42356,
            "currency": "INR",
            "before_price": 77000,
            "savings_amount": 34644,
            "savings_percent": 44.99
        },
        "reviews": {
            "total_reviews": 762,
            "rating": 4.1
        },
        "title": "Apple iPhone 8 (Gold, 256GB)",
        "thumbnail": "https://m.media-amazon.com/images/I/51fqTrJaTvL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08Q4C8RJ1",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": true,
            "current_price": 4299,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 1700,
            "savings_percent": 28.34
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.3
        },
        "title": "Sponsored Ad - I KALL K4 (5.5 Inch, 2GB, 16GB, 4GVolTe) (Red)",
        "thumbnail": "https://m.media-amazon.com/images/I/41-8P7mAWGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L5W5Z9Q",
        "category": "Mobiles",
        "product": "Apple iphone",
        "type": "Apple iphone",
        "price": {
            "discounted": false,
            "current_price": 94900,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 637,
            "rating": 4.6
        },
        "title": "New Apple iPhone 12 (256GB) - Blue",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07PTLDNCH",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 8990,
            "currency": "INR",
            "before_price": 13990,
            "savings_amount": 5000,
            "savings_percent": 35.74
        },
        "reviews": {
            "total_reviews": 3994,
            "rating": 4.2
        },
        "title": "OPPO A5S (Blue, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/91FvWRrG9ML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MRYXN7",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 15490,
            "currency": "INR",
            "before_price": 17990,
            "savings_amount": 2500,
            "savings_percent": 13.9
        },
        "reviews": {
            "total_reviews": 858,
            "rating": 4
        },
        "title": "OPPO A53 (Fancy Blue, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71QJyXZYPuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MV6MGW",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1002,
            "rating": 4
        },
        "title": "OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71cLxfNqyFL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08444Z7QM",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 11328,
            "currency": "INR",
            "before_price": 13990,
            "savings_amount": 2662,
            "savings_percent": 19.03
        },
        "reviews": {
            "total_reviews": 124,
            "rating": 3.5
        },
        "title": "OPPO A15s (Fancy White, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71UnRvRqfxL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07MBP65HK",
        "category": "Mobiles",
        "product": "Oppo",
        "type": "Oppo",
        "price": {
            "discounted": true,
            "current_price": 11990,
            "currency": "INR",
            "before_price": 16990,
            "savings_amount": 5000,
            "savings_percent": 29.43
        },
        "reviews": {
            "total_reviews": 6665,
            "rating": 4.2
        },
        "title": "OPPO A7 (Glaze Blue, 3GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/51khqzVPLlL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08699CZBC",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 10999,
            "currency": "INR",
            "before_price": 13999,
            "savings_amount": 3000,
            "savings_percent": 21.43
        },
        "reviews": {
            "total_reviews": 15614,
            "rating": 4.2
        },
        "title": "Redmi 9 Prime (Matte Black, 4GB RAM, 128GB Storage) - Full HD+ Display & AI Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/71TwXw2LQRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077Q7GW9V",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 12999,
            "currency": "INR",
            "before_price": 16999,
            "savings_amount": 4000,
            "savings_percent": 23.53
        },
        "reviews": {
            "total_reviews": 35377,
            "rating": 4.2
        },
        "title": "Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free",
        "thumbnail": "https://m.media-amazon.com/images/I/811axeBSeRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077PWJ8RS",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": true,
            "current_price": 14999,
            "currency": "INR",
            "before_price": 18999,
            "savings_amount": 4000,
            "savings_percent": 21.05
        },
        "reviews": {
            "total_reviews": 31870,
            "rating": 4.1
        },
        "title": "Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Alexa Hands-Free",
        "thumbnail": "https://m.media-amazon.com/images/I/71XpBd7i1SL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07X1KT6LD",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 109297,
            "rating": 4.3
        },
        "title": "Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage) | Snapdragon 665 Processor | 48 MP Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/61Z-7BVaFUL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07X4PXKZ7",
        "category": "Mobiles",
        "product": "Redmi",
        "type": "Redmi",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 109297,
            "rating": 4.3
        },
        "title": "Redmi Note 8 (Space Black, 4GB RAM, 64GB Storage) | Snapdragon 665 Processor | 48 MP Quad Camera",
        "thumbnail": "https://m.media-amazon.com/images/I/61wXFmyMLQL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HGJ7WLM",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 15999,
            "currency": "INR",
            "before_price": 18999,
            "savings_amount": 3000,
            "savings_percent": 15.79
        },
        "reviews": {
            "total_reviews": 134147,
            "rating": 4.2
        },
        "title": "Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/71OxJeyywSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B085J1J32G",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 22999,
            "currency": "INR",
            "before_price": 28999,
            "savings_amount": 6000,
            "savings_percent": 20.69
        },
        "reviews": {
            "total_reviews": 32360,
            "rating": 4.4
        },
        "title": "Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)",
        "thumbnail": "https://m.media-amazon.com/images/I/710weRkP-nL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08Q493SCC",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 4299,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 1700,
            "savings_percent": 28.34
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.3
        },
        "title": "Sponsored Ad - I KALL K4 (5.5 Inch, 2GB, 16GB, 4GVolTe) (Gold)",
        "thumbnail": "https://m.media-amazon.com/images/I/41-8P7mAWGL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B089MS3GLM",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 4999,
            "currency": "INR",
            "before_price": 6999,
            "savings_amount": 2000,
            "savings_percent": 28.58
        },
        "reviews": {
            "total_reviews": 9640,
            "rating": 3.4
        },
        "title": "Samsung Galaxy M01 Core (Blue, 1GB RAM, 16GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/71ahT-X2FgL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08WC63M33",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 13999,
            "currency": "INR",
            "before_price": 14999,
            "savings_amount": 1000,
            "savings_percent": 6.67
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 3.2
        },
        "title": "Samsung Galaxy A12 (Black,4GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/91dUPqvXhbL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08WC387F8",
        "category": "Mobiles",
        "product": "Samsung",
        "type": "Samsung",
        "price": {
            "discounted": true,
            "current_price": 12999,
            "currency": "INR",
            "before_price": 13999,
            "savings_amount": 1000,
            "savings_percent": 7.14
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 3.2
        },
        "title": "Samsung Galaxy A12 (Blue,4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        "thumbnail": "https://m.media-amazon.com/images/I/91te-9mP2JL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B086LNYL7S",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 600,
            "savings_amount": 201,
            "savings_percent": 33.5
        },
        "reviews": {
            "total_reviews": 27,
            "rating": 4.3
        },
        "title": "Sponsored Ad - ORION Choco Pie, Chocolate Coated Soft Biscuit, 4 x 12 Piece Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/71R8UnZse9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00S9BSEB4",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 30,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 970,
            "rating": 4.5
        },
        "title": "Britannia Marie Gold Biscuits, 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/71S7cqqMMsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00S9BWOVA",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 35,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 914,
            "rating": 4.6
        },
        "title": "Britannia Treat Jim Jam Biscuits, 150g",
        "thumbnail": "https://m.media-amazon.com/images/I/61OUIkFw2OL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00OHW4HXI",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 10,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 580,
            "rating": 4.6
        },
        "title": "Britannia Bourbon - The Original Biscuits, 60g Pouch",
        "thumbnail": "https://m.media-amazon.com/images/I/71PSZeJVEsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07L5R3BPY",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 112,
            "currency": "INR",
            "before_price": 180,
            "savings_amount": 68,
            "savings_percent": 37.78
        },
        "reviews": {
            "total_reviews": 7164,
            "rating": 4.3
        },
        "title": "Sunfeast Farmlite Digestive High Fibre Biscuits, 1kg",
        "thumbnail": "https://m.media-amazon.com/images/I/6106aXc6mpL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00YDG4IXW",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 170,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2849,
            "rating": 3.8
        },
        "title": "Karachi Fruit Biscuit - Premium, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/91E69OWeYvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z1W6BGN",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 435,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 18,
            "rating": 4.3
        },
        "title": "Sponsored Ad - The Health Factory Multi-Protein Bread, 250 Gm (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/71fO8odESjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083FSNJH9",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 200,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 5
        },
        "title": "Sponsored Ad - Ossoro Banana Nut Bread, 30 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/51OWOtbx9WL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0746LBW3Z",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 150,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 42,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Wingreens Farms Multigrain Flatbread , 100g",
        "thumbnail": "https://m.media-amazon.com/images/I/71jFxF5bWiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F7NKYP",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 40,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 454,
            "rating": 4.2
        },
        "title": "English Oven 100 % Whole Wheat Bread, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71YLQwJhqDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F7JCH1",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 30,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 411,
            "rating": 4.2
        },
        "title": "English Oven Sandwich Bread, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/713ygtL7QiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GCRG24Z",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 299,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 3.4
        },
        "title": "Sponsored Ad - The Gourmet Jar Sundried Tomato Garlic Spread (with Naga Chilli), 190 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61DfFtfg27L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00RT34VSS",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 79,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 170,
            "rating": 4.3
        },
        "title": "Funfoods Sandwich Spread Eggless - Cucumber & Carrot, 300g",
        "thumbnail": "https://m.media-amazon.com/images/I/91R4hQyU8ML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085PDKHG8",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 194,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 105,
            "savings_percent": 35.12
        },
        "reviews": {
            "total_reviews": 254,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Nutralite Choco Spread Crunchy Quinoa, 275g",
        "thumbnail": "https://m.media-amazon.com/images/I/71P7EhHtEbL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Y68JWJ",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 139.2,
            "currency": "INR",
            "before_price": 160,
            "savings_amount": 20.8,
            "savings_percent": 13
        },
        "reviews": {
            "total_reviews": 215,
            "rating": 4.4
        },
        "title": "Hershey's Spreads Cocoa with Almond, 150g",
        "thumbnail": "https://m.media-amazon.com/images/I/61W35Bc5IUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071LSY8RY",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 89,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 130,
            "rating": 4.4
        },
        "title": "Veeba Cheese and Chilli Sandwich Spread, 275g (Packaging May Vary)",
        "thumbnail": "https://m.media-amazon.com/images/I/71vHyy0ZBkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07B4KQRZG",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 134,
            "currency": "INR",
            "before_price": 144,
            "savings_amount": 10,
            "savings_percent": 6.94
        },
        "reviews": {
            "total_reviews": 11779,
            "rating": 4.4
        },
        "title": "Maggi 2-Minute Noodles Masala, 70g (Pack of 12)",
        "thumbnail": "https://m.media-amazon.com/images/I/81WyWDbuqsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01H6QIOXK",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 72,
            "currency": "INR",
            "before_price": 86,
            "savings_amount": 14,
            "savings_percent": 16.28
        },
        "reviews": {
            "total_reviews": 24882,
            "rating": 4.4
        },
        "title": "Maggi 2 Minutes Noodles Masala, 560g",
        "thumbnail": "https://m.media-amazon.com/images/I/81tiRzUBKEL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07JQNB7QG",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 162,
            "currency": "INR",
            "before_price": 180,
            "savings_amount": 18,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 5836,
            "rating": 4.4
        },
        "title": "Maggi 2-Minute Special Masala Instant Noodles, 70g (Pack of 12)",
        "thumbnail": "https://m.media-amazon.com/images/I/81qpVyjF20L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07P7Q7D94",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 345,
            "currency": "INR",
            "before_price": 450,
            "savings_amount": 105,
            "savings_percent": 23.33
        },
        "reviews": {
            "total_reviews": 732,
            "rating": 4.4
        },
        "title": "Nongshim Shin Ramyun Noodle So",
        "thumbnail": "https://m.media-amazon.com/images/I/71zZMRAFpLL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B079H9K2R8",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 67,
            "currency": "INR",
            "before_price": 68,
            "savings_amount": 1,
            "savings_percent": 1.47
        },
        "reviews": {
            "total_reviews": 168,
            "rating": 4.5
        },
        "title": "Sunfeast Yippee Noodles - Magic Masala, 420g",
        "thumbnail": "https://m.media-amazon.com/images/I/711s8qUhOyL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B017RBXHHC",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 110,
            "currency": "INR",
            "before_price": 220,
            "savings_amount": 110,
            "savings_percent": 50
        },
        "reviews": {
            "total_reviews": 148,
            "rating": 4.4
        },
        "title": "Savorit Ying Yang Premium Hakka Noodles 400 Gm (Buy 1 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/8140q9d0U5L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07RZT3RK3",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1301,
            "rating": 3.9
        },
        "title": "MAGGI Fusian Hong Kong Spicy Garlic Noodles - 73g Pouch",
        "thumbnail": "https://m.media-amazon.com/images/I/81Un-FcgVTL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00AMXL5BI",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 684,
            "currency": "INR",
            "before_price": 720,
            "savings_amount": 36,
            "savings_percent": 5
        },
        "reviews": {
            "total_reviews": 346,
            "rating": 4.3
        },
        "title": "Indomie Instant Noodles Chicken Flavour (Pack of 40)",
        "thumbnail": "https://m.media-amazon.com/images/I/61gOhqk6eIL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B00FPSNGDK",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 252,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3073,
            "rating": 4.4
        },
        "title": "Nestlé CERELAC Fortified Baby Cereal with Milk, Multigrain & Fruits – From 12 Months, 300g BIB Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/71DvIbCz85L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00AU51TM8",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 235,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 453,
            "rating": 4.4
        },
        "title": "Nestlé CERELAC Baby Cereal with Milk, Rice Vegetables – From 8 Months, 300g BIB Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/81aR65DMjbL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01ET4OI5U",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 274,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3073,
            "rating": 4.4
        },
        "title": "Nestle CERELAC Fortified Baby Cereal with Milk, 5 Grains and Fruits - From 18 to 24 Months, 300g BIB Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/81q2ef8qC6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00FPPJ7IQ",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 246,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 604,
            "rating": 4.5
        },
        "title": "Nestlé CERELAC Baby Cereal with Milk, Wheat-Rice Mixed Veg – From 10 Months, 300g BIB Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/81ID+xtx0EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00I4SYXIK",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 190,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1657,
            "rating": 4.5
        },
        "title": "Nestle CERELAC Baby Cereal with Milk, Wheat Apple – From 6 Months, 300g Bag-In-Box Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/81+jQkH+zgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00I4SYZU6",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 220,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1082,
            "rating": 4.5
        },
        "title": "Nestle CERELAC Baby Cereal with Milk, Wheat Apple Cherry – From 8 Months, 300g Bag-In-Box Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/7161mUYreiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079P5NT67",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 26,
            "rating": 4.3
        },
        "title": "Bruno’s Wild Essentials Dry Dog Food, Sunburn - Duck, Turkey, Salmon, Food for All Life Stages - 12 kgs Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/51Gz4MLFOoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075ZSFQYN",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 24,
            "rating": 4.7
        },
        "title": "Bruno’s Wild Essentials Dry Dog Food, Freespirit - Salmon & Chicken, Food for All Life Stages - 6 kgs",
        "thumbnail": "https://m.media-amazon.com/images/I/51Jg-4ZmmnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B072XW1FSP",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 186,
            "currency": "INR",
            "before_price": 798,
            "savings_amount": 612,
            "savings_percent": 76.69
        },
        "reviews": {
            "total_reviews": 3319,
            "rating": 4.3
        },
        "title": "Pets Empire Stainless Steel Dog Bowl Medium (Buy 1, Get 1 Free), 700 ml",
        "thumbnail": "https://m.media-amazon.com/images/I/61vIUaSzxhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LHS8MX6",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 585,
            "currency": "INR",
            "before_price": 650,
            "savings_amount": 65,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 4468,
            "rating": 4.4
        },
        "title": "Pedigree Puppy Dry Dog Food, Chicken & Milk, 3kg Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/618ObAofLiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07R297C37",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 774,
            "savings_amount": 325,
            "savings_percent": 41.99
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.6
        },
        "title": "Pets Empire Natural Botanic Essential Oil Added Flea & Tick Collar for Dog Puppy Length 66cm+ Pets Empire 100% Natural Fle...",
        "thumbnail": "https://m.media-amazon.com/images/I/71v98nG4MoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HBMB3WW",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 614,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 85,
            "savings_percent": 12.16
        },
        "reviews": {
            "total_reviews": 2043,
            "rating": 4
        },
        "title": "Drools Chicken and Egg Adult Dog Food, 3 kg with Free 1.2 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/710oa5w6m1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07HBFY5VJ",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 617,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 82,
            "savings_percent": 11.73
        },
        "reviews": {
            "total_reviews": 1688,
            "rating": 3.9
        },
        "title": "Drools Chicken and Egg Puppy Dog Food, 3 kg with Free 1.2 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/71kghH-POyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LE8UULQ",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 1403,
            "currency": "INR",
            "before_price": 1650,
            "savings_amount": 247,
            "savings_percent": 14.97
        },
        "reviews": {
            "total_reviews": 591,
            "rating": 4.1
        },
        "title": "Drools Focus Puppy Super Premium Dog Food, 4kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61B2wD5IjVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08517XBSG",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 123,
            "currency": "INR",
            "before_price": 144,
            "savings_amount": 21,
            "savings_percent": 14.58
        },
        "reviews": {
            "total_reviews": 2208,
            "rating": 4.4
        },
        "title": "Sunfeast YiPPee! Magic Masala Long, slurpy Noodles | with Real Vegetables and nutrients | 12 x 70g Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/91n+aMH53jL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01HMRV5MA",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": false,
            "current_price": 60,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1115,
            "rating": 4.3
        },
        "title": "Knorr Mast Masala Soupy Noodles, 300g (Pack of 4 x 75g)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Z9b5-QF9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0859V9XDT",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 38,
            "currency": "INR",
            "before_price": 45,
            "savings_amount": 7,
            "savings_percent": 15.56
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 3.3
        },
        "title": "Sunfeast Yippee Quik Mealz Veggie Delight Noodles, 70 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71XF+XGjTSL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B075KPCXKF",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 123,
            "currency": "INR",
            "before_price": 125,
            "savings_amount": 2,
            "savings_percent": 1.6
        },
        "reviews": {
            "total_reviews": 1044,
            "rating": 3.7
        },
        "title": "Samyang Hot Chicken Ramen 2X Spicy Noodles, 140 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71iIn7vDKRL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08DJ1VZ5Y",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 550,
            "currency": "INR",
            "before_price": 750,
            "savings_amount": 200,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 4.1
        },
        "title": "Samyang Hot Chicken Flavor Ramen Buldak 3X Spicy Instant Noodles",
        "thumbnail": "https://m.media-amazon.com/images/I/71vY65MHylL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B074QQK24Q",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 70,
            "currency": "INR",
            "before_price": 78,
            "savings_amount": 8,
            "savings_percent": 10.26
        },
        "reviews": {
            "total_reviews": 1001,
            "rating": 4.4
        },
        "url": "https://www.amazon.in/dp/B074QQK24Q",
        "score": "4404.40",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "MAGGI NUTRI-LICIOUS Masala Veg Atta Noodles – (Pack of 4) 290g Pouch",
        "thumbnail": "https://m.media-amazon.com/images/I/81zu71BqgLL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B075YVL4WL",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": true,
            "current_price": 59,
            "currency": "INR",
            "before_price": 68,
            "savings_amount": 9,
            "savings_percent": 13.24
        },
        "reviews": {
            "total_reviews": 2826,
            "rating": 4.3
        },
        "title": "Sunfeast YiPPee! Magic Masala long, slurpy noodles | with real vegetables and nutrients | Six in One Pack, 360g Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/817Fxx+qwWL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01CHV9CHQ",
        "category": "Pantry",
        "product": "Noodles",
        "type": "Noodles",
        "price": {
            "discounted": false,
            "current_price": 45,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 442,
            "rating": 4.2
        },
        "title": "Cup Noodles Veggi Manchow, 70g",
        "thumbnail": "https://m.media-amazon.com/images/I/81tLPyez6XL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B077JSZ95H",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 100,
            "rating": 4.5
        },
        "title": "Britannia Little Hearts BIscuits, 75g",
        "thumbnail": "https://m.media-amazon.com/images/I/71jkWaj+6fL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083LJGP9M",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 158,
            "currency": "INR",
            "before_price": 240,
            "savings_amount": 82,
            "savings_percent": 34.17
        },
        "reviews": {
            "total_reviews": 4108,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Sunfeast Dark Fantasy Choco Fills, 600 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71wFB1Gvy4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00D23M0W8",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 887,
            "rating": 4.5
        },
        "title": "Britannia NutriChoice Digestive High Fibre Biscuits, 100g",
        "thumbnail": "https://m.media-amazon.com/images/I/61xDPr7omUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07B24KS8S",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1008,
            "rating": 4.6
        },
        "title": "Cadbury Oreo Original Vanilla Creme Biscuit Family Pack, 300 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71k8pP7gw1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Q7L6SRG",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 77,
            "currency": "INR",
            "before_price": 105,
            "savings_amount": 28,
            "savings_percent": 26.67
        },
        "reviews": {
            "total_reviews": 6892,
            "rating": 4.4
        },
        "title": "Sunfeast Mom's Magic Cashew and Almond, 600g",
        "thumbnail": "https://m.media-amazon.com/images/I/81MN-1kvlSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01DDAFNM8",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 30,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 496,
            "rating": 4.4
        },
        "title": "Parle Krackjack Biscuits, 200g",
        "thumbnail": "https://m.media-amazon.com/images/I/7160tDE9iKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00BFY2ERM",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 670,
            "rating": 4.5
        },
        "title": "Britannia Bourbon Chocolate Cream Biscuits, 120g",
        "thumbnail": "https://m.media-amazon.com/images/I/61xAnOaTPIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B072LQ7RLS",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 235,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1184,
            "rating": 4
        },
        "title": "Sponsored Ad - Unibic Assorted Cookies 75g (Pack of 10)",
        "thumbnail": "https://m.media-amazon.com/images/I/711ldVGtpHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0118L9WXK",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 69,
            "currency": "INR",
            "before_price": 70,
            "savings_amount": 1,
            "savings_percent": 1.43
        },
        "reviews": {
            "total_reviews": 711,
            "rating": 4.6
        },
        "title": "Parle-g Original Glucose Biscuit, 800g",
        "thumbnail": "https://m.media-amazon.com/images/I/71bufOt9zAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07N32CD9C",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 63,
            "currency": "INR",
            "before_price": 75,
            "savings_amount": 12,
            "savings_percent": 16
        },
        "reviews": {
            "total_reviews": 4674,
            "rating": 4.4
        },
        "title": "Cadbury Oreo Choco Crème Biscuit Family Pack, 300g",
        "thumbnail": "https://m.media-amazon.com/images/I/717MnvNQILL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08MLLPS8J",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 75,
            "currency": "INR",
            "before_price": 100,
            "savings_amount": 25,
            "savings_percent": 25
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Britannia Tiger Krunch Chocochip Biscuits, 400g",
        "thumbnail": "https://m.media-amazon.com/images/I/71PQdRCP+OL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08M553N7C",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 60,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 34,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Sunfeast Farmlite Nuts Digestive 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/81kcli26BAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FMTDXG8",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 420,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Open Secret 25 Choco Almond Cookies in A Box | Chocolate & dryfruit Nutty Snacks| Healthy & Tasty | Immunit...",
        "thumbnail": "https://m.media-amazon.com/images/I/71mN2I7ORSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F8NXQ5",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 50,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 336,
            "rating": 4
        },
        "title": "English Oven Mutigrain Bread, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71ygCxdkRRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F8NXQ9",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 15,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 246,
            "rating": 4.2
        },
        "title": "English Oven Fruit Bun Bread, 100 g",
        "thumbnail": "https://m.media-amazon.com/images/I/717z6-vfg5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F77KW6",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 178,
            "rating": 4.2
        },
        "title": "English Oven Fruit Bread, 200 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71xEmTuz+kL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089DPVLHB",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 89,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 79,
            "rating": 3.9
        },
        "title": "Theobroma Multigrain Loaf, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71VyDDOPIsL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089KVR4QT",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 89,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 38,
            "rating": 3.8
        },
        "title": "Theobroma Whole Wheat Bread Loaf, 400 g",
        "thumbnail": "https://m.media-amazon.com/images/I/81KfQWa0MiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RDPN47J",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 45,
            "currency": "INR",
            "before_price": 49,
            "savings_amount": 4,
            "savings_percent": 8.16
        },
        "reviews": {
            "total_reviews": 33,
            "rating": 3.9
        },
        "title": "The Baker's Dozen Ragi Loaf, 230g",
        "thumbnail": "https://m.media-amazon.com/images/I/71cZgJlYuqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084PN79L2",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 40,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 48,
            "rating": 3.3
        },
        "title": "The Baker's Dozen Wholewheat Pav Bag, 200 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61KRVRdYigL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RM1X6RN",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 70,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 87,
            "rating": 3.6
        },
        "title": "The Baker's Dozen Pita Bread, 100g",
        "thumbnail": "https://m.media-amazon.com/images/I/616kgBWk2tL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RDPN7V3",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 72,
            "currency": "INR",
            "before_price": 85,
            "savings_amount": 13,
            "savings_percent": 15.29
        },
        "reviews": {
            "total_reviews": 149,
            "rating": 3.9
        },
        "title": "The Baker's Dozen Garlic Bread Bag, 160g",
        "thumbnail": "https://m.media-amazon.com/images/I/6104sW12EdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083F8CWGF",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 30,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 228,
            "rating": 3.9
        },
        "title": "English Oven Pizza Base 8\", 200 g",
        "thumbnail": "https://m.media-amazon.com/images/I/81LHQPNzOAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RDPM74T",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 76,
            "currency": "INR",
            "before_price": 90,
            "savings_amount": 14,
            "savings_percent": 15.56
        },
        "reviews": {
            "total_reviews": 34,
            "rating": 3.8
        },
        "title": "The Baker's Dozen Croissant Bag, 70 g",
        "thumbnail": "https://m.media-amazon.com/images/I/61CXuay91EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RHSLL86",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 118,
            "currency": "INR",
            "before_price": 139,
            "savings_amount": 21,
            "savings_percent": 15.11
        },
        "reviews": {
            "total_reviews": 50,
            "rating": 4.2
        },
        "title": "The Baker's Dozen Banana Bread Bag, 200g",
        "thumbnail": "https://m.media-amazon.com/images/I/61U3k7tkEZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00I4SZE88",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 177,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 623,
            "rating": 3.8
        },
        "title": "Nestle Nestum Infant Cereal Stage-3 (10 Months-24 Months) Rice 3 Fruits 300g",
        "thumbnail": "https://m.media-amazon.com/images/I/81YA3y0M+zL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00I4SZLNG",
        "category": "Pantry",
        "product": "Baby foods",
        "type": "Baby foods",
        "price": {
            "discounted": false,
            "current_price": 330,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1164,
            "rating": 4.4
        },
        "title": "Nestlé LACTOGEN 1 Infant Formula Powder (Up to 6 months), Stage 1 - 400g Bag-In-Box Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/71k1IHYUKvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KPGC31X",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 280,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 114,
            "rating": 4.3
        },
        "title": "Pawstively Pet Care Puppy Weaning Diet Food, 300 g",
        "thumbnail": "https://m.media-amazon.com/images/I/512vBd7jdAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LHS8I3A",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 542,
            "currency": "INR",
            "before_price": 600,
            "savings_amount": 58,
            "savings_percent": 9.67
        },
        "reviews": {
            "total_reviews": 5294,
            "rating": 4.4
        },
        "title": "Pedigree Adult Dry Dog Food, Chicken & Vegetables, 3kg Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/61Aqqe8HgjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R186BLN",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 675,
            "currency": "INR",
            "before_price": 750,
            "savings_amount": 75,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 5
        },
        "title": "Pedigree Puppy Dry Dog Food, (High Protein Variant) Chicken, Egg & Rice, 3 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/61LkP1i0m4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P87XYKL",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 350,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1624,
            "rating": 4
        },
        "title": "Meat Up Calcium Bone Pouch , Dog Treats - 25 pieces (230 gm) ( BUY 1 GET 1 FREE)",
        "thumbnail": "https://m.media-amazon.com/images/I/71XV1uJukPL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z84K16R",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 685,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 14,
            "savings_percent": 2
        },
        "reviews": {
            "total_reviews": 230,
            "rating": 3.8
        },
        "title": "Meat Up Chicken Gravy Supplement, Skin+Coat- 80g, Pack of 15 ( Buy 1 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZtI5Z2L7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LHS8UTW",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 542,
            "currency": "INR",
            "before_price": 620,
            "savings_amount": 78,
            "savings_percent": 12.58
        },
        "reviews": {
            "total_reviews": 3938,
            "rating": 4.4
        },
        "title": "Pedigree Adult Dry Dog Food, Meat & Rice, 3kg Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/61eZUadIDJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00PCDCQKM",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 100,
            "savings_percent": 10.01
        },
        "reviews": {
            "total_reviews": 1626,
            "rating": 3.8
        },
        "title": "Purepet Chicken and Vegetables Adult Dog Food, 9 kg",
        "thumbnail": "https://m.media-amazon.com/images/I/81EtRVhUt9L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TDLPMMT",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 420,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 99,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Kennel Kitchen Adult & Puppy Dog Food, Chicken and Lamb Chunks in Gravy, 12 Pouches (12 x 70g Each)",
        "thumbnail": "https://m.media-amazon.com/images/I/71xpGriVKnL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KD9QTH3",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 284,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 15,
            "savings_percent": 5.02
        },
        "reviews": {
            "total_reviews": 100,
            "rating": 4.5
        },
        "title": "Papa Pawsome 100ml Itch No More Massage Oil for Pet Dogs Care with Tea Tree and Lemongrass Essential Oil - Reduces itching...",
        "thumbnail": "https://m.media-amazon.com/images/I/41LB4CRVKrL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075WWBTYQ",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 789,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 10,
            "savings_percent": 1.25
        },
        "reviews": {
            "total_reviews": 4155,
            "rating": 3.7
        },
        "title": "Meat Up Adult Dog Food, 3 kg (Buy 1 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/716AueVULCL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GYHHFKL",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 185,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 114,
            "savings_percent": 38.13
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Pedigrees Pet Food Supplier Press Bone Calcium Treat Healthy & Twisted Chicken Dog Chew (4 Inch, 250 gm Pack of 5 Pcs )",
        "thumbnail": "https://m.media-amazon.com/images/I/71zofS-a5AL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LOZWYPO",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 340,
            "currency": "INR",
            "before_price": 380,
            "savings_amount": 40,
            "savings_percent": 10.53
        },
        "reviews": {
            "total_reviews": 17299,
            "rating": 4.5
        },
        "title": "Nutella Hazelnut Spread with Cocoa, 350g",
        "thumbnail": "https://m.media-amazon.com/images/I/718szvvcyiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00RT31RNU",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 159,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 87,
            "rating": 4.1
        },
        "title": "Dr Oetker Funfoods Chocolate Spread, 425g",
        "thumbnail": "https://m.media-amazon.com/images/I/51ioSuEAT8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Y5WD8B",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 244,
            "currency": "INR",
            "before_price": 295,
            "savings_amount": 51,
            "savings_percent": 17.29
        },
        "reviews": {
            "total_reviews": 1089,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Hershey's Spreads Cocoa with Almond, 350g",
        "thumbnail": "https://m.media-amazon.com/images/I/61W35Bc5IUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00RT3519G",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 69,
            "currency": "INR",
            "before_price": 79,
            "savings_amount": 10,
            "savings_percent": 12.66
        },
        "reviews": {
            "total_reviews": 231,
            "rating": 4.3
        },
        "title": "Funfoods Sandwich Spread - Cheese and Chilli, 275g",
        "thumbnail": "https://m.media-amazon.com/images/I/41mpkCc8gTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01HBFOFNE",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 79,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 483,
            "rating": 4.4
        },
        "title": "Funfoods Dr. Oetker Spread CucumbCarrotEL, 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/41T1fwqZuHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B075JLK8Q8",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 195,
            "currency": "INR",
            "before_price": 290,
            "savings_amount": 95,
            "savings_percent": 32.76
        },
        "reviews": {
            "total_reviews": 245,
            "rating": 4.2
        },
        "title": "Pillsbury Milk Choco Spread, 290g",
        "thumbnail": "https://m.media-amazon.com/images/I/71uBRAZzfyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071X9VHFT",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 67.5,
            "currency": "INR",
            "before_price": 75,
            "savings_amount": 7.5,
            "savings_percent": 10
        },
        "reviews": {
            "total_reviews": 217,
            "rating": 4.3
        },
        "title": "Veeba Carrot and Cucumber Sandwich Spread, 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/714z79UHoyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071ZLL87P",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 75,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 79,
            "rating": 4.3
        },
        "title": "Veeba Carrot and Cucumber Sandwich Spread, 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/71MI-pN37EL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07X9LCP16",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 419,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 226,
            "rating": 4.1
        },
        "title": "LISO Almond Spread | Made with Goodness of Almonds and Belgian Cocoa Powder | 100% Vegetarian with No Palm Oil, 400 gm",
        "thumbnail": "https://m.media-amazon.com/images/I/71wXjKuyZYL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07X6JG5V5",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 273,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 77,
            "savings_percent": 22
        },
        "reviews": {
            "total_reviews": 195,
            "rating": 3.9
        },
        "title": "Epigamia Spreads, Blueberry - 250g",
        "thumbnail": "https://m.media-amazon.com/images/I/614p7vwUGQL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B088L42H8W",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 202,
            "currency": "INR",
            "before_price": 220,
            "savings_amount": 18,
            "savings_percent": 8.18
        },
        "reviews": {
            "total_reviews": 17299,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Nutella Hazelnut Spread with Cocoa Jar, 180 g with Bigger Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/81ta2VWfQVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Y5MN21",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 248,
            "currency": "INR",
            "before_price": 275,
            "savings_amount": 27,
            "savings_percent": 9.82
        },
        "reviews": {
            "total_reviews": 903,
            "rating": 4.4
        },
        "title": "Hershey's Spreads Cocoa, 350g",
        "thumbnail": "https://m.media-amazon.com/images/I/619HGmkXctL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07P4286MZ",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 220,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 4.3
        },
        "title": "Sponsored Ad - THE HONEY SHOP - Honey Mango Spread, Perfect Addition to your Healthy Breakfast (Combination of Tropical Ma...",
        "thumbnail": "https://m.media-amazon.com/images/I/71Y1kmOxYdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VN82BQX",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 120,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 30,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 21,
            "rating": 3.8
        },
        "title": "Wingreens Farms Baked Multigrain Flatbread, 100 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71jFxF5bWiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HMRSK4M",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 20,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Sponsored Ad - Kohinoor Tasty Twist Mumbai Chowpatty Multi-Use Seasoning Pouch, 12 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71HBTRx1PML._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085PDGP1P",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 196,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 103,
            "savings_percent": 34.45
        },
        "reviews": {
            "total_reviews": 291,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Nutralite Choco Spread Calcium Jar, 275 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71GYKmreiqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JNYV377",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 60,
            "currency": "INR",
            "before_price": 65,
            "savings_amount": 5,
            "savings_percent": 7.69
        },
        "reviews": {
            "total_reviews": 552,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Cadbury Oreo Dipped Cookie, 150 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71t07GpieXL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08M424VNC",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 320,
            "currency": "INR",
            "before_price": 500,
            "savings_amount": 180,
            "savings_percent": 36
        },
        "reviews": {
            "total_reviews": 15,
            "rating": 4.2
        },
        "title": "Sponsored Ad - The Flavour Republic Kaju Fruit Biscuits - 800 GMS(Combo Pack 2*400 GMS)",
        "thumbnail": "https://m.media-amazon.com/images/I/817hPuWY-rL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XQTJFTW",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 60,
            "currency": "INR",
            "before_price": 120,
            "savings_amount": 60,
            "savings_percent": 50
        },
        "reviews": {
            "total_reviews": 3174,
            "rating": 4
        },
        "title": "Unibic Cashew Badam Cookies, 500 g",
        "thumbnail": "https://m.media-amazon.com/images/I/81cd463m-6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01NBBAW4H",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": true,
            "current_price": 138,
            "currency": "INR",
            "before_price": 159,
            "savings_amount": 21,
            "savings_percent": 13.21
        },
        "reviews": {
            "total_reviews": 1825,
            "rating": 4.4
        },
        "title": "McVities Digestive Biscuits, 1kg",
        "thumbnail": "https://m.media-amazon.com/images/I/81PQmvMukxL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B078ZW8SBM",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 300,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 236,
            "rating": 4.3
        },
        "title": "Cadbury Biscuits Vanilla Crème Biscuit, 120 gm (Pack of 10)",
        "thumbnail": "https://m.media-amazon.com/images/I/710Ek1vcUyL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01GRH90K0",
        "category": "Pantry",
        "product": "Biscuits",
        "type": "Biscuits",
        "price": {
            "discounted": false,
            "current_price": 30,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 622,
            "rating": 4.5
        },
        "title": "Sunfeast Dark Fantasy Bourbon Bliss, 150g",
        "thumbnail": "https://m.media-amazon.com/images/I/71GPNxlsgZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z84J295",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 462,
            "currency": "INR",
            "before_price": 470,
            "savings_amount": 8,
            "savings_percent": 1.7
        },
        "reviews": {
            "total_reviews": 345,
            "rating": 3.7
        },
        "title": "Meat Up Chicken Gravy Supplement, Skin+Coat- 80g, Pack of 10 ( Buy 1 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/71NNL4AF8iL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VZYBYVV",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 399,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 595,
            "rating": 3.8
        },
        "title": "Meat Up Calcium Bone Jar, Dog Supplement Treats - 240 gm, 30 Pieces (Buy 1 Get 1 Free)",
        "thumbnail": "https://m.media-amazon.com/images/I/71gg7MrtrXL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B076FPGHQX",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 160,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 139,
            "savings_percent": 46.49
        },
        "reviews": {
            "total_reviews": 765,
            "rating": 4.1
        },
        "title": "Foodie Puppies Pet Shampoo Brush | Soothing Massage Rubber Bristles Curry Comb for Dogs & Cats Washing | Professional Qual...",
        "thumbnail": "https://m.media-amazon.com/images/I/61cSWgV0WtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07BWXP7CV",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": true,
            "current_price": 604,
            "currency": "INR",
            "before_price": 710,
            "savings_amount": 106,
            "savings_percent": 14.93
        },
        "reviews": {
            "total_reviews": 1830,
            "rating": 4.4
        },
        "title": "Pedigree Adult Dry Dog Food (High Protein Variant) Chicken, Egg & Rice, 3kg Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/61ZwWm94x-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07W3LKDCK",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 199,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 279,
            "rating": 4.2
        },
        "title": "Meat Up Real Chicken Sausage, Dog Treat (Pack of 2), 150gm per Sausage ( BUY 1 GET 1 FREE)",
        "thumbnail": "https://m.media-amazon.com/images/I/71igsTzQNkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00LSWUIRO",
        "category": "Pantry",
        "product": "Pets",
        "type": "Pets",
        "price": {
            "discounted": false,
            "current_price": 310,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 577,
            "rating": 4.3
        },
        "title": "Pedigree Puppy Dry Dog Food, Milk & Vegetables, 1.2 kg 1.2kg Pack",
        "thumbnail": "https://m.media-amazon.com/images/I/61tYPDippvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Z1X874B",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 285,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 8,
            "rating": 5
        },
        "title": "Sponsored Ad - The Health Factory Multi Protein-lite Bread, 250 Gm (Pack of 3)",
        "thumbnail": "https://m.media-amazon.com/images/I/41gJHp46p3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RL1TWHN",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 88,
            "currency": "INR",
            "before_price": 110,
            "savings_amount": 22,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 31,
            "rating": 3.9
        },
        "title": "The Baker's Dozen Grissini Chilli Garlic Bag, 100g",
        "thumbnail": "https://m.media-amazon.com/images/I/61I9GgxiLgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VP9BXVC",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 120,
            "currency": "INR",
            "before_price": 150,
            "savings_amount": 30,
            "savings_percent": 20
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 3.5
        },
        "title": "Wingreens Farms Baked Chilli Garlic Pita Bread Crisps (100g)",
        "thumbnail": "https://m.media-amazon.com/images/I/717rrKbUjNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01IBTCZNG",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 45,
            "currency": "INR",
            "before_price": 48,
            "savings_amount": 3,
            "savings_percent": 6.25
        },
        "reviews": {
            "total_reviews": 2465,
            "rating": 4.7
        },
        "title": "Amul Butter - Pasteurised, 100g",
        "thumbnail": "https://m.media-amazon.com/images/I/715XDBQH2aL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PDGYXB8",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": true,
            "current_price": 275,
            "currency": "INR",
            "before_price": 350,
            "savings_amount": 75,
            "savings_percent": 21.43
        },
        "reviews": {
            "total_reviews": 159,
            "rating": 4
        },
        "title": "JOSEF MARC Farine De Ble T65 Bread Flour, 2 LBS - Unbleached & High Protein Flour, All Purpose Bread Flour, Strong Bread F...",
        "thumbnail": "https://m.media-amazon.com/images/I/61KBrsYQwDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07RJWVBH5",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 135,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 13,
            "rating": 3.7
        },
        "title": "The Baker's Dozen Bagel Sesame Bag, 160g",
        "thumbnail": "https://m.media-amazon.com/images/I/71m81RaxM7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FDHRQMY",
        "category": "Pantry",
        "product": "Breads",
        "type": "Breads",
        "price": {
            "discounted": false,
            "current_price": 195,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 4.7
        },
        "title": "American Pancake Co Unbleached, Bread Flour (400g) High Protein",
        "thumbnail": "https://m.media-amazon.com/images/I/715COHXFLkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071X9VHFW",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 66,
            "currency": "INR",
            "before_price": 89,
            "savings_amount": 23,
            "savings_percent": 25.84
        },
        "reviews": {
            "total_reviews": 892,
            "rating": 4.3
        },
        "title": "Veeba Cheese and Chilli Sandwich Spread, 275g",
        "thumbnail": "https://m.media-amazon.com/images/I/71vHyy0ZBkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B085PDGP1P",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 196,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 103,
            "savings_percent": 34.45
        },
        "reviews": {
            "total_reviews": 291,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Nutralite Choco Spread Calcium Jar, 275 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71GYKmreiqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V47PSGW",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 157,
            "currency": "INR",
            "before_price": 199,
            "savings_amount": 42,
            "savings_percent": 21.11
        },
        "reviews": {
            "total_reviews": 2745,
            "rating": 4.2
        },
        "title": "Alpino Chocolate Peanut Butter Smooth 400 G | Made with Roasted Peanuts, Cocoa Powder & Choco Chips | 20% Protein | Non GM...",
        "thumbnail": "https://m.media-amazon.com/images/I/81bR97juI7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079Y4WFKM",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 139.2,
            "currency": "INR",
            "before_price": 160,
            "savings_amount": 20.8,
            "savings_percent": 13
        },
        "reviews": {
            "total_reviews": 218,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Hershey's Spreads Cocoa, 150g",
        "thumbnail": "https://m.media-amazon.com/images/I/51PIQLlejRL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08N8MCZBV",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 199,
            "currency": "INR",
            "before_price": 299,
            "savings_amount": 100,
            "savings_percent": 33.44
        },
        "reviews": {
            "total_reviews": 65,
            "rating": 4.6
        },
        "title": "Disano Choco Spread, Chocolate, 300 Gram",
        "thumbnail": "https://m.media-amazon.com/images/I/71UEf8eyTjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07H1FNL8V",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": false,
            "current_price": 200,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 310,
            "rating": 4.3
        },
        "title": "Cadbury Milk Chocolate Spready, 200g",
        "thumbnail": "https://m.media-amazon.com/images/I/61h3qHo1tcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084BHP1W6",
        "category": "Pantry",
        "product": "Spreads",
        "type": "Spreads",
        "price": {
            "discounted": true,
            "current_price": 70,
            "currency": "INR",
            "before_price": 90,
            "savings_amount": 20,
            "savings_percent": 22.22
        },
        "reviews": {
            "total_reviews": 43,
            "rating": 4.3
        },
        "title": "GO Cheese Spread Tub Garlic Jar, 200 g",
        "thumbnail": "https://m.media-amazon.com/images/I/71tRnNo2lfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01MRN1BY4",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 497,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 102,
            "savings_percent": 17.03
        },
        "reviews": {
            "total_reviews": 18445,
            "rating": 4
        },
        "title": "ASIAN Men's Wonder-13 Mesh Sports Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08WLVW7L9",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 569,
            "currency": "INR",
            "before_price": 1998,
            "savings_amount": 1429,
            "savings_percent": 71.52
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 2.5
        },
        "title": "Maddy Combo Pack of 2 Sport Running Shoes & Gym Shoes for Men's",
        "thumbnail": "https://m.media-amazon.com/images/I/71ZJwnjLbfL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07LFBWYDY",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 850,
            "savings_percent": 56.7
        },
        "reviews": {
            "total_reviews": 2470,
            "rating": 4.2
        },
        "title": "Bourge Men's Loire-z1 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/818kiTmLLBL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08PP79XK4",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 325,
            "rating": 3.7
        },
        "title": "AADI Men's Soccer Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/91lKi1+zocL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01N66F4CH",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 50,
            "savings_percent": 8.35
        },
        "reviews": {
            "total_reviews": 3504,
            "rating": 4.1
        },
        "title": "ASIAN Men's Wonder-13 Mesh Sports Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01N3LYTDQ",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 745,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 154,
            "savings_percent": 17.13
        },
        "reviews": {
            "total_reviews": 4929,
            "rating": 4.1
        },
        "title": "Sparx Men's Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81Fyf10SHsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B072KVBX6Y",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2055,
            "currency": "INR",
            "before_price": 3499,
            "savings_amount": 1444,
            "savings_percent": 41.27
        },
        "reviews": {
            "total_reviews": 6675,
            "rating": 4.6
        },
        "title": "Skechers Men's Go Walk Max-Effort Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71IHOVFIQML._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JJ9MWD8",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 478,
            "currency": "INR",
            "before_price": 998,
            "savings_amount": 520,
            "savings_percent": 52.1
        },
        "reviews": {
            "total_reviews": 545,
            "rating": 2.8
        },
        "title": "WORLD WEAR FOOTWEAR Men's Running Shoe (Set of 2 Pairs)",
        "thumbnail": "https://m.media-amazon.com/images/I/61Q0Seor3WL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08FZV9S5L",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1878,
            "currency": "INR",
            "before_price": 3799,
            "savings_amount": 1921,
            "savings_percent": 50.57
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Adidas Men's Performo M Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71kODSuYhCL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HF7PRQ5",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 949,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 50,
            "savings_percent": 5.01
        },
        "reviews": {
            "total_reviews": 460,
            "rating": 4.1
        },
        "title": "Campus Men's Rodeo-2 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81F4WvkjA3L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08TTPBKJS",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 750,
            "savings_percent": 50.03
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 4.8
        },
        "title": "SEGA Original Men's Blackgreen S1 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/913uQra+1GL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07MSH74PM",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 950,
            "savings_percent": 63.38
        },
        "reviews": {
            "total_reviews": 3226,
            "rating": 4
        },
        "title": "Bourge Men's Loire-z126 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71iXen7CNrL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07HRHKCLZ",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 875,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 124,
            "savings_percent": 12.41
        },
        "reviews": {
            "total_reviews": 1640,
            "rating": 4.2
        },
        "title": "Sparx Men's Sx0421g Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/812PENrS3JL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07LFD7FDN",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 850,
            "savings_percent": 56.7
        },
        "reviews": {
            "total_reviews": 2470,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Bourge Men's Loire-z1 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/818kiTmLLBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084Z6R27R",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1349,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 650,
            "savings_percent": 32.52
        },
        "reviews": {
            "total_reviews": 201,
            "rating": 3.8
        },
        "title": "Sponsored Ad - ASIAN Men's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71kuuoGQ2DL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FTJ21LT",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 797,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 702,
            "savings_percent": 46.83
        },
        "reviews": {
            "total_reviews": 64,
            "rating": 3.8
        },
        "title": "Sponsored Ad - ASIAN Men's Hiking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/6125OSYtlFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0838JXWLF",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1043,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 156,
            "savings_percent": 13.01
        },
        "reviews": {
            "total_reviews": 145,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Campus Men's Tyson Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61o2PqUltxL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08X7BZ39D",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2499,
            "currency": "INR",
            "before_price": 3999,
            "savings_amount": 1500,
            "savings_percent": 37.51
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "ARKS® Mens Joyride Running Shoes | Sports Shoes | Tracking Shoes | Running Shoes (white colour) (41)",
        "thumbnail": "https://m.media-amazon.com/images/I/51FPgf5SXlL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V1G6YT5",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 649,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 850,
            "savings_percent": 56.7
        },
        "reviews": {
            "total_reviews": 2065,
            "rating": 4.3
        },
        "title": "Bourge Men's Vega-z5 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/811b2YsYMZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082QHNHJB",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1120,
            "currency": "INR",
            "before_price": 2799,
            "savings_amount": 1679,
            "savings_percent": 59.99
        },
        "reviews": {
            "total_reviews": 415,
            "rating": 4.1
        },
        "title": "Reebok Men's Guide Stride Run Lp Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71r2T9CBjkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PG2N3ML",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 1376,
            "rating": 3.9
        },
        "title": "Denill Women's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71Uz7Rej1kL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B085MH213B",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 459,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 540,
            "savings_percent": 54.05
        },
        "reviews": {
            "total_reviews": 174,
            "rating": 3.8
        },
        "title": "ZOVIM Women's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71K4UlLwrxL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08L3DDRDV",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 141,
            "rating": 4.1
        },
        "title": "Denill Women's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71DJhFBiFqL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08NF6QV1B",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 1299,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 134,
            "rating": 4.5
        },
        "title": "Campus Women's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61jONmzgMbL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07XTLY27S",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 800,
            "savings_percent": 53.37
        },
        "reviews": {
            "total_reviews": 2107,
            "rating": 4.3
        },
        "title": "Bourge Women's Micam-z51 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71Xl7u6FaZL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08R218THV",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 690,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 9,
            "savings_percent": 1.29
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "Campus Women's Lisa PRO Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61fzE7BstXL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07FRZNHDG",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 549,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 50,
            "savings_percent": 8.35
        },
        "reviews": {
            "total_reviews": 2656,
            "rating": 4
        },
        "title": "ASIAN Women's Running Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61Kk8qMByuL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07FRT5NXP",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 524,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 475,
            "savings_percent": 47.55
        },
        "reviews": {
            "total_reviews": 2222,
            "rating": 3.9
        },
        "title": "ASIAN Women's Modern Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/7139bb4+gNL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08P5VCLZ6",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 800,
            "savings_percent": 53.37
        },
        "reviews": {
            "total_reviews": 934,
            "rating": 4.2
        },
        "title": "Bourge Women's Micam-z52 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/91l7eXq+ExL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B071PFNSVV",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 839,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 160,
            "savings_percent": 16.02
        },
        "reviews": {
            "total_reviews": 3680,
            "rating": 4.3
        },
        "title": "Sparx Women SL-88 Sports Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81V+MalWsSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B00Y8B7TCE",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 489,
            "currency": "INR",
            "before_price": 539,
            "savings_amount": 50,
            "savings_percent": 9.28
        },
        "reviews": {
            "total_reviews": 1339,
            "rating": 4
        },
        "title": "ASIAN Women's Running & Walking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61iKZtIs73L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0797T67PV",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 759,
            "currency": "INR",
            "before_price": 849,
            "savings_amount": 90,
            "savings_percent": 10.6
        },
        "reviews": {
            "total_reviews": 778,
            "rating": 4.2
        },
        "title": "Sparx Women's Sx0513l Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81a5WiAxPXL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08KHLLPNV",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 845,
            "currency": "INR",
            "before_price": 899,
            "savings_amount": 54,
            "savings_percent": 6.01
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 4.3
        },
        "title": "Campus Women's Jessica Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/6142KsxaloL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08439ZCT1",
        "category": "Shoes",
        "product": "Running Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 1699,
            "savings_amount": 1000,
            "savings_percent": 58.86
        },
        "reviews": {
            "total_reviews": 16,
            "rating": 3.5
        },
        "title": "Bourge Women's Micam-z55 Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81TGGUSpT-L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07FNYGCXZ",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1349,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1650,
            "savings_percent": 55.02
        },
        "reviews": {
            "total_reviews": 123,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Puma Men's Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71clz46QmNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GJZ8F8N",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2399,
            "currency": "INR",
            "before_price": 3999,
            "savings_amount": 1600,
            "savings_percent": 40.01
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4
        },
        "title": "Sponsored Ad - Puma Mens Pacer Plus Move V1 Idp Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/71+ufidxcUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07WHZQ5YY",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 799,
            "currency": "INR",
            "before_price": 2499,
            "savings_amount": 1700,
            "savings_percent": 68.03
        },
        "reviews": {
            "total_reviews": 1455,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Centrino Men's 3323 Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71Ie4D5qNaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089QKNCVR",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 414,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 85,
            "savings_percent": 17.03
        },
        "reviews": {
            "total_reviews": 189,
            "rating": 3.5
        },
        "title": "T-Rock Men's Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/61t6Mk3v48L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07GNCTSDX",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 131,
            "rating": 3.5
        },
        "title": "D-SNEAKERZ Stylish Trendy Casual Sneakers Shoes for Boys & Mens",
        "thumbnail": "https://m.media-amazon.com/images/I/61XRHhG5mAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08TBYQRWN",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 56,
            "rating": 3.1
        },
        "title": "Inklenzo Men's Fashion Sneakers White 7",
        "thumbnail": "https://m.media-amazon.com/images/I/61dCnZCt-VL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B077N7DDL1",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 615,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 84,
            "savings_percent": 12.02
        },
        "reviews": {
            "total_reviews": 6261,
            "rating": 4.2
        },
        "title": "Sparx Men's Sd0323g Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/51g6S2XoAcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08S7LGKDM",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 500,
            "savings_percent": 50.05
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4.1
        },
        "title": "Robbie jones Men Casual Sneakers Shoes for Men and Boys in White Made in India",
        "thumbnail": "https://m.media-amazon.com/images/I/31h76jAREzL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VQYQ8XG",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 3499,
            "savings_amount": 2600,
            "savings_percent": 74.31
        },
        "reviews": {
            "total_reviews": 240,
            "rating": 3.9
        },
        "title": "Amazon Brand - Symbol Mens PU Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/814vUkNn5UL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07Y5BKQ5R",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 699,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 815,
            "rating": 4.3
        },
        "title": "Sparx Men's Sd0439g Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71P1toaBB2L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082SS9BRB",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 958,
            "currency": "INR",
            "before_price": 3195,
            "savings_amount": 2237,
            "savings_percent": 70.02
        },
        "reviews": {
            "total_reviews": 17,
            "rating": 3.6
        },
        "title": "Bond Street by (Red Tape) Mens Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/61JsBAi-+BL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FRKPNGV",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 600,
            "savings_percent": 50.04
        },
        "reviews": {
            "total_reviews": 165,
            "rating": 3.3
        },
        "title": "D-SNEAKERZ Casual Stylish Men Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/614QhkmglaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08W9SH7VX",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 474,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 525,
            "savings_percent": 52.55
        },
        "reviews": {
            "total_reviews": 990,
            "rating": 3.5
        },
        "title": "Kraasa Casual Casuals for Men",
        "thumbnail": "https://m.media-amazon.com/images/I/61q9kJgxAHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B074DYXQRD",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 2699,
            "savings_amount": 1800,
            "savings_percent": 66.69
        },
        "reviews": {
            "total_reviews": 957,
            "rating": 4
        },
        "title": "Amazon Brand - Symbol Men's Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71R19XZ3p6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079PWLX3M",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 642,
            "rating": 3.9
        },
        "title": "SPORTSTAR Men Black Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71DMbuDZUWL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PSR3H9Q",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1580,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1419,
            "savings_percent": 47.32
        },
        "reviews": {
            "total_reviews": 122,
            "rating": 3.8
        },
        "title": "US Polo Men's Clarkin Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/51OH60BPCqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QPZR1JH",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 775,
            "currency": "INR",
            "before_price": 2199,
            "savings_amount": 1424,
            "savings_percent": 64.76
        },
        "reviews": {
            "total_reviews": 341,
            "rating": 4.2
        },
        "title": "Centrino Men's 3392 Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71Ogu5EshaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07YFWYSGY",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 664,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 135,
            "savings_percent": 16.9
        },
        "reviews": {
            "total_reviews": 86,
            "rating": 4.3
        },
        "title": "Sparx Men's Sd0607g Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/51zHPvCGtOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GJZH1YZ",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1959,
            "currency": "INR",
            "before_price": 3999,
            "savings_amount": 2040,
            "savings_percent": 51.01
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4
        },
        "title": "Sponsored Ad - Puma Womens Stacy Slip on Wn S Idp Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/81TP67QEFoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T6HV71P",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 300,
            "savings_percent": 30.03
        },
        "reviews": {
            "total_reviews": 6,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Vendoz Women Premium White Casual Shoes Sports Shoes Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/81vL+6CD2FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XRY25ZM",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 221,
            "currency": "INR",
            "before_price": 2199,
            "savings_amount": 1978,
            "savings_percent": 89.95
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 2.6
        },
        "title": "Amazon Brand - Symbol Women's Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/71gCLbSt2FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08GZ5Z259",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 498,
            "currency": "INR",
            "before_price": 1199,
            "savings_amount": 701,
            "savings_percent": 58.47
        },
        "reviews": {
            "total_reviews": 74,
            "rating": 4.1
        },
        "title": "Longwalk Women and Girls Sneakers, Walking Gym Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/6143nGlNWKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V2QV8VC",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 550,
            "savings_percent": 55.06
        },
        "reviews": {
            "total_reviews": 666,
            "rating": 3.9
        },
        "title": "Denill Women's Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/418p0ia1U+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KTR2887",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 569.05,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 429.95,
            "savings_percent": 43.04
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 3.5
        },
        "title": "Bella Toes Women Casual Shoes Sneakers_7012",
        "thumbnail": "https://m.media-amazon.com/images/I/51o8iXvyhtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07V24YTM3",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 474,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 25,
            "savings_percent": 5.01
        },
        "reviews": {
            "total_reviews": 365,
            "rating": 4
        },
        "title": "BATA Women's Sepia Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/81t5VTbw6VL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07ZY3YVZ2",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 545,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 454,
            "savings_percent": 45.45
        },
        "reviews": {
            "total_reviews": 584,
            "rating": 3.7
        },
        "title": "PrasKing Stylish Premium High Top Slip On Sneaker Shoes for Women",
        "thumbnail": "https://m.media-amazon.com/images/I/51B7J0yoNLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08SKH2H8R",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 250,
            "savings_percent": 25.03
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 2.5
        },
        "title": "Colo Extra Soft flynkit Sneaker's,Running Shoe's and Walking Shoe's with Memory Foam Technology Insole for Women's and Gir...",
        "thumbnail": "https://m.media-amazon.com/images/I/61GRjUswzoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08LZJQHB3",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 300,
            "savings_percent": 30.03
        },
        "reviews": {
            "total_reviews": 127,
            "rating": 3.7
        },
        "title": "ZAPATOZ Mid-Top Lace-Up Casual Sneakers Shoes for Womens",
        "thumbnail": "https://m.media-amazon.com/images/I/61jVMnS59FL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XJHKJP2",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 475,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 524,
            "savings_percent": 52.45
        },
        "reviews": {
            "total_reviews": 2440,
            "rating": 4
        },
        "title": "Denill Women Star Laser Cut Sneakers_",
        "thumbnail": "https://m.media-amazon.com/images/I/61oKsWpFNfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083GV9Z3P",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 474,
            "currency": "INR",
            "before_price": 499,
            "savings_amount": 25,
            "savings_percent": 5.01
        },
        "reviews": {
            "total_reviews": 36,
            "rating": 4.6
        },
        "title": "Sparx Women's Sl-158 Sneaker",
        "thumbnail": "https://m.media-amazon.com/images/I/71gt20WFYvL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VVDCYL1",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 588,
            "currency": "INR",
            "before_price": 649,
            "savings_amount": 61,
            "savings_percent": 9.4
        },
        "reviews": {
            "total_reviews": 96,
            "rating": 4.3
        },
        "title": "Sparx Girl's Sd0111l Sneakers",
        "thumbnail": "https://m.media-amazon.com/images/I/61FW8wYeP1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0819YD1V1",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 750,
            "currency": "INR",
            "before_price": 1996,
            "savings_amount": 1246,
            "savings_percent": 62.42
        },
        "reviews": {
            "total_reviews": 164,
            "rating": 3.2
        },
        "title": "Bersache Women's Sneakers & Loafers (Set of 3 Pairs)",
        "thumbnail": "https://m.media-amazon.com/images/I/714JIFzgYjL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08TTYJMRL",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 499,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 100,
            "savings_percent": 16.69
        },
        "reviews": {
            "total_reviews": 29,
            "rating": 3.9
        },
        "title": "Blinder Womens Trendy Lightweight Comfortable Casual wear Lace-Up Shoes Running Casual Laceup Sneakers Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/512iAMhDwOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PNZ93L9",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 569.05,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 429.95,
            "savings_percent": 43.04
        },
        "reviews": {
            "total_reviews": 29,
            "rating": 4
        },
        "title": "Sponsored Ad - Bella Toes Women Casual Sneaker Shoes_1507",
        "thumbnail": "https://m.media-amazon.com/images/I/815OvFWLR6L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08KTQCKG5",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 569.05,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 429.95,
            "savings_percent": 43.04
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 3.5
        },
        "title": "Sponsored Ad - Bella Toes Women Casual Shoes Sneakers_7012",
        "thumbnail": "https://m.media-amazon.com/images/I/51o8iXvyhtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08PNPMKDZ",
        "category": "Shoes",
        "product": "Sneakers",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 526.3,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 472.7,
            "savings_percent": 47.32
        },
        "reviews": {
            "total_reviews": 16,
            "rating": 3.9
        },
        "title": "Sponsored Ad - Bella Toes Women Casual Sneaker Shoes_1508",
        "thumbnail": "https://m.media-amazon.com/images/I/71t0YjwAeZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07D2HLS2F",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 743,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 56,
            "savings_percent": 7.01
        },
        "reviews": {
            "total_reviews": 18,
            "rating": 3.6
        },
        "title": "GoldStar Men's Climbing Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81koyKmAaKL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08DFRNB57",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Walky Wear Heavy Latest Riding Long Leather Branded Climbing Jungle Boots for Mens and Boys",
        "thumbnail": "https://m.media-amazon.com/images/I/81qFfsfSu6L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07NLCJDL7",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Red Chili Ventic Air Climbing Shoes Blue - 7.5 UK",
        "thumbnail": "https://m.media-amazon.com/images/I/912U1KrjExL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08JCTBCRM",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1999,
            "currency": "INR",
            "before_price": 7599,
            "savings_amount": 5600,
            "savings_percent": 73.69
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 2.6
        },
        "title": "Mr.Shoes LED Fiber Optic 7 Color Light with USB Cable Charging Rock Climbing Shoes for Men (White)",
        "thumbnail": "https://m.media-amazon.com/images/I/31uaeBmAeVL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07KXYDFVC",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Black Diamond Mens Zone Lv Climbing Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81sZwaLkx+L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B078MFND9K",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 499,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1264,
            "rating": 3.6
        },
        "title": "Lancer Mens Indus Running Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81SuV6VGRNL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B072LPX5TT",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 4.4
        },
        "title": "Five Ten Quantum VCS",
        "thumbnail": "https://m.media-amazon.com/images/I/81zGDQqQ0QL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01ALJEEVK",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 4.6
        },
        "title": "Scarpa Drago Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71wgP89mPgL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08PD25YGQ",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 2499,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 3.8
        },
        "title": "Sponsored Ad - Liberty Warrior New 2021 Edition Jungle King Boot for Men, Olive Green Men Canvas Boot with Branded Box & F...",
        "thumbnail": "https://m.media-amazon.com/images/I/71lnu96itaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07GR8X51T",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Scarpa Furia S Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61slrLfG2zL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KXX57MF",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Black Diamond Mens Zone Climbing Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81NvvhT0f-L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01HTP2WHC",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 20,
            "rating": 4.6
        },
        "title": "SCARPA Instinct VSR Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/51sbUfG-tDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083RFSTSX",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Scarpa Veloce Climbing Shoe - Women's",
        "thumbnail": "https://m.media-amazon.com/images/I/31zdGaA14+L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01HTP2WHC",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 20,
            "rating": 4.6
        },
        "title": "SCARPA Instinct VSR Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/51sbUfG-tDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01EJSP5GM",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4.3
        },
        "title": "BUTORA Unisex Acro Rock/Indoor Climbing Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61rRvt+MPUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01ALJF130",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "SCARPA Drago Climbing Shoe, Yellow, 10.5-11 Women/9.5-10 Men",
        "thumbnail": "https://m.media-amazon.com/images/I/71wgP89mPgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HLRHL73",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 192,
            "rating": 4.1
        },
        "title": "MATCC Crampons Ice Cleats Snow Traction Cleats Spikes Crampons Ice Snow Grips for Boots Shoes with 12 Steel Spike Grips fo...",
        "thumbnail": "https://m.media-amazon.com/images/I/71gNTFZ6tlL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01ALJEEVK",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 30,
            "rating": 4.6
        },
        "title": "Scarpa Drago Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71wgP89mPgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08HMGSTG6",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 95,
            "rating": 4.6
        },
        "title": "MATCC Snow Ice Traction Cleats Ice Grip Crampon with 19 Anti-Slip Stainless Steel Spikes for Men Women Shoes Boots Footwea...",
        "thumbnail": "https://m.media-amazon.com/images/I/71VTnDvrzaL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07H9KD7J9",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Mad Rock Haywire Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61YbvfbVR1L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07NLDSWTG",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Red Chili Ventic Air Climbing Shoes Blue - 6.5 UK",
        "thumbnail": "https://m.media-amazon.com/images/I/71sOcZpXbIL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084ZWRZGS",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 13690,
            "currency": "INR",
            "before_price": 19740,
            "savings_amount": 6050,
            "savings_percent": 30.65
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.8
        },
        "title": "Climb X Rave Strap Climbing Shoe 2019",
        "thumbnail": "https://m.media-amazon.com/images/I/71dnxG-laTL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084P2ZN7B",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 33280,
            "currency": "INR",
            "before_price": 47620,
            "savings_amount": 14340,
            "savings_percent": 30.11
        },
        "reviews": {
            "total_reviews": 4,
            "rating": 5
        },
        "title": "Butora Gomi Climbing Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71hoPc66gcL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B089QJDNTZ",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 3
        },
        "title": "Red Chili Ventic Air Climbing Shoes - Blue - 8.5 UK",
        "thumbnail": "https://m.media-amazon.com/images/I/41qn+9EMzSL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B071JR4VLD",
        "category": "Shoes",
        "product": "Climbing Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 0,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "La Sportiva Cobra ECO Climbing Shoe, Falcon Brown/Apple Green, 39.5",
        "thumbnail": "https://m.media-amazon.com/images/I/61aQE0iFbfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JHVZVTQ",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 8279,
            "currency": "INR",
            "before_price": 10999,
            "savings_amount": 2720,
            "savings_percent": 24.73
        },
        "reviews": {
            "total_reviews": 101,
            "rating": 4.6
        },
        "title": "Sponsored Ad - Columbia Men's Wayfinder Mid Outdry Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61VCVgqI6zL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01015Q9RG",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 7092,
            "currency": "INR",
            "before_price": 9499,
            "savings_amount": 2407,
            "savings_percent": 25.34
        },
        "reviews": {
            "total_reviews": 36,
            "rating": 4.1
        },
        "title": "Sponsored Ad - Columbia Men's Shark, Dark Banana Hiking Boots",
        "thumbnail": "https://m.media-amazon.com/images/I/915T6eeXyeL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KK31G3Q",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 6841,
            "currency": "INR",
            "before_price": 8999,
            "savings_amount": 2158,
            "savings_percent": 23.98
        },
        "reviews": {
            "total_reviews": 627,
            "rating": 4.3
        },
        "title": "Sponsored Ad - Columbia Men's Redmond V2 Mid WP Cordovan Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/616BwsDAHwL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08F8T2413",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1299,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1700,
            "savings_percent": 56.69
        },
        "reviews": {
            "total_reviews": 72,
            "rating": 4.1
        },
        "title": "Bacca Bucci Men's Trekking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71+ftODyXNL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QHJD7X3",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1593,
            "currency": "INR",
            "before_price": 1995,
            "savings_amount": 402,
            "savings_percent": 20.15
        },
        "reviews": {
            "total_reviews": 130,
            "rating": 4.4
        },
        "title": "FURO Men's Hiking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71t+yaYLuoL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07K1JXSTJ",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 2599,
            "savings_amount": 1700,
            "savings_percent": 65.41
        },
        "reviews": {
            "total_reviews": 271,
            "rating": 3.7
        },
        "title": "Eego Italy® Genuine Leather Light Weight Men's Steel Toe Safety Boots with Anti Skid Sole Black",
        "thumbnail": "https://m.media-amazon.com/images/I/716uGF2V9qL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QRP9D6Z",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 3990,
            "currency": "INR",
            "before_price": 3995,
            "savings_amount": 5,
            "savings_percent": 0.13
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 3.9
        },
        "title": "Wildcraft Men's Trekking & Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/41LSMRdwaHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082QB5N3M",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2499,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 2500,
            "savings_percent": 50.01
        },
        "reviews": {
            "total_reviews": 23,
            "rating": 3.5
        },
        "title": "Adidas Men's Wind Chaser Ii Trekking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/81P75793wBL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082Q9CBN8",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 3249,
            "currency": "INR",
            "before_price": 4999,
            "savings_amount": 1750,
            "savings_percent": 35.01
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 4.3
        },
        "title": "Adidas Mens Geocach 19 Trekking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/712+irjNEdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07F9ZX1K8",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1449,
            "currency": "INR",
            "before_price": 2000,
            "savings_amount": 551,
            "savings_percent": 27.55
        },
        "reviews": {
            "total_reviews": 43,
            "rating": 4.1
        },
        "title": "ADD GEAR CTR Trekking Shoes Anti-Skid Hiking Shoes Slip Resistant Mountain Boots in Action Trekking Colour-Olive + Free Si...",
        "thumbnail": "https://m.media-amazon.com/images/I/71hFlPMsVJL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B082Q9Q5BY",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 3719,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 2280,
            "savings_percent": 38.01
        },
        "reviews": {
            "total_reviews": 11,
            "rating": 4
        },
        "title": "Adidas Mens Trail Rocker Mid Trekking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71vBuIN1iFL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01LX43GU9",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 1799,
            "savings_amount": 950,
            "savings_percent": 52.81
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 3.5
        },
        "title": "FASHION VICTIM Men's Treaking & Hiking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/81urEpvtiXL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07QMDRXBX",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 3990,
            "currency": "INR",
            "before_price": 3995,
            "savings_amount": 5,
            "savings_percent": 0.13
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 3.4
        },
        "title": "Wildcraft Men's RuNX TR Hugo Blue_Light_Blue Trekking&Hiking Shoes (51657)",
        "thumbnail": "https://m.media-amazon.com/images/I/51-r7di+rhL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07XL36LQT",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2039,
            "currency": "INR",
            "before_price": 5999,
            "savings_amount": 3960,
            "savings_percent": 66.01
        },
        "reviews": {
            "total_reviews": 18,
            "rating": 3.6
        },
        "title": "Adidas Mens Trekking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/717AyYBUIHL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079JVVSS7",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 371,
            "rating": 3.6
        },
        "title": "Big Fox K11 Trekking Boots Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/41aHYUwUxgL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08FTKX4KX",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 749,
            "currency": "INR",
            "before_price": 1499,
            "savings_amount": 750,
            "savings_percent": 50.03
        },
        "reviews": {
            "total_reviews": 64,
            "rating": 3.8
        },
        "title": "ASIAN Men's Hiking Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61ILpqS09tL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KK418N7",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 7334,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 2665,
            "savings_percent": 26.65
        },
        "reviews": {
            "total_reviews": 98,
            "rating": 4.4
        },
        "title": "Sponsored Ad - Columbia Women's Peakfreak X2 Outdry Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71vj8RqewVL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07DV4NDRS",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 7473,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 2526,
            "savings_percent": 25.26
        },
        "reviews": {
            "total_reviews": 81,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Columbia Women's Isoterra Mid Outdry Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71yp3cd7n4L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JHCGYH4",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 5121,
            "currency": "INR",
            "before_price": 6999,
            "savings_amount": 1878,
            "savings_percent": 26.83
        },
        "reviews": {
            "total_reviews": 811,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Columbia Women's Redmond V2 Wp Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71pKNUTmN7L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081QS7B7F",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 483,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 116,
            "savings_percent": 19.37
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 3.8
        },
        "title": "ACTION Women's Esl-602 Trekking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61taDJTTCOL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08F6SSYGL",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 599,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 5
        },
        "title": "Lancer Womens Trekking, Running & Walking",
        "thumbnail": "https://m.media-amazon.com/images/I/71xF0PZG5cL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07LG1DRJF",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 507,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 492,
            "savings_percent": 49.25
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "ACTION Women Atl-11-Maroon_10 Trekking Shoes-10 Kids UK (ATL-11)",
        "thumbnail": "https://m.media-amazon.com/images/I/81TH66p-ADL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07LG1TY3H",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 899,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 100,
            "savings_percent": 10.01
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Action Women Atl-11-Maroon_9 Trekking Shoes Kids UK (ATL-11)",
        "thumbnail": "https://m.media-amazon.com/images/I/81TH66p-ADL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07LG2RC9X",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 400,
            "savings_percent": 40.04
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "ACTION Women Atl-11-Maroon_8 Trekking Shoes Kids UK (ATL-11)",
        "thumbnail": "https://m.media-amazon.com/images/I/81TH66p-ADL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MW8TXZW",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 989,
            "currency": "INR",
            "before_price": 1099,
            "savings_amount": 110,
            "savings_percent": 10.01
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 3.1
        },
        "title": "ACTION Women Atl-13-Navy-Sea-Green_6 Navy-Sea Trekking Shoes-6 UK (39 EU) (ATL-13)",
        "thumbnail": "https://m.media-amazon.com/images/I/91a0T8ugiqL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07SVFLT2P",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 849,
            "currency": "INR",
            "before_price": 1599,
            "savings_amount": 750,
            "savings_percent": 46.9
        },
        "reviews": {
            "total_reviews": 160,
            "rating": 4.3
        },
        "title": "Unistar Anti-Skid High Ankle Beast Collection, Oil Stain & Water Resistant, Light Weight Trekking Shoes/Riding Shoes- Odur...",
        "thumbnail": "https://m.media-amazon.com/images/I/71ivbRbH5GL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PNJ1BXG",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 6565,
            "currency": "INR",
            "before_price": 9999,
            "savings_amount": 3434,
            "savings_percent": 34.34
        },
        "reviews": {
            "total_reviews": 21,
            "rating": 4
        },
        "title": "Sponsored Ad - Columbia Women's Peakfreak XCRSN Ii Xcel Mid Outdry Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/91iz8YwY--L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07KK2NHY5",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 5645,
            "currency": "INR",
            "before_price": 7999,
            "savings_amount": 2354,
            "savings_percent": 29.43
        },
        "reviews": {
            "total_reviews": 667,
            "rating": 4.5
        },
        "title": "Sponsored Ad - Columbia Women's Redmond V2 Mid Wp Hiking Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/61jfaEv4uDL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B079M2Q4G3",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 5919,
            "currency": "INR",
            "before_price": 7999,
            "savings_amount": 2080,
            "savings_percent": 26
        },
        "reviews": {
            "total_reviews": 665,
            "rating": 4.2
        },
        "title": "Sponsored Ad - Columbia Women's Oxford Tan, Sunlit Trekking Footwear",
        "thumbnail": "https://m.media-amazon.com/images/I/61TkShIh1gL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T1HN7MP",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 679,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 320,
            "savings_percent": 32.03
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "Sapatos Womens Sports Shoes, Running Shoes, Ideal for Women, Walking, Gym, Trekking, Hiking, Jogging, Comfortable, Stylish...",
        "thumbnail": "https://m.media-amazon.com/images/I/81bypoQimKL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08F7DS24X",
        "category": "Shoes",
        "product": "Trekking Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 590,
            "currency": "INR",
            "before_price": 599,
            "savings_amount": 9,
            "savings_percent": 1.5
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 5
        },
        "title": "Lancer Womens Trekking, Running & Walking Shoes,7UK (MRN)",
        "thumbnail": "https://m.media-amazon.com/images/I/71r37d5GNLL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0842QN3MN",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 399,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 600,
            "savings_percent": 60.06
        },
        "reviews": {
            "total_reviews": 325,
            "rating": 3.7
        },
        "title": "AADI Men's Soccer Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/91C8pdgataL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VK1M7WY",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 699,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 141,
            "rating": 4
        },
        "title": "Nivia Pro Carbonite 2.0 Football Shoes for Men",
        "thumbnail": "https://m.media-amazon.com/images/I/71328mc5-ZL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08T35HWT1",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1400,
            "savings_percent": 70.04
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.4
        },
        "title": "FIRST MART Men's Soccer Shoes | Slip On Sock Shoe Charcoal Black Red Strip Stylish | Lightweight Shoes Breathable Material",
        "thumbnail": "https://m.media-amazon.com/images/I/61y5NOnk6pL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08K3JK6XP",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 1899,
            "currency": "INR",
            "before_price": 3799,
            "savings_amount": 1900,
            "savings_percent": 50.01
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 5
        },
        "title": "Lotto Men's SOLISTA 700 III FG Soccer Shoes (Cool Gray 7C/Orange Fluo 2/Gravity",
        "thumbnail": "https://m.media-amazon.com/images/I/71Pi-0qqJkL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B0862M5DGD",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 831,
            "currency": "INR",
            "before_price": 904,
            "savings_amount": 73,
            "savings_percent": 8.08
        },
        "reviews": {
            "total_reviews": 386,
            "rating": 3.7
        },
        "title": "Premier Cleats Football Stud Yellow/N.Blue 2018",
        "thumbnail": "https://m.media-amazon.com/images/I/819Amlga24L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B01N4WN6CB",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 864,
            "currency": "INR",
            "before_price": 1115,
            "savings_amount": 251,
            "savings_percent": 22.51
        },
        "reviews": {
            "total_reviews": 9,
            "rating": 4.8
        },
        "title": "Kobo New K-14 Astro Turf Football Shoes Floro Green/Black",
        "thumbnail": "https://m.media-amazon.com/images/I/81rvWARGGdL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08RLHFWJM",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 10,
            "rating": 3.8
        },
        "title": "Adidas Men's X Ghosted.3 Ll Fg Football Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61Z8sBB2W8L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B084RKX2KH",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 3269,
            "currency": "INR",
            "before_price": 4995,
            "savings_amount": 1726,
            "savings_percent": 34.55
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 1
        },
        "title": "Nike Men's Vapor 13 Club Ic Soccer Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/71A3BcXtR5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07TCBDPDX",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 799,
            "savings_amount": 100,
            "savings_percent": 12.52
        },
        "reviews": {
            "total_reviews": 1,
            "rating": 1
        },
        "title": "FIRE FLY Messi Football Boots for Men with TPU Sole Premium Indoor Sports Soccer Stud (Shoe) Orange",
        "thumbnail": "https://m.media-amazon.com/images/I/41RSo5TXc3L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07MZP7P9K",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 949,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 50,
            "savings_percent": 5.01
        },
        "reviews": {
            "total_reviews": 21,
            "rating": 3.7
        },
        "title": "Vector X SPEED-BLK-GRY-8 Football Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/313p7h88RiL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B081QLSW9H",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 2099,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 900,
            "savings_percent": 30.01
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.5
        },
        "title": "Puma Mens Rapido Ii Tt Men's Football Boots Football Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/7150nQo18TL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B083ZWVB95",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 449,
            "currency": "INR",
            "before_price": 999,
            "savings_amount": 550,
            "savings_percent": 55.06
        },
        "reviews": {
            "total_reviews": 3,
            "rating": 2.4
        },
        "title": "AADI Men's Soccer Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/81TeYhRHmAL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08R222LN9",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 599,
            "currency": "INR",
            "before_price": 1999,
            "savings_amount": 1400,
            "savings_percent": 70.04
        },
        "reviews": {
            "total_reviews": 7,
            "rating": 4.4
        },
        "title": "Sponsored Ad - FIRST MART Men's Soccer Shoes | Slip On Sock Shoe Charcoal Black Red Strip Stylish | Lightweight Shoes Brea...",
        "thumbnail": "https://m.media-amazon.com/images/I/61VVk6yPQtL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07JGQHCPG",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 724,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 25,
            "savings_percent": 3.34
        },
        "reviews": {
            "total_reviews": 36,
            "rating": 4
        },
        "title": "Nivia Aviator 102705 Football Futsal Shoes, UK 10 (Orange/Black) (1027OB)",
        "thumbnail": "https://m.media-amazon.com/images/I/71S-PzBYy5L._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07PMRR49M",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 576,
            "currency": "INR",
            "before_price": 965,
            "savings_amount": 389,
            "savings_percent": 40.31
        },
        "reviews": {
            "total_reviews": 2,
            "rating": 4.5
        },
        "title": "Football Soccer Shoe K-15 Round Studs TPU Outsole Stitched for Hard Grounds (Imported)",
        "thumbnail": "https://m.media-amazon.com/images/I/41Rmz6MRcfL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08C8Y3WSB",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": true,
            "current_price": 4006,
            "currency": "INR",
            "before_price": 6599,
            "savings_amount": 2593,
            "savings_percent": 39.29
        },
        "reviews": {
            "total_reviews": 22,
            "rating": 4.1
        },
        "title": "Adidas Mens X Ghosted.3 Fg Football Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/51U-gTgnyUL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B08P1K15S1",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Men",
        "price": {
            "discounted": false,
            "current_price": 6999,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 14,
            "rating": 3.7
        },
        "title": "Adidas Mens X Ghosted.3 Tf Football Shoe",
        "thumbnail": "https://m.media-amazon.com/images/I/61Vv9Ta34pL._AC_UL320_.jpg"
    }),
new Product({
        "asin": "B07VVRHX2R",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 699,
            "currency": "INR",
            "before_price": 749,
            "savings_amount": 50,
            "savings_percent": 6.68
        },
        "reviews": {
            "total_reviews": 19,
            "rating": 2.9
        },
        "title": "B- TUF Unisex- Adult Football Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/71uqif0L5qL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07BSJXDZ9",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 2877,
            "currency": "INR",
            "before_price": 4795,
            "savings_amount": 1918,
            "savings_percent": 40
        },
        "reviews": {
            "total_reviews": 26,
            "rating": 4.8
        },
        "title": "Nike Unisex Kid's Jr Superfly 6 Club Fg/Mg Football Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/512-ockJx9L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01N7RJWI9",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 520,
            "currency": "INR",
            "before_price": 560,
            "savings_amount": 40,
            "savings_percent": 7.14
        },
        "reviews": {
            "total_reviews": 37,
            "rating": 3.8
        },
        "title": "Nivia Premier Carbonite Range Football Studs 11UK(Black/Orange)",
        "thumbnail": "https://m.media-amazon.com/images/I/91RCzSivaKL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07JWXVKGY",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 659,
            "currency": "INR",
            "before_price": 699,
            "savings_amount": 40,
            "savings_percent": 5.72
        },
        "reviews": {
            "total_reviews": 189,
            "rating": 3.9
        },
        "title": "Nivia 454O Synthetic Pro Carbonite Football Stud",
        "thumbnail": "https://m.media-amazon.com/images/I/71pZ3Pr8q+L._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B08GSWSZT8",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 310,
            "currency": "INR",
            "before_price": 595,
            "savings_amount": 285,
            "savings_percent": 47.9
        },
        "reviews": {
            "total_reviews": 16,
            "rating": 3.4
        },
        "title": "PMG PVC Storm Black-White Football with AIR Pump and Needle for Kids, Adults, Men, Women,Junior, Senior, Boys, Girls",
        "thumbnail": "https://m.media-amazon.com/images/I/61OVD9AQ1EL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01E768VZ8",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 494,
            "currency": "INR",
            "before_price": 549,
            "savings_amount": 55,
            "savings_percent": 10.02
        },
        "reviews": {
            "total_reviews": 733,
            "rating": 4
        },
        "title": "Vector X Volt Football Shoes (Green)",
        "thumbnail": "https://m.media-amazon.com/images/I/812w5PWSkJL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07MDNRMRF",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 7495,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 5,
            "rating": 5
        },
        "title": "Nike Unisex Adult's Phantom Venom Academy Fg Volt/Obsidian-Volt Football Shoes - 6 UK (40 EU) (7 US) (AO0566-717)",
        "thumbnail": "https://m.media-amazon.com/images/I/51w8K4GIpAL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B01E768VRQ",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 549,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 113,
            "rating": 3.9
        },
        "title": "Vector X Volt Football Shoe, Adult Size 5 (Blue/Green)",
        "thumbnail": "https://m.media-amazon.com/images/I/51QDm6IBlLL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B0107R3YJE",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": false,
            "current_price": 599,
            "currency": "INR",
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "reviews": {
            "total_reviews": 552,
            "rating": 3.9
        },
        "title": "Vector X Chaser-II Football Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/41zJs2hEvsL._AC_UY218_.jpg"
    }),
new Product({
        "asin": "B07RPTJ681",
        "category": "Shoes",
        "product": "Soccer Shoes",
        "type": "Women",
        "price": {
            "discounted": true,
            "current_price": 1854,
            "currency": "INR",
            "before_price": 2999,
            "savings_amount": 1145,
            "savings_percent": 38.18
        },
        "reviews": {
            "total_reviews": 12,
            "rating": 4.7
        },
        "title": "Puma Unisex-Child Spirit Ii Fg Jr Football Shoes",
        "thumbnail": "https://m.media-amazon.com/images/I/8124+wWXovL._AC_UL320_.jpg"
    })
    ];
    export default productsData;