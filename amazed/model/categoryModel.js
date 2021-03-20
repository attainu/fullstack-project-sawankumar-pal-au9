import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    categoryNumber: {
        type: String,
        required: true
    }
});

const category = new mongoose.model('category', categorySchema);

export default category;