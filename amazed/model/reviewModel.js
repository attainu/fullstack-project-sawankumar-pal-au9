import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    asin: {
        type: String,
        required: true,
    },
    reviews: [{
        name: String,
        date: String,
        rating: Number,
        review: String
    }]
});

const review  = new mongoose.model('reviews', reviewSchema);

export default review;