import mongoose from "mongoose";
const ProductsSchema = mongoose.Schema({
    asin: {
        type: String,
        required: [true, 'asin should be present']
    },
    product: {
        type: String,
        required: [true, 'product name should be present']
    },
    type: {
        type: String,
        required: [true, 'type should be present']
    },
    price: {
        discounted: Boolean,
        current_price: Number,
        currency: String,
        before_price: Number,
        savings_amount: Number,
        savings_percent: Number
    },
    reviews: {
        total_reviews: Number,
        rating: Number
    },
    title: String,
    thumbnail: String   
});


const products = new mongoose.model('products', ProductsSchema);

export default products;