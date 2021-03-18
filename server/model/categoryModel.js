import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }]
});

const category = new mongoose.model('category', categorySchema);

export default category;