import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
    categoryNumber: Number,
    product: String,
    type: String,
    subCategory: String
});

const subCategory = new mongoose.model('sub-categories', subCategorySchema);

export default subCategory;