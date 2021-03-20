import mongoose from 'mongoose';

const detailSchema = mongoose.Schema({
    asin: {
        type: String,
        unique: true,
        required: [true, 'asin should be present'],
        dropDups: true
    },
    title: {
        type: String,
        required: [true, 'title should be present']
    },
    description: String,
    feature_bullets: [{
        type: String
    }],
    reviews: {
        total_reviews: Number,
        rating: String,
        answered_questions: Number
    },
    item_available: {
        type: Boolean,
        default: true
    },
    price: {
        symbol: String,
        currency: String,
        current_price: Number,
        discounted: Boolean,
        before_price: Number,
        savings_amount: Number,
        savings_percent: Number
    },
    main_image: String,
    total_images: Number,
    images: [{
        type: String
    }],
    product_information: {
        dimensions: String,
        weight: String,
        available_from: String,
        available_from_utc: String,
        available_for_months: Number,
        available_for_days: Number,
        manufacturer: String,
        model_number: String,
        department: String,
        sold_by: String,
        fulfilled_by: String,
        qty_per_order: Number,
        brand: String
    }
});

const details = new mongoose.model('details', detailSchema);

export default details;